import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UIState {
  theme: string;
}

const initialState: UIState = {
  theme: "light",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSetting: (
      state,
      action: PayloadAction<{ property: keyof UIState; value: string }>
    ) => {
      const { property, value } = action.payload;
      state[property] = value;
    },
  },
});

export const { setSetting } = uiSlice.actions;

export default uiSlice.reducer;
