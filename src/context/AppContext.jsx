import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [imagePreviewFile, setImagePreviewFile] = useState(null);
  const [isVisibleMessage, setIsVisibleMessage] = useState(false);

  return (
    <AppContext.Provider
      value={{
        imagePreview,
        setImagePreview,
        imagePreviewFile,
        setImagePreviewFile,
        isVisibleMessage,
        setIsVisibleMessage
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
