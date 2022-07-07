import { useMemo, useState } from "react";
import { FaHdd } from "react-icons/fa";
import { MdAdd, MdCreateNewFolder, MdFolder, MdOutlineFolderOpen } from "react-icons/md";
import { Link } from "react-router-dom";
import Spacer from "../../components/spacer";
import { useBooleanToggle, useToggle } from "../../hooks/toggle";

function ConnectionGroup({ groups }: { groups: ConnectionGroup[] }) {

    const [open, toggle] = useBooleanToggle(false);

    const groupFolderIcon = useMemo<JSX.Element>(() => {

        if(open) {
            return <MdOutlineFolderOpen color="#FFAA00" size={20} />;
        }

        return <MdFolder color="#FFAA00" size={20} />;
    }, [open]);

    return (
        <div className="connections-list__group">
            <header onClick={() => toggle()}>
                { groupFolderIcon }
                <h2>DEFAULT GROUP</h2>
                <Spacer />
                <button className="connections-list__group-create__connection">
                    <MdAdd color="#fff" size={20} />
                </button>
            </header>
            {open && (
                <nav className="connections-list" role="tablist">
                    <div className="connections-list__group-item">
                        <FaHdd size={20} />
                        FTP Connection
                    </div>
                </nav>
            )}
        </div>
    );
}

export function ConnectionsList({ groups }: ConnectionsListProps) {

    return (
        <aside className="connections-list">
            <Link className="connections-list__item" to="/connections/group/create">
                <MdCreateNewFolder className="mr-3" size={20} />
                <h2>NEW GROUP</h2>
            </Link>
            <section className="connections-list__groups">
                <ConnectionGroup groups={groups} />
            </section>
        </aside>
    );
}