import { Employee } from '@/table/type';
import { Table } from '@tanstack/react-table';
import { Button } from '../ui/button';
interface Props {
  table: Table<Employee>;
}

export default function UnpinAllButton({ table }: Props) {
  return (
    <Button variant="outline" onClick={() => table.resetColumnPinning()}>
      Unpin All
    </Button>
  );
}
