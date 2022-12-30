import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        p:2,
        textAlign:'center',"& h4":{
          fontWeight:"bold",
          my:2,
          fontSize: "2rem"
        },
        "& p": {
          textAlign:"justify"
        },
        "@media (max-width: 600px)":{
          mt:0,
          "& h4":{
            fontSize:"1.3rem",
          }
        }

      }}>
        <Typography variant='h4'>
          Welcome to the Foodie World by our Restaurent
        </Typography>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

        </p>
        <br/>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </Box>
    </Layout>
  );
};

export default About
