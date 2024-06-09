"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../data-table/DataTableColumnHeader";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const balanceColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "assets",
    header: "Assets",
  },
  {
    accessorKey: "balance",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Baalance" />
    ),
  },
  {
    accessorKey: "deposit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Deposit APR" />
    ),
  },
  {
    accessorKey: "borrow",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Borrow APR" />
    ),
  },
];

