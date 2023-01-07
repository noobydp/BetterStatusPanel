# BetterStatusPanel
To install the plugin into Duet Web Control (DWC):

1. Navigate to the latest release and download the BetterStatusPanel-x.x.x.zip file
2. in DWC go to Plugins > External Plugins and click install Plugin
3. Select the zip file and complete the wizard
4. Start the plugin on the same screen


##Contributing and Compiling from source
If you don't fancy using the latest release, or you wish to contribute changes, you can compile this plugin yourself from source. To do this, you first need to clone the Duet Web Control (DWC) repo from https://github.com/Duet3D/DuetWebControl.

Once you have DWC cloned, copy the files from this repository into the /src/plugins/BetterStatusPanel folder in DWC. T

Copy the following object into the export default array in DWC's /src/plugins/index.js

new DwcPlugin({
  id: 'BetterStatusPanel',
  name: 'Better Status Panel',
  author: 'noobydp',
  version,
  loadDwcResources: () => import(
    /* webpackChunkName: "BetterStatusPanel" */
    './BetterStatusPanel/index.js'
  )
})

If you wish to develop on the plugin, run `npm run serve` in the DWC directory and open the resulting build in your browser.
 You can then navigate to Settings > General > Built-in Plugins and click 'start' to run the plugin. 
 Any changes made in /src/plugins/BetterStatusPanel will then be hot-reloaded and reflected live in the browser.

##Building as an external plugin
Once you have finished developing, or if you just wish to compile from source, run `npm run build-plugin BetterStatusPanel` in the DWC directory. 
This will generate a ZIP file in the dist directory within DWC that can be uploaded as a plugin.
