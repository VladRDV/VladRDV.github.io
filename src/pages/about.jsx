import React from 'react';
import { css } from 'aphrodite';
import Root from '../layout/Root/Root';
import { about_style as abs } from '../styles/page_styles/about_styles';
export default ({ location }) => {
	return (
		<Root location={location}>
			<main className={`${css(abs.main)} normal_font`}>
                <p className={`${css(abs.container)}`}>
                </p>
            </main>         
		</Root>
	)
}

