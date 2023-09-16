import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  posts: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
        state.posts = action.payload
    },
    editPosts: (state, action) => {
        // edit post
    },
    getPosts: (state, action) => {
        // return post by id
    },
    addPosts: (state, action) => {
        // add new post by data
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPosts, editPosts, addPosts, getPosts } = postsSlice.actions

export default postsSlice.reducer