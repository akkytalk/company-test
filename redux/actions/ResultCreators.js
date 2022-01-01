import * as actionType from "./ActionTypes";
import axios from "axios";
import swal from "sweetalert";
// import { baseUrl } from "../../shared/baseUrl";

export const resultSetData = (result) => {
  return {
    type: actionType.RESULT_SET_DATA,
    result: result,
  };
};

export const resultFailData = (error) => {
  return {
    type: actionType.RESULT_FAIL_DATA,
    error: error,
  };
};
export const resultLoading = () => {
  return {
    type: actionType.RESULT_LOADING,
  };
};
export const resultGetData = (data) => {
  // return (dispatch) => {
  //   dispatch(resultLoading());
  //   axios
  //     .get(baseUrl + `result/${data?.id}`, {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + data.token,
  //       },
  //     })
  //     .then((res) => {
  //       dispatch(resultSetData(res.data));
  //       console.log("graph data", res.data);
  //     })
  //     .catch((error) => dispatch(resultFailData(error)));
  // };
};

// export const testReportData = (data) => {
//   return (dispatch) => {
//     dispatch(resultLoading());
//     axios
//       .get(baseUrl + "getTemp", {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + data.token,
//         },
//       })
//       .then((res) => {
//         dispatch(resultEditSetData(res.data));

//         console.log("response data", res.data);
//       })

//       .catch((error) => dispatch(resultEditFailData(error)));
//   };
// };

export const resultEditSetData = (mainResult) => {
  return {
    type: actionType.RESULT_EDIT_SET_DATA,
    mainResult: mainResult,
  };
};

export const resultEditFailData = (error) => {
  return {
    type: actionType.RESULT_EDIT_FAIL_DATA,
    error: error,
  };
};

export const resultEditGetData = (data) => {
  // return (dispatch) => {
  //   dispatch(resultLoading());
  //   axios
  //     .get(baseUrl + `getTemp/${data?.id}`, {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + data.token,
  //       },
  //     })
  //     .then((res) => {
  //       dispatch(resultEditSetData(res.data));
  //       console.log("response data", res.data);
  //     })
  //     .catch((error) => dispatch(resultEditFailData(error)));
  // };
};

export const deleteResultFail = (error) => {
  return {
    type: actionType.DELETE_RESULT_FAIL,
    error: error,
  };
};

export const deleteResult = (data, id) => {
  // return (dispatch) => {
  //   if (id) {
  //     axios
  //       .delete(baseUrl + `result/${id}`, {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer " + data?.token,
  //         },
  //       })
  //       .then(() => {
  //         console.log("swal");
  //         swal("Successfully Deleted  Result!").then(() => {
  //           dispatch(resultGetData(data));
  //         });
  //       })
  //       .catch((error) => dispatch(deleteResultFail(error)));
  //   }
  // };
};

export const postResultDataStart = () => {
  return {
    type: actionType.POST_RESULT_DATA_START,
  };
};

export const postResultDataFail = (error) => {
  return {
    type: actionType.POST_RESULT_DATA_FAIL,
    error: error,
  };
};

export const postResultData = (data, user, toggle) => {
  // return (dispatch) => {
  //   dispatch(postResultDataStart());
  //   axios
  //     .post(baseUrl + "result", user, {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + data?.token,
  //       },
  //     })
  //     .then(() => {
  //       console.log("swal");
  //       swal("Successfully Created  Result!").then(() => {
  //         dispatch(resultGetData(data));
  //         toggle();
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       dispatch(postResultDataFail(error));
  //     });
  // };
};

export const updateResultDataStart = () => {
  return {
    type: actionType.UPDATE_RESULT_DATA_START,
  };
};

export const updateResultData = (data, user, toggle) => {
  // return (dispatch) => {
  //   dispatch(updateResultDataStart());
  //   axios
  //     .post(baseUrl + `result/${data.id}?_method=PUT`, user, {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + data.token,
  //       },
  //     })
  //     .then(() => {
  //       console.log("swal");
  //       swal("Successfully Updated  Result!").then(() => {
  //         toggle();
  //         dispatch(resultGetData(data));
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};
