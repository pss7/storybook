import { ReactNode } from 'react';
import GlobalStyle from "../GlobalStyle";
import Image from './Image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

function Slide() {

    const data = [
        {
            imgSrc: "/img1.jpg"
        },
        {
            imgSrc: "/img1.jpg"
        },
        {
            imgSrc: "/img1.jpg"
        },
        {
            imgSrc: "/img1.jpg"
        },
        {
            imgSrc: "/img1.jpg"
        },
    ]

    return (
        <>
            <GlobalStyle />
            <Swiper
                loop={true}
                slidesPerView={4}
                spaceBetween={15}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                className='slideWrap'
            >
                {data.map((data, key) => (
                    <SwiperSlide key={key}>
                        <Image imageSrc={data.imgSrc} />
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </>
    )
}

export default Slide