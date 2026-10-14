import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper"; // Removed Pagination
import "swiper/css";
import "swiper/css/navigation";

export default class GalleryOne extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <>
        <section className="gallery-page flex flex-col items-center justify-center">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Gallery</span>
              <h2 className="section-title__title">#CelebratingTogetherness</h2>
            </div>

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2000 }}
              pagination={false} // Removed pagination bullets
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="gallery-slider"
            >
              {["gallery1.jpg", "gallery2.JPG", "gallery3.JPG", "gallery4.JPG", "gallery5.JPG", "gallery6.JPG", "1.jpg", "2.jpg", "3.JPG", "4.JPG", "5.jpeg", "6.JPG", "7.jpg", "8.jpg", "9.jpg", "10.JPG",
                "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.JPG", "19.jpg", "20.jpeg",
                "21.JPG", "22.JPG", "23.JPG", "24.JPG", "25.JPG", "26.JPG", "27.JPG", "28.jpg", "29.jpg", "30.jpg",
                "31.jpg", "32.jpg", "33.jpg", "34.JPG","35.jpg","36.jpg","37.jpg","38.jpg","48.JPG"].map(
                  (image, index) => (
                    <SwiperSlide key={index}>
                      <div className="gallery-page__single">
                        <div className="gallery-page__img">
                          <img src={`${publicUrl}assets/images/gallery/${image}`} alt={`Gallery ${index + 1}`} />
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="custom-swiper-button-prev">&#10094;</div>
            <div className="custom-swiper-button-next">&#10095;</div>
          </div>
        </section>

        {/* Custom CSS for smaller arrows */}
        <style jsx>{`
          .custom-swiper-button-prev,
          .custom-swiper-button-next {
            position: absolute;
            top: 60%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            font-size: 16px;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            z-index: 10;
          }
          .custom-swiper-button-prev {
            left: 20px;
          }
          .custom-swiper-button-next {
            right: 20px;
          }
          .gallery-page {
            position: relative;
        
          }

          .gallery-page__single {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.gallery-page__img img {
  max-height: 300px; /* Adjust as needed */
  width: auto;
  margin: 0 auto;
  object-fit: contain; /* Ensures full visibility */
}

        `}</style>
      </>
    );
  }
}
