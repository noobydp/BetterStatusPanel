<style>
img {
	display: block;
	margin-left: auto;
	margin-right: auto;
}
</style>

<template>
	<div id="BetterStatusPanel">
		<v-row dense>
			<v-col>
				<div class="hidden-sm-only col col-12">
					<JobProgress />
				</div>
			</v-col>
		</v-row>
		<v-row dense>
			<v-col>
				<div class="hidden-sm-only col col-12">
					<JobControlPanel />
				</div>
				<div class="hidden-sm-only col col-12">
					<JobEstimationsPanel />
				</div>
			</v-col>
			<v-col>
				<div class="hidden-sm-only col col-12">
					<MacroList />
					<v-btn @click="toggleTopPanel()"><div>Show/Hide Top Bar</div></v-btn>
				</div>
				<div class="hidden-sm-only col col-12">

				</div>
			</v-col>
			<v-col>
				<div class="hidden-sm-only col col-12">
					<SpeedFactorPanel />
				</div>
				<div class="hidden-sm-only col col-12">
					<FansPanel />
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<div>
					<WebcamPanel />
				</div>

			</v-col>
		</v-row>
	</div>
</template>

<script>
'use strict'

import SpeedFactorPanel from '../../components/panels/SpeedFactorPanel.vue'
import FansPanel from '../../components/panels/FansPanel.vue'
import JobControlPanel from '../../components/panels/JobControlPanel.vue'
import JobEstimationsPanel from '../../components/panels/JobEstimationsPanel.vue'
import WebcamPanel from '../../components/panels/WebcamPanel.vue'
import MacroList from '../../components/lists/MacroList.vue'
import JobProgress from '../../components/misc/JobProgress.vue'
// import { element } from 'prop-types'



export default {
	name: "BetterStatusPanel",
	components: {
		SpeedFactorPanel,
		FansPanel,
		JobControlPanel,
		JobEstimationsPanel,
		WebcamPanel,
		MacroList,
		JobProgress,
	},
	methods: {
		toggleTopPanel() {
			console.log("toggling top panel")
			let topPanel = window.document.getElementById("global-container");
			let hidden = topPanel.getAttribute("hidden");

			if (hidden) {
				topPanel.removeAttribute("hidden");
				console.log("removed hidden attribute")
			} else {
				topPanel.setAttribute("hidden", "hidden");
				console.log("added hidden attribute")
			}
			return;
		}
	}

}

</script>