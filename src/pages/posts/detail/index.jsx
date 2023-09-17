import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Container } from "../../../components/Container";
import { Typo } from "../../../components/Typo";
import { Link } from "../../../components/Link";
import { getPosts } from "../../../redux/slices/postsSlice";
import * as SC from "./styles"

export const DetailPostPage = () => {
    const {id} = useParams()
    const postForView = useSelector((state) => state.posts.postForView)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts(Number(id)))
    }, [id])

    if (!postForView) {
        return <>Пост не найден</>
    }


    return (
        <Container>
            <Typo>{postForView.title}</Typo>
            <SC.Image src={postForView.image} alt={postForView.title}></SC.Image>
            <SC.Text>{postForView.text}</SC.Text>
            <div style={{clear: 'both'}} />
            <SC.WrapperLink>
                <Link to={'/posts'}>Обратно к постам</Link>
            </SC.WrapperLink>
        </Container>
    )
}