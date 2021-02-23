import { AppBar, Fab, Toolbar } from '@material-ui/core';
import styled from 'styled-components'


export const StyledToolbar = styled(Toolbar)`
  && {
    display: flex;
    justify-content: space-around
  }
`

export const StyledAppBar = styled(AppBar)`
  && {
    top: auto;
    bottom: 0;
  }
`

export const StyledFab = styled(Fab)`
  && {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    bottom: 2rem;
    margin: 0 auto;
  }
`
