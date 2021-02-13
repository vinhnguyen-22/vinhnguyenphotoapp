import React from "react";
import Banner from "components/Banner/index";
import Images from "constants/images";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "features/Photo/PhotoSlice";
import { useHistory, useParams } from "react-router-dom";
import PhotoForm from "features/Photo/components/PhotoForm";

const AddEditPage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  console.log("PhotoId: ", { photoId });
  const isAddMode = !photoId;

  const editedPhoto = useSelector((state) => {
    console.log({ photos: state.photos, photoId });
    return state.photos.find((x) => x.id === photoId * 1);
  });
  console.log(editedPhoto);

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editedPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("Form submit: ", values);

      setTimeout(() => {
        if (isAddMode) {
          const action = addPhoto(values);
          console.log({ action });
          dispatch(action);
          return;
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }

        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner
        title="Pick your amazing photo 😍"
        backgroundUrl={Images.banner_BG3}
      />
      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
};

export default AddEditPage;
