import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PostForm } from "../components/PostForm";
import { Typo } from "../../../components/UI/Typo";
import { editPosts } from "../../../redux/slices/postsSlice";

export const EditPostPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { list } = useSelector((state) => state.posts.posts)

    const onSubmitForm = (formValues) => {
        dispatch(editPosts(formValues))
    }

    if (!list) {
        return <Typo>Пост не найден</Typo>
    }

    const findedPost = list.find((item) => item.id === Number(id))

    return <PostForm title = {`Редактирование поста - ${id}`} onSubmitForm={onSubmitForm} defaultValues={findedPost} />
}