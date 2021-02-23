import { Card, makeStyles } from '@material-ui/core';
import styled from 'styled-components'


export const StyledCard = styled(Card)`
  && {
    margin: 10px;

    & h2 {
      margin-top: 0px;
    }
  }
`
export const StyledCardWrapper = styled.div`
  padding: 1rem 2rem 5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
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
