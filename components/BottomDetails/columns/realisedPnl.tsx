"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../data-table/DataTableColumnHeader";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const realisedPnlColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "time",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time" />
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "market",
    header: "Market / Action",
  },
  {
    accessorKey: "entryPrice",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Entry Price" />
    ),
  },
  {
    accessorKey: "exitPrice",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Exit Price" />
    ),
  },
  {
    accessorKey: "size",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Size" />
    ),
  },
  {
    accessorKey: "pnl",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PnL" />
    ),
  },
];
