sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press",
], function (Opa5, Press) {
    "use strict";

    var sViewName = "sap.ui.demo.walkthrough.view.HelloPanel";

    Opa5.createPageObjects({
        onTheAppPage: {
            actions: {
                iPressTheSayHelloButton: function () {
                    return this.waitFor({
                        id: "helloDialogButton",
                        viewName: sViewName,
                        actions: new Press(),
                        errorMessage: "Did not find the 'Say Hello Button' on the Panel"
                    });
                },
            },
            assertions: {
                iShouldSeeTheHelloDialog: function () {
                    return this.waitFor({
                        controlType: "sap.m.Dialog",
                        success: function () {
                            Opa5.assert.ok(true, "The Hello Dialog was shown");
                        },
                        errorMessage: "Did not find the Hello Dialog"
                    });
                }
            }
        }
    });
});