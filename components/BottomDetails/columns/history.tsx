"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../data-table/DataTableColumnHeader";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const historyColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "time",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Time" />
      ),
  },

  {
    accessorKey: "market",
    header: "Market / Action",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Avg. Price" />
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
    accessorKey: "tradeFee",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Trade Fee" />
    ),
  },
  {
    accessorKey: "sequencerFee",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sequencer Fee" />
    ),
  },
];

