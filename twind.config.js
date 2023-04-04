import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'

export default defineConfig({
	presets: [presetAutoprefix(), presetTailwind()],
	theme: {
		extend: {
			colors: {
				/**
				 * Base color #85d2e5
				 * https://uicolors.app/create
				 */
				cornflower: {
					50: '#f2fafd',
					100: '#e5f3f9',
					200: '#c5e9f2',
					300: '#85d2e5',
					400: '#57c1d9',
					500: '#31abc6',
					600: '#228ba7',
					700: '#1c6f88',
					800: '#1b5e71',
					900: '#1c4e5e',
					950: '#12333f'
				}
			}
		}
	}
})
