import React from 'react';

import Loading from "./Loading";

import {registerReducer} from "../store";

const loadComponent = (files) => {
  return class ComponentLoader extends React.Component {
    state = {
      loaded: false,
      error: false,
      Component: Loading,
    };

    mounted = true;

    componentDidMount() {
      Promise.all([
        files.Component(),
        files.reducer(),
      ])
        .then(files => {
          if (files[1] && files[1].default && files[1].name) {
            registerReducer(files[1].name, files[1].default)
          }

          return files;
        })
        .then(files => {
          const Component = files[0].default;

          if (this.mounted) {
            this.setState({
              Component,
              loaded: true,
            })
          }
        })
        .catch(error => this.mounted && this.setState({error}))
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    render() {
      if (this.state.loaded) {
        const WrappedComponent = this.state.Component;

        return <WrappedComponent {...this.props}/>;
      }

      if (this.state.error) {
        throw this.state.error;
      }

      return <Loading/>
    }
  }
};

export default loadComponent;