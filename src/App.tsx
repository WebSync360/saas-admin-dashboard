import { Search, Users, Activity, ShieldCheck, MoreHorizontal, ArrowUpRight, Bell } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-ash text-brand-charcoal flex font-sans">
      
      {/* 1. Sidebar - Lean & Dark */}
      <aside className="hidden lg:flex w-64 bg-brand-charcoal flex-col p-6 sticky top-0 h-screen">
        <div className="flex items-center gap-3 px-2 mb-10">
          <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center">
            <div className="w-4 h-1 bg-white rounded-full rotate-45" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">AXIOM</span>
        </div>
        
        <nav className="flex-1 space-y-2">
          {['Dashboard', 'Users', 'Analytics', 'Settings'].map((item, i) => (
            <button key={item} className={`w-full text-left px-4 py-3 rounded-lg text-sm transition ${i === 0 ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* 2. Search & Header */}
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search across users and logs..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all text-sm"
            />
          </div>
          <div className="flex items-center gap-5">
            <div className="relative cursor-pointer">
               <Bell size={20} className="text-slate-500" />
               <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-red rounded-full ring-2 ring-white"></span>
            </div>
            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right">
                <p className="text-xs font-bold leading-none">Alex Rivera</p>
                <p className="text-[10px] text-slate-500 mt-1">Super Admin</p>
              </div>
              <div className="w-10 h-10 bg-brand-charcoal rounded-full border-2 border-white shadow-sm"></div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 max-w-[1400px] mx-auto w-full">
          
          <div className="mb-10">
            <h1 className="text-2xl font-bold tracking-tight">System Overview</h1>
            <p className="text-slate-500 text-sm">Monitor user lifecycle and security metrics.</p>
          </div>

          {/* 3 Detailed Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { label: 'Total Users', value: '24,512', grow: '+12%', icon: Users },
              { label: 'Active Sessions', value: '1,804', grow: '+3%', icon: Activity },
              { label: 'Security Health', value: '99.9%', grow: 'Stable', icon: ShieldCheck },
            ].map((stat, i) => (
              <div key={i} className="bg-brand-surface p-6 rounded-2xl shadow-premium border border-slate-100 flex justify-between items-start">
                <div>
                  <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                  <h3 className="text-3xl font-bold mt-2">{stat.value}</h3>
                  <div className="flex items-center gap-1 mt-3">
                    <span className="text-brand-red text-xs font-bold bg-brand-red/10 px-2 py-0.5 rounded-full">{stat.grow}</span>
                    <span className="text-slate-400 text-[10px]">vs. last 30d</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <stat.icon className="text-brand-red" size={24} />
                </div>
              </div>
            ))}
          </div>

          {/* Lower Section: User Table & Security Widget */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* User Table (Spans 2 columns) */}
            <div className="xl:col-span-2 bg-brand-surface rounded-2xl shadow-premium border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                <h3 className="font-bold text-lg">Recent Users</h3>
                <button className="text-brand-red text-sm font-semibold hover:underline">Export CSV</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50/50 text-slate-500 text-[11px] uppercase tracking-wider">
                      <th className="px-6 py-4 font-semibold">User</th>
                      <th className="px-6 py-4 font-semibold">Role</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[1, 2, 3, 4].map((item) => (
                      <tr key={item} className="hover:bg-slate-50/50 transition">
                        <td className="px-6 py-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                          <span className="text-sm font-medium">User {item}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 font-medium italic">Editor</td>
                        <td className="px-6 py-4">
                          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">Active</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <MoreHorizontal className="text-slate-400 cursor-pointer ml-auto" size={18} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Security Activity (The Mystery Widget) */}
            <div className="bg-brand-surface rounded-2xl shadow-premium border border-slate-100 p-6">
              <h3 className="font-bold text-lg mb-6">Live Logs</h3>
              <div className="space-y-6">
                {[1, 2, 3, 4].map((log) => (
                  <div key={log} className="flex gap-4 group cursor-pointer">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shadow-[0_0_8px_rgba(220,38,38,0.5)] group-hover:scale-150 transition"></div>
                    <div>
                      <p className="text-sm font-medium leading-none">Suspicious Login Attempt</p>
                      <p className="text-[11px] text-slate-400 mt-1">IP: 192.168.1.{log} • 2m ago</p>
                    </div>
                    <ArrowUpRight size={14} className="ml-auto text-slate-300" />
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-3 bg-slate-50 text-slate-500 text-xs font-bold rounded-xl hover:bg-slate-100 transition">
                VIEW FULL SECURITY AUDIT
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}