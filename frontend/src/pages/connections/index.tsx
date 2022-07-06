import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import { ConnectionsList } from "./list";
import "./style.scss";

export default function ConnectionsPage() {

    return (
        <div className="connections-page">
            <ConnectionsList groups={[] as any} createNewGroup={() => {}} />
            <div className="connections-page__container">
                <Outlet />
            </div>
        </div>
    );
}