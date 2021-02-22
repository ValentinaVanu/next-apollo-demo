export interface IColumn {
  id: string
  label: string
  minWidth: number
  align: "left" | "right" | "inherit" | "center" | "justify"
}

export const columns: IColumn[] = [
  {
    id: 'firstName',
    label: 'First Name',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'secondName',
    label: 'Last Name',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'number',
    label: 'Number',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'street',
    label: 'Street',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'postCode',
    label: 'Post Code',
    minWidth: 170,
    align: 'right',
  },
]
