export function ColorBrightnessHandler(color: string, brightness: number): string {
	let usePound: boolean = false;
	
	if(color[0] === '#') {
		color = color.substring(1);
		usePound = true;
	}

	let num = parseInt(color, 16);
	
	let r = (num >> 16) + brightness;
	
	if(r > 255) r = 255;
	else if(r < 0) r = 0;

	let b = ((num >> 8) & 0x00FF) + brightness;

	if(b > 255) b = 255;
	else if(b < 0) b = 0;

	let g = (num & 0x0000FF) + brightness;

	if(g > 255) g = 255;
	else if(g < 0) g = 0;

	return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
};

export function getCSSVariable(variable: string, queryselector?: 'body'): string {
	const q = queryselector ? queryselector : 'body';
	const v = `--${variable}`;
	
	return document.querySelector(q)!.style.getPropertyValue(v);
}