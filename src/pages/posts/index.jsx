import React from "react";
import { useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/Typo";
import { Container } from "../../components/Container"

export const PostsPage = () => {
    const posts = useSelector((state) => state.posts.list)
    return (
        <Container >
            <Typo>Публикации</Typo>
            <Posts posts={posts} />
        </Container>
)}