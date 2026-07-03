import React, { createContext, useContext, useState, useEffect } from 'react'

/**
 * Context for managing user role and permissions throughout the application
 */
const UserRoleContext = createContext()

/**
 * UserRoleProvider - Wraps the entire app to provide role management
 * Persists user role in localStorage so it survives page refreshes
 * 
 * @param {React.ReactNode} children - Child components that will have access to the context
 */
export const UserRoleProvider = ({ children }) => {
  // Initialize userRole from localStorage, default to 'Admin' if not found
  const [userRole, setUserRole] = useState(() => {
    const savedRole = localStorage.getItem('bpdacc-user-role')
    return savedRole || 'Admin'
  })

  // Save userRole to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('bpdacc-user-role', userRole)
  }, [userRole])

  // Context value that will be provided to children
  const value = {
    userRole, // Current user role (e.g., 'Admin', 'Nurse', 'Pharmacist', 'Lab Tech')
    setUserRole, // Function to update the user role
    isAdmin: userRole === 'Admin' // Convenience flag for admin-specific features
  }

  return (
    <UserRoleContext.Provider value={value}>
      {children}
    </UserRoleContext.Provider>
  )
}

/**
 * Custom hook to access user role context
 * Must be used within a UserRoleProvider
 * 
 * @returns {Object} Context object with { userRole, setUserRole, isAdmin }
 */
export const useUserRole = () => {
  const context = useContext(UserRoleContext)
  if (!context) {
    throw new Error('useUserRole must be used within a UserRoleProvider')
  }
  return context
}
