import { csrfFetch } from "./csrf";
/*-------------Types-------------*/
const LOAD_NOTES = "note/load";
const ADD_NOTE = "note/add";
const UPDATE_NOTE = "note/update";
const REMOVE_NOTE = "note/remove";
/*-------------ACTIONS-------------*/
const load = (notes) => {
  return {
    type: LOAD_NOTES,
    notes,
  };
};

const add = (note, notebook) => {
  return {
    type: ADD_NOTE,
    note,
    notebook,
  };
};

const update = (note, notebook) => {
  return {
    type: UPDATE_NOTE,
    note,
    notebook,
  };
};

const remove = (id, notebookId) => {
  return {
    type: REMOVE_NOTE,
    id,
    notebookId,
  };
};
/*-------------THUNK CREATORS-------------*/

export const loadNotes = () => async (dispatch) => {
  const res = await csrfFetch("/api/notes");
  const notes = await res.json();
  dispatch(load(notes));
  return res;
};

export const addNote = (payload, notebook) => async (dispatch) => {
  const res = await csrfFetch("/api/notes/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (res.ok) {
    const note = await res.json();
    dispatch(add(note, notebook));
  }
};

export const updateNote = (payload, id, notebook) => async (dispatch) => {
  const res = await csrfFetch(`/api/notes/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (res.ok) {
    const note = await res.json();
    dispatch(update(note, notebook));
  }
};

export const deleteNote = (id, notebookId) => async (dispatch) => {
  const res = await csrfFetch(`/api/notes/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const id = await res.json();
    dispatch(remove(id, notebookId));
  }
};

/*-------------REDUCERS-------------*/
const initialState = {};
const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NOTES: {
      const userNotes = {};
      action.notes.forEach((note) => {
        userNotes[note.id] = note;
      });
      return {
        ...state,
        ...userNotes,
      };
    }
    case ADD_NOTE: {
      const newState = { ...state };
      console.log(action.note, "action.note");
      console.log(action.notebook, "action.notebook before push");
      const note = action.note;
      console.log(note, "@@@@@@@@@@@@@@@@@@");
      action.notebook.Notes.push(action.note);
      console.log(action.notebook, "action.notebook after push");
      newState[action.note.id] = note;
      return { ...newState, ...action.notebook };
    }
    case UPDATE_NOTE: {
      const newState = { ...state };
      const note = action.notebook.Notes.findIndex(
        (note) => note.id === +action.note.id
      );
      action.notebook.Notes[note] = action.note;
      newState[action.note.id] = note;
      return { ...newState, ...action.notebook };
    }
    case REMOVE_NOTE: {
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    }
    default:
      return state;
  }
};

export default notesReducer;
