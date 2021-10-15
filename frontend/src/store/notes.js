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

const add = (note) => {
  return {
    type: ADD_NOTE,
    note,
  };
};

const update = (noteId) => {
  return {
    type: UPDATE_NOTE,
    noteId,
  };
};

const remove = (id) => {
  return {
    type: REMOVE_NOTE,
    id,
  };
};
/*-------------THUNK CREATORS-------------*/

export const loadNotes = () => async (dispatch) => {
  const res = await csrfFetch("/api/notes");
  const notes = await res.json();
  dispatch(load(notes));
  return res;
};

export const addNote = (payload) => async (dispatch) => {
  const res = await csrfFetch("/api/notes/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (res.ok) {
    const note = await res.json();
    dispatch(add(note));
    return note;
  }
};

export const updateNote = (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/notes/${payload.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (res.ok) {
    const note = await res.json();
    dispatch(update(note));
    return note;
  }
};

export const deleteNote = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/notes/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const id = await res.json();
    dispatch(remove(id));
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
    case ADD_NOTE:
    case UPDATE_NOTE: {
      return {
        ...state,
        [action.notes.id]: action.notes,
      };
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
