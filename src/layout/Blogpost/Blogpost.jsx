import React from 'react';
import Root from '../Root/Root';
import { graphql } from 'gatsby';
import { blogpost_styles as bps } from './styles/styles';
import Tag from '../../components/Tag/Tag';
import { css } from 'aphrodite';
const Blogpost = ({ location, data }) => {
    const post = data.markdownRemark
    return (
        <Root location={location}>
            <main className={`${css(bps.main)} normal_font`}>
                <div className={`${css(bps.container)} gen_blogpost`}>
                    <h1 className={`${css(bps.blogpost_title)}`}>{post.frontmatter.title}</h1>
                    <article 
                        style={{
                            height:'auto',
                            width:'80%',
                            display:'flex',
                            backgroundColor:'#333',
                            paddingBottom:'20px',
                            flexDirection:'column',
                            alignItems:'center',
                            padding:'1%' 
                        }} 
                        dangerouslySetInnerHTML={{ __html: post.html }} 
                    />
                    <div 
                        style={{margin:'15px 10%',display:'flex',minHeight:'20px',flexWrap:'wrap',alignSelf:'flex-start',flexDirection:'row',width:'80%', maxWidth:'80%',justifyContent:'flex-start'}}
                    >
                        {renderTags(post.frontmatter.tags)}
                    </div>
                </div>
            </main>            
        </Root>
    )
}
const renderTags = (arr, id) =>{
	return arr.map((el, ind, arr)=><Tag key={`tagset_${id}-tag_${ind}`} is_on_black={true} isLast={ind === (arr.length - 1)} txt={el}/>);
}
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title,
                tags
            }
        }
    }
`;

export default Blogpost;

