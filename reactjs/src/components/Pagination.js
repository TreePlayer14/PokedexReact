import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props;
    return (
        <div className="pagination-container">
            <button onClick={onLeftClick}>
                <div>
                    <AiFillCaretLeft/>
                </div>
            </button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>
                <div>
                    <AiFillCaretRight/>
                </div>
            </button>
        </div>
    );
};

export default Pagination;