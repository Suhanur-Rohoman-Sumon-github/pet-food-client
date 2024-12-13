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
import { useGetAllUsersQuery } from "@/hook/user.hook";
import CustomPagination from "@/components/products/CustomPgination";
import { IUser } from "@/types";
import { format } from "date-fns";

const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const { data } = useGetAllUsersQuery({
    page: currentPage,
    limit: itemsPerPage,
  });
  console.log(data);
  const totalPages = Math.ceil((data?.meta.total || 0) / itemsPerPage);
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Index</TableHead>
            <TableHead>Avatar</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((user: IUser, index: number) => (
            <TableRow key={user.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>
                    {user.email.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    user.status === "Blocked" ? "destructive" : "secondary"
                  }
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                {user.created_at
                  ? format(new Date(user.created_at), "yyyy-MM-dd")
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

export default UsersTable;
