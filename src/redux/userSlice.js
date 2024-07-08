import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../services/localStorage.service";
import fireBaseService from "../services/fireBaseService";

export const fetchUserData = createAsyncThunk(
  "users/fetchUserData",
  async (userId) => {
    const response = await fireBaseService.getUserData(userId);
    return response;
  }
);



const initialState = {
  isAuth: Boolean(getFromLocalStorage("user")) || false,
  id: getFromLocalStorage("user")?.uid || null,
  data: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.isAuth = action.payload;
    },
    setUserId(state,action){
      state.id = action.payload;
    },
    setUserData(state, action) {
      state.data = action.payload;
    },
    setUserImage(state, action) {
      state.data.avatar_url = action.payload;
    },
    setUserField(state, action) {
      const { value, fieldName } = action.payload;
      state.data[fieldName] = value;
    },
    addLink(state){
      const newLink = {
        name: "EMPTY",
        url: "",
      }
      state.data.links = [...state.data.links,newLink];
    },
    removeLink(state,action){
      const index = action.payload;
      state.data.links = state.data.links.filter((_,i) => i !== index);
    },
    changeLinkName(state,action){
      const {value,index} = action.payload;
      const link = state.data.links.find((_,i) => index === i);
      link.name = value;
    },
    changeLinkUrl(state,action){
      const {value,index} = action.payload;
      const link = state.data.links.find((_,i) => index === i);
      link.url = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.data = null;
    });
    builder.addCase(fetchUserData.rejected, (state) => {
      state.data = null;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setUser, setUserData, setUserImage, setUserField ,changeLinkName ,changeLinkUrl ,addLink ,removeLink,setUserId} =
  userSlice.actions;

export default userSlice.reducer;
