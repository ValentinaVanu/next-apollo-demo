import { useQuery, gql } from '@apollo/client'
import { Button } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPeopleListAction, setRowLimitAction } from '../store/sapient.action'

const Component: React.FC = () => {
  const [res, setRes] = useState({})
  const [people, setPeople] = useState(false)
  const limit = useSelector(({ sapient }) => sapient.limit)
  const dispatch = useDispatch()

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

  console.log(people)

  return (
    <span>
      {loading && <div>Loading ...</div>}
      <Button
        variant="contained"
        color="primary"
        onClick={loadMore}
        >Load more ...</Button>
    </span>
  )
}



export default Component
