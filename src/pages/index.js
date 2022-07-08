import React, { useCallback, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import Post from '../models/post';

import { getUniqueCategories } from '../utils/helpers';
import PostTabs from '../components/post-tabs';
import Adsense from '../components/adsense';

function HomePage({ data }) {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => new Post(node));
  const { author, language } = data.site.siteMetadata;
  const categories = ['All', ...getUniqueCategories(posts)];
  // const featuredTabIndex = categories.findIndex((category) => category === '금리비교');
  // const [tabIndex, setTabIndex] = useState(featuredTabIndex === -1 ? 0 : featuredTabIndex);
  const [tabIndex, setTabIndex] = useState(0);
  const onTabIndexChange = useCallback((e, value) => setTabIndex(value), []);

  return (
    <Layout>
      <Seo title="Home" />
      <Bio author={author} language={language} />
      <Adsense client="ca-pub-3335499499331351" slot="3460720284" />
      <PostTabs
        posts={posts}
        onChange={onTabIndexChange}
        tabs={categories}
        tabIndex={tabIndex}
        showMoreButton
      />
    </Layout>
  );
}

export default HomePage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 500, truncate: true)
          frontmatter {
            categories
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }

    site {
      siteMetadata {
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            linkedIn
            email
          }
        }
      }
    }
  }
`;
