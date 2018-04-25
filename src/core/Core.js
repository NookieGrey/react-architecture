import React from 'react';
import {Provider} from "react-redux";
import {ConnectedRouter} from 'react-router-redux';
import { LocaleProvider } from 'antd';

import {store, history} from "../utils/store";
import Routes from "./Routes";
import RouterFlowControl from "./RouterFlowControl";

import enUS from 'antd/lib/locale-provider/en_US';

import "antd/dist/antd.min.css";

const Core = () => (
  <Provider store={store} /*redux*/>
    <ConnectedRouter history={history} /*router*/>
      <LocaleProvider locale={enUS} /*antd*/>
        <RouterFlowControl  /*auth*/>
          <Routes/>
        </RouterFlowControl>
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>
);

export default Core;
