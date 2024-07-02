"use client";
import internationalNews_1 from '@/assets/InternationalNews/InternationalNews-img-1.jpg';
import internationalNews_2 from '@/assets/InternationalNews/InternationalNews-img-2.jpg';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const articles = [
    {
        img: internationalNews_1,
        alt: 'India overhauls colonial-era laws with new criminal codes amid criticisms',
        title: 'India overhauls colonial-era laws with new criminal codes amid criticisms',
        description: 'Key changes include the amount of time police can hold a suspect rising from 15 days to 60, and, in some special cases, up to',
        time: '16 hours ago',
        isFeatured: true,
    },
    {
        img: internationalNews_2,
        alt: 'Geopolitics EU leaders criticised next NATO boss Rutte: Poland PM',
        title: 'Geopolitics EU leaders criticised next NATO boss Rutte: Poland PM',
        description: '',
        time: '',
        isFeatured: false,
    },
    {
        img: internationalNews_2,
        alt: 'Geopolitics EU leaders criticised next NATO boss Rutte: Poland PM',
        title: 'Geopolitics EU leaders criticised next NATO boss Rutte: Poland PM',
        description: '',
        time: '',
        isFeatured: false,
    },
    {
        img: internationalNews_2,
        alt: 'Geopolitics EU leaders criticised next NATO boss Rutte: Poland PM',
        title: 'Geopolitics EU leaders criticised next NATO boss Rutte: Poland PM',
        description: '',
        time: '',
        isFeatured: false,
    },
    {
        img: internationalNews_2,
        alt: 'Geopolitics EU leaders criticised next NATO boss Rutte: Poland PM',
        title: 'Geopolitics EU leaders criticised next NATO boss Rutte: Poland PM',
        description: '',
        time: '',
        isFeatured: false,
    },
];

const InternationalNews = () => {
    return (
        <Box className='lg:mx-8 mx-2'>
            <Box className="flex justify-start items-center mb-3">
                <Link href="#">
                    <span className='hover:text-blue-600 font-bold text-2xl '>International</span>
                </Link>
                <span className='text-orange-500'><ArrowForwardIosIcon /></span>
            </Box>
            <Box className="grid grid-cols-3 gap-4">
                {articles.map((article, index) => (
                    <Box key={index} className={article.isFeatured ? 'row-span-2' : ''}>
                        <Link href='#'>
                            <Box className='overflow-hidden'>
                                <Image className='w-full hover:scale-110 transition-all duration-500 cursor-pointer' src={article.img} placeholder='blur' alt={article.alt} />
                            </Box>
                            <h1 className='font-bold text-xl hover:underline underline-offset-4 leading-6 mt-3 text-gray-800'>{article.title}</h1>
                        </Link>
                        {article.isFeatured && (
                            <>
                                <p className='text-gray-600 my-4'>{article.description}</p>
                                <small className='text-sm text-gray-600'>{article.time}</small>
                            </>
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default InternationalNews;
