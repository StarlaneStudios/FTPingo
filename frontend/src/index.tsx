import './scss/style.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../src/layout/default";
import ConnectionsPage from "../src/pages/connections";
import TerminalPage from "../src/pages/terminal";
import SettingsPage from "../src/pages/settings";
import ConnectionGroupEdit from "./pages/connections/group";

const routes = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<ConnectionsPage />} />
                <Route path="/connections" element={<ConnectionsPage />}>
                    <Route path="group/create" element={<ConnectionGroupEdit />} />
                </Route>
                <Route path="/terminal" element={<TerminalPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

const Application = () => (
    <StrictMode>
        {routes}
    </StrictMode>
);

const root = document.getElementById('root');

if (root !== null) {
    createRoot(root).render(<Application />);
}