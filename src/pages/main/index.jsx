import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { Container} from "../../components/UI/Container"
import { Typo } from "../../components/UI/Typo"
import { Loader } from "../../components/UI/Loader";
import { getPosts } from "../../redux/slices/postsSlice";

const limitPostsOnMain = 3

export const MainPage = () => {
    const dispatch = useDispatch()
    
    const { list, loading } = useSelector((state) => state.posts.posts)
    const { post } = useSelector((state) => state.posts.postForView)

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
            {loading && <Container><Loader /></Container>}
            {list && 
                <>
                    <Typo>Свежии публикации</Typo>
                    <Posts posts={list.slice(0, limitPostsOnMain)} />
                </>
            }
            {post && 
                <>
                    <Typo>Последний просмотренный пост</Typo>
                    <Posts posts={[post]} />
                </>
            }
        </Container>
    )
}


