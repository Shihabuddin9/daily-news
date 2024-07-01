"use client";
import { Box } from '@mui/material';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
    const sections = [
        { name: "Bangladesh", href: "/bangladesh" },
        { name: "International", href: "/international" },
        { name: "Sports", href: "/sports" },
        { name: "Opinion", href: "/opinion" },
        { name: "Business", href: "/business" },
        { name: "Youth", href: "/youth" },
        { name: "Entertainment", href: "/entertainment" },
        { name: "Lifestyle", href: "/lifestyle" }
    ];

    const infoLinks = [
        { name: "Daily News", href: "/about" },
        { name: "Advertise", href: "/advertise" },
        { name: "Terms of Use", href: "/termsOfUse" },
        { name: "Privacy Policy", href: "/privacyPolicy" },
        { name: "Contact Us", href: "/contactUs" }
    ];

    const socialLinks = [
        { icon: <FacebookIcon className='text-blue-600' sx={{ fontSize: 35, '&:hover': { transform: 'scale(1.07)' } }} />, href: '#' },
        { icon: <XIcon className='mx-5' sx={{ fontSize: 28, '&:hover': { transform: 'scale(1.07)' } }} />, href: '#' },
        { icon: <InstagramIcon sx={{ fontSize: 30, '&:hover': { transform: 'scale(1.07)' } }} />, href: '#' },
        { icon: <YouTubeIcon className='text-red-500 ml-5' sx={{ fontSize: 38, '&:hover': { transform: 'scale(1.07)' } }} />, href: '#' }
    ];
    return (
        <Box className='mx-8 mt-20 md:mb-20 mb-10  border-t border-gray-300'>
            <Box className='my-6 border-b border-gray-300'>
                <Box className="">
                    <Box className="md:mb-6 mb-3 text-center md:text-start">
                        <h1 className="font-bold">
                            <span className="text-3xl lg:text-4xl text-orange-500">D</span>
                            <span className="text-xl lg:text-2xl">ailynews.com</span>
                        </h1>
                    </Box>
                    <ul className='flex flex-wrap md:grid grid-cols-3 gap-3 mb-6'>
                        {sections.map((section, index) => (
                            <li key={index}>
                                <Link href={section.href} className='hover:text-blue-500 underline md:no-underline'>
                                    {section.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Box>
            </Box>
            {/* social media */}
            <Box className='md:flex justify-between mt-4 mb-5'>
                <Box className="mb-5 md:mb-0 flex justify-center md:flex-none">
                    <Box className="">
                        <h1 className='text-center mb-0.5 text-gray-500'>Follow us</h1>
                        {socialLinks.map((link, index) => (
                            <Link key={index} href={link.href}>
                                {link.icon}
                            </Link>
                        ))}
                    </Box>
                </Box>
                <Box>
                    <h1 className='text-sm font-serif text-gray-500 text-center mb-0.5'>Download mobile apps</h1>
                    <Box className="flex justify-evenly items-center space-x-5">
                        <Box className="flex justify-center items-center hover:border-gray-400 border rounded px-4 py-2 cursor-pointer font-serif text-gray-500" xs={{ transform: 'scale(1.07)' }}>
                            <GoogleIcon />
                            <Box>
                                <small className='block -mb-2 text-[9px]'>GET IT ON</small>
                                <small className='font-bold'>Google play</small>
                            </Box>
                        </Box>
                        <Box className="flex justify-center items-center border rounded px-4 py-2 cursor-pointer font-serif text-gray-500 hover:border-gray-400" xs={{ transform: 'scale(1.07)' }}>
                            <AppleIcon />
                            <Box>
                                <small className='block -mb-2 text-[8px]'>download on the</small>
                                <small className='font-bold'>App Store</small>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className='border-y border-gray-300 flex justify-center items-center'>
                <ul className='md:flex grid grid-cols-3 gap-0 md:space-x-3 space-x-1 my-1 text-gray-400 font-serif'>
                    {infoLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href} className='hover:text-blue-500'>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Box>
            <Box className='md:flex justify-center items-center text-gray-400 font-serif text-xs mt-2 text-center'>
                <span className='block md:inline mb-1 md:mb-0'>Copyright © 1998-2024 Daily News</span>
                <span className='mx-2 hidden md:block'>-</span>
                <span>Editor & Publisher: Shihab Uddin</span>
            </Box>
        </Box>
    );
};

export default Footer;
