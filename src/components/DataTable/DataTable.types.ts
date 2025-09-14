export interface Column<T> {
  key: string; // unique key for column
  title: string; // header text
  dataIndex: keyof T; // which property of T to render
  sortable?: boolean; // allow sorting
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean; // enable row selection
  onRowSelect?: (selectedRows: T[]) => void;
  className?: string;
  emptyMessage?: string;
}

