import React from 'react';
import { css } from 'aphrodite';
import { Link } from 'gatsby';
import Root from '../layout/Root/Root';
import { archive_style as ast } from '../styles/page_styles/archive_style'
export default ({ location }) => {
  const card = [ast.card, ast.bg_websites];
  return (
    <Root location={location}>
        <main className={`${css(ast.main)}`}>
            {/* this is going to be a grid of squares with nemes of category on them
            (each square with bg img and dark transparent filter over them, on hover filter fades away) */}
            <div className={`${css(ast.container)}`}>
              <div className={`${css(ast.cards)}`}>
                <Link className={`normal_font ${css(...card)}`}>Websites</Link>
                <Link className={`normal_font ${css(...card)}`}>Mobile Apps</Link>
                {/* <Link className={`normal_font ${css(...card)}`}>Desktop Apps</Link> */}
                <Link className={`normal_font ${css(...card)}`}>Other</Link>
                {/* <Link className={`normal_font ${css(...card)}`}>Websites & Webapps</Link>
                <Link className={`normal_font ${css(...card)}`}>Mobile Apps</Link>
                <Link className={`normal_font ${css(...card)}`}>Desktop Apps</Link>
                <Link className={`normal_font ${css(...card)}`}>Other</Link> */}
              </div>
              <div className={`${css(ast.skills)}`}>
                <h4>Things I am learning right now</h4>
                <ul>
                  <li>01</li>
                  <li>02</li>
                </ul>
              </div>
              <div className={`${css(ast.skills)}`}>My skill-bars</div>
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
