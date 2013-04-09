/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, CodeMirror, brackets, less, $, XMLHttpRequest, document */

define(function (require, exports, module) {
    'use strict';
    var AppInit         = brackets.getModule("utils/AppInit"),
        CommandManager  = brackets.getModule("command/CommandManager"),
        Menus           = brackets.getModule("command/Menus"),
        StatusBar       = brackets.getModule("widgets/StatusBar");
    
    var ACTIVATE_BUSY_INDICATOR_STRING = "Activate/Deactivate Busy Indicator",
        ACTIVATE_BUSY_INDICATOR_COMMAND_ID = "busyIndicatorBug.toggle";
    
    var busy = false;
    
    AppInit.appReady(function () {
        CommandManager.register(ACTIVATE_BUSY_INDICATOR_STRING, ACTIVATE_BUSY_INDICATOR_COMMAND_ID, function () {
            if (busy) {
                StatusBar.hideBusyIndicator();
                busy = false;
            } else {
                StatusBar.showBusyIndicator(false);
                busy = true;
            }
        });
        
        var menu = Menus.getMenu("debug-menu");
        menu.addMenuItem(ACTIVATE_BUSY_INDICATOR_COMMAND_ID);
    });
});