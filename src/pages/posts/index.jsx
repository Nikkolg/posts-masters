import React from "react";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/Typo";
import { Container } from "../../components/Container"

export const INITIAL_POSTS = [
    {
        id: 1,
        title: 'Post 1',
        image: 'https://cdnn11.img.sputnik.by/img/07e6/0a/1b/1068422950_0:0:1200:676_1920x0_80_0_0_db203c19f1168a18ef2e6b80ef9c49eb.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates voluptatum harum, molestias porro ab laudantium perferendis laboriosam nemo itaque eius tempore voluptas obcaecati vel minus quas minima. Voluptas, quod magni!'
    },
    {
        id: 2,
        title: 'Post 2',
        image: 'https://cdnn11.img.sputnik.by/img/07e6/0a/1b/1068422950_0:0:1200:676_1920x0_80_0_0_db203c19f1168a18ef2e6b80ef9c49eb.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates voluptatum harum, molestias porro ab laudantium perferendis laboriosam nemo itaque eius tempore voluptas obcaecati vel minus quas minima. Voluptas, quod magni!'
    },
    {
        id: 3,
        title: 'Post 3',
        image: 'https://cdnn11.img.sputnik.by/img/07e6/0a/1b/1068422950_0:0:1200:676_1920x0_80_0_0_db203c19f1168a18ef2e6b80ef9c49eb.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates voluptatum harum, molestias porro ab laudantium perferendis laboriosam nemo itaque eius tempore voluptas obcaecati vel minus quas minima. Voluptas, quod magni!'
    },
    {
        id: 4,
        title: 'Post 4',
        image: 'https://cdnn11.img.sputnik.by/img/07e6/0a/1b/1068422950_0:0:1200:676_1920x0_80_0_0_db203c19f1168a18ef2e6b80ef9c49eb.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates voluptatum harum, molestias porro ab laudantium perferendis laboriosam nemo itaque eius tempore voluptas obcaecati vel minus quas minima. Voluptas, quod magni!'
    },
    {
        id: 5,
        title: 'Post 5',
        image: 'https://cdnn11.img.sputnik.by/img/07e6/0a/1b/1068422950_0:0:1200:676_1920x0_80_0_0_db203c19f1168a18ef2e6b80ef9c49eb.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates voluptatum harum, molestias porro ab laudantium perferendis laboriosam nemo itaque eius tempore voluptas obcaecati vel minus quas minima. Voluptas, quod magni!'
    },
    {
        id: 6,
        title: 'Post 6',
        image: 'https://cdnn11.img.sputnik.by/img/07e6/0a/1b/1068422950_0:0:1200:676_1920x0_80_0_0_db203c19f1168a18ef2e6b80ef9c49eb.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates voluptatum harum, molestias porro ab laudantium perferendis laboriosam nemo itaque eius tempore voluptas obcaecati vel minus quas minima. Voluptas, quod magni!'
    },
]

export const PostsPage = () => (
    <>
    <Container >
        <Typo>Публикации</Typo>
        <Posts posts={INITIAL_POSTS} />
    </Container>
    </>
)