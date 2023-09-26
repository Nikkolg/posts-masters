import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../../redux/slices/postsSlice";
import * as SC from "./styles"

export const Paginations = () => {
    const { currentPage, totalPages } = useSelector((state) => state.posts.paginations);
    const dispatch = useDispatch();
  
    const pages = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  
    const handlePageClick = (page) => {
      dispatch(setCurrentPage(page));
    };

    console.log(currentPage);
  
    return (
      <SC.WrapperPaginations>
        {(totalPages > 1) && (
          <>
            {pages.map((page, index) => (
                <SC.PaginationsItem key={index}
                  onClick={() => handlePageClick(page)} 
                  className={currentPage === page ? 'CurrentPage' : ''}
                >
                  {page}
                </SC.PaginationsItem>
            ))}
          </>
        )}
      </SC.WrapperPaginations>
    );
  };