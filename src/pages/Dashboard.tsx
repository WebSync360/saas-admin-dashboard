import { motion } from "framer-motion";
import { 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight, 
  Zap, 
  Globe, 
  Lock,
  type LucideIcon
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';

// --- TYPES ---
interface StatCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

// --- MOCK DATA ---
const barData = [
  { name: 'Mon', active: 400 }, { name: 'Tue', active: 300 },
  { name: 'Wed', active: 600 }, { name: 'Thu', active: 800 },
  { name: 'Fri', active: 500 }, { name: 'Sat', active: 900 },
  { name: 'Sun', active: 700 },
];

const pieData = [
  { name: 'Admin', value: 400 },
  { name: 'Editor', value: 300 },
  { name: 'Viewer', value: 300 },
];

const COLORS = ['#DC2626', '#0F172A', '#64748B'];

// --- SUB-COMPONENTS ---
const StatCard = ({ label, value, change, isPositive, icon: Icon }: StatCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-6 rounded-3xl border border-slate-100 shadow-premium flex justify-between items-start hover:shadow-lg transition-all duration-300"
  >
    <div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <h3 className="text-3xl font-bold mt-2 text-brand-charcoal">{value}</h3>
      <div className={`flex items-center gap-1 mt-2 ${isPositive ? 'text-emerald-600' : 'text-brand-red'}`}>
        {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        <span className="text-xs font-bold">{change}</span>
        <span className="text-slate-400 font-normal text-[10px] ml-1">vs last week</span>
      </div>
    </div>
    <div className="p-4 bg-brand-ash rounded-2xl">
      <Icon className="w-6 h-6 text-brand-red" />
    </div>
  </motion.div>
);

// --- MAIN DASHBOARD ---
export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      
      {/* 1. Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-brand-charcoal">Global Overview</h1>
          <p className="text-slate-500 font-medium">Real-time status of your Axiom ecosystem.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-brand-charcoal text-white rounded-xl text-sm font-bold shadow-lg hover:bg-black transition-all flex items-center gap-2">
            <Zap size={16} className="text-brand-red fill-brand-red" /> Upgrade Plan
          </button>
        </div>
      </div>

      {/* 2. Three Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard label="Total Reach" value="2.4M" change="+14.2%" isPositive={true} icon={Globe} />
        <StatCard label="Security Rating" value="98.2%" change="-0.4%" isPositive={false} icon={Lock} />
        <StatCard label="Server Load" value="42%" change="+2.1%" isPositive={true} icon={Activity} />
      </div>

      {/* 3. Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Bar Chart */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-premium">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg text-brand-charcoal">Engagement Velocity</h3>
            <select className="bg-slate-50 text-xs font-bold p-2 rounded-lg border-none focus:ring-2 focus:ring-brand-red">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94A3B8', fontSize: 12}} 
                  dy={10} 
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: '#F8FAFC'}} 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="active" fill="#DC2626" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-premium flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg text-brand-charcoal">Role Distribution</h3>
            <button className="text-slate-400 hover:text-brand-red transition">
              <Activity size={18}/>
            </button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-6 mt-4">
            {pieData.map((entry, i) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                <span className="text-xs font-bold text-slate-500">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Activity Log - Bottom Section */}
      <div className="bg-brand-charcoal rounded-[2rem] p-8 text-white overflow-hidden relative">
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold">Live System Audit</h3>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Live Monitoring</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { event: 'Root Access', user: 'admin_01', time: '2m ago', color: 'bg-brand-red' },
              { event: 'API Key Rotated', user: 'system_bot', time: '14m ago', color: 'bg-slate-400' },
              { event: 'New IP Detected', user: 'dev_user_9', time: '1h ago', color: 'bg-brand-red' },
              { event: 'DB Backup', user: 'automated', time: '3h ago', color: 'bg-slate-400' },
            ].map((log, i) => (
              <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-2xl hover:bg-white/10 transition cursor-default">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${log.color}`} />
                  <span className="text-xs font-bold tracking-tight">{log.event}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[10px] text-slate-400">{log.user}</span>
                  <span className="text-[10px] text-slate-500 italic">{log.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 blur-[100px] -mr-32 -mt-32 rounded-full" />
      </div>
    </div>
  );
}