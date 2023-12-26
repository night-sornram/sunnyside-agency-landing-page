"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [openMenu,setOpenMenu] = useState(false)
  return ( 
    <div className=' w-screen h-screen flex flex-col'>
      <div className=' w-full relative '>
        <div className='  w-full'>
          <Image
          src={"/images/desktop/image-header.jpg"}
          width={2880}
          height={1600}
          className=' md:flex hidden object-fit'
          alt='header'/>  
          <Image
          src={"/images/mobile/image-header.jpg"}
          width={750}
          height={1076}
          className=' flex md:hidden object-fit'
          alt='header'/>  
        </div>
        <div className=' absolute w-full flex flex-col justify-center items-center top-1/4'>
          <div className=' text-5xl text-center uppercase md:text-5xl lg:text-7xl font-fraunces font-black text-white tracking-widest '>
            we are creatives
          </div>
          <div className='mt-20 md:mt-20 lg:mt-32'>
            <Image
            src={"/images/icon-arrow-down.svg"}
            width={36}
            height={114}
            className=''
            alt='arrow'/>
          </div>
        </div>
        <div className=" absolute p-7  top-0 left-0 w-full flex flex-row justify-between">
            <div>
                <Image
                src={"/images/logo.svg"}
                width={124}
                height={24}
                className=' w-full object-cover'
                alt='logo'/>
            </div>
            <div className=' md:flex hidden justify-center items-center text-sm text-white flex-row space-x-10'>
                <Link href={"/"}>
                    About
                </Link>
                <Link href={"/"}>
                    Services
                </Link>
                <Link href={"/"}>
                    Projects
                </Link>
                <Link href={"/"} className=' text-black bg-white px-4 py-2 text-xs rounded-full font-bold uppercase'>
                    Contact
                </Link>
            </div>
            <button className=' md:hidden flex' onClick={()=>{setOpenMenu(!openMenu)}}>
              <Image
              src={"/images/icon-hamburger.svg"}
              width={24}
              height={18}
              alt='menu'/>
            </button>
        </div> 
        {openMenu && (
          <div className='absolute top-20 left-0 w-full md:hidden flex flex-col-reverse justify-center items-center'>
            <div className=' flex justify-center py-10 text-custom-700 space-y-8 font-semibold  items-center flex-col  w-10/12 bg-white'>
              <Link onClick={()=>{setOpenMenu(false)}} href={"/"}>
                  About
              </Link>
              <Link onClick={()=>{setOpenMenu(false)}} href={"/"}>
                  Services
              </Link>
              <Link onClick={()=>{setOpenMenu(false)}} href={"/"}>
                  Projects
              </Link>
              <Link href={"/"} onClick={()=>{setOpenMenu(false)}} className=' text-black bg-custom-200 px-4 py-2  font-fraunces rounded-full font-bold uppercase'>
                  Contact
              </Link>
            </div>
            <div className=' flex w-full justify-end mr-[16.67%]'>
              <div className="w-0 h-0 
                border-t-[40px] border-t-transparent
                border-r-[50px] border-r-white
                border-b-[0px] border-b-transparent">
              </div>
            </div>
          </div>
        )}
      </div>
      <div className=' flex flex-col-reverse md:flex-row'>
        <div className='flex flex-col justify-center items-center  md:w-1/2 w-full'>
          <div className=' md:py-0 py-10 w-10/12 md:w-1/2 space-y-7'>
            <div className=' text-4xl md:text-start text-center font-fraunces text-custom-600 md:text-3xl lg:text-5xl font-black'>
              Transform your brand
            </div>
            <div className=' text-base md:text-start text-center text-custom-700 md:text-xs lg:text-base'>
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
            </div>
            <div className='md:text-start text-center md:text-xs lg:text-base underline-offset-1 underline decoration-custom-1000 hover:decoration-custom-200  decoration-8 cursor-pointer uppercase font-black font-fraunces'>
              Learn More
            </div>
          </div>

        </div>
        <div className=' hidden md:flex w-1/2'>
          <Image
          src={"/images/desktop/image-transform.jpg"}
          width={720}
          height={600}
          className=' object-cover w-full'
          alt='egg'/>
        </div>
        <div className=' md:hidden flex w-full'>
          <Image
          src={"/images/mobile/image-transform.jpg"}
          width={750}
          height={624}
          className=' object-cover w-full'
          alt='egg'/>
        </div>
      </div>
      <div className=' flex flex-col-reverse md:flex-row-reverse'>
        <div className='flex flex-col justify-center items-center  md:w-1/2 w-full'>
          <div className=' md:py-0 py-10 w-10/12 md:w-1/2 space-y-7'>
            <div className='text-4xl md:text-start text-center font-fraunces text-custom-600 md:text-3xl lg:text-5xl font-black'>
              Stand out to the right audience 
            </div>
            <div className=' text-base md:text-start text-center md:text-xs lg:text-base text-custom-700'>
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
            </div>
            <div className='md:text-start text-center  md:text-xs lg:text-base underline-offset-1 underline decoration-custom-1100 hover:decoration-custom-100  decoration-8 cursor-pointer uppercase font-black font-fraunces'>
              Learn More
            </div>
          </div>

        </div>
        <div className=' hidden md:flex w-1/2'>
          <Image
          src={"/images/desktop/image-stand-out.jpg"}
          width={720}
          height={600}
          className=' object-cover w-full'
          alt='glass'/>
        </div>
        <div className=' md:hidden flex w-full'>
          <Image
          src={"/images/mobile/image-stand-out.jpg"}
          width={750}
          height={624}
          className=' object-cover w-full'
          alt='glass'/>
        </div>
      </div>
      <div className=' flex flex-col md:flex-row'>
        <div className=' w-full md:w-1/2 relative'>
          <Image
          src={"/images/desktop/image-graphic-design.jpg"}
          width={720}
          height={600}
          className=' hidden md:flex w-full object-cover'
          alt='cherry'/>
          <Image
          src={"/images/mobile/image-graphic-design.jpg"}
          width={750}
          height={1200}
          className=' md:hidden flex w-full object-cover'
          alt='cherry'/>
          <div className=' bottom-10 text-center absolute items-center w-full flex justify-center flex-col'>
            <div className='text-3xl min-[425px]:text-5xl md:text-3xl lg:text-5xl text-custom-300 font-fraunces font-black'>
              Graphic design
            </div>
            <div className='min-[425px]:text-xl  md:text-xs lg:text-base w-10/12 md:w-1/2 mt-5 lg:mt-10 font-barlow text-custom-300 font-semibold'>
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
            </div>
          </div>
        </div>
        <div className=' w-full md:w-1/2 relative'>
          <Image
          src={"/images/desktop/image-photography.jpg"}
          width={720}
          height={600}
          className=' hidden md:flex w-full object-cover'
          alt='orange'/>
          <Image
          src={"/images/mobile/image-photography.jpg"}
          width={750}
          height={1200}
          className=' md:hidden flex w-full object-cover'
          alt='orange'/>
          <div className=' bottom-10 text-center absolute items-center w-full flex justify-center flex-col'>
            <div className='text-3xl min-[425px]:text-5xl  md:text-3xl lg:text-5xl text-custom-400 font-fraunces font-black'>
              Photography 
            </div>
            <div className='min-[425px]:text-xl  md:text-xs lg:text-base w-10/12 md:w-1/2 mt-5 lg:mt-10 font-barlow text-custom-400 font-semibold'>
              Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
            </div>
          </div>
        </div>
      </div>
      <div className=' flex flex-col justify-center items-center'>
        <div className=' mt-20 md:mt-40 uppercase text-xl md:text-2xl text-custom-900 tracking-widest  font-fraunces font-black'>
          Client testimonials
        </div>
        <div className=' mt-20 md:space-y-0 space-y-16 space-x-0 md:space-x-6 mb-10 md:mb-40 w-9/12 flex flex-col md:flex-row h-auto'>
          <div className=' w-full md:w-1/3 space-y-14 items-center flex flex-col'>
            <div>
              <Image
              src={"/images/image-emily.jpg"}
              width={144}
              height={144}
              className=' w-16 h-16 rounded-full'
              alt='emily'/>
            </div>
            <div className='md:text-sm lg:text-base text-center font-semibold text-custom-700'>
              We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit. 
            </div>
            <div className=' flex flex-col'>
              <div className=' text-center text-custom-600 font-fraunces font-black text-xl'>
                Emily R.
              </div>
              <div className=' text-center text-sm font-semibold mt-3 text-custom-800'>
                Marketing Director
              </div>
            </div>
          </div>
          <div className=' w-full md:w-1/3 space-y-14 items-center flex flex-col'>
            <div>
              <Image
              src={"/images/image-thomas.jpg"}
              width={144}
              height={144}
              className=' w-16 h-16 rounded-full'
              alt='thomas'/>
            </div>
            <div className='md:text-sm lg:text-base text-center font-semibold text-custom-700'>
              Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
            </div>
            <div className=' flex flex-col'>
              <div className=' text-center text-custom-600 font-fraunces font-black text-xl'>
                Thomas S.
              </div>
              <div className=' text-center text-sm font-semibold mt-3 text-custom-800'>
                Chief Operating
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/3 space-y-14 items-center flex flex-col'>
            <div>
              <Image
              src={"/images/image-jennie.jpg"}
              width={144}
              height={144}
              className=' w-16 h-16 rounded-full'
              alt='jennie'/>
            </div>
            <div className='md:text-sm lg:text-base text-center font-semibold text-custom-700'>
              Officer Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended! 
            </div>
            <div className=' flex flex-col'>
              <div className=' text-center text-custom-600 font-fraunces font-black text-xl'>
                Jennie F. 
              </div>
              <div className=' text-center text-sm font-semibold mt-3 text-custom-800'>
                Business Owner
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' grid grid-cols-2 md:grid-cols-4'>
        <div className=' md:flex hidden'>
          <Image
          src={"/images/desktop/image-gallery-milkbottles.jpg"}
          width={720}
          height={894}
          alt='milk'/>
        </div>
        <div className=' md:flex hidden'>
          <Image
          src={"/images/desktop/image-gallery-orange.jpg"}
          width={720}
          height={894}
          alt='orange'/>
        </div>
        <div className=' md:flex hidden'>
          <Image
          src={"/images/desktop/image-gallery-cone.jpg"}
          width={720}
          height={894}
          alt='cone'/>
        </div>
        <div className=' md:flex hidden'>
          <Image
          src={"/images/desktop/image-gallery-sugarcubes.jpg"}
          width={720}
          height={894}
          alt='sugarcubes'/>
        </div>


        <div className=' md:hidden flex'>
          <Image
          src={"/images/mobile/image-gallery-milkbottles.jpg"}
          width={376}
          height={376}
          alt='milk'/>
        </div>
        <div className=' md:hidden flex'>
          <Image
          src={"/images/mobile/image-gallery-orange.jpg"}
          width={376}
          height={376}
          alt='orange'/>
        </div>
        <div className=' md:hidden flex'>
          <Image
          src={"/images/mobile/image-gallery-cone.jpg"}
          width={376}
          height={376}
          alt='cone'/>
        </div>
        <div className=' md:hidden flex'>
          <Image
          src={"/images/mobile/image-gallery-sugar-cubes.jpg"}
          width={376}
          height={376}
          alt='sugarcubes'/>
        </div>
      </div>
      <div className=' flex flex-col bg-custom-500'>
        <div className=' mt-20 text-5xl font-black text-custom-300 flex justify-center items-center'>
          sunnyside
        </div>
        <div className=' mt-16 space-x-10 md:space-x-16 font-semibold  text-custom-300 justify-center flex flex-row'>
          <div className=' hover:text-white cursor-pointer'>
            About
          </div>
          <div className=' hover:text-white cursor-pointer'>
            Services
          </div>
          <div className=' hover:text-white cursor-pointer'>
            Projects
          </div>
        </div>
        <div className=' justify-center items-center space-x-10 flex flex-row mt-32 mb-20'>
          <Link href={"/"}>
            <Image
            src={"/images/icon-facebook.svg"}
            width={30}
            height={30}
            className=' hover:text-white'
            alt='facebook'/>
          </Link>
          <Link href={"/"}>
            <Image
            src={"/images/icon-instagram.svg"}
            width={30}
            height={30}
            alt='instagram'/>
          </Link>
          <Link href={"/"}>
            <Image
            src={"/images/icon-twitter.svg"}
            width={30}
            height={30}
            alt='twitter'/>
          </Link>
          <Link href={"/"}>
            <Image
            src={"/images/icon-pinterest.svg"}
            width={30}
            height={30}
            alt='pinterest'/>
          </Link>
          
        </div>

      </div>
    </div>
  )}