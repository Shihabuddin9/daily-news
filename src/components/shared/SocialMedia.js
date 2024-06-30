import { Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialMedia = () => {
    return (
        <Box>
            <Link href="#"><FacebookIcon /></Link>
            <Link href="#"><XIcon /></Link>
            <Link href="#"><InstagramIcon /></Link>
            <Link href="#"><YouTubeIcon /></Link>
        </Box>
    );
};

export default SocialMedia;