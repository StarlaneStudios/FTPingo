import { useEffect, useRef } from 'react';

export type Language<T> = { [K in keyof T]: string };

export default function useLanguage<T>(locale: string, path: string): Language<T> {

	const language = useRef<Language<T>>({} as Language<T>);

	useEffect(() => {
		
	}, [ path ]);

	return language.current;
};