// import Swiper core and required modules
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
  } from "swiper/modules";
  
  import { Swiper, SwiperSlide } from "swiper/react";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "./style.scss";
  
  // import {
  //   CaruselImg1,
  //   CaruselImg2,
  //   CaruselImg3,
  //   CaruselImg4,
  //   CaruselImg5,
  // } from "@imgs";
  
  export default () => {
    const imgList = [
        "https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-creating-3d-renderings-for-mobile-apps-software-and-web-development-image_3826852.jpg",
        "https://media.istockphoto.com/id/1803992649/vector/software-development-coding-process-concept-programming-testing-cross-platform-code-app-on.jpg?s=612x612&w=0&k=20&c=9JX_Uhk0YSIqakQEXiSjo5NutvD4C8XOGIMc1cGRhiM=",
        "https://media.istockphoto.com/id/1256473398/vector/kids-learning-to-coding-programming-in-online-it-school-engineering-courses-in-internet-for.jpg?s=612x612&w=0&k=20&c=oeUkdgXcTJp-r32NuJ1oUYNaXx9cTHqBY2KX0YXUeNw=",
        "https://img.freepik.com/premium-photo/abstract-flat-minimal-colourful-illustration-web-developer-software-engineer-full-stack-developer_987764-10172.jpg"
    ];
    return (
      
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // 3 soniyada slayd almashadi
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {imgList.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-full h-[400px]">
                  <img
                    className="w-full h-full object-fill object-center rounded-2xl"
                    src={item}
                    alt="Carusel img"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
    );
  };