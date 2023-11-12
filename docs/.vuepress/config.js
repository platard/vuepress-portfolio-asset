import { defaultTheme } from 'vuepress'

export default {
    lang: 'en-US',
    title: 'VuePress',
    description: 'Portfolio asset',
    theme: defaultTheme({
        // default theme config
        navbar: [
          {
              text: 'Home',
              link: '/',
          },
          {
            text: 'Guide',
            link: '/guide'
          },
          {
            text: 'Contact',
            link: '/contact.md'
          }
        ],
        logo: '/images/iconmonstr-carousel-filled.svg',
    }),
    base: '/vuepress-portfolio-asset'
}