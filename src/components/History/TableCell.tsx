import React from 'react'
import {
  TableCellBaseProps,
  useTheme,
  TableCell as MuiTableCell,
} from '@mui/material'

interface TableCellProps {
  children: JSX.Element | string
  component?: React.ElementType<TableCellBaseProps>
  scope?: string
  head?: boolean
}

const TableCell = ({ children, component, scope, head }: TableCellProps) => {
  const { palette } = useTheme()
  return (
    <MuiTableCell
      sx={{
        color: head ? palette.text.secondary : palette.text.primary,
        fontSize: head ? 12 : 14,
        maxWidth: '400px',
        borderBottom: head ? '2px solid black' : 'none',
      }}
      component={component}
      scope={scope}
    >
      {children}
    </MuiTableCell>
  )
}

export default TableCell
