import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Reviews = () => {
  const [reviews1, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section className="my-20 ">
      <SectionTitle
        heading={"What Our Clients say"}
        subHeading={"Testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews1.map((review, idx) => (
          <>
            <SwiperSlide key={idx}>
              <div
                key={review._id}
                className="flex flex-col items-center justify-center text-center px-10 space-y-10"
              >
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p>{review.details}</p>
                <h1 className="text-2xl text-orange-600">{review.name}</h1>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
