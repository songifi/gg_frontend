'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export const Experience = () => (
  <section className="mt-40">
    <div
      className="container mx-auto px-15 py-5"
      style={{
        background:
          'radial-gradient(50% 50% at 50% 50%, rgba(244, 249, 254, 0.7) 0%, rgba(255, 251, 240, 0.7) 100%)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <motion.h2
        className="text-newgreen text-center text-3xl font-bold sm:text-4xl md:text-5xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        Preview The Experience
      </motion.h2>

      <motion.p
        className="mt-2 text-center text-lg text-[rgba(11,80,30,0.70)] sm:text-xl md:text-2xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        Have a look at what we’re serving!
      </motion.p>

      <motion.div
        className="mt-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {['/mokup1.png', '/mockup.png', '/mockup 3.png'].map((src, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mx-auto w-full max-w-[300px] transition-transform duration-300 ease-in-out sm:max-w-[340px] md:max-w-[380px]"
              >
                <div className="rounded-xl bg-white p-2 shadow-lg">
                  <Image
                    src={src}
                    alt={`Chat mockup ${idx + 1}`}
                    width={700}
                    height={1000}
                    className="h-auto w-full rounded-md"
                    priority
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  </section>
)
