import React from 'react';
import {Provider} from "react-redux";
import {ConnectedRouter} from 'react-router-redux';

import {store, history} from "../utils/store";
import Routes from "./Routes";

const Core = () => (
  <Provider store={store} /*redux*/>
    <ConnectedRouter history={history} /*router*/>
      <Routes/>
    </ConnectedRouter>
  </Provider>
);

export default Core;
