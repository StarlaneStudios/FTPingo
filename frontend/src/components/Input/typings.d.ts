interface InputProps<T extends string | number> {
	className?: string;
	hint?: string;
	placeholder?: string;
	value?: T;
	defaultValue?: T;
	onChange?: (value: T) => void;
}