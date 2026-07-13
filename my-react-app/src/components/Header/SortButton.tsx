import type { Column } from '@tanstack/react-table';
import type { Employee } from '../../table/type';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import '../../index.css';

interface SortButtonProps {
  column: Column<Employee, unknown>;
}

export default function SortButton({ column }: SortButtonProps) {
  const sorted = column.getIsSorted();

  return (
    <div
      title="Sort"
      onClick={() => column.toggleSorting()}
      className="
    flex h-4 w-4 items-center justify-center
    cursor-pointer
    text-gray-500
    transition-colors
    duration-150
    hover:text-blue-600
    active:scale-95
  "
    >
      {sorted === 'asc' && <ArrowUp className="h-3 w-3" strokeWidth={2.5} />}

      {sorted === 'desc' && <ArrowDown className="h-3 w-3" strokeWidth={2.5} />}

      {!sorted && <ArrowUpDown className="h-3 w-3" strokeWidth={2} />}
    </div>
  );
}
