"use client"
import { Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'; import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialMedia = () => {
    const socialLinks = [
        { icon: <FacebookRoundedIcon className='text-blue-600' sx={{ fontSize: 35, '&:hover': { transform: 'scale(1.07)' } }} />, href: '#' },
        { icon: <XIcon className='mx-5' sx={{ fontSize: 28, '&:hover': { transform: 'scale(1.07)' } }} />, href: '#' },
        { icon: <InstagramIcon sx={{ fontSize: 30, '&:hover': { transform: 'scale(1.07)' } }} />, href: '#' },
        { icon: <YouTubeIcon className='text-red-500 ml-5' sx={{ fontSize: 38, '&:hover': { transform: 'scale(1.07)' } }} />, href: '#' }
    ];
    return (
        <Box>
            {socialLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                    {link.icon}
                </Link>
            ))}
        </Box>
    );
};

export default SocialMedia;