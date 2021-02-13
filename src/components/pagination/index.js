import { React } from 'react';

function Pagination({ previousPageHeandler, currentPage, nextPageHeandler }) {
    return (
        <nav>
            <div className="pagination-aling">
                <a onClick={() => previousPageHeandler()} className="page-link">
                    prev
                </a>
                <a className="page-link">
                    {currentPage}
                </a>
                <a onClick={() => nextPageHeandler()} className="page-link">
                    next
                </a>
            </div>
        </nav>
    );
}

export default Pagination;