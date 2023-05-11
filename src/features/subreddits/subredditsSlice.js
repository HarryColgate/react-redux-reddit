import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSub: "Popular",
  sortBy: "Hot",
  menulist: [
    {name: "Popular"},
    {name: "All"},
    {name: "Random"}
  ],
  subredditlist: [
    {name: "eyebleach"},
    {name: "prefectloops"},
    {name: "blessedimages"},
    {name: "worldnews"},
    {name: "casualuk"},
    {name: "explainlikeimfive"},
    {name: "gifs"},
    {name: "ama"},
    {name: "askreddit"},
    {name: "askreddit"},
  ]
};

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
      changeCurrentSub(state, action) {
        state.currentSub = action.payload;
      },
      changeSortBy(state, action) {
        state.sortBy = action.payload;
      }
    }
  });

export const { changeCurrentSub, changeSortBy } = subredditsSlice.actions;

export const selectMenu = (state) => state.subreddits.menulist;
export const selectSubreddits = (state) => state.subreddits.subredditlist;
export const getSub = (state) => state.subreddits.currentSub;
export const getSort = (state) => state.subreddits.sortBy;


//REMEMBER TO DO THIS TO USE YOUR SLICE DUMMY!!!!
export default subredditsSlice.reducer;