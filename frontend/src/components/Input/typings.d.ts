import { ChangeEventHandler } from "react";
import { IconProps } from "../../utils/declerations";

interface InputProps<T extends string | number> extends IconProps {
	className?: string;
	hint?: string;
	placeholder?: string;
	value?: T;
	defaultValue?: T;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}