import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  ShieldCheck, 
  Settings, 
  Activity,
  LogOut 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Users", href: "/users", icon: Users },
  { name: "Security", href: "/security", icon: ShieldCheck },
  { name: "Activity", href: "/activity", icon: Activity },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-brand-charcoal border-r border-white/5 sticky top-0">
      {/* Brand Logo Section */}
      <div className="flex h-20 items-center gap-3 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-red shadow-[0_0_15px_rgba(220,38,38,0.3)]">
          <div className="h-4 w-4 border-2 border-white rounded-sm rotate-45" />
        </div>
        <span className="text-xl font-bold tracking-tighter text-white uppercase">
          HOLCOMB - RAY
        </span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 space-y-1 px-4 mt-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) => cn(
              "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
              isActive 
                ? "bg-white/10 text-white shadow-sm" 
                : "text-slate-400 hover:bg-white/5 hover:text-white"
            )}
          >
            {({ isActive }) => (
              <>
                <item.icon 
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-brand-red" : "text-slate-500 group-hover:text-slate-300"
                  )} 
                />
                {item.name}
                {isActive && (
                  <div className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#dc2626]" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-white/5">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-red-500/10 hover:text-brand-red transition-all">
          <LogOut className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}