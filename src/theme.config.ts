export interface IThemeConfig {
	primary: string;
	secondary: string;
	info: string;
	error: string;
	success: string;
	warning: string;

	light: string;
	dark: string;

	white: string;
	black: string;
}

export interface IThemeList {
	light: IThemeConfig;
	dark: IThemeConfig;
}

export type PartialTheme = Partial<IThemeConfig>;
export type Themes = { [K in keyof IThemeList]?: PartialTheme };

export const light: PartialTheme = {
	
};

export const dark: PartialTheme = {

}

export const themes: Themes = {
    dark: dark,
    light: light
};