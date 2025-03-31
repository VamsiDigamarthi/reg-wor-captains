import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isDisplayDriverListOrItem: boolean;
}

const initialState: ModalState = {
  isDisplayDriverListOrItem: false,
};

const modalSlice = createSlice({
  name: "isDisplay Driver List or Driver Item",
  initialState,
  reducers: {
    changeDriverListOrItemComponent: (state) => {
      state.isDisplayDriverListOrItem = !state.isDisplayDriverListOrItem;
    },
  },
});

export const { changeDriverListOrItemComponent } = modalSlice.actions;

export default modalSlice.reducer;
