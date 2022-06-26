import { useEffect, useState } from 'react';

export type Language<T> = { [K in keyof T]: string };

export default function useLanguage<T>(locale: string, path: string): Language<T> {

	const [ language, setLanguage ] = useState<Language<T>>({} as Language<T>);

	useEffect(() => {
		const file = require(`../i18n/${locale}/${path}.json`);
        console.log(file);
	}, [ path ]);

	return language;
};