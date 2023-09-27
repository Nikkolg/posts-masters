import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postsAPI } from "../../api/postsAPI"

const initialState = {
    posts: {
        list: null,
        loading: false
    },
    postForView: {
        post: null,
        loading: false,
    },
    paginations: {
        currentPage: 1,
        totalPages: 0,
        limitPostOnPage: 3,
    }
}

export const getPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        return await postsAPI.fetchPosts()
    }
)

export const getPostById = createAsyncThunk(
    'posts/fetchById',
    async (postId) => {
        return await postsAPI.fetchById(postId)
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        editPosts: (state, action) => {
            state.posts.list = state.posts.list.map((post) => {
                if(post.id === action.payload.id) {
                    return action.payload
                }
                return post
            })
        },
        addPosts: (state, action) => {
            const newPost = {...action.payload}
            newPost.id = new Date().getTime()
            state.posts.list = state.posts.list ? [newPost, ...state.posts.list] : [newPost]
            
            const { limitPostOnPage } = state.paginations;
            const totalPosts = state.posts.list
            state.paginations.totalPages = Math.ceil(totalPosts.length/limitPostOnPage);
        },
        showPost: (state, action) => {
            state.postForView = {
                post: action.payload,
                loading: false
            }                        
        },
        deletePost: (state, action) => {
            state.posts.list = state.posts.list.filter((post) => post.id !== action.payload.id)
            state.postForView = {
                post: null,
                loading: false
            }

            const { limitPostOnPage } = state.paginations;
            const totalPosts = state.posts.list
            state.paginations.totalPages = Math.ceil(totalPosts.length/limitPostOnPage);
        },
        setCurrentPage: (state, action) => {
            state.paginations.currentPage = action.payload;
        },
        setTotalPage: (state, action) => {
            state.paginations.totalPages = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPostById.pending, (state, action) => {
            state.postForView = {
                post: null,
                loading: true
            }
        })
        builder.addCase(getPostById.fulfilled, (state, action) => {
            state.postForView = {
                post: action.payload,
                loading: false
            }
        })
        builder.addCase(getPosts.pending, (state, action) => {
            state.posts = {
                list: null,
                loading: true
            }
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = {
                list: action.payload,
                loading: false
            }

            const { limitPostOnPage } = state.paginations;
            state.paginations.totalPages = Math.ceil(action.payload.length/limitPostOnPage);
        })
    },
})

export const {editPosts, addPosts, showPost, deletePost, setCurrentPage, setTotalPage} = postsSlice.actions

export default postsSlice.reducer