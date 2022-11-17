import type { GatsbyConfig } from "gatsby"
import path from 'path'

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [

    `gatsby-plugin-material-ui`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
     `gatsby-background-image`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to none to allow builds to continue on image errors
        failOn: `none`,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `jpg`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      }
    },
    {
    
      resolve:`gatsby-source-filesystem`,

      options: {
      
        name: `images`,
        path: path.join(__dirname,`src`,`images`)
      }
    },
      {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `zxxu2ddpmia8`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `Brq3L6B-f4mwktTG2aKNV_mSb0Cif6li5pvA7n9hMG0`,
        //accessToken: `CFPAT-IvVcnQ3lVBy8kxcqe-uv1Prub7mdD0e6cBwSV-8cVB8`,
        
      
       
      
      }
      ,
    }
   
   /* {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
   */
  ],
}

export default config
