interface InputProps<T extends string | number> extends IconProps {
	className?: string;
	hint?: string;
	placeholder?: string;
	value?: T;
	defaultValue?: T;
	onChange?: ChangeEventHandler<T>;
}

interface NumberInputProps extends InputProps<number> {
	min?: number;
	max?: number;
}

interface EmailInputProps extends InputProps<string> {
	accepts?: string[];
}

interface PasswordInputProps extends InputProps<string> {
	minLength?: number;
	maxLength?: number;
	hide?: boolean;
};