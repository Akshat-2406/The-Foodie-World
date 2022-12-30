import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout/Layout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{
          my:10, ml:10,"& h4":{fontWeight:'bold',mb:2 }
        }}>
          <Typography variant='h4'>
            Contact to our Restaurent
          </Typography>
          <p>
          When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.
          </p>
        </Box>
        <Box sx={{m:3,width:"600px",ml:10, "@media (max-width:600px)":{
          width:"300px"
        } }}>
          <TableContainer component={Paper}>
            <Table aria-label="contact-table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:"black",color:"white"}} align="center">
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{
                      color:"red",pt:1,
                    }}/> 1800-100-100(tollfree)
                    
                    </TableCell>
                    
                </TableRow>
                <TableCell>
                <EmailIcon sx={{
                      color:"skyblue",pt:1,
                    }}/> support@gmail.com
                </TableCell>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{
                      color:"green",pt:1,
                    }}/> +91-987654321 (tollfree)
                    
                    </TableCell>
                    
                </TableRow>
              </TableBody>

            </Table>

          </TableContainer>
        </Box>
    </Layout>
  );
};

export default Contact
