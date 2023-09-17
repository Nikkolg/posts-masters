import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Container } from "../../../components/Container";
import { Typo } from "../../../components/Typo";
import { Link } from "../../../components/Link";
import { getPostById } from "../../../redux/slices/postsSlice";
import * as SC from "./styles"

export const DetailPostPage = () => {
    const {id} = useParams()
    const postForView = useSelector((state) => state.posts.postForView)
    const dispatch = useDispatch()
    const { post } = postForView

    const image = postForView.image || 'https://cdnn11.img.sputnik.by/img/07e6/0a/1b/1068422950_0:0:1200:1200_1920x0_80_0_0_a51e00ed4439c72f67f64101ad1f61b6.jpg'

    useEffect(() => {
        dispatch(getPostById(Number(id)))
    }, [id])

    if (postForView.loading) {
        return <Container><Typo>Loading...</Typo></Container>
    }

    if (!postForView.post || !postForView.post.hasOwnProperty('id')) {
        return <Container><Typo>Пост не найден</Typo></Container>
    }

    return (
        <Container>
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title}></SC.Image>
            <SC.Text>{post.body}</SC.Text>
            <div style={{clear: 'both'}} />
            <SC.WrapperLink>
                <Link to={'/posts'}>Обратно к постам</Link>
            </SC.WrapperLink>
        </Container>
    )
}