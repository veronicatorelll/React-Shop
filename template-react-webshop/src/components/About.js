import React from 'react'
import { motion } from 'framer-motion'
import styled  from 'styled-components'


function About() {
  return (
    <div>
        <motion.h3 className='h3-about'
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
        >About us</motion.h3>

        <Title>Where it all began... </Title>

        <Article className='about'>
 What seems to be just another page in your sitemap, probably accessible through your header and/or footer, is actually one of your most compelling pieces of content. Or at least, it should be.

Yes, we’re talking about your website’s About Us page.

In some ways, it’s actually more appropriate to refer to this type of page as “Our Brand Story,” or if you want another alternative, “Our Identity.” We like the first one better, but they’re both pretty accurate.

This is why your About Us page is one of the most important pages on your site. It is, after all, a sheer representation of your brand identity. After reading and exploring yours, each visitor will fully understand your brand values, mission statement, added value, and so on.

This visitor wants to get to know you by listening to the story you have to tell.

The first step to create an authentic, effective about us page that really communicates who you are and what you’re about is perfecting every design detail. First impressions matter and your website needs to dress to impress.

Let’s take a look at 16 of our favorite About Us pages, whose design and content strategy are worth writing home about.
        </Article>
    </div>
  )
}



const Title = styled.h3 `
font-size: 40px;
max-width: 600px;
margin: 50px auto;
padding: 20px;
margin-top: 80px;
`

const Article = styled.article `
font-size: 20px;
max-width: 600px;
margin: 50px auto;
padding: 20px;
margin-top: -55px;
`


export default About