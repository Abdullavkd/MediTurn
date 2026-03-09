import React from 'react';
import { LayoutDashboard, Calendar, Activity, User, PlusCircle, Clock } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Welcome back, John</h1>
          <p className="text-slate-500">Here is an overview of your upcoming appointments and queue status.</p>
        </header>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600"><Calendar size={24} /></div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase">Upcoming Appointment</p>
              <p className="font-bold">Feb 26, 09:00 AM</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 text-xl font-bold">#</div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase">Your Token</p>
              <p className="font-bold">T-007</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600"><Activity size={24} /></div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase">Queue Status</p>
              <p className="font-bold">Position #4</p>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-indigo-300 transition-colors cursor-pointer group">
            <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-indigo-50 transition-colors text-indigo-600"><PlusCircle /></div>
            <div>
              <p className="font-bold">Book New Appointment</p>
              <p className="text-xs text-slate-400">Find a clinic and schedule your visit</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-emerald-300 transition-colors cursor-pointer group">
            <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-emerald-50 transition-colors text-emerald-600"><Activity /></div>
            <div>
              <p className="font-bold">Track Live Queue</p>
              <p className="text-xs text-slate-400">View your real-time queue position</p>
            </div>
          </div>
        </div>

        {/* Recent Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="font-bold">Recent Appointments</h2>
            <button className="text-indigo-600 text-sm font-bold hover:underline">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-slate-100">
                <AppointmentRow name="Dr. Sarah Johnson" date="Feb 26 at 09:00 AM" status="Confirmed" color="text-indigo-600 bg-indigo-50" />
                <AppointmentRow name="Dr. Michael Chen" date="Feb 20 at 10:30 AM" status="Completed" color="text-emerald-600 bg-emerald-50" />
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

const AppointmentRow = ({ name, date, status, color }) => (
  <tr className="hover:bg-slate-50 transition-colors">
    <td className="p-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs">
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-xs text-slate-400">{date}</p>
      </div>
    </td>
    <td className="p-4 text-right">
      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${color}`}>
        {status}
      </span>
    </td>
  </tr>
);

export default Dashboard;