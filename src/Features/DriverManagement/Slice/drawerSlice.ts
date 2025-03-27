import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  drawerOpen: boolean;
  isActionBtn: boolean;
}

const initialState: ModalState = {
  drawerOpen: false,
  isActionBtn: false,
};

const modalSlice = createSlice({
  name: "drawerModal",
  initialState,
  reducers: {
    drawerOpenCloseModalFunc: (state, actions) => {
      state.drawerOpen = !state.drawerOpen;
      state.isActionBtn = actions.payload;
    },
  },
});

export const { drawerOpenCloseModalFunc } = modalSlice.actions;

export default modalSlice.reducer;
