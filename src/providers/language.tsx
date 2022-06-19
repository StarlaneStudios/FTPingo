import { createContext } from "react";

export default createContext({
	language: "en-gb",
	setLanguage: (language: string) => {}
});