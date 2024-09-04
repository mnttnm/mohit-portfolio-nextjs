"use client";

import { links } from "@/lib/data";
import React, { createContext, useState } from "react";

export type ActiveSession = (typeof links)[number]["name"];

type ActiveSectionContextType = {
  activeSession: ActiveSession;
  setActiveSession: React.Dispatch<
    React.SetStateAction<ActiveSession>
  >;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSession, setActiveSession] =
    useState<ActiveSession>("Home");

  return (
    <ActiveSectionContext.Provider
      value={{ activeSession, setActiveSession }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export const useActiveSectionContext = () => {
  const context = React.useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
};
