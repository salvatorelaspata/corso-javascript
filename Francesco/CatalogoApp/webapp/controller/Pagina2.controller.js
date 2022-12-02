sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("CatalogoApp.controller.Pagina2", {
    /**
     * @override
     */
    onInit: function () {
      console.log("PAGINA2");
    },

    onPressBottone2: function (oEvent) {
      var button = oEvent.getSource();
      this.getOwnerComponent().getRouter().navTo("Unione");
    }
  });
});
