import { Card, makeStyles } from '@material-ui/core';
import styled from 'styled-components'


export const StyledCard = styled(Card)`
  && {
    background-color: rgb(63,81,2181, 0.5)
  }
`
// Has to be responsive!
export const StyledCardWrapper = styled.div`
 display: grid;
 grid-gap: 10px;

 grid-template-columns: repeat(4, 1fr);
 grid-template-rows: repeat(4, 1fr);
`
export const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
