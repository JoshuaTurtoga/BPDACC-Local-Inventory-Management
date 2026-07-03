import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserRoleProvider } from './context/UserRoleContext'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import Requisition from './pages/Requisition'
import RequisitionRequests from './pages/RequisitionRequests'
import Reports from './pages/Reports'
import Users from './pages/Users'
import Settings from './pages/Settings'
import './App.css'

/**
 * Main application component for BPDACC Inventory Management System
 * Sets up:
 * - User role context for permission management
 * - React Router for page navigation
 * - Sidebar navigation + main content area
 */
function App() {
  return (
    <UserRoleProvider> {/* Wraps entire app to provide user role context */}
      <Router> {/* Manages client-side routing */}
        <div className="app">
          <Sidebar /> {/* Navigation sidebar, changes based on user role */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} /> {/* Home page */}
              <Route path="/inventory" element={<Inventory />} /> {/* Inventory & batch management */}
              <Route path="/requisition" element={<Requisition />} /> {/* Requisition form creation */}
              <Route path="/requisition-requests" element={<RequisitionRequests />} /> {/* Admin requisition approvals */}
              <Route path="/reports" element={<Reports />} /> {/* Reports page */}
              <Route path="/users" element={<Users />} /> {/* User management */}
              <Route path="/settings" element={<Settings />} /> {/* System settings */}
            </Routes>
          </main>
        </div>
      </Router>
    </UserRoleProvider>
  )
}

export default App
