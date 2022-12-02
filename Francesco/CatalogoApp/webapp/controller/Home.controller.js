sap.ui.define(
  [
    "CatalogoApp/controller/BaseController",
    "sap/m/Button",
    "sap/ui/model/json/JSONModel"
  ],
  function (Controller, Button, JSONModel) {
    "use strict";

    return Controller.extend("CatalogoApp.controller.Home", {
      onInit: function () {
        // var model = new JSONModel();
        // this.getView().setModel(model, "mainModel");
      },
      onPressButton: function () {
        var oModel = this.getView().getModel("mainModel");
        oModel.setData({ prova: "sono stato premuto" });

        this.navTo("Pagina2");
      },

      onAfterRendering: function () {}
    });
  }
);
