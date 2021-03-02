function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _components_asignaturas_asignaturas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/asignaturas/asignaturas.component */
    "./src/app/components/asignaturas/asignaturas.component.ts");
    /* harmony import */


    var _components_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/ciclos/ciclos.component */
    "./src/app/components/ciclos/ciclos.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_detalle_ciclos_detalle_ciclos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/detalle-ciclos/detalle-ciclos.component */
    "./src/app/components/detalle-ciclos/detalle-ciclos.component.ts");

    var routes = [{
      path: "home",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: "ciclos",
      component: _components_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_1__["CiclosComponent"]
    }, {
      path: "ciclos/:id",
      component: _components_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_1__["CiclosComponent"]
    }, {
      path: "asignaturas",
      component: _components_asignaturas_asignaturas_component__WEBPACK_IMPORTED_MODULE_0__["AsignaturasComponent"]
    }, {
      path: 'detalleCiclos',
      component: _components_detalle_ciclos_detalle_ciclos_component__WEBPACK_IMPORTED_MODULE_5__["DetalleCiclosComponent"]
    }, {
      path: 'detalleCiclos/:ciclo/:curso',
      component: _components_detalle_ciclos_detalle_ciclos_component__WEBPACK_IMPORTED_MODULE_5__["DetalleCiclosComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'rutas';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/ciclos/ciclos.component */
    "./src/app/components/ciclos/ciclos.component.ts");
    /* harmony import */


    var _components_asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/asignatura/asignatura.component */
    "./src/app/components/asignatura/asignatura.component.ts");
    /* harmony import */


    var _components_asignaturas_asignaturas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/asignaturas/asignaturas.component */
    "./src/app/components/asignaturas/asignaturas.component.ts");
    /* harmony import */


    var _components_detalle_ciclos_detalle_ciclos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/detalle-ciclos/detalle-ciclos.component */
    "./src/app/components/detalle-ciclos/detalle-ciclos.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_6__["CiclosComponent"], _components_asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_7__["AsignaturaComponent"], _components_asignaturas_asignaturas_component__WEBPACK_IMPORTED_MODULE_8__["AsignaturasComponent"], _components_detalle_ciclos_detalle_ciclos_component__WEBPACK_IMPORTED_MODULE_9__["DetalleCiclosComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_6__["CiclosComponent"], _components_asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_7__["AsignaturaComponent"], _components_asignaturas_asignaturas_component__WEBPACK_IMPORTED_MODULE_8__["AsignaturasComponent"], _components_detalle_ciclos_detalle_ciclos_component__WEBPACK_IMPORTED_MODULE_9__["DetalleCiclosComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/asignatura/asignatura.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/asignatura/asignatura.component.ts ***!
    \***************************************************************/

  /*! exports provided: AsignaturaComponent */

  /***/
  function srcAppComponentsAsignaturaAsignaturaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsignaturaComponent", function () {
      return AsignaturaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AsignaturaComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conocimiento_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", conocimiento_r1.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var AsignaturaComponent = /*#__PURE__*/function () {
      function AsignaturaComponent() {
        _classCallCheck(this, AsignaturaComponent);
      }

      _createClass(AsignaturaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AsignaturaComponent;
    }();

    AsignaturaComponent.ɵfac = function AsignaturaComponent_Factory(t) {
      return new (t || AsignaturaComponent)();
    };

    AsignaturaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AsignaturaComponent,
      selectors: [["app-asignatura"]],
      inputs: {
        asignatura: "asignatura"
      },
      decls: 17,
      vars: 5,
      consts: [[1, "card", 2, "width", "15rem"], [1, "card-body", 2, "-webkit-box-shadow", "16px 16px 56px -14px rgba(0,0,0,0.75)", "-moz-box-shadow", "16px 16px 56px -14px rgba(0,0,0,0.75)", "box-shadow", "16px 16px 56px -14px rgba(0,0,0,0.75)", "border-radius", "30px"], [1, "card-title"], [4, "ngFor", "ngForOf"], ["alt", "...", 1, "img-thumbnail", 2, "width", "8rem", "height", "8rem", "margin", "1rem", "padding", "1rem", "-webkit-box-shadow", "16px 16px 56px -14px rgba(0,0,0,0.75)", "-moz-box-shadow", "16px 16px 56px -14px rgba(0,0,0,0.75)", "box-shadow", "16px 16px 56px -14px rgba(0,0,0,0.75)", 3, "src"]],
      template: function AsignaturaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AsignaturaComponent_div_16_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.asignatura.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Profesor: ", ctx.asignatura.profesor, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Ciclo: ", ctx.asignatura.ciclo, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Curso: ", ctx.asignatura.curso, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.asignatura.conocimientos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNpZ25hdHVyYS9hc2lnbmF0dXJhLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsignaturaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-asignatura',
          templateUrl: './asignatura.component.html',
          styleUrls: ['./asignatura.component.css']
        }]
      }], function () {
        return [];
      }, {
        asignatura: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/asignaturas/asignaturas.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/asignaturas/asignaturas.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AsignaturasComponent */

  /***/
  function srcAppComponentsAsignaturasAsignaturasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsignaturasComponent", function () {
      return AsignaturasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_datos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/datos.service */
    "./src/app/services/datos.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../asignatura/asignatura.component */
    "./src/app/components/asignatura/asignatura.component.ts");

    function AsignaturasComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No hay asignaturas ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AsignaturasComponent_div_19_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-asignatura", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("asignatura", item_r5);
      }
    }

    function AsignaturasComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AsignaturasComponent_div_19_div_2_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.asigBusquedas);
      }
    }

    var AsignaturasComponent = /*#__PURE__*/function () {
      function AsignaturasComponent(servicio) {
        _classCallCheck(this, AsignaturasComponent);

        this.servicio = servicio;
        this.asigBusquedas = [];
      }

      _createClass(AsignaturasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.asigGenerar = this.servicio.getAsignaturas();
        }
      }, {
        key: "buscarAsignatura",
        value: function buscarAsignatura(nombre, ciclo) {
          var _this = this;

          this.asigBusquedas = [];
          this.asigGenerar.forEach(function (asig) {
            if (asig.nombre.toLowerCase().includes(nombre.toLowerCase()) && asig.ciclo.toLowerCase().includes(ciclo.toLowerCase())) {
              _this.asigBusquedas.push(asig);
            }
          });
        }
      }]);

      return AsignaturasComponent;
    }();

    AsignaturasComponent.ɵfac = function AsignaturasComponent_Factory(t) {
      return new (t || AsignaturasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_datos_service__WEBPACK_IMPORTED_MODULE_1__["DatosService"]));
    };

    AsignaturasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AsignaturasComponent,
      selectors: [["app-asignaturas"]],
      decls: 20,
      vars: 3,
      consts: [[1, "row"], [1, "col", "text-center", "mt-3"], ["type", "text", "placeholder", "Introduce el nombre de la asignatura", 1, "form-control", "position-relative"], ["inputNombre", ""], ["type", "text", "placeholder", "Selecciona un ciclo", 1, "form-control"], ["inputCiclo", ""], ["type", "button", 1, "btn", "btn-dark", "mt-3", 3, "click"], ["role", "alert", 1, "alert", "alert-dark"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["role", "alert", 1, "alert", "alert-secondary"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [3, "asignatura"]],
      template: function AsignaturasComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Filtrar por nombre: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Filtrar por ciclo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsignaturasComponent_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            return ctx.buscarAsignatura(_r0.value, _r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Filtrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Los resultados de b\xFAsqueda son:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AsignaturasComponent_div_18_Template, 3, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AsignaturasComponent_div_19_Template, 3, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" El n\xFAmero de asignaturas que cumplen el filtro es de : ", ctx.asigBusquedas.length, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.asigBusquedas.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_3__["AsignaturaComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNpZ25hdHVyYXMvYXNpZ25hdHVyYXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsignaturasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-asignaturas',
          templateUrl: './asignaturas.component.html',
          styleUrls: ['./asignaturas.component.css']
        }]
      }], function () {
        return [{
          type: _services_datos_service__WEBPACK_IMPORTED_MODULE_1__["DatosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ciclos/ciclos.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/ciclos/ciclos.component.ts ***!
    \*******************************************************/

  /*! exports provided: CiclosComponent */

  /***/
  function srcAppComponentsCiclosCiclosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CiclosComponent", function () {
      return CiclosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/datos.service */
    "./src/app/services/datos.service.ts");
    /* harmony import */


    var src_app_services_ciclos_datos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/ciclos-datos.service */
    "./src/app/services/ciclos-datos.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CiclosComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.nombre, " ");
      }
    }

    function CiclosComponent_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.nombre, " ");
      }
    }

    var _c0 = function _c0() {
      return ["/DetalleCiclo"];
    };

    function CiclosComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CiclosComponent_div_19_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var item_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.irCiclo(item_r5.nombre, item_r5.curso);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ver detalles");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r5.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r5.curso, " ", item_r5.nombre, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
      }
    }

    var CiclosComponent = /*#__PURE__*/function () {
      function CiclosComponent(gestorRutasActivas, serviDatos, serviCiclos, gestorRutas) {
        _classCallCheck(this, CiclosComponent);

        this.gestorRutasActivas = gestorRutasActivas;
        this.serviDatos = serviDatos;
        this.serviCiclos = serviCiclos;
        this.gestorRutas = gestorRutas;
        this.itemsDam = [];
        this.itemsDaw = [];
        this.ciclosGenerar = [];
      }

      _createClass(CiclosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.itemsDam = this.serviDatos.getAsignaturasDam();
          this.itemsDaw = this.serviDatos.getAsignaturaDaw();
          this.ciclosGenerar = this.serviCiclos.getCiclos();
        }
      }, {
        key: "irCiclo",
        value: function irCiclo(nombre, curso) {
          this.gestorRutas.navigate(['detalleCiclos', nombre, curso]);
        }
      }]);

      return CiclosComponent;
    }();

    CiclosComponent.ɵfac = function CiclosComponent_Factory(t) {
      return new (t || CiclosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_datos_service__WEBPACK_IMPORTED_MODULE_2__["DatosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ciclos_datos_service__WEBPACK_IMPORTED_MODULE_3__["CiclosDatosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    CiclosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CiclosComponent,
      selectors: [["app-ciclos"]],
      decls: 20,
      vars: 3,
      consts: [[2, "text-align", "center"], [1, "row"], [1, "col"], [1, "list-group", "mt-3"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "card", "mt-4", 2, "width", "16rem", "border-radius", "20px"], [1, "card-body"], ["alt", "...", 1, "img-thumbnail", 2, "width", "15rem", "height", "10rem", 3, "src"], [1, "card-title", "mt-1"], [1, "lead"], ["routerLinkActive", "active", "role", "button", 1, "nav-link", "btn", "btn-dark", "btn-lg", "mt-3", 3, "routerLink", "click"]],
      template: function CiclosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Los ciclos tecnol\xF3gicos son: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "DAM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Asignaturas:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CiclosComponent_li_10_Template, 2, 1, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "DAW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Asignaturas:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CiclosComponent_li_17_Template, 2, 1, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CiclosComponent_div_19_Template, 11, 5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsDam);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsDaw);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ciclosGenerar);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2ljbG9zL2NpY2xvcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CiclosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ciclos',
          templateUrl: './ciclos.component.html',
          styleUrls: ['./ciclos.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_datos_service__WEBPACK_IMPORTED_MODULE_2__["DatosService"]
        }, {
          type: src_app_services_ciclos_datos_service__WEBPACK_IMPORTED_MODULE_3__["CiclosDatosService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/detalle-ciclos/detalle-ciclos.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/detalle-ciclos/detalle-ciclos.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DetalleCiclosComponent */

  /***/
  function srcAppComponentsDetalleCiclosDetalleCiclosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleCiclosComponent", function () {
      return DetalleCiclosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/datos.service */
    "./src/app/services/datos.service.ts");
    /* harmony import */


    var src_app_services_ciclos_datos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/ciclos-datos.service */
    "./src/app/services/ciclos-datos.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DetalleCiclosComponent_div_11_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r4.nombre, " ");
      }
    }

    function DetalleCiclosComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetalleCiclosComponent_div_11_li_2_Template, 2, 1, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.conocimientos);
      }
    }

    function DetalleCiclosComponent_div_17_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var itemC_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", itemC_r7.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DetalleCiclosComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Profesor:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ciclo:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Curso:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DetalleCiclosComponent_div_17_div_18_Template, 2, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.profesor, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.ciclo, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.curso);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r5.conocimientos);
      }
    }

    var DetalleCiclosComponent = /*#__PURE__*/function () {
      function DetalleCiclosComponent(gestorRutasActivas, datosAsignatura, datosCiclos) {
        _classCallCheck(this, DetalleCiclosComponent);

        this.gestorRutasActivas = gestorRutasActivas;
        this.datosAsignatura = datosAsignatura;
        this.datosCiclos = datosCiclos;
        this.conocimiento = [];
        this.conoFiltrado = [];
      }

      _createClass(DetalleCiclosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.gestorRutasActivas.paramMap.subscribe(function (param) {
            _this2.cicloSecun = param.get('ciclo');
            _this2.cursoSecun = parseInt(param.get('curso'));

            if (_this2.cicloSecun == 'DAM' && _this2.cursoSecun == 1) {
              _this2.conocimiento = _this2.datosAsignatura.getAsignaturasDam();
              _this2.img = 'assets/images/dam.jpeg';

              for (var index = 0; index < _this2.conocimiento.length; index++) {
                var element = _this2.conocimiento[index];

                if (element.ciclo == 'DAM | DAW' && element.curso == 1) {
                  _this2.conoFiltrado.push(element);
                }
              }
            } else if (_this2.cicloSecun == 'DAM' && _this2.cursoSecun == 2) {
              _this2.conocimiento = _this2.datosAsignatura.getAsignaturasDam();
              _this2.img = 'assets/images/dam.jpeg';

              for (var _index = 0; _index < _this2.conocimiento.length; _index++) {
                var _element = _this2.conocimiento[_index];

                if (_element.ciclo == 'DAM' || _element.ciclo == 'DAM | DAW' && _element.curso == 2) {
                  _this2.conoFiltrado.push(_element);
                }
              }
            } else if (_this2.cicloSecun == 'DAW' && _this2.cursoSecun == 1) {
              _this2.conocimiento = _this2.datosAsignatura.getAsignaturaDaw();
              _this2.img = 'assets/images/daw.jpeg';

              for (var _index2 = 0; _index2 < _this2.conocimiento.length; _index2++) {
                var _element2 = _this2.conocimiento[_index2];

                if (_element2.ciclo == 'DAM | DAW' && _element2.curso == 1) {
                  _this2.conoFiltrado.push(_element2);
                }
              }
            } else if (_this2.cicloSecun == 'DAW' && _this2.cursoSecun == 2) {
              _this2.conocimiento = _this2.datosAsignatura.getAsignaturaDaw();
              _this2.img = 'assets/images/daw.jpeg';

              for (var _index3 = 0; _index3 < _this2.conocimiento.length; _index3++) {
                var _element3 = _this2.conocimiento[_index3];

                if (_element3.ciclo == 'DAW' && _element3.curso == 2) {
                  _this2.conoFiltrado.push(_element3);
                }
              }
            }
          });
        }
      }]);

      return DetalleCiclosComponent;
    }();

    DetalleCiclosComponent.ɵfac = function DetalleCiclosComponent_Factory(t) {
      return new (t || DetalleCiclosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_datos_service__WEBPACK_IMPORTED_MODULE_2__["DatosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ciclos_datos_service__WEBPACK_IMPORTED_MODULE_3__["CiclosDatosService"]));
    };

    DetalleCiclosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetalleCiclosComponent,
      selectors: [["app-detalle-ciclos"]],
      decls: 18,
      vars: 5,
      consts: [[1, "row"], [1, "col"], ["alt", "...", 1, "img-thumbnail", "mt-3", 2, "width", "15rem", "height", "10rem", 3, "src"], [2, "text-decoration", "overline"], [4, "ngFor", "ngForOf"], [1, "mt-3"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "list-group"], [1, "card", 2, "width", "14rem", "border-radius", "20px", "margin-bottom", "10px", "-webkit-box-shadow", "16px 16px 56px -14px rgba(0,0,0,0.75)", "-moz-box-shadow", "16px 16px 56px -14px rgba(0,0,0,0.75)", "box-shadow", "16px 16px 56px -14px rgba(0,0,0,0.75)"], [1, "card-body"], [1, "card-title"], ["alt", "...", 1, "img-thumbnail", 2, "width", "5rem", "height", "5rem", 3, "src"]],
      template: function DetalleCiclosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Conocimientos necesarios:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetalleCiclosComponent_div_11_Template, 3, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Las asignaturas del ciclo son:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DetalleCiclosComponent_div_17_Template, 19, 5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.cicloSecun, " ", ctx.cursoSecun, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.conoFiltrado);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.conoFiltrado);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWxsZS1jaWNsb3MvZGV0YWxsZS1jaWNsb3MuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleCiclosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-detalle-ciclos',
          templateUrl: './detalle-ciclos.component.html',
          styleUrls: ['./detalle-ciclos.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_services_datos_service__WEBPACK_IMPORTED_MODULE_2__["DatosService"]
        }, {
          type: src_app_services_ciclos_datos_service__WEBPACK_IMPORTED_MODULE_3__["CiclosDatosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 59,
      vars: 0,
      consts: [[1, "jumbotron"], [1, "display-4"], [1, "lead"], [1, "my-4"], [1, "list-group"], [1, "list-group-item"], ["href", "https://www.cesjuanpablosegundo.es/", "role", "button", 1, "btn", "btn-dark", "btn-lg", "mt-3"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Grados t\xE9cnicos CES Juan Pablo II ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Aplicaci\xF3n web realizada por Enrique Padilla para el ciclo de Desarrollo de Aplicaciones Multiplataforma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Aplicaci\xF3n realizada para el m\xF3dulo de DI, hecha en ANGULAR que consta de:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Componente Home:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " representa la entrega inicial de la aplicacion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Componente Ciclos:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " representa tantas cartas como ciclos existan en el CiclosService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Componente Asignaturas:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " representa tantas cartas como asignaturas haya en el servicio AsignaturaService. Adicionalmente se cuenta con un filtro para poder ver asignaturas espec\xEDficas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Componente Asignatura:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " representa el aspecto que tendr\xE1 una carta de las de arriba mencionadas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Componente DetalleCiclo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " representa el detalle de un ciclo,donde se mostrar\xE1n los conocimientos necesarios para poder aprobar el ciclo y todas las asignaturas que lo componen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Componente NavBar:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " representa la barra de navegaci\xF3n superior donde se muestra un men\xFA con las siguientes posibilidades:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Inicio:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " llevar\xE1 al componente Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Ciclos:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " llevar\xE1 al componente Ciclos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Asignaturas:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " llevar\xE1 al componente Asignaturas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Servicios:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " se deber\xE1 crear al menos dos servicios que provean de datos tanto para los ciclos como para las asignaturas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Pipes:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " se deber\xE1 crear al menos dos directivas personalizadas que realicen alguna transformaci\xF3n en la aplicaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Ir a la web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var _c1 = function _c1() {
      return ["/ciclos"];
    };

    var _c2 = function _c2() {
      return ["/asignaturas"];
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(gestorRutas) {
        _classCallCheck(this, NavbarComponent);

        this.gestorRutas = gestorRutas; // necesito el objeto Router

        this.datoPasar = 1;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "irCiclo",
        value: function irCiclo(numero) {
          //console.log("Elemento pulsado");
          // voy a navegar desde el Router
          this.gestorRutas.navigate(['ciclos', numero]);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 17,
      vars: 6,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid", 2, "background-color", "#181818", "-webkit-box-shadow", "10px 10px 32px -15px rgba(0,0,0,0.75)", "-moz-box-shadow", "10px 10px 32px -15px rgba(0,0,0,0.75)", "box-shadow", "10px 10px 32px -15px rgba(0,0,0,0.75)"], ["href", "#", 1, "navbar-brand", 2, "color", "white"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 2, "color", "white", 3, "routerLink"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Barra de navegaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Ciclos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Asignaturas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/ciclos-datos.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/ciclos-datos.service.ts ***!
    \**************************************************/

  /*! exports provided: CiclosDatosService */

  /***/
  function srcAppServicesCiclosDatosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CiclosDatosService", function () {
      return CiclosDatosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CiclosDatosService = /*#__PURE__*/function () {
      function CiclosDatosService() {
        _classCallCheck(this, CiclosDatosService);

        this.ciclosArray = [{
          nombre: 'DAM',
          curso: 1,
          asignaturas: [],
          imagen: 'assets/images/dam.jpeg'
        }, {
          nombre: 'DAM',
          curso: 2,
          asignaturas: [],
          imagen: 'assets/images/dam.jpeg'
        }, {
          nombre: 'DAW',
          curso: 1,
          asignaturas: [],
          imagen: 'assets/images/daw.jpeg'
        }, {
          nombre: 'DAW',
          curso: 2,
          asignaturas: [],
          imagen: 'assets/images/daw.jpeg'
        }];
      }

      _createClass(CiclosDatosService, [{
        key: "getCiclos",
        value: function getCiclos() {
          return this.ciclosArray;
        }
      }]);

      return CiclosDatosService;
    }();

    CiclosDatosService.ɵfac = function CiclosDatosService_Factory(t) {
      return new (t || CiclosDatosService)();
    };

    CiclosDatosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CiclosDatosService,
      factory: CiclosDatosService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CiclosDatosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/datos.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/datos.service.ts ***!
    \*******************************************/

  /*! exports provided: DatosService */

  /***/
  function srcAppServicesDatosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatosService", function () {
      return DatosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DatosService = /*#__PURE__*/function () {
      function DatosService() {
        _classCallCheck(this, DatosService);

        this.asignaturaDam = [{
          nombre: 'Sistemas informáticos',
          profesor: 'Isaac Sampedro',
          conocimientos: [{
            nombre: 'PowerShell',
            imagen: 'assets/images/powershell.png'
          }, {
            nombre: 'Windows',
            imagen: 'assets/images/win.png'
          }, {
            nombre: 'Linux',
            imagen: 'assets/images/linux.png'
          }, {
            nombre: 'Virtualizacion',
            imagen: 'assets/images/virtual.png'
          }],
          ciclo: 'DAM | DAW',
          curso: 1
        }, {
          nombre: 'Programación',
          profesor: 'Borja Martín',
          conocimientos: [{
            nombre: 'Java',
            imagen: 'assets/images/java.png'
          }, {
            nombre: 'MySQL',
            imagen: 'assets/images/mysql.png'
          }],
          ciclo: 'DAM | DAW',
          curso: 1
        }, {
          nombre: 'Bases de datos',
          profesor: 'Javier Martinez',
          conocimientos: [{
            nombre: 'MySQL',
            imagen: 'assets/images/mysql.png'
          }, {
            nombre: 'SQL Server',
            imagen: 'assets/images/sql.png'
          }],
          ciclo: 'DAM | DAW',
          curso: 1
        }, {
          nombre: 'Lenguajes de Marcas',
          profesor: 'Javier Martinez',
          conocimientos: [{
            nombre: 'HTML',
            imagen: 'assets/images/xml.jpg'
          }, {
            nombre: 'XML',
            imagen: 'assets/images/html.jpeg'
          }],
          ciclo: 'DAM | DAW',
          curso: 1
        }, {
          nombre: 'Entornos de desarrollo',
          profesor: 'Jesús Niño',
          conocimientos: [{
            nombre: 'PowerShell',
            imagen: 'assets/images/powershell.png'
          }, {
            nombre: 'Scrum',
            imagen: 'assets/images/scrum.png'
          }],
          ciclo: 'DAM | DAW',
          curso: 1
        }, {
          nombre: 'Empresa e Iniciativa emprendedora',
          profesor: 'Marta Jimenez',
          conocimientos: [{
            nombre: 'Emprender',
            imagen: 'assets/images/empresa.png'
          }],
          ciclo: 'DAM | DAW',
          curso: 2
        }, {
          nombre: 'Inglés',
          profesor: 'Rocio',
          conocimientos: [{
            nombre: 'ingles',
            imagen: 'assets/images/ingles.jpg'
          }],
          ciclo: 'DAM | DAW',
          curso: 2
        }, {
          nombre: 'Programación Multimedia y Dispositivos Moviles',
          profesor: 'Borja Martín',
          conocimientos: [{
            nombre: 'Java',
            imagen: 'assets/images/java.png'
          }, {
            nombre: 'XML',
            imagen: 'assets/images/xml.jpg'
          }, {
            nombre: 'Json',
            imagen: 'assets/images/json.png'
          }],
          ciclo: 'DAM ',
          curso: 2
        }, {
          nombre: 'Desarrollo de interfaces',
          profesor: 'Borja Martín',
          conocimientos: [{
            nombre: 'Java',
            imagen: 'assets/images/java.png'
          }, {
            nombre: 'Javafx',
            imagen: 'assets/images/javafx.jpg'
          }, {
            nombre: 'Json',
            imagen: 'assets/images/json.png'
          }, {
            nombre: 'Js',
            imagen: 'assets/images/js.jpg'
          }, {
            nombre: 'Angular',
            imagen: 'assets/images/angular.png'
          }],
          ciclo: 'DAM',
          curso: 2
        }, {
          nombre: 'Acceso a Datos',
          profesor: 'Hector Alonso',
          conocimientos: [{
            nombre: 'Java',
            imagen: 'assets/images/java.png'
          }, {
            nombre: 'MySQL',
            imagen: 'assets/images/mysql.png'
          }, {
            nombre: 'Mongo',
            imagen: 'assets/images/mongo.jpg'
          }, {
            nombre: 'PHP',
            imagen: 'assets/images/php.png'
          }],
          ciclo: 'DAM',
          curso: 2
        }, {
          nombre: 'Programacion de servicios y procesos',
          profesor: 'Jesús Niño',
          conocimientos: [{
            nombre: 'Seguridad',
            imagen: 'assets/images/seguridad.jpg'
          }, {
            nombre: 'PowerShell',
            imagen: 'assets/images/powershell.png'
          }],
          ciclo: 'DAM',
          curso: 2
        }, {
          nombre: 'Sistemas de gestión empresarial',
          profesor: 'Hector Alonso',
          conocimientos: [{
            nombre: 'ERP',
            imagen: 'assets/images/erp.jpg'
          }, {
            nombre: 'Odoo',
            imagen: 'assets/images/odoo.png'
          }],
          ciclo: 'DAM',
          curso: 2
        }];
        this.asignaturaDaw = [{
          nombre: 'Sistemas informáticos',
          profesor: 'Isaac Sampedro',
          conocimientos: [{
            nombre: 'PowerShell',
            imagen: 'assets/images/powershell.png'
          }, {
            nombre: 'Windows',
            imagen: 'assets/images/win.png'
          }, {
            nombre: 'Linux',
            imagen: 'assets/images/linux.png'
          }, {
            nombre: 'Virtualizacion',
            imagen: 'assets/images/virtual.png'
          }],
          ciclo: 'DAM | DAW',
          curso: 1
        }, {
          nombre: 'Programación',
          profesor: 'Borja Martín',
          conocimientos: [{
            nombre: 'Java',
            imagen: 'assets/images/java.png'
          }, {
            nombre: 'MySQL',
            imagen: 'assets/images/mysql.png'
          }],
          ciclo: 'DAM | DAW',
          curso: 1
        }, {
          nombre: 'Bases de datos',
          profesor: 'Javier Martinez',
          conocimientos: [{
            nombre: 'MySQL',
            imagen: 'assets/images/mysql.png'
          }, {
            nombre: 'SQL server',
            imagen: 'assets/images/sql.png'
          }],
          ciclo: 'DAM | DAW',
          curso: 1
        }, {
          nombre: 'Lenguajes de Marcas',
          profesor: 'Javier Martinez',
          conocimientos: [{
            nombre: 'Html',
            imagen: 'assets/images/xml.jpg'
          }, {
            nombre: 'XML',
            imagen: 'assets/images/html.jpeg'
          }],
          ciclo: 'DAM | DAW',
          curso: 1
        }, {
          nombre: 'Entornos de desarrollo',
          profesor: 'Jesús Niño',
          conocimientos: [{
            nombre: 'PowerShell',
            imagen: 'assets/images/powershell.png'
          }, {
            nombre: 'Scrum',
            imagen: 'assets/images/scrum.png'
          }],
          ciclo: 'DAM | DAW',
          curso: 1
        }, {
          nombre: 'Empresa e Iniciativa emprendedora',
          profesor: 'Marta Jimenez',
          conocimientos: [{
            nombre: 'Emprender',
            imagen: 'assets/images/empresa.png'
          }],
          ciclo: 'DAM | DAW',
          curso: 2
        }, {
          nombre: 'Inglés',
          profesor: 'Rocio',
          conocimientos: [{
            nombre: 'ingles',
            imagen: 'assets/images/ingles.jpg'
          }],
          ciclo: 'DAM | DAW',
          curso: 2
        }, {
          nombre: 'Desarrollo Aplicaciones Web Entorno Cliente',
          profesor: 'Borja Martín',
          conocimientos: [{
            nombre: 'JavaScript',
            imagen: 'assets/images/js.jpg'
          }, {
            nombre: 'React',
            imagen: 'assets/images/react.png'
          }, {
            nombre: 'Webpack',
            imagen: 'assets/images/webpack.jpg'
          }, {
            nombre: 'Node',
            imagen: 'assets/images/node.png'
          }],
          ciclo: 'DAW',
          curso: 2
        }, {
          nombre: 'Desarrollo Aplicaciones Web Entorno Servidor',
          profesor: 'David Ventura',
          conocimientos: [{
            nombre: 'PHP',
            imagen: 'assets/images/php.png'
          }, {
            nombre: 'Node',
            imagen: 'assets/images/node.png'
          }],
          ciclo: 'DAW',
          curso: 2
        }, {
          nombre: 'Despliegue de Aplicaciones',
          profesor: 'Jesus Niño',
          conocimientos: [{
            nombre: 'Apache',
            imagen: 'assets/images/apache.jpeg'
          }, {
            nombre: 'Tomcat',
            imagen: 'assets/images/tomcat.png'
          }, {
            nombre: 'PowerShell',
            imagen: 'assets/images/powershell.png'
          }],
          ciclo: 'DAW',
          curso: 2
        }, {
          nombre: 'Desarrollo de Interfaces Web',
          profesor: 'Victor Martín',
          conocimientos: [{
            nombre: 'XML',
            imagen: 'assets/images/xml.jpg'
          }, {
            nombre: 'Bootstrap',
            imagen: 'assets/images/boots.png'
          }, {
            nombre: 'Diseño',
            imagen: 'assets/images/disenio.jpg'
          }],
          ciclo: 'DAW',
          curso: 2
        }];
        this.asignaturas = [{
          nombre: 'Sistemas informáticos',
          profesor: 'Isaac Sampedro',
          conocimientos: [{
            nombre: 'PowerShell',
            imagen: 'assets/images/powershell.png'
          }, {
            nombre: 'Windows',
            imagen: 'assets/images/win.png'
          }, {
            nombre: 'Linux',
            imagen: 'assets/images/linux.png'
          }, {
            nombre: 'Virtualizacion',
            imagen: 'assets/images/virtual.png'
          }],
          ciclo: 'DAM | DAW',
          curso: 1
        }, {
          nombre: 'Programación',
          profesor: 'Borja Martín',
          conocimientos: [{
            nombre: 'Java',
            imagen: 'assets/images/java.png'
          }, {
            nombre: 'MySQL',
            imagen: 'assets/images/mysql.png'
          }],
          ciclo: 'DAM | DAW',
          curso: 1
        }, {
          nombre: 'Bases de datos',
          profesor: 'Javier Martinez',
          conocimientos: [{
            nombre: 'MySQL',
            imagen: 'assets/images/mysql.png'
          }, {
            nombre: 'SQL Server',
            imagen: 'assets/images/sql.png'
          }],
          ciclo: 'DAM | DAW',
          curso: 1
        }, {
          nombre: 'Lenguajes de Marcas',
          profesor: 'Javier Martinez',
          conocimientos: [{
            nombre: 'Html',
            imagen: 'assets/images/xml.jpg'
          }, {
            nombre: 'XML',
            imagen: 'assets/images/html.jpeg'
          }],
          ciclo: 'DAM | DAW',
          curso: 1
        }, {
          nombre: 'Entornos de desarrollo',
          profesor: 'Jesús Niño',
          conocimientos: [{
            nombre: 'PowerShell',
            imagen: 'assets/images/powershell.png'
          }, {
            nombre: 'Scrum',
            imagen: 'assets/images/scrum.png'
          }],
          ciclo: 'DAM | DAW',
          curso: 1
        }, {
          nombre: 'Empresa e Iniciativa emprendedora',
          profesor: 'Marta Jimenez',
          conocimientos: [{
            nombre: 'Emprender',
            imagen: 'assets/images/empresa.png'
          }],
          ciclo: 'DAM | DAW',
          curso: 2
        }, {
          nombre: 'Inglés',
          profesor: 'Rocio',
          conocimientos: [{
            nombre: 'ingles',
            imagen: 'assets/images/ingles.jpg'
          }],
          ciclo: 'DAM | DAW',
          curso: 2
        }, {
          nombre: 'Programación Multimedia y Dispositivos Moviles',
          profesor: 'Borja Martín',
          conocimientos: [{
            nombre: 'Java',
            imagen: 'assets/images/java.png'
          }, {
            nombre: 'Xml',
            imagen: 'assets/images/xml.jpg'
          }, {
            nombre: 'Json',
            imagen: 'assets/images/json.png'
          }],
          ciclo: 'DAM',
          curso: 2
        }, {
          nombre: 'Desarrollo de interfaces',
          profesor: 'Borja Martín',
          conocimientos: [{
            nombre: 'Java',
            imagen: 'assets/images/java.png'
          }, {
            nombre: 'Javafx',
            imagen: 'assets/images/javafx.jpg'
          }, {
            nombre: 'Json',
            imagen: 'assets/images/json.png'
          }, {
            nombre: 'Js',
            imagen: 'assets/images/js.jpg'
          }, {
            nombre: 'Angular',
            imagen: 'assets/images/angular.png'
          }],
          ciclo: 'DAM',
          curso: 2
        }, {
          nombre: 'Acceso a Datos',
          profesor: 'Hector Alonso',
          conocimientos: [{
            nombre: 'Java',
            imagen: 'assets/images/java.png'
          }, {
            nombre: 'MySQL',
            imagen: 'assets/images/mysql.png'
          }, {
            nombre: 'Mongo',
            imagen: 'assets/images/mongo.jpg'
          }, {
            nombre: 'PHP',
            imagen: 'assets/images/php.png'
          }],
          ciclo: 'DAM',
          curso: 2
        }, {
          nombre: 'Programacion de servicios y procesos',
          profesor: 'Jesús Niño',
          conocimientos: [{
            nombre: 'Seguridad',
            imagen: 'assets/images/seguridad.jpg'
          }, {
            nombre: 'PowerShell',
            imagen: 'assets/images/powershell.png'
          }],
          ciclo: 'DAM',
          curso: 2
        }, {
          nombre: 'Sistemas de gestión empresarial',
          profesor: 'Hector Alonso',
          conocimientos: [{
            nombre: 'ERP',
            imagen: 'assets/images/erp.jpg'
          }, {
            nombre: 'Odoo',
            imagen: 'assets/images/odoo.png'
          }],
          ciclo: 'DAM',
          curso: 2
        }, {
          nombre: 'Desarrollo Aplicaciones Web Entorno Cliente',
          profesor: 'Borja Martín',
          conocimientos: [{
            nombre: 'JavaScript',
            imagen: 'assets/images/js.jpg'
          }, {
            nombre: 'React',
            imagen: 'assets/images/react.png'
          }, {
            nombre: 'Webpack',
            imagen: 'assets/images/webpack.jpg'
          }, {
            nombre: 'Node',
            imagen: 'assets/images/node.png'
          }],
          ciclo: 'DAW',
          curso: 2
        }, {
          nombre: 'Desarrollo Aplicaciones Web Entorno Servidor',
          profesor: 'David Ventura',
          conocimientos: [{
            nombre: 'PHP',
            imagen: 'assets/images/php.png'
          }, {
            nombre: 'Node',
            imagen: 'assets/images/node.png'
          }],
          ciclo: 'DAW',
          curso: 2
        }, {
          nombre: 'Despliegue de Aplicaciones',
          profesor: 'Jesus Niño',
          conocimientos: [{
            nombre: 'Apache',
            imagen: 'assets/images/apache.jpeg'
          }, {
            nombre: 'Tomcat',
            imagen: 'assets/images/tomcat.png'
          }, {
            nombre: 'PowerShell',
            imagen: 'assets/images/powershell.png'
          }],
          ciclo: 'DAW',
          curso: 2
        }, {
          nombre: 'Desarrollo de Interfaces Web',
          profesor: 'Victor Martín',
          conocimientos: [{
            nombre: 'XML',
            imagen: 'assets/images/xml.jpg'
          }, {
            nombre: 'Bootstrap',
            imagen: 'assets/images/boots.png'
          }, {
            nombre: 'Diseño',
            imagen: 'assets/images/disenio.jpg'
          }],
          ciclo: 'DAW',
          curso: 2
        }];
      }

      _createClass(DatosService, [{
        key: "getAsignaturas",
        value: function getAsignaturas() {
          return this.asignaturas;
        }
      }, {
        key: "getAsignaturasDam",
        value: function getAsignaturasDam() {
          return this.asignaturaDam;
        }
      }, {
        key: "getAsignaturaDaw",
        value: function getAsignaturaDaw() {
          return this.asignaturaDaw;
        }
      }]);

      return DatosService;
    }();

    DatosService.ɵfac = function DatosService_Factory(t) {
      return new (t || DatosService)();
    };

    DatosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DatosService,
      factory: DatosService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\finalAngular\angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map