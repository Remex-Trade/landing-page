"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../data-table/DataTableColumnHeader";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const limitOrdersColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "time",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Time" />
      ),
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "market",
    header: "Market / Action",
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
  },
  {
    accessorKey: "total",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total" />
    ),
  },
  {
    accessorKey: "filled",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Filled" />
    ),
  },
  {
    accessorKey: "unfilled",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Unfilled" />
    ),
  },
];

