import React, { useState } from 'react';
import styled from 'styled-components';

function Pagination({ total, page, setPage, loadPosts }) {
    const numPages = total;
    const [currentPageRange, setCurrentPageRange] = useState([1, 10]);

    const handleNextPage = () => {
        if (page + 1 > currentPageRange[1]) {
            setCurrentPageRange([
                currentPageRange[1] + 1,
                currentPageRange[1] + 10,
            ]);
        }
        setPage(page + 1);
        loadPosts(page + 1);
    };

    const handlePrevPage = () => {
        if (page - 1 < currentPageRange[0]) {
            setCurrentPageRange([
                currentPageRange[0] - 10,
                currentPageRange[0] - 1,
            ]);
        }
        setPage(page - 1);
        loadPosts(page - 1);
    };

    return (
        <Nav>
            <Button onClick={handlePrevPage} disabled={page === 1}>
                {'<'}
            </Button>
            {Array(numPages)
                .fill()
                .map((_, i) => {
                    const pageNumber = i + 1;
                    if (
                        pageNumber >= currentPageRange[0] &&
                        pageNumber <= currentPageRange[1]
                    ) {
                        return (
                            <Button
                                key={pageNumber}
                                onClick={() => setPage(pageNumber)}
                                aria-current={
                                    page === pageNumber ? 'page' : undefined
                                }
                            >
                                {pageNumber}
                            </Button>
                        );
                    }
                    return null;
                })}
            <Button onClick={handleNextPage} disabled={page === numPages}>
                {'>'}
            </Button>
        </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 130px 0;
`;

const Button = styled.button`
    border: none;
    border-radius: 8px;
    padding: 8px;
    margin: 0;
    color: black;
    font-size: 1rem;

    &:hover {
        cursor: pointer;
        transform: translateY(-2px);
    }

    &[disabled] {
        color: white;
        cursor: revert;
        transform: revert;
    }

    &[aria-current] {
        font-weight: 700;
        font-size: 1.5rem;
        cursor: revert;
        transform: revert;
    }
`;

export default Pagination;
