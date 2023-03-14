import React, { useState } from "react";
import { ProductList } from "../productlist/ProductList";
import "./paginationknowleg.scss";

function PaginationTankModel(props) {
  const [data] = useState(ProductList);

  const [currentPage, setCurrentPage] = useState(1); // set current page as 1 by default
  const totalPages = Math.ceil(data.length / 10);
  const pagesToShow = 10; // number of pages to show in pagination
  // calculate the start and end pages to show based on the current page and the total number of pages
  let startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
  let endPage = Math.min(startPage + pagesToShow - 1, totalPages);
  const getPages = () => {
    const pages = [];

    // if the total number of pages is less than the number of pages to show, adjust the start and end pages
    if (totalPages <= pagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      // if the start page is less than the first page, adjust the end page
      if (startPage <= 2) {
        endPage = pagesToShow;
      }
      // if the end page is greater than the last page, adjust the start page
      else if (endPage >= totalPages - 1) {
        startPage = totalPages - pagesToShow + 1;
      }
    }

    // add the page numbers to the pages array
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePageClick = (page) => {
    if (page === 0) {
      page = 1;
      setCurrentPage(page);
      props.onClickChangePage(page);
    }
    if (page > endPage) {
      page = endPage;
      setCurrentPage(page);
      props.onClickChangePage(page);
    } else {
      setCurrentPage(page);
      props.onClickChangePage(page);
    }
  };

  const renderPagination = () => {
    const pages = getPages();
    return (
      <div className="pagination">
        <a
          className={`pagination-newer ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          PREV
        </a>
        <span className="pagination-inner">
          {pages.map((page) => (
            <a
              key={page}
              className={`pagination-page ${
                page === currentPage ? "pagination-active" : ""
              }`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </a>
          ))}
        </span>
        <a
          className={`pagination-older ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          NEXT
        </a>
      </div>
    );
  };

  return (
    <div>
      <nav className="pagination-container">{renderPagination()}</nav>
    </div>
  );
}

export default PaginationTankModel;
