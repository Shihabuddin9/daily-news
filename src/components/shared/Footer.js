"use client";
import { Box } from '@mui/material';
import Link from 'next/link';

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

    return (
        <div className='mx-5 my-20 border-t border-gray-300'>
            <div className='my-6 border-b border-gray-300'>
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
            </div>
            <div className='flex justify-between my-10'>
                <div>
                    <h1>Follow us</h1>
                </div>
                <div>
                    <h1>Download mobile apps</h1>
                </div>
            </div>
            <div className='border-y border-gray-300 flex justify-center items-center'>
                <ul className='flex space-x-3 my-1 text-gray-400 font-serif'>
                    {infoLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href} className='hover:text-blue-500'>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex justify-center items-center text-gray-400 font-serif text-xs mt-2'>
                <span>Copyright © 1998-2024 Daily News</span>
                <span className='mx-2'>-</span>
                <span>Editor & Publisher: Shihab Uddin</span>
            </div>
        </div>
    );
};

export default Footer;
