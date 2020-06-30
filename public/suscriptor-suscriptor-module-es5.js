function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["suscriptor-suscriptor-module"], {
  /***/
  "./src/app/suscriptor/suscriptor-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/suscriptor/suscriptor-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: SuscriptorRoutingModule */

  /***/
  function srcAppSuscriptorSuscriptorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuscriptorRoutingModule", function () {
      return SuscriptorRoutingModule;
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


    var _suscriptor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./suscriptor.component */
    "./src/app/suscriptor/suscriptor.component.ts");

    var routes = [{
      path: '',
      component: _suscriptor_component__WEBPACK_IMPORTED_MODULE_2__["SuscriptorComponent"]
    }];

    var SuscriptorRoutingModule = function SuscriptorRoutingModule() {
      _classCallCheck(this, SuscriptorRoutingModule);
    };

    SuscriptorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SuscriptorRoutingModule
    });
    SuscriptorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SuscriptorRoutingModule_Factory(t) {
        return new (t || SuscriptorRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SuscriptorRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuscriptorRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/suscriptor/suscriptor.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/suscriptor/suscriptor.component.ts ***!
    \****************************************************/

  /*! exports provided: SuscriptorComponent */

  /***/
  function srcAppSuscriptorSuscriptorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuscriptorComponent", function () {
      return SuscriptorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SuscriptorComponent = /*#__PURE__*/function () {
      function SuscriptorComponent() {
        _classCallCheck(this, SuscriptorComponent);
      }

      _createClass(SuscriptorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SuscriptorComponent;
    }();

    SuscriptorComponent.ɵfac = function SuscriptorComponent_Factory(t) {
      return new (t || SuscriptorComponent)();
    };

    SuscriptorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SuscriptorComponent,
      selectors: [["app-suscriptor"]],
      decls: 2,
      vars: 0,
      template: function SuscriptorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "suscriptor works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1c2NyaXB0b3Ivc3VzY3JpcHRvci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuscriptorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-suscriptor',
          templateUrl: './suscriptor.component.html',
          styleUrls: ['./suscriptor.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/suscriptor/suscriptor.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/suscriptor/suscriptor.module.ts ***!
    \*************************************************/

  /*! exports provided: SuscriptorModule */

  /***/
  function srcAppSuscriptorSuscriptorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuscriptorModule", function () {
      return SuscriptorModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _suscriptor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./suscriptor-routing.module */
    "./src/app/suscriptor/suscriptor-routing.module.ts");
    /* harmony import */


    var _suscriptor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./suscriptor.component */
    "./src/app/suscriptor/suscriptor.component.ts");

    var SuscriptorModule = function SuscriptorModule() {
      _classCallCheck(this, SuscriptorModule);
    };

    SuscriptorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SuscriptorModule
    });
    SuscriptorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SuscriptorModule_Factory(t) {
        return new (t || SuscriptorModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _suscriptor_routing_module__WEBPACK_IMPORTED_MODULE_2__["SuscriptorRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SuscriptorModule, {
        declarations: [_suscriptor_component__WEBPACK_IMPORTED_MODULE_3__["SuscriptorComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _suscriptor_routing_module__WEBPACK_IMPORTED_MODULE_2__["SuscriptorRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuscriptorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_suscriptor_component__WEBPACK_IMPORTED_MODULE_3__["SuscriptorComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _suscriptor_routing_module__WEBPACK_IMPORTED_MODULE_2__["SuscriptorRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=suscriptor-suscriptor-module-es5.js.map