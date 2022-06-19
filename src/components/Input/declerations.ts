import { ChangeEventHandler } from "react";
import { IconProps } from "../../utils/declerations";

export interface InputProps<T extends string | number> extends IconProps {
	className?: string;
	hint?: string;
	placeholder?: string;
	value?: T;
	defaultValue?: T;
	onChange?: ChangeEventHandler<T>;
}

export interface NumberInputProps extends InputProps<number> {
	min?: number;
	max?: number;
}

export interface EmailInputProps extends InputProps<string> {
	accepts?: string[];
}

export interface PasswordInputProps extends InputProps<string> {
	minLength?: number;
	maxLength?: number;
	hide?: boolean;
};