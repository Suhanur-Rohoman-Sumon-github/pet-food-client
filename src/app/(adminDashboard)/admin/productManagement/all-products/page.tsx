"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CustomPagination from "@/components/products/CustomPgination";
import { useGetAllProductsQuery } from "@/hook/products.hook";
import { TProduct } from "@/components/products/ProductsCard";

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const itemsPerPage = 8;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const { data, isLoading, isError } = useGetAllProductsQuery({
    page: currentPage,
    limit: itemsPerPage,
    searchTerm,
    category,
    minPrice,
    maxPrice,
  });

  console.log(data);

  const totalPages = Math.ceil((data?.meta.total || 0) / itemsPerPage);

  return (
    <div>
      {/* Search & Filter Inputs */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by product name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded"
        />
        {/* Add other filters (e.g., category, price) here if needed */}
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((product: TProduct) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.stock_quantity}</TableCell>
              <TableCell>
                {new Date(product.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                      Actions
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Block</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-6">
        <CustomPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default AllProducts;
