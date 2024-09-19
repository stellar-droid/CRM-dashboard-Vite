// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh
// version : 4.0
// maintainer : Lokesh Wani
// import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";
import Index from "../components/crm/Index";
import Settings from "../components/crm/Settings";
import PricingModel from "../components/crm/PricingModel";
import Dashboard from "../components/crm/Dashboard";
import Leads from "../components/crm/Leads";
import Contacts from "../components/crm/Contacts";
import Companies from "../components/crm/Companies";
import Designations from "../components/crm/Master_Module/User_Management/Designations";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/pricingmodel" element={<PricingModel />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/designation" element={<Designations />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
