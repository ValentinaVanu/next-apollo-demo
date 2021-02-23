import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { Button } from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'
import { setPeopleListAction, setRowLimitAction } from '../../store/sapient.action'
import { StyledAppBar, StyledFab, StyledToolbar } from './Menu.style'

const Menu = () => {
  const [people, setPeople] = useState(false)
  const limit = useSelector(({ sapient }) => sapient.limit)
  const dispatch: Dispatch = useDispatch()

  const query = gql`
  query name{
    people {
      firstName
      secondName
      address {
        street
        number
        postCode
      }
    }
  }
  `

  const { loading, fetchMore } = useQuery(query, {
    variables: {
      people
    },
    onCompleted: res => dispatch(setPeopleListAction(res)),
    onError: err => console.log(err)
  })

  const loadMore = () => {
    !people && setPeople(true)
    dispatch(setRowLimitAction(limit + 20))
  }

  return (
    <>
      {loading && <div>Loading ...</div>}
      <StyledAppBar position="fixed" color="primary">
        <StyledToolbar>
          <Button href="/table" color="inherit">
            View Table
          </Button>
          <StyledFab onClick={loadMore} color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Button href="/" color="inherit">
            View Cards
          </Button>
        </StyledToolbar>
      </StyledAppBar>
    </>
  )
}



export default Menu
