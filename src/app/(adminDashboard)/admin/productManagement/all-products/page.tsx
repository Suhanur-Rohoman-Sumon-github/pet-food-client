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

const page = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery({
    page: currentPage,
    limit: itemsPerPage,
  });
  console.log(products);
  const totalPages = Math.ceil((products?.meta.total || 0) / itemsPerPage);
  return (
    <div>
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
          {products?.data.map((product) => (
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

export default page;
