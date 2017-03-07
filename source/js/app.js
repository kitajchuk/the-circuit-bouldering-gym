require( "../sass/screen.scss" );


import * as core from "./core";
import router from "./router";
import intro from "./intro";
import navi from "./navi";
import Analytics from "./class/Analytics";


/**
 *
 * @public
 * @class App
 * @classdesc Load the App application Class to handle it ALL.
 *
 */
class App {
    constructor () {
        this.core = core;
        this.router = router;
        this.intro = intro;
        this.navi = navi;

        this.initModules();
    }


    /**
     *
     * @public
     * @instance
     * @method initModules
     * @memberof App
     * @description Initialize application modules.
     *
     */
    initModules () {
        // Core
        this.core.detect.init();
        this.core.resizes.init();

        // Utility?

        // Views
        this.intro.init();
        this.navi.init();

        // Analytics
        this.analytics = new Analytics();

        // Controller
        this.router.init();
    }
}


/******************************************************************************
 * Expose
*******************************************************************************/
window.app = new App();


/******************************************************************************
 * Export
*******************************************************************************/
export default window.app;
