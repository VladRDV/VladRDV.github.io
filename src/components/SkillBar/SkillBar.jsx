import React from 'react';
import { css } from 'aphrodite';
import { skillbar_styles as sbs } from './styles/styles'
const SkillBar = ({txt, lvl, color}) => {
    return (
        <li className={`${css(sbs.skill)}`}>
        {txt}
         <span className={`${css(sbs.triangle1)}`}/>
       {/* <span className={`${css(sbs.triangle2)}`}/> */}
        </li>
    );
}

export default SkillBar;