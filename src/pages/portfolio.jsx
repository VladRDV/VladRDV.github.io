import React from 'react';
import { css } from 'aphrodite';
import { Link } from 'gatsby';
import Root from '../layout/Root/Root';
import { portfolio_style as pst } from '../styles/page_styles/portfolio_style'
export default ({ location }) => {
const oth_str = `Other contributors: `;
	return (
		<Root location={location}>
			<main className={`${css(pst.main)} normal_font`}> 
				<div className={`${css(pst.container)}`}>
					<div className={`${css(pst.currently_learning, pst.border)}`}>
						<h3 className={`${css(pst.part_title)}`}>Currently learning</h3>
						<p>
							Upgrading my Django/Python skills. Learning Django Channels
						</p>
					</div>
					<div className={`${css(pst.skills, pst.border)}`}>
						<h3 className={`${css(pst.part_title)}`}>My Skills</h3>
						<ul className={`${css(pst.skills_list)}`}>
						<li className={`${css(pst.skill)}`}>React</li>
							<li className={`${css(pst.skill)}`}>JavaScript</li>
							<li className={`${css(pst.skill)}`}>Python</li>
							<li className={`${css(pst.skill)}`}>Python</li>
						</ul>
					</div>
					<div className={`${css(pst.projectsContainer, pst.border)}`}>
						<h3 className={`${css(pst.projectsTitle, pst.part_title)}`}>Projects</h3>
						<ul className={`${css(pst.projects)}`}>
							<li className={`${css(pst.project)}`}>
								<h6 className="ptoject_name">Poslonaut website</h6>
								<p className="project_desc">
									Job board website
								</p>
								<p className="other_contributors">
									{oth_str}
									<a href="#" target="_blank">Milan Šarić</a>,
									<a href="#" target="_blank">Pavle Popović</a>
								</p>
								<div className="bottom">
									<a href="#" target="_blank">{`Visit >>`}</a>
								</div>
							</li>
							{/* <li className={`${css(pst.project)}`}>Poslonaut mobile app</li>
							<li className={`${css(pst.project)}`}>Poslonaut kiosk</li>
							<li className={`${css(pst.project)}`}>Poslonaut old website</li> */}
						</ul>
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