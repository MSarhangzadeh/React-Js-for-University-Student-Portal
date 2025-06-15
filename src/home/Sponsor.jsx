import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';


// fuck off mahyar u dont need to edit this


const sponsorList = [
    {
        imgUrl: '/src/assets/images/sponsor/nasa.png',
      
    },
    {
        imgUrl: '/src/assets/images/sponsor/google.png',
      
    },
    {
        imgUrl: '/src/assets/images/sponsor/mit.png',
  
    },
    {
        imgUrl: '/src/assets/images/sponsor/google.png',

    },
    {
        imgUrl: '/src/assets/images/sponsor/nasa.png',
        
    },
    {
        imgUrl: '/src/assets/images/sponsor/mit.png',
        
    },
]


const Sponsor = () => {
    return (
        <div className="sponsor-section section-bg">
            <div className="container">
                <div className="section-wrapper">
                    <div className="sponsor-slider">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2}
                            loop={'true'}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            breakpoints={{
                                0: {
                                    width: 0,
                                    slidesPerView: 1,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 3,
                                },
                                1200: {
                                    width: 1200,
                                    slidesPerView: 5.5,
                                },
                            }}
                        >
                            {sponsorList.map((val, i) => (
                                <SwiperSlide key={i}>
                                    <div className="sponsor-iten">
                                        <div className="sponsor-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sponsor;