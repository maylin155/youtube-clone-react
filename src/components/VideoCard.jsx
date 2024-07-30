import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    console.log(videoId , snippet)
    return (
        <Card sx={{width: {md: '220px', xs: '100%' ,lg:'320px'}, boxShadow: 'none', borderRadius: '10px'}}>
            <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title || demoVideoTitle}
            sx={{width: '368px', height: '180px'}}
            
            />
            </Link>

            
            <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
            <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoVideoUrl}>
            <Typography variant="subtitle2" fontWeight="grey" color="#FFF">
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}} />
            </Typography>

            </Link>
            </CardContent>

        </Card>
        
    )
}

export default VideoCard