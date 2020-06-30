(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacto-contacto-contacto-module"],{

/***/ "./src/app/contacto/contacto/contacto-routing-module.ts":
/*!**************************************************************!*\
  !*** ./src/app/contacto/contacto/contacto-routing-module.ts ***!
  \**************************************************************/
/*! exports provided: ContactoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoRoutingModule", function() { return ContactoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contacto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacto.component */ "./src/app/contacto/contacto/contacto.component.ts");





const routes = [{ path: '', component: _contacto_component__WEBPACK_IMPORTED_MODULE_2__["ContactoComponent"] }];
class ContactoRoutingModule {
}
ContactoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContactoRoutingModule });
ContactoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContactoRoutingModule_Factory(t) { return new (t || ContactoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contacto/contacto/contacto.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/contacto/contacto/contacto.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/__ivy_ngcc__/fesm2015/ngx-qrcode2.js");




class ContactoComponent {
    constructor(dataApi) {
        this.dataApi = dataApi;
        this.books = [];
        this.book = [];
        this.title = 'app';
        this.elementType = 'url';
        this.value = '';
    }
    ngOnInit() {
        this.dataApi.getAllBooks().subscribe(books => {
            console.log(books[1].facebook);
        });
    }
    entregarQRCode(index) {
        switch (index) {
            case 1: {
                this.dataApi.getAllBooks().subscribe(books => {
                    this.value = books[0].twitter;
                });
                break;
            }
            case 2: {
                this.dataApi.getAllBooks().subscribe(books => {
                    this.value = books[0].youtube;
                });
                break;
            }
            case 3: {
                this.dataApi.getAllBooks().subscribe(books => {
                    this.value = books[0].facebook;
                });
                break;
            }
            case 4:
                this.dataApi.getAllBooks().subscribe(books => {
                    this.value = books[1].twitter;
                });
                break;
            case 5:
                this.dataApi.getAllBooks().subscribe(books => {
                    this.value = books[1].facebook;
                });
                break;
            case 6:
                this.dataApi.getAllBooks().subscribe(books => {
                    this.value = books[1].youtube;
                });
                break;
            case 7:
                this.dataApi.getAllBooks().subscribe(books => {
                    this.value = books[2].twitter;
                });
                break;
            case 8:
                this.dataApi.getAllBooks().subscribe(books => {
                    this.value = books[2].youtube;
                });
                break;
            case 9:
                this.dataApi.getAllBooks().subscribe(books => {
                    this.value = books[2].facebook;
                });
                break;
        }
        /*if(index === 1){
          this.value='https://www.youtube.com/watch?v=8E74q6HzReQ';
        }
        if(index === 2){
          this.value='https://mail.google.com/mail/u/0/#inbox/FMfcgxwJWXStMbBqCHkfptGBbcvZttFB';
        }
        if(index === 3){
          this.value='https://www.facebook.com/arnold';
        }*/
    }
}
ContactoComponent.ɵfac = function ContactoComponent_Factory(t) { return new (t || ContactoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"])); };
ContactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoComponent, selectors: [["app-contacto"]], decls: 56, vars: 2, consts: [[1, "card-columns", "m-12", "animated", "fadeIn"], [1, "card", "puntero"], ["src", "../../assets/arnold.jpg", "width", "1000", "height", "300", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary", 3, "click"], ["src", "../../../assets/drago.jpg", "width", "800", "height", "300", "alt", "Card image cap", 1, "card-img-top"], ["src", "../../assets/weaver.jpg", "width", "800", "height", "300", "alt", "Card image cap", 1, "card-img-top"], [2, "text-align", "center"], ["cssClass", "aclass", "errorCorrectionLevel", "L", 3, "elementType", "value"]], template: function ContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Entrenadores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Arnold S.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Clases de Pesas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_12_listener() { return ctx.entregarQRCode(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_15_listener() { return ctx.entregarQRCode(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "YouTube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_18_listener() { return ctx.entregarQRCode(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "FaceBook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ivan Drago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Clases de Boxeo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_28_listener() { return ctx.entregarQRCode(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_31_listener() { return ctx.entregarQRCode(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "YouTube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_34_listener() { return ctx.entregarQRCode(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "FaceBook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "LeBron James");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Clases de Cardio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_44_listener() { return ctx.entregarQRCode(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_47_listener() { return ctx.entregarQRCode(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "YouTube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_50_listener() { return ctx.entregarQRCode(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "FaceBook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Escanea el codigo QR para ir a la p\u00E1gina ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "ngx-qrcode", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("elementType", ctx.elementType)("value", ctx.value);
    } }, directives: [ngx_qrcode2__WEBPACK_IMPORTED_MODULE_2__["QrcodeComponent"]], styles: ["p[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\ndiv[_ngcontent-%COMP%] {\n  display: block;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG8vY29udGFjdG8vQzpcXFVzZXJzXFxEaWFuYVxcRG9jdW1lbnRzXFxUZWNub2xvZ2lhcyBXZWIgRGF2aWRcXFByb3llY3RvRmluYWxcXFByb3llY3RvR3ltLXYxMC9zcmNcXGFwcFxcY29udGFjdG9cXGNvbnRhY3RvXFxjb250YWN0by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdG8vY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdG8vY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5kaXZ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iLCJwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacto',
                templateUrl: './contacto.component.html',
                styleUrls: ['./contacto.component.scss']
            }]
    }], function () { return [{ type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contacto/contacto/contacto.module.ts":
/*!******************************************************!*\
  !*** ./src/app/contacto/contacto/contacto.module.ts ***!
  \******************************************************/
/*! exports provided: ContactoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoModule", function() { return ContactoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _contacto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacto.component */ "./src/app/contacto/contacto/contacto.component.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/__ivy_ngcc__/fesm2015/ngx-qrcode2.js");
/* harmony import */ var _contacto_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacto-routing-module */ "./src/app/contacto/contacto/contacto-routing-module.ts");






class ContactoModule {
    constructor() {
        this.title = 'app';
        this.elementType = 'url';
        this.value = '';
        this.seleccion = 0;
    }
    ngOnInit() {
        console.log(this.seleccion);
        throw new Error("Method not implemented.");
    }
    entregarQRCode(index) {
        console.log(index);
        /*switch(seleccion){
          
          case 1:{
            this.value='https://twitter.com/Schwarzenegger';
            break;
          }
            
          case 2:{
            this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
            break;
          }
             
          case 3:{
            this.value='https://www.facebook.com/arnold';
            break;
          }
             
          case 4:
            this.value='https://twitter.com/IvanDrago2020';
            break;
          
    
          case 5:
            this.value='https://www.facebook.com/public/Ivan-Drago';
            break;
          
    
          case 6:
            this.value='https://www.bing.com/videos/search?q=ivan+drago+youtube&ru=%2fsearch%3fq%3divan%2bdrago%2byoutube%26qs%3dn%26form%3dQBRE%26sp%3d-1%26pq%3divan%2bdrago%2byo%26sc%3d0-13%26sk%3d%26cvid%3dF363477832044772B5BA8D59ADCDEFB8&mmscn=vwrc&view=detail&mid=370771AD67E94EAC3DAB370771AD67E94EAC3DAB&rvsmid=01C9CE474E28ACF00CC501C9CE474E28ACF00CC5&FORM=VDQVAP';
            break;
          
    
          case 7:
            this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
            break;
          
    
          case 8:
            this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
            break;
          
    
          case 9:
            this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
            break;
          
    
          
        }*/
        /*if(index === 1){
          this.value='https://www.youtube.com/watch?v=8E74q6HzReQ';
        }
        if(index === 2){
          this.value='https://mail.google.com/mail/u/0/#inbox/FMfcgxwJWXStMbBqCHkfptGBbcvZttFB';
        }
        if(index === 3){
          this.value='https://www.facebook.com/arnold';
        }*/
    }
}
ContactoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContactoModule });
ContactoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContactoModule_Factory(t) { return new (t || ContactoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_qrcode2__WEBPACK_IMPORTED_MODULE_3__["NgxQRCodeModule"],
            _contacto_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContactoRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactoModule, { declarations: [_contacto_component__WEBPACK_IMPORTED_MODULE_2__["ContactoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_qrcode2__WEBPACK_IMPORTED_MODULE_3__["NgxQRCodeModule"],
        _contacto_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContactoRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_contacto_component__WEBPACK_IMPORTED_MODULE_2__["ContactoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_qrcode2__WEBPACK_IMPORTED_MODULE_3__["NgxQRCodeModule"],
                    _contacto_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContactoRoutingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/data-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/data-api.service.ts ***!
  \**********************************************/
/*! exports provided: DataApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApiService", function() { return DataApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



class DataApiService {
    constructor(afs) {
        this.afs = afs;
        this.booksCollection = afs.collection('contact_teacher');
        this.books = this.booksCollection.valueChanges();
    }
    getAllBooks() {
        return this.books;
    }
}
DataApiService.ɵfac = function DataApiService_Factory(t) { return new (t || DataApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
DataApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataApiService, factory: DataApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=contacto-contacto-contacto-module-es2015.js.map