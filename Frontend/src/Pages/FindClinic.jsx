import React from 'react';
import { Search, Star, Users } from 'lucide-react';

const FindClinic = () => {
  const clinics = [
    { name: "City Health Clinic", location: "123 Main St, New York", rating: 4.8, doctors: 12, char: 'C' },
    { name: "MedCare Family Practice", location: "456 Oak Ave, Brooklyn", rating: 4.6, doctors: 8, char: 'M' },
    { name: "Sunrise Medical Center", location: "789 Pine Rd, Manhattan", rating: 4.9, doctors: 15, char: 'S' },
  ];

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Find a Clinic</h1>
        <p className="text-slate-500">Browse clinics near you and find the right doctor.</p>
      </header>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search clinics by name or location..." 
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>
        <select className="px-4 py-3 rounded-xl border border-slate-200 bg-white outline-none">
          <option>All Specialties</option>
          <option>Cardiology</option>
          <option>Pediatrics</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clinics.map((clinic, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-32 bg-indigo-50 flex items-center justify-center">
               <span className="text-4xl font-black text-indigo-200">{clinic.char}</span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg">{clinic.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{clinic.location}</p>
              <div className="flex items-center gap-4 text-sm font-medium mb-6">
                <span className="flex items-center gap-1 text-amber-500"><Star size={16} fill="currentColor" /> {clinic.rating}</span>
                <span className="flex items-center gap-1 text-slate-500"><Users size={16} /> {clinic.doctors} doctors</span>
              </div>
              <button className="w-full py-2 bg-indigo-50 text-indigo-600 font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
                View Doctors
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindClinic;