"use client";

import { Box } from '@mui/material';
import Image from 'next/image';
import Gaja_img from '@/assets/BDTopLeftSideNews-img/prothomalo-english.jpg';
import Link from 'next/link';

const newsData = [
    {
        id: 1,
        title: "Fighting rages in Gaza City's Shujaiya for fourth day",
        description: "Heavy battles and bombardment hit Gaza City's Shujaiya district for a fourth day on Sunday, months after the Israeli army declared Hamas's command structure dismantled in the northern area.",
        imageSrc: Gaja_img,
        altText: "Gaja_img",
        time: '19 minute ago',
        points: [
            'Democrats fear replacement scenarios as much as keeping Biden',
            'Biden’s family encourages him to stay in the race as they discuss whether top advisers should be fired',
            'Democrats fear replacement scenarios as much as keeping Biden',
            'Biden’s family encourages him to stay in the race as they discuss whether top advisers should be fired',
            'Biden’s family encourages him to stay in the race as they discuss whether top advisers should be fired',
        ],
    },
];

const NewsItem = ({ title, description, imageSrc, altText, points, time }) => (
    <Box className="border-b border-b-gray-300 md:mb-4 md:last:border-b-0">
        <Link href="#" className=''>
            <Box className='mb-2'>
                <Box className='overflow-hidden w-full mb-3'>
                    <Image
                        className='hover:scale-110 transition-all duration-500 cursor-pointer'
                        layout='responsive'
                        src={imageSrc}
                        alt={altText}
                        placeholder="blur"
                    />
                </Box>
                <h1 className='font-semibold lg:text-3xl md:text-2xl text-xl text-gray-800 hover:underline underline-offset-1 hover:text-gray-600'>{title}</h1>
            </Box>
            <p className='text-gray-600 leading-5 font-serif hover:text-gray-800 hover:underline underline-offset-1 mb-3 lg:mb-0'>{description}</p>

            <small className=' text-gray-600 lg:hidden pb-3 md:pb-0 block md:inline'>{time}</small>

            <ul className='mt-3 space-y-3 list-disc font-semibold hidden lg:block'>
                {points.map((point, index) => (
                    <li key={index} className='hover:underline underline-offset-1'>{point}</li>
                ))}
            </ul>
        </Link>
    </Box>
);

const LeftSideNews = () => (
    <Box>
        {newsData.map((news) => (
            <NewsItem
                key={news.id}
                title={news.title}
                description={news.description}
                imageSrc={news.imageSrc}
                altText={news.altText}
                points={news.points}
                time={news.time}
            />
        ))}
    </Box>
);

export default LeftSideNews;
