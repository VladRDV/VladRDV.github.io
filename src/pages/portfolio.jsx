import React from 'react';
import { css } from 'aphrodite';
import { graphql } from 'gatsby';
import Root from '../layout/Root/Root';
import { portfolio_style as pst } from '../styles/page_styles/portfolio_style';
import Project from '../components/Project/Project'
import SkillBar from '../components/SkillBar/SkillBar';
export default ({ location, data }) => {
	console.log(data);
	const content = data.allJson.edges[0].node
	return (
		<Root location={location}>
			<main className={`${css(pst.main)} normal_font`}> 
				<div className={`${css(pst.container)}`}>
					<div className={`${css(pst.currently_learning, pst.border)}`}>
						<h3 className={`${css(pst.part_title)}`}>Currently learning</h3>
						<p className={`${css(pst.upperTxtFormat)}`}>
							{content.currently_learning}
						</p>
					</div>
					<div className={`${css(pst.skills, pst.border)}`}>
						<div className={`${css(pst.scrollBarHider)}`}>
							<h3 className={`${css(pst.part_title)}`}>My skill list</h3>
							<ul className={`${css(pst.skills_list, pst.upperTxtFormat)}`}>
								{renderSkills(content.skills.programmer_skills.set)}
							</ul>
						</div>
						<div className={`${css(pst.gradient)}`}/>
					</div>
					<div className={`${css(pst.projectsContainer, pst.border)}`}>
						<h3 className={`${css(pst.projectsTitle, pst.part_title)}`}>Projects I've worked on</h3>
						<ul className={`${css(pst.projects)}`}>
							{renderProjects(content.projects)}
						</ul>
					</div>
				</div>
			</main>
		</Root>
	)
}
const renderSkills = (skills) => {
	return(
		// Array.from(Array(10).keys()).map((el, ind)=>(
		skills.map((el, ind)=>(		
			<SkillBar 
				key={`SkillBar-${ind}`} 
				num={ind} 
				grade={el.grade} 
				color={el.color} 
				skill={el.skill}
			/>
		))
	);
}
const renderProjects = () => {
	return(
		Array.from(Array(9).keys()).map((el, ind)=>(
			<Project 
				title={'Poslonaut website'}
				contr={[
					{name:'Milan Šarić', href:'#'}, 
					{name:'Pavle Popović', href:'#'},
				]}
				desc={'Job searching website'}
				href={'#'}
				key={`Project-${ind}`}
			/>		
		))
	);
}
export const query = graphql`
query {
	allJson {
		edges {
			node {
				id
				currently_learning,
				skills{
					human_languages{
						category_name,
						set{
							skill,
							grade
						}
					},
					programmer_skills{
						category_name,
						set{
							skill,
							grade,
							color
						}
					},
				},
				
				projects{
					title,
					href,
					desc,
					other_contributors{
						name, 
						href
					}
				}
			}
		}
	}
}
`

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