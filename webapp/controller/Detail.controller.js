sap.ui.define([
	"Dashboard/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("Dashboard.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Dashboard.view.Detail
		 */
			onInit: function() {
		//	var oViewModel = new sap.ui.model.json.JSONModel();
//this.setModel(oViewModel, "detailView");
					this.getRouter().getRoute("detail").attachPatternMatched(this._onObjectMatched, this);

			
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Dashboard.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Dashboard.view.Detail
		 */
			onAfterRendering: function() {
		
			},
		
			/* =========================================================== */
			/* begin: internal methods                                     */
			/* =========================================================== */

			/**
			 * Binds the view to the object path and expands the aggregated line items.
			 * @function
			 * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
			 * @private
			 */
			_onObjectMatched : function (oEvent) {
				// var sObjectId =  oEvent.getParameter("arguments").objectId;
				// this.getModel().metadataLoaded().then( function() {
				// 	var sObjectPath = this.getModel().createKey("SOHeaders", {
				// 		OrderId :  sObjectId
				// 	});
				// 	this._bindView("/" + sObjectPath);
				// }.bind(this));
				
				// this.getView().bindElement({
				// 		path: "/" + oEvent.getParameter("arguments").Id,
				// 		model: "jsonModel"
				// 	});
				
				var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
			
		//	alert(oView.getModel().getProperty("/Employees"));
			oView.bindElement({
				path : "/1",
					events : {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			
			});
			oView.byId("text1").setBindingContext("/1/FirstName");
			//	oView.byId("text1").bindProperty("text","/Employees(5683)/FirstName");
		//	alert(oView.byId("text1").getBindingContext());
				alert(oView.getBindingContext());
		//	alert(oView.byId("text1").isBound());
			
			//var sObjectId =  oEvent.getParameter("arguments").Id;
				// this.getModel().metadataLoaded().then( function() {
				// 	var sObjectPath = this.getModel().createKey("ServiceAreaCollection", {
				// 		Id :  sObjectId
				// 	});
					
				// 	this.getView().bindElement({
				// 	path : "/" + sObjectPath
				// });
				// }.bind(this));
				
			
			
			},
				_onBindingChange : function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("master");
			}
		},
			


		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Dashboard.view.Detail
		 */
			onExit: function() {
		
			}

	});

});