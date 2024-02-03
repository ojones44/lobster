// Utility functions

export const applyOpacity = (hex, alpha) => {
	const red = parseInt(hex.slice(1, 3), 16);
	const green = parseInt(hex.slice(3, 5), 16);
	const blue = parseInt(hex.slice(5, 7), 16);

	return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

export const shadeColor = (hexColor, percent) => {
	const redGamut = parseInt(hexColor.slice(1, 3), 16);
	const greenGamut = parseInt(hexColor.slice(3, 5), 16);
	const blueGamut = parseInt(hexColor.slice(5, 7), 16);

	const rgb = [redGamut, greenGamut, blueGamut];

	const toShadedGamut = (gamut) => {
		return Math.floor(Math.min(gamut * (1 + percent / 100), 255));
	};

	const toHex = (gamut) => {
		return gamut.toString(16).length === 1
			? `0${gamut.toString(16)}`
			: gamut.toString(16);
	};

	const shadedRGB = rgb.map(toShadedGamut);
	const shadedHex = shadedRGB.map(toHex);

	const hexString = shadedHex.join('');

	return `#${hexString}`;
};

// Colours

// Dark Lobster Blue
export const primary = '#0D1B80';
// Light Blue
export const secondary = '#BFCDE0';
// White
export const neutral = '#FEFCFD';
// Salmon/Lobster
export const accent = '#DA3335';
// Red
export const danger = '#DD0004';
// Green
export const success = '#09BD21';
export const black = '#000';
export const white = '#FFF';

const neutralRefColor = '#808080';
export const neutrals = {
	300: shadeColor(neutralRefColor, 30),
	400: shadeColor(neutralRefColor, 40),
	500: shadeColor(neutralRefColor, 50),
	600: shadeColor(neutralRefColor, 60),
};
