import React from 'react';
import { css } from 'aphrodite';
import { Link } from 'gatsby';
import Root from '../layout/Root/Root';
import { portfolio_style as pst } from '../styles/page_styles/portfolio_style';
import Project from '../components/Project/Project'
import SkillBar from '../components/SkillBar/SkillBar';
export default ({ location }) => {
	return (
		<Root location={location}>
			<main className={`${css(pst.main)} normal_font`}> 
				<div className={`${css(pst.container)}`}>
					<div className={`${css(pst.currently_learning, pst.border)}`}>
						<h3 className={`${css(pst.part_title)}`}>Currently learning</h3>
						<p className={`${css(pst.upperTxtFormat)}`}>
							{
								`Upgrading my Django/Python skills.\nLearning Django Channels.`
							}
						</p>
					</div>
					<div className={`${css(pst.skills, pst.border)}`}>
						<div className={`${css(pst.scrollBarHider)}`}>
							<h3 className={`${css(pst.part_title)}`}>My skill list</h3>
							<ul className={`${css(pst.skills_list, pst.upperTxtFormat)}`}>
								<SkillBar txt={'Gatsby'}/>
								<SkillBar txt={'Gatsby'}/>
								<SkillBar txt={'Gatsby'}/>
								<SkillBar txt={'Gatsby'}/>
								<SkillBar txt={'Gatsby'}/>
								<SkillBar txt={'Gatsby'}/>
								<SkillBar txt={'Gatsby'}/>
							</ul>
						</div>
						<div className={`${css(pst.gradient)}`}/>
					</div>
					<div className={`${css(pst.projectsContainer, pst.border)}`}>
						<h3 className={`${css(pst.projectsTitle, pst.part_title)}`}>Projects I've worked on</h3>
						<ul className={`${css(pst.projects)}`}>
							<Project 
								title={'Poslonaut website'}
								contr={[
									{name:'Milan Šarić', href:'#'}, 
									{name:'Pavle Popović', href:'#'},
								]}
								desc={'Job searching website'}
								href={'#'}
							/>
							<Project 
								title={'Poslonaut website'}
								contr={[
									{name:'Milan Šarić', href:'#'}, 
									{name:'Pavle Popović', href:'#'},
								]}
								desc={'Job searching website'}
								href={'#'}
							/>
							<Project 
								title={'Poslonaut website'}
								contr={[
									{name:'Milan Šarić', href:'#'}, 
									{name:'Pavle Popović', href:'#'},
								]}
								desc={'Job searching website'}
								href={'#'}
							/>
							<Project 
								title={'Poslonaut website'}
								contr={[
									{name:'Milan Šarić', href:'#'}, 
									{name:'Pavle Popović', href:'#'},
								]}
								desc={'Job searching website'}
								href={'#'}
							/>
							<Project 
								title={'Poslonaut website'}
								contr={[
									{name:'Milan Šarić', href:'#'}, 
									{name:'Pavle Popović', href:'#'},
								]}
								desc={'Job searching website'}
								href={'#'}
							/>
							<Project 
								title={'Poslonaut website'}
								contr={[
									{name:'Milan Šarić', href:'#'}, 
									{name:'Pavle Popović', href:'#'},
								]}
								desc={'Job searching website'}
								href={'#'}
							/>
								<Project 
								title={'Poslonaut website'}
								contr={[
									{name:'Milan Šarić', href:'#'}, 
									{name:'Pavle Popović', href:'#'},
								]}
								desc={'Job searching website'}
								href={'#'}
							/>
								<Project 
								title={'Poslonaut website'}
								contr={[
									{name:'Milan Šarić', href:'#'}, 
									{name:'Pavle Popović', href:'#'},
								]}
								desc={'Job searching website'}
								href={'#'}
							/>
								<Project 
								title={'Poslonaut website'}
								contr={[
									{name:'Milan Šarić', href:'#'}, 
									{name:'Pavle Popović', href:'#'},
								]}
								desc={'Job searching website'}
								href={'#'}
							/>
								<Project 
								title={'Poslonaut website'}
								contr={[
									{name:'Milan Šarić', href:'#'}, 
									{name:'Pavle Popović', href:'#'},
								]}
								desc={'Job searching website'}
								href={'#'}
							/>
							<Project 
								title={'Poslonaut website'}
								contr={[
									{name:'Milan Šarić', href:'#'}, 
									{name:'Pavle Popović', href:'#'},
								]}
								desc={'Job searching website'}
								href={'#'}
							/>
							<Project 
								title={'Poslonaut website'}
								contr={[
									{name:'Milan Šarić', href:'#'}, 
									{name:'Pavle Popović', href:'#'},
								]}
								desc={'Job searching website'}
								href={'#'}
							/>
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