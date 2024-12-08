import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "../ui/pagination";

interface CustomPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <Pagination>
      <PaginationContent
        style={{
          backgroundColor: "#FFF",
          padding: "10px",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) handlePrevious();
            }}
            style={{
              backgroundColor: currentPage === 1 ? "#cccccc" : "#f85606",
              color: currentPage === 1 ? "#666666" : "white",
              pointerEvents: currentPage === 1 ? "none" : "auto",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              padding: "5px 10px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            Previous
          </PaginationPrevious>
        </PaginationItem>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(index + 1);
              }}
              style={{
                backgroundColor: index + 1 === currentPage ? "#f85606" : "#FFF",
                color: index + 1 === currentPage ? "#FFF" : "#f85606",
                borderRadius: "5px",
                padding: "5px 10px",
                margin: "0 5px",
                textAlign: "center",
              }}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) handleNext();
            }}
            style={{
              backgroundColor:
                currentPage === totalPages ? "#cccccc" : "#f85606",
              color: currentPage === totalPages ? "#666666" : "white",
              pointerEvents: currentPage === totalPages ? "none" : "auto",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              padding: "5px 10px",
              borderRadius: "5px",
              marginLeft: "10px",
            }}
          >
            Next
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
