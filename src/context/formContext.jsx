import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const FormContext = createContext({
  isFormOpen: false,
  setIsFormOpen: () => null,
});

export const FormProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const value = { isFormOpen, setIsFormOpen };
  return <FormContext.Provider value={value}> {children} </FormContext.Provider>;
};
