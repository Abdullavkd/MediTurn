import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';
import { SidebarContent } from './Sidebar';

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      
      {/* 1. DESKTOP SIDEBAR */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 border-r">
        <SidebarContent />
      </aside>

      {/* 2. MOBILE HAMBURGER OVERLAY */}
      {/* 2. MOBILE HAMBURGER OVERLAY (The "Sheet") */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          
          {/* Sliding Menu */}
          <div className="absolute left-0 top-0 h-full w-72 bg-[#1E293B] animate-in slide-in-from-left duration-300">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute right-4 top-4 text-white p-2"
            >
              <X size={24} />
            </button>
            <SidebarContent setOpen={setIsMobileMenuOpen} />
          </div>
        </div>
      )}

      {/* 3. MAIN CONTENT AREA */}
      <main className="flex-1 md:ml-64 w-full">
        {/* Mobile Header: Menu icon is now on the LEFT */}
        <header className="md:hidden flex items-center p-4 bg-white border-b sticky top-0 z-30">
          {/* Menu Button moved to the front */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 bg-slate-100 rounded-lg text-slate-600 mr-4"
          >
            <Menu size={20} />
          </button>

          {/* Logo follows the button */}
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Activity className="text-indigo-600" /> MediQueue
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;