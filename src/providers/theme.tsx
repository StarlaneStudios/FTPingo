import { createContext } from "react";

export default createContext({
	theme: 'light',
	setTheme: (theme: "dark" | "light") => {}
});