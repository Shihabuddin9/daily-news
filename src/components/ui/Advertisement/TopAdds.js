'use client';

import Image from "next/image";
import adds from '@/assets/advertisement/1689817569056250953.gif'
import { Box } from "@mui/material";

const TopAdds = () => {
    return (
        <Box className="border-b border-b-gray-200">
            <Box className="flex justify-center items-center my-1 md:my-3 lg:mx-8 md:mx-4 mx-2">
                <Image className="cursor-pointer" src={adds} alt="gif"></Image>
            </Box>
        </Box>
    );
};

export default TopAdds;