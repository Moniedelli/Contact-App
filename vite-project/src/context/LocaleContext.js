import React from "react";

const LocaleContext = React.createContext();

export const LocaleProvider = LocalContext.Provider;
export const LocaleConsumer = LocalContext.Consumer;

export default LocaleContext;