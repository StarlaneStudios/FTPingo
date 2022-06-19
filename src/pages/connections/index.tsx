import { useContext } from "react";
import { FaHdd } from "react-icons/fa";
import { MdAdd, MdCreateNewFolder, MdFolder, MdOutlineFolderOpen } from "react-icons/md";
import Container from "../../components/Container";
import { TextInput } from "../../components/Input";
import Spacer from "../../components/spacer";
import ThemeContext from "../../providers/theme";
import "./style.scss";

function ConnectionsList() {

    return (
        <aside className="connections-list">
            <div className="connections-list__item">
                <MdCreateNewFolder className="mr-3" size={20} />
                <h2>NEW GROUP</h2>
            </div>
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
                        {
                            [0, 1, 2, 3].map(x => (
                                <div key={x} className="connections-list__group-item">
                                    <FaHdd size={20} />
                                    FTP Connection {x}
                                </div>
                            ))
                        }
                    </nav>
                </div>
            </section>
        </aside>
    );
}

export default function ConnectionsPage() {

	const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="connections-page">
            <ConnectionsList />
            <Container className="connections-page__container">
				<button onClick={() => {
					const il = theme === "light";
					const tc = il ? "dark" : "light";
					setTheme(tc);
				}}>
					switch them
				</button>
            </Container>
        </div>
    );
}