import React from 'react'
import { motion } from 'framer-motion'
import styled  from 'styled-components'



function Contact() {
  return (
    <div>
        <motion.h3 className='h3-contact'
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
        >Contact Page</motion.h3>

        <Title>What is contact information? </Title>

        <Article className='contact'>

Your contact information is used to contact you, and can include information such as your name, phone number and email. 
It could also include your professional profile, if you have one and if necessary or relevant for the jobs you're applying for.

During the hiring process, employers use the contact information listed on your resume to provide 
updates about your job application, including getting in touch to schedule initial interviews and filling out paperwork regarding your pending employment.
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
export default Contact