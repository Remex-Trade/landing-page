import {
  ArrowDownIcon,
  ArrowUpIcon,
  LucideSortAsc,
  EyeOffIcon,
  ArrowUpDown,
} from "lucide-react";
import { Column } from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="p-0 px-0"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      <span className="text-xs">{title}</span>
      {column.getIsSorted() === "desc" ? (
        <ArrowDownIcon className="ml-2 h-3 w-3" />
      ) : column.getIsSorted() === "asc" ? (
        <ArrowUpIcon className="ml-2 h-3 w-3" />
      ) : (
        <ArrowUpDown className="ml-2 h-3 w-3" />
      )}
    </Button>
  );
}
