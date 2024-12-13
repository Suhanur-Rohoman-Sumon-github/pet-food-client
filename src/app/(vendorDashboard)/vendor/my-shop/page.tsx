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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import CustomPagination from "@/components/products/CustomPgination"; // Pagination component
import { format } from "date-fns";

// Dummy shop data
const dummyShops = [
  {
    id: 1,
    profile_picture: "https://placekitten.com/200/200",
    name: "Shop A",
    location: "New York, USA",
    status: "Active",
    created_at: "2024-01-15T00:00:00Z",
  },
  {
    id: 2,
    profile_picture: "https://placekitten.com/200/200",
    name: "Shop B",
    location: "Los Angeles, USA",
    status: "Inactive",
    created_at: "2023-12-10T00:00:00Z",
  },
  {
    id: 3,
    profile_picture: "https://placekitten.com/200/200",
    name: "Shop C",
    location: "Chicago, USA",
    status: "Active",
    created_at: "2024-02-20T00:00:00Z",
  },
  // Add more dummy data as needed
];

const ShopsTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(dummyShops.length / itemsPerPage);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">All Shops</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Index</TableHead>
            <TableHead>Avatar</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyShops
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((shop, index) => (
              <TableRow key={shop.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={shop.profile_picture} />
                    <AvatarFallback>
                      {shop.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{shop.name}</TableCell>
                <TableCell>{shop.location}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      shop.status === "Inactive" ? "destructive" : "secondary"
                    }
                  >
                    {shop.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {shop.created_at
                    ? format(new Date(shop.created_at), "yyyy-MM-dd")
                    : "N/A"}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                        Actions
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Update Shop</DropdownMenuItem>
                      <DropdownMenuItem>Delete Shop</DropdownMenuItem>
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

export default ShopsTable;
