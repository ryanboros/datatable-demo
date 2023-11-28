import { configureStore } from "@reduxjs/toolkit";

import BatchesState from "modules/batches/BatchesState";

const reducers = {
  [BatchesState.mountPoint]: BatchesState.reducer,
};

export default configureStore({
  reducer: reducers,
});
