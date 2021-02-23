import React from 'react'
import { useSelector } from 'react-redux'

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './Card.style'

import * as SC from './Card.style'


const CardCollection: React.FC = () => {
  const [people, limit] = useSelector(({ sapient }) => [
    sapient.people, 
    sapient.limit
  ])
  const classes = useStyles()
  const peopleList = people.slice(0, limit)
  return (
    <SC.StyledCardWrapper>
      {peopleList.map(({ firstName, secondName, address }) => {
        return (
          <SC.StyledCard className={classes.root}>
            <CardContent>
              <h2>{firstName}</h2>
              <h4>{secondName}</h4>
              <Typography className={classes.pos} color="textSecondary">
                <div>Street: {address.street}</div>
              </Typography>
              <Typography variant="body2" component="p">
                <div>Number: {address.number}</div>
                <div>Post code: {address.postCode}</div>
              </Typography>
            </CardContent>
          </SC.StyledCard>
        )
      })}
    </SC.StyledCardWrapper>
  )
}

export { CardCollection }
