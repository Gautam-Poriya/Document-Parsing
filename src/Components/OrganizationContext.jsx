// OrganizationContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const OrganizationContext = createContext();

export const useOrganization = () => useContext(OrganizationContext);

export const OrganizationProvider = ({ children }) => {
  const [organizations, setOrganizations] = useState(() => {
    // Load organizations from localStorage on initial load
    const savedOrgs = localStorage.getItem("organizations");
    return savedOrgs ? JSON.parse(savedOrgs) : [];
  });

  // Save organizations to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("organizations", JSON.stringify(organizations));
  }, [organizations]);

  const addOrganization = (name) => {
    const newOrg = { id: organizations.length + 1, name };
    setOrganizations([...organizations, newOrg]);
  };

  return (
    <OrganizationContext.Provider value={{ organizations, addOrganization }}>
      {children}
    </OrganizationContext.Provider>
  );
};
