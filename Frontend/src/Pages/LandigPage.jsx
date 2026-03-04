import { Clock, LayoutDashboard, Lock, LucideArrowRight, Phone, Timer, User } from 'lucide-react';
import { memo } from 'react';
import LandingCard from '../Components/LandingCard';
import LandingCard2 from '../Components/LandingCard2';

const LandigPage = () => {

    const bookingWays = [
        {id: 1, icon: <Timer/>, title: 'Instant Token Booking', paragraph: 'Book your consultation token from home. Choose your preferred doctor, time slot, and get an instant confirmation.'},
        {id: 2, icon: <Clock/>, title: 'Real-Time Queue Tracking', paragraph: 'Know exactly when your turn is coming. Track live queue updates and estimated wait times from your phone.'},
        {id: 3, icon: <Phone/>, title: 'Mobile-First Experience', paragraph: 'Designed for your phone first. Get push notifications when your turn is approaching so you never miss your slot.'},
        {id: 4, icon: <User/>, title: 'Multi-Doctor Support', paragraph: 'Book with any available doctor across departments. Compare wait times and choose the fastest queue.'},
        {id: 5, icon: <Lock/>, title: 'Secure & Private', paragraph: 'Your health data stays private. HIPAA-compliant platform with end-to-end encryption for all patient data.'},
        {id: 6, icon: <LayoutDashboard/>, title: 'Clinic Dashboard', paragraph: 'Clinics get a powerful dashboard to manage patient flow, reduce no-shows, and optimize scheduling.'},
    ]

    const steps = [
        {id: 1, number: '01', title: 'Choose Your Clinic', paragraph: 'Search and select from our network of verified clinics and hospitals near you.'},
        {id: 1, number: '02', title: 'Book a Token', paragraph: 'Pick your doctor, select a time slot, and receive your token number instantly.'},
        {id: 1, number: '03', title: 'Track Your Turn', paragraph: "Monitor the live queue from anywhere. Get notified when it's almost your turn."},
        {id: 1, number: '04', title: 'Visit & Check-out', paragraph: "Walk in right when it's your turn. No waiting, no hassle. Rate your experience."},
    ]
  return (
    <div>
      <div className='flex items-center flex-col bg-gray-100 pb-21'>

        {/* Div for short title */}
        <div className='flex items-center gap-2 border rounded-2xl w-fit px-3 py-1 border-gray-300 mt-25'>
            <div className='w-2 h-2 rounded-full bg-green-500 shadow-2xl'></div>
            <p>Now Serving 500+ Clincs Nationwide</p>
        </div>

        {/* Main Title */}
        <div className='mt-11'>
            <h1 className='font-bold text-6xl text-center'>Skip The Waiting</h1>
            <h1 className='font-bold text-6xl text-center'>Room, <span className='text-sky-700'>Not Docotor</span></h1>
            <p className='max-w-201 text-center mt-11 text-gray-600'>Book your clinic token online and track your position in the queue in real-time. No more sitting in crowded waiting rooms for hours. No more thinking, Join fast and save your time.</p>
        </div>
        
        {/* Buttons */}
        <div className='flex gap-3 mt-11'>
            <button className='px-5 py-2 bg-sky-600 rounded-lg text-white flex gap-3 font-semibold m-auto'>Book a Token  <LucideArrowRight className='size-5 m-auto'/></button>
            <button className='px-5 py-2 border border-gray-300 rounded-lg bg-white font-semibold'>Track Your Queue</button>
        </div>

        {/* Queue */}
        <div className='w-201 bg-white rounded-3xl py-5 shadow mt-11'>
            <div className='flex justify-between items-center border-b border-gray-400 px-7 py-3'>
                <div className='flex gap-2 items-center'>
                    <div className='w-2 h-2 rounded-full bg-green-500 shadow-2xl'></div>
                    <p className='font-semibold text-sm'>Live Queue - City Care Clinic</p>
                </div>
                <p className='text-sm'>Updated Just Now</p>
            </div>
            <div className='flex justify-between items-center border-b border-gray-400 px-7 py-4'>
                <div className='flex gap-2 items-center'>
                    <div className='w-9 h-9 rounded-lg bg-sky-200 shadow-2xl flex items-center justify-center font-bold'>13</div>
                    <p className='text-gray-500'>Current Token</p>
                </div>
                <p className='text-sm font-bold text-cyan-600'>In Progress</p>
            </div>
            <div className='flex justify-between items-center border-b border-gray-400 px-7 py-4'>
                <div className='flex gap-2 items-center'>
                    <div className='w-9 h-9 rounded-lg bg-sky-200 shadow-2xl flex items-center justify-center font-bold'>14</div>
                    <p className='text-gray-500'>Up Next</p>
                </div>
                <p className='text-sm'>Waiting</p>
            </div>
            <div className='flex justify-between items-center border-b border-gray-400 px-7 py-4 bg-sky-50'>
                <div className='flex gap-2 items-center'>
                    <div className='w-9 h-9 rounded-lg bg-sky-200 shadow-2xl flex items-center justify-center font-bold'>15</div>
                    <p className='text-gray-500'>You</p>
                </div>
                <p className='text-sm'>2 ahead</p>
            </div>
            <div className='flex justify-between items-center px-7 py-4'>
                <div className='flex gap-2 items-center'>
                    <div className='w-9 h-9 rounded-lg bg-sky-200 shadow-2xl flex items-center justify-center font-bold'>16</div>
                    <p className='text-gray-500'>Current Token</p>
                </div>
                <p className='text-sm'>Waiting</p>
            </div>
        </div>
      </div>

      {/* Next Page */}
      <div className='flex flex-col items-center py-21'>
        <div className='flex flex-col gap-3'>
            <p className='text-center text-sky-600 font-bold'>EVERYTHING YOU NEED</p>
            <h1 className='text-center font-bold text-4xl'>A smarter way to visit the clinic</h1>
            <p className='text-center'>From booking to check-out, MediQueue streamlines the entire patient journey.</p>
        </div>
        <div className='w-330 grid grid-cols-3 gap-5 mt-11'>
            {bookingWays.map(value => (
                <LandingCard key={value.id} icon={value.icon} title={value.title} paragraph={value.paragraph}/>
            ))}
        </div>
      </div>

      {/* Next Page */}
      <div className='flex flex-col items-center bg-gray-100 py-21'>
        <div className='flex flex-col gap-3'>
            <p className='text-center text-sky-600 font-bold'>EVERYTHING YOU NEED</p>
            <h1 className='text-center font-bold text-4xl'>A smarter way to visit the clinic</h1>
            <p className='text-center'>From booking to check-out, MediQueue streamlines the entire patient journey.</p>
        </div>
        <div className='w-330 grid grid-cols-4 gap-5 mt-11'>
            {steps.map(value => (
                <LandingCard2 key={value.id} number={value.number} title={value.title} paragraph={value.paragraph}/>
            ))}
        </div>
      </div>

      {/* Next Page */}
      <div className='flex flex-col items-center bg-sky-600 py-21'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-center font-bold text-4xl text-white'>Ready to skip the wait?</h1>
            <p className='text-center text-white max-w-131'>Join thousands of patients who have already simplified their clinic visits with MediQueue.</p>
        </div>

        {/* Buttons */}
        <div className='flex gap-3 mt-7'>
            <button className='px-5 py-2 bg-white rounded-lg flex gap-3 font-semibold m-auto'>Book Your First Token  <LucideArrowRight className='size-5 m-auto'/></button>
            <button className='px-5 py-2 rounded-lg font-semibold text-white'>View Live Queues</button>
        </div>
      </div>

      {/* Next Page */}
      <div className='flex flex-col items-center py-11 bg-gray-100'>
        <div className='grid grid-cols-4 gap-11 w-330 border-b pb-5 border-gray-400'>
            <div>
                <div className='font-bold text-2xl flex items-center mb-3'><div className='h-7 w-7 rounded-full bg-sky-700 flex items-center justify-center text-white'><p>M</p></div>ediTurn</div>
                <p>Skip the waiting room, not the doctor. Book tokens and track your queue in real-time.</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='font-bold'>Product</h3>
                <p className='text-sm text-gray-600 hover:text-black cursor-pointer'>Book Token</p>
                <p className='text-sm text-gray-600 hover:text-black cursor-pointer'>Track Queue</p>
                <p className='text-sm text-gray-600 hover:text-black cursor-pointer'>For Clinics</p>
                <p className='text-sm text-gray-600 hover:text-black cursor-pointer'>Pricing</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='font-bold'>Support</h3>
                <p className='text-sm text-gray-600 hover:text-black cursor-pointer'>Help Center</p>
                <p className='text-sm text-gray-600 hover:text-black cursor-pointer'>Contact Us</p>
                <p className='text-sm text-gray-600 hover:text-black cursor-pointer'>FAQs</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='font-bold'>Legal</h3>
                <p className='text-sm text-gray-600 hover:text-black cursor-pointer'>Privacy Policy</p>
                <p className='text-sm text-gray-600 hover:text-black cursor-pointer'>Terms of Services</p>
                <p className='text-sm text-gray-600 hover:text-black cursor-pointer'>HIPAA Compliance</p>
            </div>
        </div>
        <div className='flex justify-between w-330 py-5 text-sm'>
            <p>2026 MediQueue. All rights reserved.</p>
            <p>Built with care for patients and clinics.</p>
        </div>
      </div>
    </div>
  );
};

export default memo(LandigPage);