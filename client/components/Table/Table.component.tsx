import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { columns, IColumn } from './table.config';

import * as TS from './Table.style'




const SapientTable = () => {
  const [people, limit] = useSelector(({ sapient }) => [
    sapient.people,
    sapient.limit
  ])
  const dispatch = useDispatch()

  const useStyles = makeStyles({
    root: {
      width: '100%'
    },
    container: {
      maxHeight: 440,
    },
  })


  const classes = useStyles()
  const rows = people.slice(0, limit)


  return (
    <div>
      <Paper elevation={6}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column: IColumn) => (
                  <TS.StyledTableHeadCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TS.StyledTableHeadCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row) => {
                const fullRow = {...row, ...row.address}
                const {address, __typename, ...rest} = fullRow 
                console.log(rest)
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={rest.firstName}>
                    {columns.map((column) => {
                      const value = rest[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
}

export { SapientTable }
