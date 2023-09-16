import React from "react";
import {Post} from './components/Post'
import * as SC from './styles'

export const Posts = ({posts}) => (<>
        <SC.Posts>
            {posts.map((post) => <Post post={post} />)}
        </SC.Posts>
    </>
)
