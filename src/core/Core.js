import React from 'react';
import {Provider} from "react-redux";
import {ConnectedRouter} from 'react-router-redux';

import {store, history} from "../utils/store";
import Routes from "./Routes";
import RouterFlowControl from "./RouterFlowControl";

const Core = () => (
  <Provider store={store} /*redux*/>
    <ConnectedRouter history={history} /*router*/>
      <RouterFlowControl  /*auth*/>
        <Routes/>
      </RouterFlowControl>
    </ConnectedRouter>
  </Provider>
);

export default Core;
