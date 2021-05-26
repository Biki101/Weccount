import BookActionType from "./book-action.types";

export const writeRecordStart = (recordData) => ({
  type: BookActionType.WRITE_RECORD_START,
  payload: recordData,
});
export const writeRecordSucess = () => ({
  type: BookActionType.WRITE_RECORD_SUCESS,
});
export const writeRecordFailure = (errorMessage) => ({
  type: BookActionType.WRITE_RECORD_FAILURE,
  payload: errorMessage,
});

export const removeRecordStart = (recordData) => ({
  type: BookActionType.REMOVE_RECORD_START,
  payload: recordData,
});
export const removeRecordSucess = () => ({
  type: BookActionType.REMOVE_RECORD_SUCESS,
});
export const removeRecordFailure = (errorMessage) => ({
  type: BookActionType.REMOVE_RECORD_FAILURE,
  payload: errorMessage,
});

export const GET_RECORDS_START = () => ({
  type: BookActionType.GET_RECORDS_START,
});
export const GET_RECORDS_SUCESS = () => ({
  type: BookActionType.GET_RECORDS_SUCESS,
});
export const GET_RECORDS_FAILURE = () => ({
  type: BookActionType.GET_RECORDS_FAILURE,
});
