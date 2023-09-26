import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/UI/Typo";
import { Container } from "../../components/UI/Container"
import { getPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/UI/Loader";

export const PostsPage = () => {
    const { list, loading } = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!list) {
            dispatch(getPosts())
        }
    }, [list, dispatch])

    if (!list && loading) {
        return <Container><Loader /></Container>
    }

    if (!list) {
        return <Container><Typo>404</Typo></Container>
    }
    return (
        <Container >
            <Typo>Публикации</Typo>
            <Posts posts={list} />
        </Container>
)}