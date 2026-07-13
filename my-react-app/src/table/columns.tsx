import React from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { Employee } from '../table/type';
const columnHelper = createColumnHelper<Employee>();

const date = columnHelper.accessor('date', {
  header: 'Date',
  cell: (info) => info.getValue(),
  enableSorting: true,
  meta: {
    align: 'left',
    width: '10%',
  },
});

const name = columnHelper.accessor('name', {
  header: 'Name',
  cell: (info) => info.getValue(),
  enableSorting: true,
});
export const columns = [
  columnHelper.group({
    header: 'Date and Name',
    columns: [date, name],
  }),

  columnHelper.accessor('department', {
    header: 'Department',
    cell: (info) => info.getValue(),
    enableSorting: true,
  }),

  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => info.getValue(),
    enableSorting: true,
  }),
];
