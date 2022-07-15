import { TextInput } from "../../components/Input";
import useObject from "../../hooks/object";
import "./modules/group.scss";

export default function ConnectionGroupEdit() {

    const { current, modify } = useObject<any>({
        id: "",
        name: ""
    });

    return (
        <div className="connection-group__edit">
            <TextInput
                placeholder="test"
                onChange={(e) => modify({ name: current.name + e })}
            />

            {JSON.stringify(current)}
        </div>
    );
}