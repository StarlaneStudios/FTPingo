interface Connection {
    id: string;
    name: string;
}

interface ConnectionGroup {
    id: string;
    name: string;
    connections: Connection[];
}

interface ConnectionsListProps {
    groups: ConnectionGroup[];
    createNewGroup: () => void;
}