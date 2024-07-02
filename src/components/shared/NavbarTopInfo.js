"use client";

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GroupsIcon from '@mui/icons-material/Groups';

// Image imports
import NavbarTopInfo_img_1 from '@/assets/NavbarTopInfo-img/NavbarTopInfo-img-1.jpg';
import NavbarTopInfo_img_2 from '@/assets/NavbarTopInfo-img/NavbarTopInfo-img-2.jpg';
import NavbarTopInfo_img_3 from '@/assets/NavbarTopInfo-img/NavbarTopInfo-img-3.jpg';

// Link data
const links = [
    {
        href: "#",
        img: NavbarTopInfo_img_1,
        icon: CameraAltIcon,
        text: "TOP SHOTS (28 June 2024)"
    },
    {
        href: "#",
        img: NavbarTopInfo_img_2,
        icon: YouTubeIcon,
        text: "Are we human beings or forest animals?"
    },
    {
        href: "#",
        img: NavbarTopInfo_img_3,
        icon: GroupsIcon,
        text: "‘Bangladesh should be able to beat others ..."
    }
];

const NavbarTopInfoLink = ({ href, img, Icon, text }) => (
    <Link className="flex border-r last:border-r-0 border-r-slate-300 mx-0 lg:mx-0 lg:mr-4 last:mr-0" href={href}>
        <Image src={img} placeholder="blur" alt={text} />
        <Icon className="mx-1.5 xl:mt-1.5 text-red-500 text-xs" />
        <Typography className="lg:text-xs xl:text-base font-serif text-gray-700 hover:text-blue-600">{text}</Typography>
    </Link>
);

const NavbarTopInfo = () => {
    return (
        <Box className="xl:my-7 lg:my-4 my-4 md:grid xl:grid-cols-3 grid-cols-4 gap-3 lg:mx-8 md:mx-4 mx-2">
            <Box className="xl:mt-2 col-span-1">
                <Typography className="font-bold">
                    <span className="text-3xl lg:text-4xl text-orange-500">D</span>
                    <span className="text-xl lg:text-2xl">AILY NEWS</span>
                </Typography>
            </Box>
            <Box className="xl:col-span-2 hidden lg:block col-span-3">
                <Box className="flex">
                    {links.map((link, index) => (
                        <NavbarTopInfoLink
                            key={index}
                            href={link.href}
                            img={link.img}
                            Icon={link.icon}
                            text={link.text}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default NavbarTopInfo;
