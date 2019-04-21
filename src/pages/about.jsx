import React from 'react';
import { css } from 'aphrodite';
import Root from '../layout/Root/Root';
import { about_style as abs } from '../styles/page_styles/about_styles';
import me from '../../static/img/me.jpg';
export default ({ location }) => {
	return (
		<Root location={location}>
			<main className={`${css(abs.main)} normal_font`}>
				<div className={`${css(abs.container)}`}>
					<img className={`${css(abs.me)}`} src={me} alt="Vladimir Radovanovich"/>
					<p className={`${css(abs.txt)}`}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aut voluptate inventore praesentium ut, sunt hic cum vitae distinctio eligendi nesciunt, nostrum mollitia maxime minima. Culpa quidem quibusdam explicabo nam.
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aut voluptate inventore praesentium ut, sunt hic cum vitae distinctio eligendi nesciunt, nostrum mollitia maxime minima. Culpa quidem quibusdam explicabo nam.
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aut voluptate inventore praesentium ut, sunt hic cum vitae distinctio eligendi nesciunt, nostrum mollitia maxime minima. Culpa quidem quibusdam explicabo nam.
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aut voluptate inventore praesentium ut, sunt hic cum vitae distinctio eligendi nesciunt, nostrum mollitia maxime minima. Culpa quidem quibusdam explicabo nam.
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aut voluptate inventore praesentium ut, sunt hic cum vitae distinctio eligendi nesciunt, nostrum mollitia maxime minima. Culpa quidem quibusdam explicabo nam.
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aut voluptate inventore praesentium ut, sunt hic cum vitae distinctio eligendi nesciunt, nostrum mollitia maxime minima. Culpa quidem quibusdam explicabo nam.
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aut voluptate inventore praesentium ut, sunt hic cum vitae distinctio eligendi nesciunt, nostrum mollitia maxime minima. Culpa quidem quibusdam explicabo nam.
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aut voluptate inventore praesentium ut, sunt hic cum vitae distinctio eligendi nesciunt, nostrum mollitia maxime minima. Culpa quidem quibusdam explicabo nam.
					</p>
                </div>
            </main>         
		</Root>
	)
}

