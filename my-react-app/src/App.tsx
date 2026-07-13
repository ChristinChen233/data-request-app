import { useState } from 'react';
import { type ColumnPinningState } from '@tanstack/react-table';

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  type SortingState,
  type VisibilityState,
} from '@tanstack/react-table';

import { sampleData } from './data/sampleData';
import { columns } from './table/columns';

import Toolbar from './components/Toolbar/Toolbar';
import HeaderCell from './components/Header/HeaderCell';

import type { Employee } from './table/type';
import { visibleColumnsGlobalFilter } from './table/filterFns';

export default function App() {
  // sorting state
  const [sorting, setSorting] = useState<SortingState>([]);

  // global search state
  const [globalFilter, setGlobalFilter] = useState('');

  // column visibility state
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    date: true,

    name: true,

    department: false,

    status: true,
  });

  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    left: [],
    right: [],
  });

  const table = useReactTable<Employee>({
    data: sampleData,

    columns,
    globalFilterFn: visibleColumnsGlobalFilter,

    state: {
      sorting,
      globalFilter,
      columnVisibility,
      columnPinning,
    },

    onSortingChange: setSorting,

    onGlobalFilterChange: setGlobalFilter,

    onColumnVisibilityChange: setColumnVisibility,
    onColumnPinningChange: setColumnPinning,

    getCoreRowModel: getCoreRowModel(),

    getSortedRowModel: getSortedRowModel(),

    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="p-6">
      <Toolbar
        table={table}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      <table className="w-full border-collapse relative">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <HeaderCell key={header.id} header={header} table={table} />
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    position: cell.column.getIsPinned() ? 'sticky' : 'relative',

                    left: cell.column.getStart('left'),

                    background: 'white',

                    zIndex: cell.column.getIsPinned() ? 10 : 0,
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
