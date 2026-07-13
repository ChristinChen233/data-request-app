import { Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EditButton() {
  return (
    <Button variant="outline">
      <Pencil size={16} />
      Edit
    </Button>
  );
}
