import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/Typo";
import { Container } from "../../components/Container"
import { getPosts } from "../../redux/slices/postsSlice";

export const PostsPage = () => {
    const { list, loading } = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if (!list && loading) {
        return <Container><Typo>Loading...</Typo></Container>
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