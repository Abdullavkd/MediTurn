import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, Calendar, Activity, User, LogOut } from 'lucide-react';

// Reusable content for both Mobile and Desktop
export const SidebarContent = ({ setOpen }) => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/patient-dashboard" },
    { icon: <PlusCircle size={20} />, label: "Book Appointment", path: "/find-clinic" },
    { icon: <Calendar size={20} />, label: "My Appointments", path: "/my-appointments" },
    { icon: <Activity size={20} />, label: "Live Queue", path: "/live-queue" },
    { icon: <User size={20} />, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="flex flex-col h-full bg-[#1E293B] text-slate-300">
      <div className="p-6">
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <Activity className="text-indigo-500" /> MediQueue
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setOpen && setOpen(false)} // Closes mobile menu on click
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl transition-all
              ${isActive ? 'bg-indigo-600 text-white shadow-lg' : 'hover:bg-slate-800'}
            `}
          >
            {item.icon} <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-red-400 transition-colors">
          <LogOut size={20} /> <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};