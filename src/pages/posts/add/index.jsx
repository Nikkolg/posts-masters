import React from "react";
import { useDispatch } from "react-redux";
import { PostForm } from "../components/PostForm";
import { addPosts } from "../../../redux/slices/postsSlice";

export const AddPostPage = () => {
    const dispatch = useDispatch()

    const onSubmitForm = (formValues) => {
        dispatch(addPosts(formValues))
    }

    return <PostForm title = 'Добавление нового поста' onSubmitForm= {onSubmitForm} />
}