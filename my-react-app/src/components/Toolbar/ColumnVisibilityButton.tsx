import { Eye } from 'lucide-react';

import type { Table } from '@tanstack/react-table';
import type { Employee } from '../../table/type';

import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';

interface Props {
  table: Table<Employee>;
}

export default function ColumnVisibilityButton({ table }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">
          <Eye />
          Columns
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        {table.getAllLeafColumns().map((column) => (
          <DropdownMenuCheckboxItem
            key={column.id}
            checked={column.getIsVisible()}
            onCheckedChange={(checked) => column.toggleVisibility(!!checked)}
          >
            {column.columnDef.header as string}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
