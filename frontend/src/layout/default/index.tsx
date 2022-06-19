import { NavLink, Outlet } from "react-router-dom";
import Spacer from "../../components/spacer";
import "./style.scss";
import { MdClose, MdMinimize } from "react-icons/md";
import { FiDatabase, FiFolder, FiSettings } from "react-icons/fi";
import { GoTerminal } from "react-icons/go";
import { IconType } from "@react-icons/all-files";
import { useCallback, useEffect, useRef } from "react";

interface ISidebarItem {
    icon: IconType;
    to: string;
    needConnection: boolean;
}

function DefaultHeader() {

    const minimiseWindow = useCallback(() => {
        // WindowMinimise();
    }, []);

    return (
        <header data-wails-drag className="default-header">
            <img
                className="default-header__app-img"
                alt="FTPingo"
                src="/images/app-img.png"
                onDragStart={(e) => e.preventDefault()}
            />
            <b className="default-header__app-title">
                FTPINGO
            </b>
            <Spacer />
            <button
                className="btn-minimize"
                onClick={minimiseWindow}
            >
                <MdMinimize size="1rem" />
            </button>
            <button
                className="btn-close"
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

export function DefaultLayout() {

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