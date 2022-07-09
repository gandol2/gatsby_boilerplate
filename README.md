<h1 align="center">Blog Boilerplate code</h1>

**데모**: [**blogtest.gilpum.co.kr**](https://blogtest.gilpum.co.kr/)

#

## 💻 DNS 설정

### DNS

1. ./CNAME 파일

```
blogtest.gilpum.co.kr
```

2. DNS설정

```
형식 : CNAME
이름 : blogtest
콘텐츠 : gandol2.github.io
```

3. Github Repo Settings > Pages
   [https://github.com/gandol2/blogtest/settings/pages](https://github.com/gandol2/blogtest/settings/pages) 설정 페이지에서 Custom domain에 **blogtest.gilpum.co.kr** 입력

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
