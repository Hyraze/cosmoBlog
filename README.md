# Cosmotory(cosmotory.xyz)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9a97ba1a-6ce0-4336-b6dc-f5d899e6a3b7/deploy-status)](https://app.netlify.com/sites/cosmotory/deploys)

Demo: https://cosmotory.netlify.com/  

This Blog was created using the starter gatsby repo. A port of [Casper](https://github.com/TryGhost/Casper) v2 a theme from [Ghost](https://ghost.org/) for [GatsbyJS](https://www.gatsbyjs.org/) using [TypeScript](https://www.typescriptlang.org/).

## Getting Started
Clone this repo.

```
git clone https://github.com/Hyraze/cosmoBlog.git --depth=1
```

Remove .git folder and setup a new one

```
rm -rf .git && git init
```

Edit website-config.ts with your website settings.
Either disable subscribe or setup a mailchimp list and add the form action and hidden field input name.

Now push to whatever repo you want!


### Progress
- [x] emotion / component styles
- [x] home page
- [x] tag page
- [x] author page
- [x] blog page
  - [x] subscribe form - using [mailchimp](https://mailchimp.com)
  - [ ] full width images in markdown? - not sure if possible
  - [ ] multiple post authors
  - [ ] floating reading progress bar
- [x] 404 page
- [x] subscribe modal/overlay
- [x] rss feed
- [x] polish ✨
  - [x] meta tags
  - [x] page titles


### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hyraze/cosmoBlog)

## How to configure Google Analytics
Edit `gatsby-config.js` and add your tracking ID


```javascript
{
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // Here goes your tracking ID
      trackingId: 'UA-XXXX-Y',
      // Puts tracking script in the head instead of the body
      head: true,
      // IP anonymization for GDPR compliance
      anonymize: true,
      // Disable analytics for users with `Do Not Track` enabled
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ['/preview/**'],
      // Specifies what percentage of users should be tracked
      sampleRate: 100,
      // Determines how often site speed tracking beacons will be sent
      siteSpeedSampleRate: 10,
    },
  },
```

## How to edit your site title and description 
Edit `gatsby-config.js` section `siteMetadata`

```javascript
 siteMetadata: {
    title: 'My awesome site name',
    description: 'This is a description for my site',
    siteUrl: 'https://mysite.com', // full path to blog - no ending slash
  },
```
