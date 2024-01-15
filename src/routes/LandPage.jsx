import React from 'react'
import meetup from '../assets/images/meetup.png'
import Card from '../component/Card'
import pema from '../assets/images/pema.jpg'
import bipin from '../assets/images/bipin.jpg'
import milan from '../assets/images/milan.jpg'

const LandPage = () => {

  const name1 ={
    name : "Pema",
    age : 21,
    faculty : 'CSIT',
    professional : 'FrontEnd Developer',
    imgurl : pema,
  }
  const name2 ={
    name : "Bipin",
    age : 21,
    faculty : 'CSIT',
    professional : 'FrontEnd-Developer',
    imgurl : bipin
  }
  const name3 ={
    name : "Milan",
    age : 21,
    faculty : 'CSIT',
    professional : 'UI/UX Developer',
    imgurl : milan
  }
  return (
    <div className='mx-auto mt-10 p-4'>
        <div className='flex justify-center gap-8 items-center'>
            <div className='flex flex-col justify-center  '> 
                <div className='text-4xl font-bold'>
                <h3>The people platform—Where</h3>
                <h3>interests become friendships</h3>
                </div>
                <br />
                
         <span>Whatever your interest, from hiking and reading to networking </span> 
         <span>  and skill sharing, there are thousands of people who share it on Meetup.</span>
         <span> Events are happening every day—sign up to join the fun.</span>
         <br />
         <div>
         <button className='bg-black  text-white p-2 rounded-md'>Join meetup</button>
         </div>
            </div>
            <img src={meetup} alt="right img" />
        </div>
         
  {/* //Card Component here */}
      <div className='flex justify-center gap-10 rounded-md items-center'>
             <Card userData={name1}  /> 
             <Card userData={name2} /> 
             <Card userData={name3} /> 
      </div>

        {/* //Footer part */}
        <div>
        <section class="relative overflow-hidden py-10">
  <div class="relative z-10 mx-auto max-w-7xl px-4">
    <div class="-m-6 flex flex-wrap">
      <div class="w-full p-6 md:w-1/2 lg:w-5/12">
        <div class="flex h-full flex-col justify-between">
          <div class="mb-4 inline-flex items-center">
            <svg
              width="40"
              height="46"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                fill="black"
              ></path>
            </svg>
            <span class="ml-4 text-lg font-bold">Notify-360</span>
          </div>
          <div>
            <p class="mb-4  text-base font-medium">
              Notify-360 stay alert stay tuned
            </p>
            <p class="text-sm text-gray-600">
              © Copyright 2022. All Rights Reserved .
            </p>
          </div>
        </div>
      </div>
      <div class="w-full p-6 md:w-1/2 lg:w-2/12">
        <div class="h-full">
          <h3 class="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
            Company
          </h3>
          <ul>
            <li class="mb-4">
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Features
              </a>
            </li>
            <li class="mb-4">
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li class="mb-4">
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Affiliate Program
              </a>
            </li>
            <li>
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Press Kit
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full p-6 md:w-1/2 lg:w-2/12">
        <div class="h-full">
          <h3 class="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
            Support
          </h3>
          <ul>
            <li class="mb-4">
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Account
              </a>
            </li>
            <li class="mb-4">
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Help
              </a>
            </li>
            <li class="mb-4">
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Customer Support
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full p-6 md:w-1/2 lg:w-3/12">
        <div class="h-full">
          <h3 class="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
            Legals
          </h3>
          <ul>
            <li class="mb-4">
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li class="mb-4">
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                class=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="#"
              >
                Licensing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    </div>
  )
}

export default LandPage
