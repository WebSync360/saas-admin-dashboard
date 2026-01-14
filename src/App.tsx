import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
// 1. ADD THIS IMPORT (Make sure the path matches where you saved the dashboard)
import Dashboard from "./pages/Dashboard"; 

// 2. REMOVE the old "const Dashboard = () => ..." placeholder code from this file

const PagePlaceholder = ({ title }: { title: string }) => (
  <div className="p-8">
    <h1 className="text-2xl font-bold">{title}</h1>
    <div className="mt-10 h-64 w-full border-2 border-dashed border-slate-200 rounded-3xl flex items-center justify-center text-slate-400 font-medium">
      {title} Content Coming Soon...
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-brand-ash">
        <Sidebar />
        
        <main className="flex-1 flex flex-col min-w-0">
          {/* Header will go here */}
          <Routes>
            {/* 3. This will now use the premium Dashboard file */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<PagePlaceholder title="User Management" />} />
            <Route path="/security" element={<PagePlaceholder title="Security" />} />
            <Route path="/activity" element={<PagePlaceholder title="Activity" />} />
            <Route path="/settings" element={<PagePlaceholder title="Settings" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;