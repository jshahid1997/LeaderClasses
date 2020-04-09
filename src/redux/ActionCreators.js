import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseURL";

export const fetchCeo = () => (dispatch) => {
  dispatch(ceoLoading());

  return fetch(baseUrl + "CEO")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            " Error " + response.status + " : " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((ceo) => dispatch(addCeo(ceo)))
    .catch((error) => dispatch(ceoFailed(error.message)));
};

export const ceoLoading = () => ({
  type: ActionTypes.CEO_LOADING,
});

export const ceoFailed = (errmess) => ({
  type: ActionTypes.CEO_FAILED,
  payload: errmess,
});

export const addCeo = (ceo) => ({
  type: ActionTypes.ADD_CEO,
  payload: ceo,
});

export const fetchECeo = () => (dispatch) => {
  dispatch(eceoLoading());

  return fetch(baseUrl + "Emerging-CEO")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            " Error " + response.status + " : " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((eceo) => dispatch(addECeo(eceo)))
    .catch((error) => dispatch(eceoFailed(error.message)));
};

export const eceoLoading = () => ({
  type: ActionTypes.ECEO_LOADING,
});

export const eceoFailed = (errmess) => ({
  type: ActionTypes.ECEO_FAILED,
  payload: errmess,
});

export const addECeo = (eceo) => ({
  type: ActionTypes.ADD_ECEO,
  payload: eceo,
});
