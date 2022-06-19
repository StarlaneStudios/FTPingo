import classNames from "classnames";
import "./style.scss";

interface ContainerProps {
	className?: string;
    children: React.ReactNode;
    fluid?: boolean;
}

export default function Container({ className, children, fluid }: ContainerProps) {

    const containerClass = classNames({
		[`${className}`]: className !== undefined,
        "container": !fluid,
        "container-fluid": fluid
    });

    return (
        <section className={containerClass}>
            {children}
        </section>
    );
};