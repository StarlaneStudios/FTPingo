import { matchPath, NavLink, Outlet } from "react-router-dom";
import Spacer from "../../components/spacer";
import { MdClose, MdMinimize } from "react-icons/md";
import { FiDatabase, FiFolder, FiSettings } from "react-icons/fi";
import { GoTerminal } from "react-icons/go";
import { WindowMinimise, Quit } from "../../../wailsjs/runtime/runtime";
import "./style.scss";
import { useMemo } from "react";

function DefaultHeader() {

    return (
        <header data-wails-drag className="default-header">
            <img
                className="default-header__app-img"
                alt="FTPingo"
                src="/images/app-img.png"
                onDragStart={(e) => e.preventDefault()}
            />
            <b className="default-header__app-title">FTPINGO</b>
            <Spacer />
            <button className="btn-minimize" onClick={() => WindowMinimise()}>
                <MdMinimize size="1rem" />
            </button>
            <button className="btn-close" onClick={() => Quit()}>
                <MdClose size="1rem" />
            </button>
        </header>
    );
};

const SIDEBAR_NAVIGATION: ISidebarItem[] = [
    { icon: FiDatabase, to: "/connections", needConnection: false },
    // { icon: FiFolder, to: "/explorer", needConnection: true },
    { icon: GoTerminal, to: "/terminal", needConnection: true },
    { icon: FiSettings, to: "/settings", needConnection: true }
];

function DefaultSidebar() {

    const navigation = useMemo<JSX.Element>(() => {
        return <>{
            SIDEBAR_NAVIGATION.map(({ icon, to }, index) => {
                const isActive = matchPath({
                    path: to
                }, location.pathname)
                const classname = isActive ? "navigation-item navigation-item__active" : "navigation-item";
                return (
                    <NavLink
                        key={index}
                        className={classname}
                        to={to}
                    >
                        {icon({ size: 20 })}
                    </NavLink>
                );
            })
        }</>; 
    }, []);

    return (
        <aside className="navigation" role="navigation">
            {navigation}
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