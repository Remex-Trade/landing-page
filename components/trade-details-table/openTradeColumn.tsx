"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../data-table/DataTableColumnHeader";
import { FormattedOpenTrades } from "@/contracts-integration/hooks/useGetUserTrades";
import { Button } from "@/components/ui/button";
import { LoaderCircle, X } from "lucide-react";
import { useHandleCloseTrade } from "@/contracts-integration/hooks/useHandleCloseTrade";
import UpdateSlPl from "./updateSlPl";
import { usePriceStore } from "@/store/priceStore";
import { formatPrice } from "./helper";

export const openTradeColumn: ColumnDef<FormattedOpenTrades>[] = [
  {
    accessorKey: "type",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Type" />,
  },
  {
    accessorKey: "pair",
    header: "Pair",
  },
  {
    accessorKey: "size",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Size" />,
  },
  {
    accessorKey: "leverage",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Leverage" />,
  },
  {
    accessorKey: "collateral",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Collateral" />,
  },
  {
    accessorKey: "openPrice",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Open Price" />,
  },
  {
    accessorKey: "price",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Price" />,
    cell: ({ row }) => {
      const price = usePriceStore((state) => state.latestPrice);
      const pair = row.original.pair;
      if (pair && price && price[pair]) {
        return formatPrice(price[pair]);
      }
      return "-";
    },
  },
  {
    accessorKey: "sl",
    header: "SL/TP",
    cell: ({ row }) => {
      return (
        <UpdateSlPl trade={row.original}>
          <div className="flex flex-col gap-1 cursor-pointer">
            <span>SL: {row.original.sl}</span>
            <span>TP: {row.original.tp}</span>
          </div>
        </UpdateSlPl>
      );
    },
  },
  {
    accessorKey: "close",
    header: "Close",
    cell: ({ row }) => {
      const closeMutation = useHandleCloseTrade("Market");

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
