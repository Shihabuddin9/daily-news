'use client';

import Image from 'next/image';
import adds from '@/assets/advertisement/8397360373578473584.jpg'
import { Box } from '@mui/material';

const MiddleAdds = () => {
    return (
        <Box className="flex justify-center items-center mx-8 lg:mx-0 my-8 bg-slate-50 py-5">
            <Image src={adds} alt='adds' />
        </Box>
    );
};

export default MiddleAdds;