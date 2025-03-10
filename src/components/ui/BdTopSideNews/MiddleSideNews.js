"use client";
import { Box } from '@mui/material';
import Image from 'next/image';
import Fakrul from '@/assets/BDTopSideNews-img/Mirza_Fakrul_bnp.jpg';
import Link from 'next/link';

const newsData = [
    {
        id: 1,
        titleRed: "10 MoUs",
        title: " India achieves everything, Bangladesh gains nothing: BNP",
        description: "Mirza Fakhrul made these allegations at a press conference at the BNP chairperson’s political office in Gulshan, Dhaka on Sunday",
        time: "25 minute ago",
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
        time: "2 hour ago",
        imageSrc: Fakrul,
        altText: "Fakrul"
    },

];

const NewsItem = ({ titleRed, title, description, time, imageSrc, altText }) => (
    <Box className="border-b md:border-b-0 lg:border-b border-b-gray-300 md:mb-4 mb-2 last:border-b-0 ">
        <Link href="#" className='hidden lg:block'>
            <Box className='flex mb-2'>
                <h1 className='font-bold leading-5 text-gray-800 hover:underline underline-offset-4'>
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
            <p className='text-gray-600 leading-5 font-serif hover:text-gray-800'>{description}</p>
            <small className='block my-3 text-gray-600'>{time}</small>
        </Link>

        <Link href="#" className='lg:hidden flex'>
            <Box className="mb-3 last:mb-0">
                <h1 className='font-bold font-serif leading-5 text-gray-800 hover:underline underline-offset-4'>
                    <span className='text-red-600'>{titleRed}</span> - {title}
                </h1>
                <p className='text-gray-600 leading-5 font-serif hover:text-gray-800 md:my-3 my-2 md:text-base text-sm'>{description}</p>
                <small className=' text-gray-600 md:text-sm text-xs'>{time}</small>
            </Box>
            <Box className='overflow-hidden w-full'>
                <Image
                    className='hover:scale-110 transition-all duration-500 cursor-pointer'
                    layout='responsive'
                    src={imageSrc}
                    alt={altText}
                    placeholder="blur"
                />
            </Box>
        </Link>
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
