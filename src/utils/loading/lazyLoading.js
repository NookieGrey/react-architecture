import loadComponent from "./loadComponent";

export const getSingleComponent = (loader) => {
  return loadComponent({
    Component: loader,
    reducer: () => Promise.resolve(),
  })
};

export const getComponentWithReducer = (files) => {
  return loadComponent(files);
};