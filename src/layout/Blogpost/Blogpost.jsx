import React from 'react';
import Root from '../Root/Root';
import { graphql } from 'gatsby';
import { blogpost_styles as bps } from './styles/styles';
import { css } from 'aphrodite';
const Blogpost = ({ location, data }) => {
    const post = data.markdownRemark
    return (
        <Root location={location}>
            {/* <section style={{height:'auto', minWidth:'100%', display:'block', overflowY:'auto'}}> */}
                <main className={css(bps.main)}>
                    <h1 style={{color:'yellow'}}>{post.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </main>
            {/* </section> */}
        </Root>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;

export default Blogpost;

