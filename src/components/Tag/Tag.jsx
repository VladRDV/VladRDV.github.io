import React, { Component } from 'react';
import { css } from 'aphrodite';
import { tag_styles as tag } from './styles/styles';

const Tag = (props) => {
    return(
        <span className={`${css(tag.main)}`} style={{marginRight:`${props.isLast? 0 : "2px"}`}}>
            {props.txt}
        </span>
    );
}

export default Tag;