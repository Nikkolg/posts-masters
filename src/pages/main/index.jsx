import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { Container} from "../../components/UI/Container"
import { Typo } from "../../components/UI/Typo"
import { getFreshPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/UI/Loader";

export const MainPage = () => {
    const dispatch = useDispatch()
    
    const { posts, loading } = useSelector((state) => state.posts.freshPosts)
    const { post } = useSelector((state) => state.posts.postForView)

    useEffect(() => {
        dispatch(getFreshPosts())
    }, [dispatch])

    return (
        <Container >
            {loading && <Container><Loader /></Container>}
            {posts && 
                <>
                    <Typo>Свежии публикации</Typo>
                    <Posts posts={posts} />
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


