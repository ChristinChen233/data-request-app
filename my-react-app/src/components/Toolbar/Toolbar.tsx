import GlobalSearch from './GlobalSearch';
import ColumnVisibilityButton from './ColumnVisibilityButton';
import ResetFiltersButton from './ResetFiltersButton';
import UnpinAllButton from './UnpinAllButton';
import type { Table } from '@tanstack/react-table';
import { Employee } from '../../table/type';
import EditButton from './Editbutton';

interface ToolbarProps {
  globalFilter: string;

  setGlobalFilter: (value: string) => void;
  table: Table<Employee>;
}

export default function Toolbar({
  globalFilter,
  setGlobalFilter,
  table,
}: ToolbarProps) {
  return (
    <div className="mb-4 flex items-center justify-between gap-2">
      <GlobalSearch value={globalFilter} onChange={setGlobalFilter} />

      <div className="flex items-center gap-2">
        <ColumnVisibilityButton table={table} />

        <EditButton />

        <ResetFiltersButton />

        <UnpinAllButton table={table} />
      </div>
      {/* <div className="bg-red-500 p-10 text-white">Test Tailwind</div> */}
    </div>
  );
}
