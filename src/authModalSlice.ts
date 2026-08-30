import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const authModalSlice = createSlice({
  name: "authModal",
  initialState,

  reducers: {
      openModal: (state) => {
    state.isOpen = true;
  },

  closeModal: (state) => {
    state.isOpen = false;
  },
    
  },
});

export const { openModal, closeModal } = authModalSlice.actions;

export default authModalSlice.reducer;