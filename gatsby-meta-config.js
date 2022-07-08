module.exports = {
  use_ads: false, // 애드센스 광고 사용 여부
  google_ads_client: 'ca-pub-3335499499331351',
  google_ads_slot: '3460720284',

  title: `비교왕`,
  description: `시중 금융은행 금리를 비교 합니다`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://blogtest.gilpum.co.kr`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `비교왕`,
    bio: {
      role: `에디터`,
      description: ['금리를 비교 해주는', '정확히 찾아 드리는', '이로운 것을 만드는'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: ``, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `admin@gilpum.co.kr`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      // {
      //   date: '2021.02 ~',
      //   activity: '개인 블로그 개발 및 운영',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      // {
      //   title: '개발 블로그 테마 개발',
      //   description:
      //     '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
      //   techStack: ['gatsby', 'react'],
      //   thumbnailUrl: 'blog.png',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
    ],
  },
};
