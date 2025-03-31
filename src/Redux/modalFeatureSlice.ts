import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  activeModal: string | null;
  docsType: string | null;
}

const initialState: ModalState = {
  activeModal: null,
  docsType: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.activeModal = action.payload;
    },
    openSpecificDocsModalType: (state, action: PayloadAction<string>) => {
      state.docsType = action.payload;
    },
    closeModal: (state) => {
      state.activeModal = null;
    },
  },
});

export const { openModal, closeModal, openSpecificDocsModalType } =
  modalSlice.actions;

export default modalSlice.reducer;
