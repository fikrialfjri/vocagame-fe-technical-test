import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isAuth: false,
    name: "",
    username: "",
    phone_number: "",
    password: "",
  },
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setState: () => (state, action) => {
      return { value: { ...action.payload } };
    },
    signUp: (state, action) => {
      return { value: { ...state.value, isAuth: false, ...action.payload } };
    },
    signIn: (state, action) => {
      return { value: { ...state.value, isAuth: true, ...action.payload } };
    },
    signOut: () => initialState,
  },
});

export const { setState, signUp, signIn, signOut } = auth.actions;
export default auth.reducer;
