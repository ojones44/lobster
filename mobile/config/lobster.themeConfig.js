import {
	MD3LightTheme as DefaultTheme,
	configureFonts,
} from 'react-native-paper';
import { Colours } from '../styles';
import { Platform } from 'react-native';

const fontConfig = {
	default: {
		fontFamily: 'Ubuntu',
		fontSize: 20,
		fontWeight: '400',
		letterSpacing: 0.5,
	},
	textBold: {
		fontFamily: Platform.select({
			ios: 'UbuntuBold',
			android: 'UbuntuBold',
			default: 'sans-serif',
		}),
		fontWeight: '400',
		letterSpacing: 0.5,
		lineHeight: 22,
		fontSize: 20,
	},
	logoVariant: {
		fontFamily: Platform.select({
			ios: 'Pacifico',
			android: 'Pacifico',
			default: 'sans-serif',
		}),
		fontSize: 50,
		color: Colours.primary,
	},
};

export const lobsterTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: Colours.primary,
		primaryContainer: Colours.primary,
		secondary: Colours.secondary,
		secondaryContainer: Colours.secondary,
		tertiary: Colours.accent,
		tertiaryContainer: Colours.accent,
		onPrimary: Colours.shadeColor(Colours.primary, -50),
		onPrimaryContainer: Colours.shadeColor(Colours.primary, -50),
		onSecondary: Colours.shadeColor(Colours.secondary, -50),
		onSecondaryContainer: Colours.shadeColor(Colours.secondary, -50),
		onTertiary: Colours.shadeColor(Colours.accent, -50),
		onTertiaryContainer: Colours.shadeColor(Colours.accent, -50),
	},
	fonts: configureFonts({ config: fontConfig }),
};
