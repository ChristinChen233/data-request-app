import type { Header, Table } from '@tanstack/react-table';

import type { Employee } from '../../table/type';

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from '@/components/ui/context-menu';

import { Pin, PinOff } from 'lucide-react';

interface Props {
  table: Table<Employee>;
  header: Header<Employee, unknown>;
  children: React.ReactNode;
}

export default function HeaderContextMenu({ table, header, children }: Props) {
  const column = header.column;

  const isPinned = column.getIsPinned() === 'left';

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-56">
        {!isPinned && (
          <ContextMenuItem onClick={() => column.pin('left')}>
            <Pin className="mr-2 h-4 w-4" />
            Pin column
          </ContextMenuItem>
        )}

        {isPinned && (
          <ContextMenuItem onClick={() => column.pin(false)}>
            <PinOff className="mr-2 h-4 w-4" />
            Unpin column
          </ContextMenuItem>
        )}
      </ContextMenuContent>
    </ContextMenu>
  );
}
