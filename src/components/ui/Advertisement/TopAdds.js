'use client';

import Image from "next/image";
import adds from '@/assets/advertisement/1689817569056250953.gif'

const TopAdds = () => {
    return (
        <div className="flex justify-center items-center my-2">
            <Image className="cursor-pointer" src={adds} alt="gif"></Image>
        </div>
    );
};

export default TopAdds;