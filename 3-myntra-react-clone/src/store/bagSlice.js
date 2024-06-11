import { createSlice } from "@reduxjs/toolkit";
const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload); // return is not used bcz only original aaray of object is modified
    },
    removeFromBag: (state, action) => {
      return state.filter((itemId) => itemId != action.payload); // return is used bcz new array of object is created
    },
  },
});

export const bagActions = bagSlice.actions;
export default bagSlice;
