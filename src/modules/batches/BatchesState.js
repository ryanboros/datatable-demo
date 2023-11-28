import axios from "axios";

/**
 * STORE MOUNT POINT
 **/
const STORE_MOUNT_POINT = "batches";

/**
 * CONSTANTS
 **/

const Statuses = {
  SUCCEEDED: "Succeeded",
  QUEUED: "Queued",
  FAILED: "Failed",
};

// Returns the list of user-pickable process statuses as an options-compatible object.
export const getStatusOptions = () => {
  return Object.values(Statuses).map((s) => ({
    label: s,
    value: s,
  }));
};

/**
 * ACTIONS
 **/
const FETCH_BATCHES = "Batches/FETCH_BATCHES";
const FETCH_BATCHES_SUCCESS = "Batches/FETCH_BATCHES_SUCCESS";
const FETCH_BATCHES_ERROR = "Batches/FETCH_BATCHES_ERROR";

/**
 * ACTION CREATORS
 **/
function fetchBatches() {
  return async (dispatch) => {
    dispatch({ type: FETCH_BATCHES });
    try {
      const response = await axios.get("./data/batches.json");
      if (response != null) {
        dispatch({ type: FETCH_BATCHES_SUCCESS, data: response.data });
      }
    } catch (error) {
      dispatch({ type: FETCH_BATCHES_ERROR, error: error });
    }
  };
}

/**
 * INITIAL STATE
 **/
const initialState = {
  data: {},
  loading: false,
  error: null,
};

/**
 * REDUCER
 **/
function BatchesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_BATCHES:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case FETCH_BATCHES_SUCCESS:
      return { ...state, error: null, loading: false, data: action.data };

    case FETCH_BATCHES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: {
      return state;
    }
  }
}

/**
 *  SELECTORS
 **/
const getBatches = (state) => state[STORE_MOUNT_POINT].data.batches;
const isBatchesLoading = (state) => state[STORE_MOUNT_POINT].loading;
const getError = (state) => state[STORE_MOUNT_POINT].error;

/**
 * REDUX OBJECT
 **/
const BatchesState = {
  mountPoint: STORE_MOUNT_POINT,
  actions: {
    FETCH_BATCHES,
  },
  actionCreators: {
    fetchBatches,
  },
  selectors: {
    getBatches,
    isBatchesLoading,
    getError,
  },
  reducer: BatchesReducer,
};

export default BatchesState;
