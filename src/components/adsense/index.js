import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import AdSense from 'react-adsense';
import './style.scss';

const Adsense = ({ client, slot }) => {
  const {
    site: {
      siteMetadata: { use_ads, google_ads_client, google_ads_slot },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            use_ads
          }
        }
      }
    `,
  );

  return (
    <div className="warp_ad" align="center">
      {use_ads === true ? (
        <AdSense.Google
          client={client || google_ads_client}
          slot={slot || google_ads_slot}
          style={{ display: 'block' }}
          format="auto"
          responsive="true"
        />
      ) : (
        <div>📃</div>
      )}
    </div>
  );
};

export default Adsense;
