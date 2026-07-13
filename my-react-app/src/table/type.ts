export interface Employee {
  id: number

  date: string

  name: string

  department: string

  status: string
}

export type FilterMode =
  | "date"
  | "search"
  | "multiSelect"

export interface DateFilter {
  mode: "date"

  operator: ">" | "<" | "=" | ">=" | "<="

  value: string
}

export interface SearchFilter {
  mode: "search"

  value: string
}

export interface MultiSelectFilter {

  mode: "multiSelect"

  values: string[]
}

export type ColumnFilterValue =
  | DateFilter
  | SearchFilter
  | MultiSelectFilter

export interface ColumnMeta {

  editable?: boolean

  editor?: "text" | "select"

  options?: string[]

  filterModes?: FilterMode[]
}