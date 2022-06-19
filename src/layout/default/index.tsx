import { NavLink, Outlet } from "react-router-dom";
import Spacer from "../../components/spacer";
import { appWindow } from "@tauri-apps/api/window"
import "./style.scss";
import { process } from "@tauri-apps/api";
import { MdClose, MdMinimize } from "react-icons/md";
import { FiDatabase, FiFolder, FiSettings } from "react-icons/fi";
import { GoTerminal } from "react-icons/go";
import { IconType } from "@react-icons/all-files";
import { useRef } from "react";

interface ISidebarItem {
    icon: IconType;
    to: string;
    needConnection: boolean;
}

function DefaultHeader() {

    return (
        <header data-tauri-drag-region className="default-header">
            <img
                className="default-header__app-img"
                alt="FTPingo"
                src="./img/app-img.png"
                loading="lazy"
                onDragStart={(e) => e.preventDefault()}
            />
            <b className="default-header__app-title">
                FTPINGO
            </b>
            <Spacer />
            <button
                className="btn-minimize"
                onClick={() => appWindow.minimize()}
            >
                <MdMinimize size="1rem" />
            </button>
            <button
                className="btn-close"
                onClick={() => !appWindow.close() || process.exit()}
            >
                <MdClose size="1rem" />
            </button>
        </header>
    );
};

function DefaultSidebar() {

    const items = useRef<ISidebarItem[]>([
        { icon: FiDatabase, to: "/", needConnection: false },
        { icon: FiFolder, to: "/explorer", needConnection: true },
        { icon: GoTerminal, to: "/terminal", needConnection: true },
        { icon: FiSettings, to: "/settings", needConnection: true  }
    ]);

    return (
        <aside className="navigation" role="navigation">
            {
                items.current.map(({ icon, to }, index) => (
                    <NavLink
                        key={index}
                        className={({ isActive }) => isActive ? "navigation-item navigation-item__active" : "navigation-item"}
                        to={to}
                    >
                        {icon({ size: 20 })}
                    </NavLink>
                ))
            }
        </aside>
    );
}

export default function DefaultLayout() {

    return (
        <div className="default-layout">
            <DefaultHeader />
            <section className="default-layout__container">
                <DefaultSidebar />
                <main role="contentinfo">
                    <Outlet />
                </main>
            </section>
        </div>
    );
};