import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/UI/Typo";
import { Container } from "../../components/UI/Container"
import { Loader } from "../../components/UI/Loader";
import { Paginations } from "../../components/UI/Paginations";
import { Sort } from "../../components/UI/Sorting";
import { Filter } from "../../components/UI/Filter";
import { getPosts, setCurrentPage, setTotalPage } from "../../redux/slices/postsSlice";
import { useComponentEssence } from "../../hooks/useComponentEssence";
import * as SC from "./styles"

export const PostsPage = () => {
    const { list, loading } = useSelector((state) => state.posts.posts)
    const { currentPage, limitPostOnPage } = useSelector((state) => state.posts.paginations);

    const dispatch = useDispatch()

    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("default"); 
    const [filteredAndSortedPosts, setFilteredAndSortedPosts] = useState([]);

    const { filteredPosts, totalPageCount } = useComponentEssence(
        list,
        limitPostOnPage,
        searchTerm,
        sortBy
    );

    useEffect(() => {
        dispatch(setCurrentPage(1));
        if (!list) {
            dispatch(getPosts());
            return;
        }
        if (list) {
            setFilteredAndSortedPosts(filteredPosts);
            dispatch(setTotalPage(totalPageCount));
        }
    }, [list, dispatch, searchTerm, sortBy]);


    if (!list && loading) {
        return <Container><Loader /></Container>
    }

    if (!list) {
        return <Container><Typo>404</Typo></Container>
    }

    const startIndex = (currentPage - 1) * limitPostOnPage;
    const endIndex = startIndex + limitPostOnPage;

    return (
        <Container >
            <Typo>Публикации</Typo>
            <SC.WrapperFilterAndSort>
                <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <Sort sortBy={sortBy} setSortBy={setSortBy} />
            </SC.WrapperFilterAndSort>
            <Posts posts={filteredAndSortedPosts.slice(startIndex, endIndex)} />
            <Paginations />
        </Container>
)}

