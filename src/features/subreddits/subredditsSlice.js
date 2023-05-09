import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    reducers: {}
  });

export const selectMenu = (state) => state.subreddits.menulist;
export const selectSubreddits = (state) => state.subreddits.subredditlist;


//REMEMBER TO DO THIS TO USE YOUR SLICE DUMMY!!!!
export default subredditsSlice.reducer;