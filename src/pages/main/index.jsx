import React from "react";
import { Posts } from "../../components/Posts";
import { Container} from '../../components/Container'
import { Typo } from '../../components/Typo'

const INITIAL_POSTS = [
    {
        id: '1',
        title: 'Post 1',
        image: 'https://cdnn11.img.sputnik.by/img/07e6/0a/1b/1068422950_0:0:1200:676_1920x0_80_0_0_db203c19f1168a18ef2e6b80ef9c49eb.jpg'
    },
    {
        id: '2',
        title: 'Post 2',
        image: 'https://cdnn11.img.sputnik.by/img/07e6/0a/1b/1068422950_0:0:1200:676_1920x0_80_0_0_db203c19f1168a18ef2e6b80ef9c49eb.jpg'
    },
    {
        id: '3',
        title: 'Post 3',
        image: 'https://cdnn11.img.sputnik.by/img/07e6/0a/1b/1068422950_0:0:1200:676_1920x0_80_0_0_db203c19f1168a18ef2e6b80ef9c49eb.jpg'
    },
]

export const MainPage = () => (
    <>
    <Container >
        <Typo>Свежии публикации</Typo>
        <Posts posts={INITIAL_POSTS} />
    </Container>
    </>
)

