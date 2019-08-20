import axios from "axios";

const fetchListStart = () => {
  return {
    type: "FETCH_LIST_START"
  };
}


const fetchListSuccess = (res) => {
  return {
    type: "FETCH_LIST_SUCCESS",
    data: res.data
  };
}

const fetchListError = (err) => {
  return {
    type: "FETCH_LIST_ERROR",
    error: err
  };
}


export const getList = () => {
  return (dispatch) => {
    dispatch(fetchListStart());
    axios.get("https://api.github.com/users?per_page=100")
      .then(res=> {
        dispatch(fetchListSuccess(res));
      })
      .catch(err => {
        dispatch(fetchListError(err));
      });
  };
}