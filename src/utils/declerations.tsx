import type { IconType } from "@react-icons/all-files";

export interface IconProps {
	iconLeft?: IconType;
	iconRight?: IconType;
}

export type FTPConnectionSecureType = "ssl" | "tls" | "plain";
export type FTPConnectionType = "ftp" | "ftps" | "sftp";

export interface FTPConnectionProtocol {
    host: string;
    port: number;
    username: string;
    password: string;
    secure?: FTPConnectionSecureType;
    type?: FTPConnectionType;
}

export interface ThemeColors {
	primary: string;
	secondary: string;
	success: string;
	warning: string;
	error: string;
	info: string;
	light: string;
	dark: string;
}