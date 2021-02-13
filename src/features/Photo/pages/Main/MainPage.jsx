import React from "react";
import PropTypes from "prop-types";
import Banner from "components/Banner/index";
import Images from "constants/images";
import { Container } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/PhotoSlice";

const MainPage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const photos = useSelector((state) => state.photos);
  console.log("List of photos: ", photos);

  const handlePhotoEditClick = (photo) => {
    console.log("Edit: ", photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  };

  const handlePhotoRemoveClick = (photo) => {
    console.log("Remove: ", photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      <Banner
        title="Your awesome photos 🥳"
        backgroundUrl={Images.banner_BG1}
      />
      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
          <PhotoList
            photoList={photos}
            onPhotoEditClick={handlePhotoEditClick}
            onPhotoRemoveClick={handlePhotoRemoveClick}
          />
        </div>
      </Container>
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
