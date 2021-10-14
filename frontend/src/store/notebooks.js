import { csrfFetch } from "./csrf";
/*-------------Types-------------*/
const LOAD_NOTEBOOKS = "notebook/load";
const GET_NOTEBOOK = "notebook/get";
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
const getNotebook = (notebook) => {
  return {
    type: GET_NOTEBOOK,
    notebook,
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

export const loadNotebook = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/notebooks/${id}`);
  const notebook = await res.json();
  dispatch(getNotebook(notebook));
};

export const addNotebook = (payload) => async (dispatch) => {
  const res = await csrfFetch("/api/notebooks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (res.ok) {
    const notebook = await res.json();
    dispatch(add(notebook));
    return notebook;
  }
};

export const updateNotebook = (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/notebooks/${payload.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (res.ok) {
    const notebook = await res.json();
    dispatch(update(notebook));
    return notebook;
  }
};

export const deleteNotebook = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/notebooks/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const notebook = await res.json();
    dispatch(remove(notebook.id));
  }
};

/*-------------REDUCERS-------------*/
const initialState = {};

const notebookReducer = (state = initialState, action) => {
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
    case ADD_NOTEBOOK:
    case UPDATE_NOTEBOOK: {
      return {
        ...state,
        [action.notebooks.id]: action.notebooks,
      };
    }
    case REMOVE_NOTEBOOK: {
      const newState = { ...state };
      delete newState[action.notebookId];
      return newState;
    }
    default:
      return state;
  }
};

export default notebookReducer;
