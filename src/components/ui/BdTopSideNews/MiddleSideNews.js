"use client";
import { Box } from '@mui/material';
import Image from 'next/image';
import Fakrul from '@/assets/BDTopSideNews-img/Mirza_Fakrul_bnp.jpg';

const newsData = [
    {
        id: 1,
        titleRed: "10 MoUs",
        title: " India achieves everything, Bangladesh gains nothing: BNP",
        description: "Mirza Fakhrul made these allegations at a press conference at the BNP chairperson’s political office in Gulshan, Dhaka on Sunday",
        time: "1 hour ago",
        imageSrc: Fakrul,
        altText: "Fakrul"
    },
    {
        id: 1,
        titleRed: "10 MoUs",
        title: " India achieves everything, Bangladesh gains nothing: BNP",
        description: "Mirza Fakhrul made these allegations at a press conference at the BNP chairperson’s political office in Gulshan, Dhaka on Sunday",
        time: "1 hour ago",
        imageSrc: Fakrul,
        altText: "Fakrul"
    },
    {
        id: 1,
        titleRed: "10 MoUs",
        title: " India achieves everything, Bangladesh gains nothing: BNP",
        description: "Mirza Fakhrul made these allegations at a press conference at the BNP chairperson’s political office in Gulshan, Dhaka on Sunday",
        time: "1 hour ago",
        imageSrc: Fakrul,
        altText: "Fakrul"
    },

];

const NewsItem = ({ titleRed, title, description, time, imageSrc, altText }) => (
    <Box className="border-b border-b-gray-300 mb-4 last:border-b-0">
        <Box className='flex mb-2'>
            <h1 className='font-bold mt-1 font-serif leading-5 text-gray-800'>
                <span className='text-red-600'>{titleRed}</span> - {title}
            </h1>
            <Box className='overflow-hidden w-full'>
                <Image
                    className='hover:scale-110 transition-all duration-500 cursor-pointer'
                    layout='responsive'
                    src={imageSrc}
                    alt={altText}
                    placeholder="blur"

                />
            </Box>
        </Box>
        <p className='text-gray-600 leading-5 font-serif'>{description}</p>
        <small className='block my-3 text-gray-600'>{time}</small>
    </Box>
);

const MiddleSideNews = () => {
    return (
        <Box>
            {newsData.map((news) => (
                <NewsItem
                    key={news.id}
                    titleRed={news.titleRed}
                    title={news.title}
                    description={news.description}
                    time={news.time}
                    imageSrc={news.imageSrc}
                    altText={news.altText}
                />
            ))}
        </Box>
    );
};

export default MiddleSideNews;
