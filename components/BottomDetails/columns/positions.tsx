"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../data-table/DataTableColumnHeader";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const positionsColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "market",
    header: "Market / Side",
  },
  {
    accessorKey: "size",
    header: "Position Size",
  },
  {
    accessorKey: "margin",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Margin" />
    ),
  },
  {
    accessorKey: "entryPrice",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Entry Price" />
    ),
  },
  {
    accessorKey: "oraclePrice",
    header: "Oracle Price",
  },
  {
    accessorKey: "liqPrice",
    header: "Est. Liq. Price",
  },
  {
    accessorKey: "estPnL",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Est. PnL" />
    ),
  },
  {
    accessorKey: "tp/sl",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="TP/SL" />
    ),
  },
  {
    accessorKey: "funding",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Funding" />
    ),
  },
];

