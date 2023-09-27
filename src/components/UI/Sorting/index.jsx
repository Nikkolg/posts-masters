import React from "react";
import * as SC from "./styles"

export const Sort = ({ sortBy, setSortBy }) => {
    return (
        <SC.Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <SC.Option value="default">По умолчанию</SC.Option>
            <SC.Option value="asc">От А до Я</SC.Option>
            <SC.Option value="desc">От Я до А</SC.Option>
        </SC.Select>
    );
};

