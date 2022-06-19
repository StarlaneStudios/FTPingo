import "style.scss";

export interface ButtonProps {
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
	children?: React.ReactNode;
}

export default function Button(props: ButtonProps) {

	return (
		<button className="button" disabled={props?.disabled || false}>
			{props.children}
		</button>
	);
};