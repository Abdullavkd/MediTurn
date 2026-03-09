import { Clock, LayoutDashboard, Lock, LucideArrowRight, Phone, Timer, User } from 'lucide-react';
import { memo } from 'react';
import LandingCard from '../Components/LandingCard';
import LandingCard2 from '../Components/LandingCard2';
import Navbar from '../Components/Navbar';

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
        {id: 2, number: '02', title: 'Book a Token', paragraph: 'Pick your doctor, select a time slot, and receive your token number instantly.'},
        {id: 3, number: '03', title: 'Track Your Turn', paragraph: "Monitor the live queue from anywhere. Get notified when it's almost your turn."},
        {id: 4, number: '04', title: 'Visit & Check-out', paragraph: "Walk in right when it's your turn. No waiting, no hassle. Rate your experience."},
    ]

    return (
        <div className="overflow-x-hidden">
            <Navbar/>
            {/* Hero Section */}
            <div className='flex items-center flex-col bg-gray-100 pb-12 md:pb-24 px-4'>
                <div className='flex items-center gap-2 border rounded-2xl w-fit px-3 py-1 border-gray-300 mt-12 md:mt-24 bg-white'>
                    <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></div>
                    <p className='text-xs md:text-sm font-medium'>Now Serving 500+ Clinics Nationwide</p>
                </div>

                <div className='mt-8 md:mt-11 px-2'>
                    <h1 className='font-bold text-4xl md:text-6xl text-center leading-tight'>
                        Skip The Waiting <br className="hidden md:block"/> 
                        Room, <span className='text-sky-700'>Not Doctor</span>
                    </h1>
                    <p className='max-w-2xl text-center mt-6 md:mt-8 text-gray-600 text-sm md:text-base mx-auto'>
                        Book your clinic token online and track your position in the queue in real-time. 
                        No more sitting in crowded waiting rooms for hours.
                    </p>
                </div>
                
                <div className='flex flex-col sm:flex-row gap-3 mt-10 w-full sm:w-auto'>
                    <button className='px-6 py-3 bg-sky-600 rounded-lg text-white flex items-center justify-center gap-3 font-semibold'>
                        Book a Token <LucideArrowRight className='size-5'/>
                    </button>
                    <button className='px-6 py-3 border border-gray-300 rounded-lg bg-white font-semibold'>
                        Track Your Queue
                    </button>
                </div>

                {/* Queue UI - Responsive Width */}
                <div className='w-full max-w-2xl bg-white rounded-3xl py-5 shadow-lg mt-12'>
                    <div className='flex justify-between items-center border-b border-gray-100 px-5 md:px-7 py-3'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-2 h-2 rounded-full bg-green-500'></div>
                            <p className='font-semibold text-xs md:text-sm'>Live Queue - City Care Clinic</p>
                        </div>
                        <p className='text-[10px] md:text-xs text-gray-400'>Updated Just Now</p>
                    </div>
                    {/* Token Row Template */}
                    {[
                        { num: 13, label: 'Current Token', status: 'In Progress', color: 'text-cyan-600 font-bold' },
                        { num: 14, label: 'Up Next', status: 'Waiting', color: '' },
                        { num: 15, label: 'You', status: '2 ahead', color: 'bg-sky-50' },
                        { num: 16, label: 'Current Token', status: 'Waiting', color: '' }
                    ].map((item, i) => (
                        <div key={i} className={`flex justify-between items-center border-b border-gray-50 px-5 md:px-7 py-4 ${item.color.includes('bg') ? item.color : ''}`}>
                            <div className='flex gap-3 items-center'>
                                <div className='w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center font-bold text-sky-800'>{item.num}</div>
                                <p className='text-gray-500 text-sm md:text-base'>{item.label}</p>
                            </div>
                            <p className={`text-xs md:text-sm ${item.color.includes('text') ? item.color : 'text-gray-400'}`}>{item.status}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Features Section */}
            <div className='flex flex-col items-center py-16 md:py-24 px-4'>
                <div className='flex flex-col gap-3 mb-12'>
                    <p className='text-center text-sky-600 font-bold tracking-wider text-xs md:text-sm uppercase'>Everything You Need</p>
                    <h2 className='text-center font-bold text-3xl md:text-4xl px-4'>A smarter way to visit the clinic</h2>
                    <p className='text-center text-gray-500 max-w-xl mx-auto'>From booking to check-out, MediQueue streamlines the entire patient journey.</p>
                </div>
                {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
                <div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {bookingWays.map(value => (
                        <LandingCard key={value.id} icon={value.icon} title={value.title} paragraph={value.paragraph}/>
                    ))}
                </div>
            </div>

            {/* Steps Section */}
            <div className='flex flex-col items-center bg-gray-100 py-16 md:py-24 px-4'>
                <div className='flex flex-col gap-3 mb-12'>
                    <p className='text-center text-sky-600 font-bold text-xs md:text-sm uppercase tracking-widest'>How it Works</p>
                    <h2 className='text-center font-bold text-3xl md:text-4xl'>Simple 4-step process</h2>
                </div>
                {/* Responsive Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
                <div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {steps.map(value => (
                        <LandingCard2 key={value.id} number={value.number} title={value.title} paragraph={value.paragraph}/>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className='flex flex-col items-center bg-sky-600 py-16 md:py-24 px-6 text-center'>
                <h2 className='font-bold text-3xl md:text-4xl text-white mb-4'>Ready to skip the wait?</h2>
                <p className='text-white/80 max-w-lg mb-10'>Join thousands of patients who have already simplified their clinic visits with MediQueue.</p>
                <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
                    <button className='px-8 py-3 bg-white text-sky-700 rounded-lg flex items-center justify-center gap-3 font-bold hover:bg-gray-50 transition-colors'>
                        Book Your First Token <LucideArrowRight className='size-5'/>
                    </button>
                    <button className='px-8 py-3 rounded-lg font-semibold text-white border border-white/30 hover:bg-white/10'>
                        View Live Queues
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className='py-12 md:py-16 bg-gray-100 px-6'>
                <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b pb-12 border-gray-300'>
                    <div className='col-span-1 lg:col-span-1'>
                        <div className='font-bold text-2xl flex items-center mb-4'>
                            <div className='h-8 w-8 rounded-full bg-sky-700 flex items-center justify-center text-white mr-2 text-sm'>M</div>
                            MediTurn
                        </div>
                        <p className='text-gray-500 text-sm leading-relaxed'>
                            Skip the waiting room, not the doctor. Book tokens and track your queue in real-time.
                        </p>
                    </div>
                    {['Product', 'Support', 'Legal'].map((title, idx) => (
                        <div key={idx} className='flex flex-col gap-3'>
                            <h3 className='font-bold text-gray-900'>{title}</h3>
                            <ul className='flex flex-col gap-2'>
                                {['Link 1', 'Link 2', 'Link 3', 'Link 4'].map((item, i) => (
                                    <li key={i} className='text-sm text-gray-500 hover:text-sky-600 cursor-pointer transition-colors'>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-8 gap-4 text-xs md:text-sm text-gray-400'>
                    <p>© 2026 MediQueue. All rights reserved.</p>
                    <p>Built with care for patients and clinics.</p>
                </div>
            </footer>
        </div>
    );
};

export default memo(LandigPage);