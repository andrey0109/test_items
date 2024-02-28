// Pagination.js
import React from 'react';
import './App.css';


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      {pageNumbers.map((number) => (
        <span key={number} onClick={() => onPageChange(number)}>
          {number}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
