import './scss/style.scss';
import { StrictMode, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../src/layout/default";
import ConnectionsPage from "../src/pages/connections";
import TerminalPage from "../src/pages/terminal";
import SettingsPage from "../src/pages/settings";
import ThemeContext from "../src/providers/theme";
import { getCSSVariable } from '../src/utils/helpers';

const routes = (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route index element={<ConnectionsPage />} />
				<Route path="/terminal" element={<TerminalPage />} />
				<Route path="/settings" element={<SettingsPage />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

function Application() {

	const [theme, setTheme] = useState<"light" | "dark">("dark");
	const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);

	useEffect(() => {
		
		import(`./theme/${theme}.json`)
			.then((res) => {
				
				let theme_string: string = "";
				for(let key in res.default) {
					theme_string += `--${key}: ${res.default[key]};`;
				}

				document.body.setAttribute("style", theme_string);
				document.body.setAttribute("data-theme", theme);
			});
	}, [theme]);

	return (
		<StrictMode>
			<ThemeContext.Provider value={themeValue}>
				{routes}
			</ThemeContext.Provider>
		</StrictMode>
	);
}

createRoot(document.getElementById('root')!).render(<Application />);
