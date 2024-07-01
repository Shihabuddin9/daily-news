"use client"

import { Box } from '@mui/material';
import NavbarTopInfo_img_1 from '@/assets/NavbarTopInfo-img/NavbarTopInfo-img-1.jpg'
import NavbarTopInfo_img_2 from '@/assets/NavbarTopInfo-img/NavbarTopInfo-img-2.jpg'
import NavbarTopInfo_img_3 from '@/assets/NavbarTopInfo-img/NavbarTopInfo-img-3.jpg'
import Image from 'next/image';
import Link from 'next/link';

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GroupsIcon from '@mui/icons-material/Groups';


const NavbarTopInfo = () => {
    return (
        <Box className="xl:my-6 lg:my-6 my-4 md:grid grid-cols-3 gap-3 mx-8">
            <Box className='xl:mt-2'>
                <h1 className="font-bold"><span className="text-3xl lg:text-4xl text-orange-500">D</span><span className="text-xl lg:text-2xl">AILY NEWS</span></h1>
            </Box>
            <Box className='col-span-2 hidden lg:block'>
                <Box className='flex'>
                    <Link className='flex border-r border-r-slate-300' href="#">
                        <Image src={NavbarTopInfo_img_1} placeholder="blur" alt='Top shots' />
                        <CameraAltIcon className='mx-1.5 mt-1.5 text-red-500 text-xs' />
                        <span className='sm font-serif text-gray-700 hover:text-blue-600'>TOP SHOTS (28 june 2024)</span>
                    </Link>
                    <Link className='flex border-r border-r-slate-300 mx-4' href="#">
                        <Image src={NavbarTopInfo_img_2} placeholder="blur" alt='Top shots' />
                        <YouTubeIcon className='mx-1.5 mt-1.5 text-red-500 text-xs' />
                        <span className='sm font-serif text-gray-700 hover:text-blue-600'>Are we human being or forest animals?</span>
                    </Link>
                    <Link className='flex' href="#">
                        <Image src={NavbarTopInfo_img_3} placeholder="blur" alt='Top shots' />
                        <GroupsIcon className='mx-1.5 mt-1.5 text-red-500 text-xs' />
                        <span className='sm font-serif text-gray-700 hover:text-blue-600'>‘Bangladesh should be able to beat others ...</span>
                    </Link>
                </Box>

            </Box>
        </Box>
    );
};

export default NavbarTopInfo;