import { flexRender } from '@tanstack/react-table';
import type { Header, Table } from '@tanstack/react-table';
import type { Employee } from '../../table/type';

import SortButton from './SortButton';
import HeaderContextMenu from './HeaderContextMenu';

interface HeaderCellProps {
  header: Header<Employee, unknown>;
  table: Table<Employee>;
}

export default function HeaderCell({ header, table }: HeaderCellProps) {
  if (header.isPlaceholder) {
    return <th colSpan={header.colSpan} rowSpan={header.rowSpan} />;
  }

  const isLeafColumn = header.subHeaders.length === 0;

  const content = (
    <div
      className="
        flex
        items-center
        gap-2
      "
    >
      <span>
        {flexRender(header.column.columnDef.header, header.getContext())}
      </span>

      {isLeafColumn && header.column.getCanSort() && (
        <SortButton column={header.column} />
      )}
    </div>
  );

  return (
    <th
      colSpan={header.colSpan}
      rowSpan={header.rowSpan}
      style={{
        position: header.column.getIsPinned() ? 'sticky' : 'relative',

        left: header.column.getStart('left'),

        zIndex: header.column.getIsPinned() ? 20 : 1,

        background: 'white',
      }}
    >
      {isLeafColumn ? (
        <HeaderContextMenu table={table} header={header}>
          {content}
        </HeaderContextMenu>
      ) : (
        content
      )}
    </th>
  );
}
