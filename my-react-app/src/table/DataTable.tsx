import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  getFilteredRowModel,
  type SortingState,
  type VisibilityState,
} from '@tanstack/react-table';
import { useState } from 'react';

import { columns } from './columns';
import type { Employee } from './type';
import HeaderCell from '../components/Header/HeaderCell';
import type { Dispatch, SetStateAction } from 'react';

interface DataTableProps {
  data: Employee[];

  sorting: SortingState;

  setSorting: Dispatch<SetStateAction<SortingState>>;
  globalFilter: string;

  setGlobalFilter: Dispatch<SetStateAction<string>>;
  columnVisibility: VisibilityState;

  setColumnVisibility: Dispatch<SetStateAction<VisibilityState>>;
}

export default function DataTable({
  data,
  sorting,
  setSorting,
  globalFilter,
  setGlobalFilter,
  columnVisibility,
  setColumnVisibility,
}: DataTableProps) {
  const table = useReactTable({
    data,

    columns,

    state: {
      sorting,

      globalFilter,
      columnVisibility,
    },

    onSortingChange: setSorting,

    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,

    getCoreRowModel: getCoreRowModel(),

    getSortedRowModel: getSortedRowModel(),

    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <HeaderCell key={header.id} header={header} />
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
