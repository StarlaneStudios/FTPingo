import { FaHdd } from "react-icons/fa";
import { MdAdd, MdCreateNewFolder, MdFolder, MdOutlineFolderOpen } from "react-icons/md";
import { Link } from "react-router-dom";
import Spacer from "../../components/spacer";

export function ConnectionsList({ groups }: ConnectionsListProps) {

    return (
        <aside className="connections-list">
            <Link className="connections-list__item" to="/connections/group/create">
                <MdCreateNewFolder className="mr-3" size={20} />
                <h2>NEW GROUP</h2>
            </Link>
            <section className="connections-list__groups">
                <div className="connections-list__group">
                    <header>
                        <MdFolder color="#FFAA00" size={20} />
                        <h2>DEFAULT GROUP</h2>
                        <Spacer />
                        <button className="connections-list__group-create__connection">
                            <MdAdd color="#fff" size={20} />
                        </button>
                    </header>
                </div>
                <div className="connections-list__group">
                    <header>
                        <MdOutlineFolderOpen color="#FFAA00" size={20} />
                        <h2>DEFAULT GROUP</h2>
                        <Spacer />
                        <button className="connections-list__group-create__connection">
                            <MdAdd color="#fff" size={20} />
                        </button>
                    </header>
                    <nav className="connections-list" role="tablist">
                        <div className="connections-list__group-item">
                            <FaHdd size={20} />
                            FTP Connection
                        </div>
                    </nav>
                </div>
            </section>
        </aside>
    );
}