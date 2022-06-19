import { createContext } from "react";

export interface Connection {
    host: string;
    port: number;
    username: string;
    password: string;
    protocol: "ftp" | "sftp" | string;
}

export interface IAppContext {
    connection?: Connection;
    connectionList?: Connection[];
}

export const AppContextValue: IAppContext = {
    connection: undefined,
    connectionList: []
}

export const AppContext = createContext<IAppContext>(AppContextValue as IAppContext);