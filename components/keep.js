
import Image from 'next/image'

export default function Hero() {

  return (
    <>
      <header className="h-screen mb-32">

        {/* <div className=" h-full absolute inset-0 top-14 brightness-50">
          <Image
            alt="Background Image"
            src="https://res.cloudinary.com/filipe256/image/upload/v1641984480/qraftstore/landing_hbcigk.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div> */}
        <div className=" h-full absolute inset-0 top-14 brightness-50">
        <video autoplay>
        <source
          src="https://youtu.be/ShWUQbdxfxU"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
        </div>

        <div className="px-4 py-44 text-left text-white md:max-w-none md:text-center z-10 relative">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight md:text-center sm:leading-none md:text-6xl lg:text-7xl">
            <span className="inline-block md:block"> Conscious music and art exhibitions in a safe and inspired atmosphere.</span>
          </h1>

          <div className="mx-auto mt-5 md:mt-12 md:max-w-xl md:text-center lg:text-lg mb-12">
          We have art in store for you !
          </div>

        </div>

      </header>
    </>
  )
}
