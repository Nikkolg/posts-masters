import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/UI/Typo";
import { Container } from "../../components/UI/Container"
import { getPosts, setCurrentPage } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/UI/Loader";
import { Paginations } from "../../components/UI/Paginations";

export const PostsPage = () => {
    const { list, loading } = useSelector((state) => state.posts.posts)
    const { currentPage } = useSelector((state) => state.posts.paginations);
    const { limitPostOnPage } = useSelector((state) => state.posts);


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage(1));

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

    const startIndex = (currentPage - 1) * limitPostOnPage;
    const endIndex = startIndex + limitPostOnPage;
    const paginatedPosts = list.slice(startIndex, endIndex);

    return (
        <Container >
            <Typo>Публикации</Typo>
            <Posts posts={paginatedPosts} />
            <Paginations />
        </Container>
)}