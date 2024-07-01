"use client";

import RightSideNews_1 from '@/assets/BDTopRightsideNews-img/REPORTc.jpg'
import { Box } from '@mui/material';
import Image from 'next/image';

const newsData = [
    {
        id: 1,
        title: " World Cup was a milestone for cricket's global ambitions. a milestone for cricket's global ambitions",
        imageSrc: RightSideNews_1,
        altText: "Fakrul"
    },
    {
        id: 1,
        title: " World Cup was a milestone for cricket's global ambitions. a milestone for cricket's global ambitions",
        imageSrc: RightSideNews_1,
        altText: "Fakrul"
    },


];

const NewsItem = ({ title, imageSrc, altText }) => (
    <Box className="mt-5">
        <Box className="space-y-3 overflow-hidden w-full">
            <Image className='hover:scale-110 transition-all duration-500 cursor-pointer'
                src={imageSrc}
                alt={altText}
                layout='responsive'
                placeholder="blur"
            />
            <h1 className='font-bold'>{title}</h1>
        </Box>

    </Box>
);

const RightSideNews = () => {
    return (
        <Box>
            <Box className="">
                <small className='text-center mt-5'>Advertize</small>
                <Box className="h-48 border p-10"></Box>
            </Box>
            <Box>
                {newsData.map((news) => (
                    <NewsItem
                        key={news.id}
                        title={news.title}
                        imageSrc={news.imageSrc}
                        altText={news.altText}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default RightSideNews;
