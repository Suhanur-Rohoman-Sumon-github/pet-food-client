/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useUser } from "@/context/userProvider";
import { useGetMyOrderQuery } from "@/hook/order.hook";
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { OrderData } from "@/types";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Page = () => {
  const { user } = useUser();
  const {
    data: myOrders,
    isLoading,
    isError,
  } = useGetMyOrderQuery(user?.id as string);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong while fetching your orders.</p>;

  return (
    <div className="container mx-auto my-8 p-6">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Order ID</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Total Price</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Order Status</TableHead>
              <TableHead>Shipping Address</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {myOrders?.length > 0 ? (
              myOrders.map((order: OrderData) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    {order.products.map((product: any) => (
                      <div key={product.id}>{product.name}</div>
                    ))}
                  </TableCell>
                  <TableCell>${order.totalAmount}</TableCell>
                  <TableCell>
                    {order.created_At
                      ? format(
                          new Date(order.created_At),
                          "dd MMM yyyy, HH:mm a"
                        )
                      : "N/A"}
                  </TableCell>

                  <TableCell>{order.orderStatus}</TableCell>
                  <TableCell>{order.shippingAddress}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                          Actions
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Add review</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  No orders found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;
