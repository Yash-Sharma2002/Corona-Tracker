import { Box, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Home() {
  return (
    <Box>
      <Typography variant="h4" sx={{ textAlign: "center", mt: 5 }}>Hello Guys,</Typography>
      <Typography sx={{ textAlign: "center", mt: 5, fontSize: '20px', width: '70%', margin: "20px auto" }}>
        I created this project just for practising my skills
        <br />
        This project will provide the latest corona details provided by indian government to the citizens.
        I created it as stats and also as the table version so you can see it clearly.
        <br />
        I will not add anything else because it is unnecessary and wastage of time so i am ending.

      </Typography>
      <Typography sx={{ fontSize: '20px', textAlign: 'center', my: 2 }} >You can follow me on</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://github.com/Yash-Sharma2002" style={{ textDecoration: "none", color: 'black' }}> <GitHubIcon /></a>
        <a href="https://www.linkedin.com/feed/?trk=onboarding-landing" style={{ textDecoration: "none", color: 'black' }}> <LinkedInIcon sx={{ ml: 2 }} /></a>
      </Box>
      <Typography sx={{ fontSize: '20px', textAlign: 'center', my: 2 }} >For any queries</Typography>
      <Box sx={{ textAlign: 'center' }}>
        <a href="mailto:yashsharma2493@gmail.com" style={{ textDecoration: "none", color: 'black' }}><EmailIcon /></a>
      </Box>

      <Typography sx={{ fontSize: '20px', textAlign: 'center', my: 2 }} >Here is the link of the github repo for this site</Typography>
      <Box sx={{ textAlign: 'center' }}>
        <a href="mailto:yashsharma2493@gmail.com" style={{ textDecoration: "none", color: 'black' }}><EmailIcon /></a>
      </Box>
    </Box>
  )
}
