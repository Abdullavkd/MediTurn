import React from 'react';
import { Save, User, Mail, Phone, MapPin } from 'lucide-react';

const Profile = () => {
  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Profile</h1>
        <p className="text-slate-500">Manage your personal information and account settings.</p>
      </header>

      <div className="max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Profile Header Card */}
        <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-indigo-100">
            JP
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-slate-900">John Patient</h2>
            <p className="text-sm text-slate-400">Patient ID: PAT-2024-0847</p>
          </div>
        </div>

        {/* Form Fields */}
        <form className="p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileInput label="Full Name" icon={<User size={18}/>} value="John Patient" />
            <ProfileInput label="Email" icon={<Mail size={18}/>} value="john@example.com" type="email" />
            <ProfileInput label="Phone" icon={<Phone size={18}/>} value="+1 (555) 123-4567" />
            <ProfileInput label="Address" icon={<MapPin size={18}/>} value="123 Main St, New York" />
          </div>

          <div className="pt-4">
            <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-all active:scale-95 shadow-lg shadow-indigo-100">
              <Save size={18} /> Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ProfileInput = ({ label, icon, value, type = "text" }) => (
  <div className="space-y-1.5">
    <label className="text-sm font-bold text-slate-700 ml-1">{label}</label>
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
        {icon}
      </div>
      <input 
        type={type} 
        defaultValue={value}
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-700"
      />
    </div>
  </div>
);

export default Profile;