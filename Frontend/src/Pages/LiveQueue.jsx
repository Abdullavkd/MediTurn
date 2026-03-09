import React from 'react';

const LiveQueue = () => {
  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Live Queue Tracking</h1>
        <p className="text-slate-500">Track your real-time position in the queue.</p>
      </header>

      {/* Hero Tracking Card */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center mb-6">
        <div className="flex items-center justify-center gap-2 text-emerald-500 font-bold text-sm mb-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          NOW SERVING
        </div>
        <h2 className="text-6xl font-black text-slate-900 mb-2 tracking-tight">T-003</h2>
        <p className="text-slate-500">Dr. Sarah Johnson - Cardiology</p>
      </div>

      {/* Position Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatusBox label="Your Token" value="T-007" color="bg-indigo-50 text-indigo-700" />
        <StatusBox label="Your Position" value="#4" />
        <StatusBox label="Estimated Wait" value="~40 min" />
      </div>

      {/* Upcoming List */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
        <div className="p-6 border-b"><h3 className="font-bold">Upcoming Tokens</h3></div>
        <div className="divide-y">
           <TokenItem num="1" token="T-004" name="Sarah Connor" status="Next" />
           <TokenItem num="2" token="T-005" name="Tom Hardy" status="Waiting" />
        </div>
      </div>
    </div>
  );
};

const StatusBox = ({ label, value, color = "bg-white" }) => (
  <div className={`${color} p-6 rounded-2xl border border-slate-200 text-center`}>
    <p className="text-xs text-slate-400 font-medium uppercase mb-1">{label}</p>
    <p className="text-2xl font-black text-slate-900">{value}</p>
  </div>
);

const TokenItem = ({ num, token, name, status }) => (
  <div className="p-4 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">{num}</span>
      <div>
        <p className="font-bold text-sm">{token}</p>
        <p className="text-xs text-slate-400">{name}</p>
      </div>
    </div>
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${status === 'Next' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
      {status}
    </span>
  </div>
);

export default LiveQueue;