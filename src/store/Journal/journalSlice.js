import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
    messageSaved: '',
    notes: [],
    active: null,
    // nota activa debe lucir algo como
    // active: {
    //   id: '123',
    //   title: '',
    //   body: '',
    //   date: 1234,
    //   imageUrls: [], // https://foto1.jpg, https://foto2.jpg etc
    // }
  },
  reducers: {
    addNewEmptyNote: (state, action) => {

    },
    setActiveNote: (state, action) => {

    },
    setNotes: (state) => {

    },
    setSaving: (state, action) => {

    },
    updateNote: (state, action) => {

    },
    deleteNote: (state, action) => {

    },
  }
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNote,
} = journalSlice.actions;