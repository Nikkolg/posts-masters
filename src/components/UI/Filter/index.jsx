import React from "react";
import * as SC from "./styles"

export const Filter = ({ searchTerm, setSearchTerm }) => {
    return (
        <SC.SearchInpit
            type="text"
            placeholder="Поиск"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
};

