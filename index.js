'use strict'

import router, { registerRoute } from '../../routes'
import BetterStatusPanel from './BetterStatusPanel.vue'

registerRoute(BetterStatusPanel, {
	Job: {
		BetterStatusPanel: {
			icon: 'mdi-gesture-tap-button',
			caption: 'Better Status',
			path: '/BetterStatus'
		}
	}
});

try{
	setTimeout(runStartup, 100)
}catch(e) {
	console.warn("Error in better status panel -  ", e)
}

function runStartup(){
		router.replace('/BetterStatus');
}

