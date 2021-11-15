import React from "react";
import { createContext, useState } from "react";
import {v4 as uuidv4} from "uuid"

const LogContext = createContext();

export function LogContextProvider({children}) {
    const onModify = (modified) => {
        const nextLogs = logs.map((log) => 
            log.id === modified.id ? modified : log);
        setLogs(nextLogs);
    };

    return (
        <LogContext.Provider value={{logs, onCreate, onModify}}>
            {children}
        </LogContext.Provider>
    )

}

export default LogContext;