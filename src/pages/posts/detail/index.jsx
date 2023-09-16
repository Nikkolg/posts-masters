import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { INITIAL_POSTS } from "..";
import { Container } from "../../../components/Container";
import { Typo } from "../../../components/Typo";
import { Link } from "../../../components/Link";
import * as SC from "./styles"

export const DetailPostPage = () => {
    const {id} = useParams()
    const currentPost = useMemo(() => INITIAL_POSTS.find((item) => item.id === Number(id)), [])
    return (
        <Container>
            <Typo>{currentPost.title}</Typo>
            <SC.Image src={currentPost.image} alt={currentPost.title}></SC.Image>
            <SC.Text>{currentPost.text}</SC.Text>
            <div style={{clear: 'both'}} />
            <SC.WrapperLink>
                <Link to={'/posts'}>Обратно к постам</Link>
            </SC.WrapperLink>
        </Container>
    )
}