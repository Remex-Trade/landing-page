"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../data-table/DataTableColumnHeader";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const triggerOrdersColumns: ColumnDef<Payment>[] = [
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
      <DataTableColumnHeader column={column} title="Trigger Price" />
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
  },
  {
    accessorKey: "limit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Limit Price" />
    ),
  },

];

