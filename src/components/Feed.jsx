import { useState, useEffect } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import {fetchFromAPI} from '../utils/fetchFromAPI'
 

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('Suggested');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}&maxResults=50`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error(error));
  }, [selectedCategory]);


  return (
    <Stack sx={{
      flexDirection: { xs: 'column', md: 'row' },
      mx: { md: '3px' }, 
      height: '120vh', 
    }}>
      <Box         
      sx={{
          flex: 1, // Take 1/3 of the available space on medium screens and up
          maxWidth: { lg: '33.33%' }, // 1/3 of the width for medium screens and up
          minWidth: { md: '250px' }, // Optional: Minimum width to ensure sidebar doesn't get too small
          borderRight: '1px solid #3d3d3d',
          px: { sm: 0, md: 2 },
          height: { sm: 'auto', md: '100%' }
        }}>
        <Sidebar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: '#fff'}}>
          Copyright 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY:'auto', height: {sm: 'auto', md: '100vh'}}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
         {selectedCategory} <span style={{color: '#F31503'}}>videos</span>
        </Typography>

        <Videos videos={videos} />

      </Box>
    </Stack>
  );
};

export default Feed;