import React from 'react';
import Loadable from "react-loadable";

import Loading from "../core/Loading";
import {registerReducer} from "./store";

export const getSingleComponent = (loader) => {
  return Loadable({
    loader,
    loading: Loading,
  })
};

export const getComponentWithReducer = (loader) => {
  return Loadable.Map({
    loader,
    render(loaded, props) {
      let Component = loaded.Component.default;
      let reducer = loaded.reducer.default;
      let name = loaded.reducer.name;
      registerReducer(name, reducer);

      return <Component {...props}/>;
    },
    loading: Loading,
  });
};