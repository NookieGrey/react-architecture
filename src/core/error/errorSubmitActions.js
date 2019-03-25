import {push} from "connected-react-router";

export const submitCrashReport = (error, info, processError) => (dispatch, getState) => {
  const state = getState();
  const {
    form: {
      errorSubmit: {
        values: {
          subject,
        } = {}
      }
    }
  } = state;

  console.log(subject, error, info, state);

  dispatch(push("/"));

  processError();
};
