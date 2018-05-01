import React from 'react';
import {Provider} from "react-redux";
import {ConnectedRouter} from 'react-router-redux';
import { LocaleProvider } from 'antd';

import {store, history} from "../utils/store";
import Routes from "./Routes";
import RouterFlowControl from "./RouterFlowControl";
import ErrorBoundary from "./error/ErrorBoundary";

import enUS from 'antd/lib/locale-provider/en_US';

const Core = () => (
  <Provider store={store} /*redux*/>
    <ConnectedRouter history={history} /*router*/>
      <LocaleProvider locale={enUS} /*antd*/>
        <ErrorBoundary  /*handling react render errors*/>
          <RouterFlowControl  /*auth*/>
            <Routes/>
          </RouterFlowControl>
        </ErrorBoundary>
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>
);

export default Core;
