import { csrfFetch } from "./csrf";
/*-------------Types-------------*/
const LOAD_NOTEBOOKS = "notebook/load";
const ADD_NOTEBOOK = "notebook/add";
const UPDATE_NOTEBOOK = "notebook/update";
const REMOVE_NOTEBOOK = "notebook/remove";
const REMOVE_NOTE = "note/remove";
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

const update = (notebook) => {
  return {
    type: UPDATE_NOTEBOOK,
    notebook,
  };
};

const remove = (id) => {
  return {
    type: REMOVE_NOTEBOOK,
    id,
  };
};

/*-------------THUNK CREATORS-------------*/
export const loadNotebooks = () => async (dispatch) => {
  const res = await csrfFetch("/api/notebooks");
  const notebooks = await res.json();
  dispatch(load(notebooks));
  return res;
};

export const addNotebook = (notebook) => async (dispatch) => {
  const res = await csrfFetch("/api/notebooks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(notebook),
  });
  if (res.ok) {
    const notebook = await res.json();
    dispatch(add(notebook));
    return notebook;
  }
};

export const updateNotebook = (payload, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/notebooks/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (res.ok) {
    const notebook = await res.json();
    dispatch(update(notebook));
  }
};

export const deleteNotebook = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/notebooks/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const id = await res.json();
    dispatch(remove(id));
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
        [action.notebook.id]: action.notebook,
      };
    }
    case REMOVE_NOTEBOOK: {
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    }
    case REMOVE_NOTE: {
      const newState = { ...state };
      const notebook = newState[action.notebookId];
      const note = notebook.Notes.filter((note) => +action.id !== note.id);
      newState[action.notebookId].Notes = note;
      return newState;
    }
    default:
      return state;
  }
};

export default notebookReducer;
