import { csrfFetch } from "./csrf";
/*-------------Types-------------*/
const LOAD_NOTEBOOKS = "notebook/load";
const ADD_NOTEBOOK = "notebook/add";
const UPDATE_NOTEBOOK = "notebook/update";
const REMOVE_NOTEBOOK = "notebook/remove";
/*-------------ACTIONS-------------*/

const load = (notebooks) => {
  return {
    type: LOAD_NOTEBOOKS,
    notebooks,
  };
};

const add = (notebook) => {
  return {
    type: ADD_NOTEBOOK,
    notebook,
  };
};

const update = (notebookId) => {
  return {
    type: UPDATE_NOTEBOOK,
    notebookId,
  };
};

const remove = (notebookId) => {
  return {
    type: REMOVE_NOTEBOOK,
    notebookId,
  };
};

/*-------------THUNK CREATORS-------------*/
export const loadNotebooks = () => async (dispatch) => {
  const res = await csrfFetch("/api/notebooks");
  const notebooks = await res.json();
  dispatch(load(notebooks));
  return res;
};

export const addNotebook = () => async (dispatch) => {
  const res = await csrfFetch("/api/notebooks", {
    method: "POST",
  });
};

/*-------------REDUCERS-------------*/
const initialState = {};

const notebooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NOTEBOOKS: {
      const userNotebooks = {};
      action.notebooks.forEach((notebook) => {
        userNotebooks[notebook.id] = notebook;
      });
      return {
        ...state,
        ...userNotebooks,
      };
    }
    default:
      return state;
  }
};

export default notebooksReducer;
