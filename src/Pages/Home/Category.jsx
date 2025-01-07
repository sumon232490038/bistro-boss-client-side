import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <>
      <section>
        <SectionTitle
          subHeading={"Form 11:00am to 10:00pm"}
          heading={"order online"}
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mx-auto mb-24 "
        >
          <SwiperSlide>
            <img src={slider1} alt="" className=" h-52 md:h-full" />
            <h3 className="text-center text-white uppercase  md:text-3xl -mt-20">
              salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" className=" h-52 md:h-full" />
            <h3 className="text-center text-white uppercase  md:text-3xl -mt-20">
              pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" className=" h-52 md:h-full" />
            <h3 className="text-center text-white uppercase  md:text-3xl -mt-20">
              desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" className=" h-52 md:h-full" />
            <h3 className="text-center text-white uppercase  md:text-3xl -mt-20">
              salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="" className=" h-52 md:h-full" />
            <h3 className="text-center text-white uppercase  md:text-3xl -mt-20">
              salad
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
