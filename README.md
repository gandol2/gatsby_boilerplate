<h1 align="center">Blog Boilerplate code</h1>

**๋ฐ๋ชจ**: [**blogtest.gilpum.co.kr**](https://blogtest.gilpum.co.kr/)

#

## ๐ป DNS ์ค์ 

### DNS

1. ./CNAME ํ์ผ

```
blogtest.gilpum.co.kr
```

2. DNS์ค์ 

```
ํ์ : CNAME
์ด๋ฆ : blogtest
์ฝํ์ธ  : gandol2.github.io
```

3. Github Repo Settings > Pages
   [https://github.com/gandol2/blogtest/settings/pages](https://github.com/gandol2/blogtest/settings/pages) ์ค์  ํ์ด์ง์์ Custom domain์ **blogtest.gilpum.co.kr** ์๋ ฅ

#

## gatsby-plugin-google-adsense

[**gatsby-plugin-google-adsense Plugin**](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-adsense/)

```
npm install --save gatsby-plugin-google-adsense
```

```
// In your gatsby-config.js file
plugins: [
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-xxxxxxxxxx`
      },
    },
]
```

#

## gatsby-plugin-google-analytics

[**gatsby-plugin-google-analytics Plugin**](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/)

...
