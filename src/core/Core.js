import React from 'react';
import {Provider} from "react-redux";

import {store} from "../utils/store";

import Dashboard from "../dashboard/Dashboard";

const Core = () => (
  <Provider store={store} /*redux*/>
    <Dashboard/>
  </Provider>
);
export default Core;
