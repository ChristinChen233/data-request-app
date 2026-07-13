import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ResetFiltersButton() {
  return (
    <Button variant="outline">
      <RotateCcw size={16} />
      Reset
    </Button>
  );
}
