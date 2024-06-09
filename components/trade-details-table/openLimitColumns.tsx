"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../data-table/DataTableColumnHeader";
import { FormattedOpenLimitOrders } from "@/contracts-integration/hooks/useGetUserTrades";
import { Button } from "@/components/ui/button";
import { LoaderCircle, X } from "lucide-react";
import { useHandleCloseTrade } from "@/contracts-integration/hooks/useHandleCloseTrade";

export const openLimitColumns: ColumnDef<FormattedOpenLimitOrders>[] = [
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
  {
    accessorKey: "pair",
    header: "Pair",
  },
  {
    accessorKey: "size",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Size" />
    ),
  },
  {
    accessorKey: "leverage",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Leverage" />
    ),
  },
  {
    accessorKey: "collateral",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Collateral" />
    ),
  },
  {
    accessorKey: "minPrice",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Min Price" />
    ),
  },
  {
    accessorKey: "maxPrice",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Max Price" />
    ),
  },
  {
    accessorKey: "sl",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SL/TP" />
    ),
  },
  {
    accessorKey: "close",
    header: "Close",
    cell: ({ row }) => {
      const closeMutation = useHandleCloseTrade("Limit");

      return closeMutation.isPending ? (
        <LoaderCircle className="h-4 w-4 animate-spin" />
      ) : (
        <Button
          onClick={() => closeMutation.mutate(row.original)}
          variant="outline"
          size="icon"
          className="h-8 w-8 bg-transparent border-0"
        >
          <X className="h-4 w-4" />
        </Button>
      );
    },
  },
];
