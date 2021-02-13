import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

const Photo = React.lazy(() => import("./features/Photo"));
const App = () => {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        {/* NOTE when use lazy loading, you have to use the fallback suspense*/}
        <BrowserRouter>
          {/*NOTE các thành phần Link hay redirect phải nằm trong BRouter*/}
          {/*TODO: REMOVE AFTER TESTING*/}
          <Header />
          <Switch>
            <Redirect exact from="/" to="photos" />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
