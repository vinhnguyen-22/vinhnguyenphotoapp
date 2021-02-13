import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "components/NotFound";
import AddEditPage from "./pages/AddEdit/AddEditPage";
import MainPage from "./pages/Main/MainPage";

const Photo = () => {
  const match = useRouteMatch();
  console.log("Parent url", { match });
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:photoId`} component={AddEditPage} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Photo;
