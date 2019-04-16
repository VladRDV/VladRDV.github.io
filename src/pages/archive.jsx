import React from 'react';
import { css } from 'aphrodite';
import { Link } from 'gatsby';
import Root from '../layout/Root/Root';
import { archive_style as ast } from '../styles/page_styles/archive_style'
export default ({ location }) => {
  return (
    <Root location={location}>
        <main className={`${css(ast.main)} normal_font`}> 
			<div className={`${css(ast.container)}`}>
				<div className={`${css(ast.currently_learning, ast.border)}`}>
					<h3 className={`${css(ast.part_title)}`}>Currently learning</h3>
					<p>
						Upgrading my Django/Python skills. Learning Django Channels
					</p>
				</div>
				<div className={`${css(ast.skills, ast.border)}`}>
					<h3 className={`${css(ast.part_title)}`}>My Skills</h3>
					<ul className={`${css(ast.skills_list)}`}>
						<li className={`${css(ast.skill)}`}>React</li>
						<li className={`${css(ast.skill)}`}>JavaScript</li>
						<li className={`${css(ast.skill)}`}>Python</li>
						<li className={`${css(ast.skill)}`}>Python</li>
					</ul>
				</div>
				<div className={`${css(ast.projects, ast.border)}`}>
					<div className={`${css(ast.project, ast.border)}`}>001</div>
					<div className={`${css(ast.project, ast.border)}`}>002</div>
					<div className={`${css(ast.project, ast.border)}`}>003</div>
					<div className={`${css(ast.project, ast.border)}`}>004</div>
					<div className={`${css(ast.project, ast.border)}`}>004</div>
					<div className={`${css(ast.project, ast.border)}`}>004</div>
					<div className={`${css(ast.project, ast.border)}`}>004</div>
					<div className={`${css(ast.project, ast.border)}`}>004</div>
				</div>
            </div>
        </main>
    </Root>
  )
}

// {
//   allJson {
//     edges {
//       node {
//         id
//         currently_learning
//       }
//     }
//   }
// }
  {/* this is going to be a grid of squares with nemes of category on them
            (each square with bg img and dark transparent filter over them, on hover filter fades away) */}