import React from 'react'
import { css } from 'aphrodite';
import { root_layout_styles as rls } from './styles/styles';
import NavBar from '../../components/NavBar/NavBar';
import Terminal from '../../components/Terminal/Terminal'
import Bg from '../../components/Bg/Bg';
const _rls = [rls.root_std];
const Root = ({children, location}) => {
  return (
    <div className={`${css(..._rls)}`} style={{direction:'ltr'}}>
      <NavBar location={location}/>
      {location.pathname === '/' && <Bg/>}
      {children}
      {location.pathname === '/' && <Terminal location={location}/>}
    </div>
  )
}

export default Root
