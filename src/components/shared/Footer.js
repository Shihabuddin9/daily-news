"use client";
import { Box } from '@mui/material';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
        <Box className='mx-5 my-20 border-t border-gray-300'>
            <Box className='my-6 border-b border-gray-300'>
                <Box className="mb-6">
                    <h1 className="font-bold">
                        <span className="text-3xl lg:text-4xl text-orange-500">D</span>
                        <span className="text-xl lg:text-2xl">ailynews.com</span>
                    </h1>
                </Box>
                <ul className='grid grid-cols-3 gap-3 mb-6'>
                    {sections.map((section, index) => (
                        <li key={index}>
                            <Link href={section.href} className='hover:text-blue-500'>
                                {section.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Box>
            <Box className='flex justify-between my-10'>
                <Box>
                    <Box className="">
                        <h1 className='text-center mb-2'>Follow us</h1>
                        {/* <Link className='' href="#"><FacebookIcon className=' text-blue-600' sx={{ fontSize: 35, '&:hover': { transform: 'scale(1.07)' } }} /></Link>
                        <Link className='mx-5' href="#"><XIcon className='' sx={{ fontSize: 28, '&:hover': { transform: 'scale(1.07)' } }} /></Link>
                        <Link href="#"><InstagramIcon className=' ' sx={{ fontSize: 30, '&:hover': { transform: 'scale(1.07)' } }} /></Link>
                        <Link className='ml-5' href="#"><YouTubeIcon className=' text-red-500' sx={{ fontSize: 38, '&:hover': { transform: 'scale(1.07)' } }} /></Link> */}
                        {socialLinks.map((link, index) => (
                            <Link key={index} href={link.href}>
                                {link.icon}
                            </Link>
                        ))}
                    </Box>
                </Box>
                <Box>
                    <h1>Download mobile apps</h1>
                </Box>
            </Box>
            <Box className='border-y border-gray-300 flex justify-center items-center'>
                <ul className='flex space-x-3 my-1 text-gray-400 font-serif'>
                    {infoLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href} className='hover:text-blue-500'>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Box>
            <Box className='flex justify-center items-center text-gray-400 font-serif text-xs mt-2'>
                <span>Copyright © 1998-2024 Daily News</span>
                <span className='mx-2'>-</span>
                <span>Editor & Publisher: Shihab Uddin</span>
            </Box>
        </Box>
    );
};

export default Footer;
