import install from '@twind/with-sveltekit'
import config from '../../twind.config.js'

export const prerender = true
export const ssr = false

install(config)