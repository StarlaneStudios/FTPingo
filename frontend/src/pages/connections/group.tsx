import { TextInput } from "../../components/Input";
import useObject from "../../hooks/object";
import { FTPGroup } from "../../../typings";
import "./modules/group.scss";

export default function ConnectionGroupEdit() {

    const { current, modify } = useObject<FTPGroup>({
        id: "",
        name: ""
    });

    return (
        <div className="connection-group__edit">
            <TextInput
                placeholder="test"
                onChange={(e) => modify({ name: current.name + e.target.value })}
            />

            {JSON.stringify(current)}
        </div>
    );
}