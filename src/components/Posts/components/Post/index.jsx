import React from "react";
import { Link } from "../../../UI/Link"
import * as SC from "./styles";

export const Post = ({post}) => {
    const image = post.image || 'https://cdnn11.img.sputnik.by/img/07e6/0a/1b/1068422950_0:0:1200:1200_1920x0_80_0_0_a51e00ed4439c72f67f64101ad1f61b6.jpg'

    return (
        <SC.Post>
            <SC.Image src={image} alt={post.title} />
            <SC.Title>{post.title}</SC.Title>
            <Link to={`/posts/${post.id}`}>Читать далее</Link>
        </SC.Post>
    )
}