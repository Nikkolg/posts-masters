import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Container } from "../../../components/UI/Container";
import { Typo } from "../../../components/UI/Typo";
import { Link } from "../../../components/UI/Link";
import { getPostById, showPost, deletePost } from "../../../redux/slices/postsSlice";
import { Modal } from "../../../components/UI/Modal";
import { Button } from "../../../components/UI/Button";
import * as SC from "./styles"

export const DetailPostPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { list } = useSelector((state) => state.posts.posts)
    const postForView = useSelector((state) => state.posts.postForView)
    const { user } = useSelector((state) => state.auth)

    const showEditAndDeleteBtn = list && user

    const [postForDelete, setPostForDelete] = useState(null)

    const { post } = postForView

    const image = postForView.image || 'https://cdnn11.img.sputnik.by/img/07e6/0a/1b/1068422950_0:0:1200:1200_1920x0_80_0_0_a51e00ed4439c72f67f64101ad1f61b6.jpg'

    const onDeletePost = () => {
        dispatch(deletePost(postForDelete))

        setPostForDelete(null)

        navigate("/posts")
    }

    useEffect(() => {
        const intId = Number(id)
        const findedPost = list ? list.find((item) => item.id === intId) : undefined
        if (findedPost) {
            dispatch(showPost(findedPost))
        } else {
            dispatch(getPostById(intId))
        }
    }, [id, list, dispatch])

    if (postForView.loading) {
        return <Container><Typo>Loading...</Typo></Container>
    }

    if (!postForView.post || !postForView.post.hasOwnProperty('id')) {
        return <Container><Typo>Пост не найден</Typo></Container>
    }

    return (
        <Container>
            {postForDelete &&
                <SC.ModalWrapper>
                    <Modal text={`Вы уверены что хотите удалить публикацию c ID - ${postForDelete.id}?`}>
                        <Button onClick={onDeletePost} className={'red'}>Да</Button>
                        <Button onClick={() => setPostForDelete(null)}>Нет</Button>
                    </Modal>
                </SC.ModalWrapper>
            }
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title}></SC.Image>
            <SC.Text>{post.body}</SC.Text>
            <div style={{clear: 'both'}} />
            <SC.WrapperLink>
                <Link to={'/posts'}>Обратно к публикациям</Link>
                {showEditAndDeleteBtn && <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>}
                {showEditAndDeleteBtn &&<Button onClick={() => setPostForDelete(post)} className={'red'}>Удалить</Button>}
            </SC.WrapperLink>
        </Container>
    )
}