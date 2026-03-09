import React from 'react';
import { XCircle } from 'lucide-react';

const MyAppointments = () => {
  const appointments = [
    { id: 'T-001', doctor: "Dr. Sarah Johnson", date: "2026-02-26", time: "09:00 AM", status: "Confirmed", color: "text-emerald-600 bg-emerald-50" },
    { id: 'T-002', doctor: "Dr. Michael Chen", date: "2026-02-26", time: "10:30 AM", status: "Waiting", color: "text-amber-600 bg-amber-50" },
    { id: 'T-003', doctor: "Dr. Emily Williams", date: "2026-02-26", time: "11:00 AM", status: "Completed", color: "text-slate-500 bg-slate-100" },
    { id: 'T-005', doctor: "Dr. Lisa Davis", date: "2026-02-27", time: "03:30 PM", status: "Cancelled", color: "text-red-600 bg-red-50" },
  ];

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">My Appointments</h1>
        <p className="text-slate-500">View and manage all your upcoming and past appointments.</p>
      </header>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Doctor</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Time</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Token</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {appointments.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">{app.doctor}</td>
                  <td className="p-4 text-slate-500 text-sm">{app.date}</td>
                  <td className="p-4 text-slate-500 text-sm">{app.time}</td>
                  <td className="p-4 font-mono font-bold text-indigo-600 text-sm">{app.id}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${app.color}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    {app.status !== 'Completed' && app.status !== 'Cancelled' && (
                      <button className="text-red-500 hover:text-red-700 flex items-center gap-1 ml-auto text-xs font-bold">
                        <XCircle size={14} /> Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;