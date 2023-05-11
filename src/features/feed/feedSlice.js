import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchFeed = createAsyncThunk(
    'feed/fetchFeed',
    async (inputs) => {
        const {selectedSubreddit, filter} = inputs;
        const res = await fetch(`https://www.reddit.com/${selectedSubreddit}/${filter}.json`)
        const json = await res.json()
        return json.data.children.map(subreddit => subreddit.data)
    }
)


const initialState = {
    feed: [],
    selectedSubreddit: "Popular",
    filter: "Hot",
    isLoading: false,
    error: false,
}

const feedSlice =  createSlice({
    name: 'feed',
    initialState: initialState,
    reducers: {
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
        },
        setFilter(state, action) {
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFeed.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
        builder.addCase(fetchFeed.fulfilled, (state, action) => {
            state.feed = action.payload;
            state.isLoading = false;
            state.error = false;
        })
        builder.addCase(fetchFeed.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
    }
})

export const { setSelectedSubreddit, setFilter } = feedSlice.actions;
export const selectFeed = state => state.feed.feed;
export const selectSelectedSubreddit = state => state.feed.selectedSubreddit;
export default feedSlice.reducer;