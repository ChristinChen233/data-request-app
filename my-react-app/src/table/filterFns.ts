import type { FilterFn } from '@tanstack/react-table';

export const visibleColumnsGlobalFilter: FilterFn<any> = (
  row,
  columnId,
  filterValue
) => {
  const search = String(filterValue).toLowerCase().trim();

  if (!search) {
    return true;
  }

  // get all visible columns
  const visibleColumns = row.getVisibleCells();

  return visibleColumns.some((cell) => {
    const value = cell.getValue();

    return String(value).toLowerCase().includes(search);
  });
};
