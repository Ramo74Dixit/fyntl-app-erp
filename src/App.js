import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';  // Sidebar component

// Import other components for routes
import Dashboard from './components/Dashboard';
import AddBusiness from './components/AddBusiness';
import YourBusiness from './components/YourBusiness';
import GenerateBill from './components/GenerateNewBill';
import GeneratedBills from './components/GeneratedBills';
import GstInvoice from './components/GstInvoice';
import EwayBills from './components/EwayBills';
import Payments from './components/Payments';
import Activity from './components/Activity';
import Users from './components/Users';
import Messages from './components/Messages';
import Helps from './components/Helps';
import Settings from './components/Settings';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-business" element={<AddBusiness />} />
            <Route path="/your-business" element={<YourBusiness />} />
            <Route path="/generate-bill" element={<GenerateBill />} />
            <Route path="/generated-bills" element={<GeneratedBills />} />
            <Route path="/gst-invoice" element={<GstInvoice />} />
            <Route path="/eway-bills" element={<EwayBills />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/users" element={<Users />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/helps" element={<Helps />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
