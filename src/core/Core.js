import React from 'react';
import {Provider} from "react-redux";

import {store} from "../utils/store";

import Login from "../login/Login";

const Core = () => (
  <Provider store={store} /*redux*/>
    <Login/>
  </Provider>
);

export default Core;
