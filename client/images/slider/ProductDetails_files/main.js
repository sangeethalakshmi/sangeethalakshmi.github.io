(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"wrapper\">\n  \t<!-- Page -->\n    <div class=\"page-wrapper\">\n      <!-- Header -->\n\t\t\t<header class=\"page-header variant-2 fullboxed sticky smart\">\n         \n                  <ross-navbar></ross-navbar>\n                  \n             \n          <ross-sidemenu></ross-sidemenu>\n      </header>\n      <!-- Page Content -->\n        <main class=\"page-main\">\n          <ross-breadcrumb></ross-breadcrumb>\n          <router-outlet></router-outlet>\n        </main>\n      <!-- /Page Content -->\n\t\t\t<!-- Footer -->\n        <ross-footer></ross-footer>\n      <!-- /Footer --> \n       \n    </div>\n</div>\n<!-- Back To Top -->\n<ross-back-top></ross-back-top>\n<!-- /Back To Top -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_magnificpopup_dist_jquery_magnific_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/js/magnificpopup/dist/jquery.magnific-popup.js */ "./src/assets/js/magnificpopup/dist/jquery.magnific-popup.js");
/* harmony import */ var _assets_js_magnificpopup_dist_jquery_magnific_popup_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_magnificpopup_dist_jquery_magnific_popup_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/js/slick/slick.min.js */ "./src/assets/js/slick/slick.min.js");
/* harmony import */ var _assets_js_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_js_megamenu_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/js/megamenu.min.js */ "./src/assets/js/megamenu.min.js");
/* harmony import */ var _assets_js_megamenu_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_megamenu_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_js_app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/js/app.js */ "./src/assets/js/app.js");
/* harmony import */ var _assets_js_app_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_app_js__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ross';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    // load Countdown
    AppConfig.prototype.loadCountDown = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.countdown').each(function () {
            var countdown = jquery__WEBPACK_IMPORTED_MODULE_1__(this);
            var promoperiod;
            if (countdown.attr('data-promoperiod')) {
                promoperiod = new Date().getTime() + parseInt(countdown.attr('data-promoperiod'), 10);
            }
            if (countdown.attr('data-promodate')) {
                promoperiod = countdown.attr('data-promodate');
            }
            countdown.countdown(promoperiod, function (event) {
                countdown.html(event.strftime('<span><span>%D</span>DAYS</span>' + '<span><span>%H</span>HRS</span>' + '<span><span>%M</span>MIN</span>' + '<span><span>%S</span>SEC</span>'));
            });
        });
    };
    ;
    AppConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppConfig);
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/navbar/navbar.component */ "./src/app/layout/navbar/navbar.component.ts");
/* harmony import */ var _layout_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/sidemenu/sidemenu.component */ "./src/app/layout/sidemenu/sidemenu.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_back_top_back_top_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/back-top/back-top.component */ "./src/app/layout/back-top/back-top.component.ts");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/breadcrumb/breadcrumb.component */ "./src/app/layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _deals_deals_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deals/deals.component */ "./src/app/deals/deals.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// import { AddToCartComponent } from './add-to-cart/add-to-cart.component';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _layout_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_4__["SidemenuComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _layout_back_top_back_top_component__WEBPACK_IMPORTED_MODULE_6__["BackTopComponent"],
                _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__["BannerComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_12__["BlogComponent"],
                _deals_deals_component__WEBPACK_IMPORTED_MODULE_13__["DealsComponent"],
                _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_15__["ProductDetailsComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_14__["ProductComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                // AddToCartComponent,
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__["CheckoutComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_20__["OrdersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["routing"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
            ],
            providers: [_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");





var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'details', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailsComponent"], data: { breadcrumb: 'ProductDetails' } },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"], data: { breadcrumb: 'Cart' } },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__["CheckoutComponent"], data: { breadcrumb: 'Checkout' } }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {});


/***/ }),

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"row\">\t\n      <div class=\"col-sm-6\">\t\n        <div class=\"col-content\">\t\n          <a href=\"#\" class=\"banner-wrap\">\t\n            <div class=\"banner style-7 autosize-text image-hover-scale\" data-fontratio=\"9.6\" style=\"font-size: 80px;\">\t\n              <img src=\"https://cdn.shopify.com/s/files/1/1323/8471/files/banner-layout-5.jpg?15212424862871340357\" alt=\"Banner\">\n              <div class=\"banner-caption horr vertc\">\t\n                <div class=\"vert-wrapper\">\t\n                  <div class=\"vert\">\t\n                    <div class=\"text-3\">\t\n                      <span class=\"text-3-inner\">\n                        -5% Sale\n                      </span>\n                    </div>\n                    <div class=\"text-1\">\n                      Spring in Style\n                    </div>\n                    <div class=\"text-2\">\n                      Run collection\n                    </div>\n                    <div class=\"banner-btn text-hoverslide\" data-hcolor=\"#f82e56\">\t\n                      <span>\t\n                        <span class=\"text\" style=\"\">\n                          SHOP NOW\n                        </span>\n                        <span class=\"hoverbg\">\n                        </span>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\t\n        <div class=\"col-content\">\t\n          <a href=\"#\" class=\"banner-wrap\">\t\n            <div class=\"banner style-8 autosize-text image-hover-scale\" data-fontratio=\"10\" style=\"font-size: 72px;\">\t\n              <img src=\"https://cdn.shopify.com/s/files/1/1323/8471/files/banner-layout-6.jpg?15212424862871340357\" alt=\"Banner\">\n              <div class=\"banner-caption horr vertc\">\t\n                <div class=\"vert-wrapper\">\t\n                  <div class=\"vert\">\t\n                    <div class=\"text-1\">\tEven the\n                      <span>\n                        hottest\n                      </span> day wont’t slow you down\n                    </div>\n                    <div class=\"banner-btn text-hoverslide\" data-hcolor=\"#67E0FA\">\t\n                      <span>\t\n                        <span class=\"text\" style=\"\">\n                          SHOP NOW\n                        </span>\n                        <span class=\"hoverbg\">\n                        </span>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Blog Carousel -->\n<div class=\"title\">\n  <h2>From Blog</h2>\n  <div class=\"carousel-arrows\"></div>\n</div>\n<!-- Blog Carousel Item -->\n<div class=\"blog-carousel\">\n  <div class=\"blog-item\">\n    <a href=\"blog.html\" class=\"blog-item-photo\"> <img class=\"product-image-photo\" src=\"assets/images/blog/blog-1.jpg\" alt=\"From Blog\"> </a>\n    <div class=\"blog-item-info\">\n      <a href=\"blog.html\" class=\"blog-item-title\">Inventore consectetur ullam</a>\n      <div class=\"blog-item-teaser\">Repellat aspernatur esse minus. Molestiae ipsum earum, aspernatur fugit veniam ducimus doloremque repellat suscipit. Cumque!</div>\n      <div class=\"blog-item-links\"> <span class=\"pull-left\"> <span><a href=\"#\" class=\"readmore\">Read more</a></span> </span> <span class=\"pull-right\"> <span>Post by <a href=\"#\">Admin</a></span> </span>\n      </div>\n    </div>\n  </div>\n  <!-- /Blog Carousel Item -->\n  <!-- Blog Carousel Item -->\n  <div class=\"blog-item\">\n    <a href=\"blog.html\" class=\"blog-item-photo\"> <img class=\"product-image-photo\" src=\"assets/images/blog/blog-2.jpg\" alt=\"From Blog\"> </a>\n    <div class=\"blog-item-info\">\n      <a href=\"blog.html\" class=\"blog-item-title\">Aperiam, vero facilis</a>\n      <div class=\"blog-item-teaser\">Commodo delectus consequuntur consectetur culpa ea doloremque repellat laoreet semper tincidunt lorem Euismod euismod Suspendisse </div>\n      <div class=\"blog-item-links\"> <span class=\"pull-left\"> <span><a href=\"#\" class=\"readmore\">Read more</a></span> </span> <span class=\"pull-right\"> <span>Post by <a href=\"#\">Admin</a></span> </span>\n      </div>\n    </div>\n  </div>\n  <!-- /Blog Carousel Item -->\n  <!-- Blog Carousel Item -->\n  <div class=\"blog-item\">\n    <a href=\"blog.html\" class=\"blog-item-photo\"> <img class=\"product-image-photo\" src=\"assets/images/blog/blog-3.jpg\" alt=\"From Blog\"> </a>\n    <div class=\"blog-item-info\">\n      <a href=\"blog.html\" class=\"blog-item-title\">Repellat aspernatur</a>\n      <div class=\"blog-item-teaser\">Omnis, nihil hic ratione culpa atque ipsum repellat quaerat impedit, ipsam odio delectus consequuntur consectetur culpa ea doloremque repellat</div>\n      <div class=\"blog-item-links\"> <span class=\"pull-left\"> <span><a href=\"#\" class=\"readmore\">Read more</a></span> </span> <span class=\"pull-right\"> <span>Post by <a href=\"#\">Admin</a></span> </span>\n      </div>\n    </div>\n  </div>\n  <!-- /Blog Carousel Item -->\n  <!-- Blog Carousel Item -->\n  <div class=\"blog-item\">\n    <a href=\"blog.html\" class=\"blog-item-photo\"> <img class=\"product-image-photo\" src=\"assets/images/blog/blog-4.jpg\" alt=\"From Blog\"> </a>\n    <div class=\"blog-item-info\">\n      <a href=\"blog.html\" class=\"blog-item-title\">Commodo laoreet tincidunt</a>\n      <div class=\"blog-item-teaser\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi provident earum minus delectus voluptatum asperiores consectetur culpa ea doloremque</div>\n      <div class=\"blog-item-links\"> <span class=\"pull-left\"> <span><a href=\"#\" class=\"readmore\">Read more</a></span> </span> <span class=\"pull-right\"><span>Post by <a href=\"#\">Admin</a></span> </span>\n      </div>\n    </div>\n  </div>\n  <!-- /Blog Carousel Item -->\n</div>\n<!-- /Blog Carousel -->\n      "

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
        // from blog carousel
        this.loadBlogCaurosel();
    };
    // load blog carousel
    BlogComponent.prototype.loadBlogCaurosel = function () {
        // from blog carousel
        if (jquery__WEBPACK_IMPORTED_MODULE_1__(".blog-carousel").length) {
            var $this = jquery__WEBPACK_IMPORTED_MODULE_1__(".blog-carousel"), arrowsplace = $this;
            var $carouseltitle = $this.prev('.title');
            if ($this.parent().hasClass('collapsed-content')) {
                $carouseltitle = $this.parent().prev('.title');
            }
            if ($carouseltitle.find('.carousel-arrows').length) {
                arrowsplace = $carouseltitle.find('.carousel-arrows');
            }
            $this.slick({
                rows: 1,
                appendArrows: arrowsplace,
                slidesToShow: 2,
                slidesToScroll: 2,
                speed: 500,
                infinite: false,
                responsive: [{
                        breakpoint: 1401,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }, {
                        breakpoint: 1201,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 993,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
            });
        }
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".floatRight{\n    float:right;\n}"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block\">\n    <div class=\"container\">\n      <div class=\"cart-table\">\n        <div class=\"table-header\">\n          <div class=\"photo\">\n            Product Image\n          </div>\n          <div class=\"name\">\n            Product Name\n          </div>\n          <div class=\"price\">\n            Unit Price\n          </div>\n          <div class=\"qty\">\n            Qty\n          </div>\n          <div class=\"subtotal\">\n            Subtotal\n          </div>\n          <div class=\"remove\">\n            <span class=\"hidden-sm hidden-xs\">Remove</span>\n          </div>\n        </div>\n        <div class=\"table-row\">\n          <div class=\"photo\">\n            <a href=\"product.html\"><img src=\"assets/images/products/product-1.jpg\" alt=\"\"></a>\n          </div>\n          <div class=\"name\">\n            <a href=\"product.html\">Boyfriend Short</a>\n          </div>\n          <div class=\"price\">\n            $85.00\n          </div>\n          <div class=\"qty qty-changer\">\n            <fieldset>\n              <input type=\"button\" value=\"&#8210;\" class=\"decrease\">\n              <input type=\"text\" class=\"qty-input\" value=\"2\" data-min=\"0\" data-max=\"5\">\n              <input type=\"button\" value=\"+\" class=\"increase\">\n            </fieldset>\n          </div>\n          <div class=\"subtotal\">\n            $85.00\n          </div>\n          <div class=\"remove\">\n            <a href=\"#\" class=\"icon icon-close-2\"></a>\n          </div>\n        </div>\n        <div class=\"table-row\">\n          <div class=\"photo\">\n            <a href=\"product.html\"><img src=\"assets/images/products/product-2.jpg\" alt=\"\"></a>\n          </div>\n          <div class=\"name\">\n            <a href=\"product.html\">Floral Print Top</a>\n          </div>\n          <div class=\"price\">\n            $185.00\n          </div>\n          <div class=\"qty qty-changer\">\n            <fieldset>\n              <input type=\"button\" value=\"&#8210;\" class=\"decrease\">\n              <input type=\"text\" class=\"qty-input\" value=\"2\" data-min=\"0\">\n              <input type=\"button\" value=\"+\" class=\"increase\">\n            </fieldset>\n          </div>\n          <div class=\"subtotal\">\n            $185.00\n          </div>\n          <div class=\"remove\">\n            <a href=\"#\" class=\"icon icon-close-2\"></a>\n          </div>\n        </div>\n        <div class=\"table-footer\">\n          <button class=\"btn btn-alt\">CONTINUE SHOPPING</button>\n          <button class=\"btn btn-alt floatRight\"><i class=\"icon icon-bin\"></i><span>Clear Shopping Cart</span></button>\n          <button class=\"btn btn-alt floatRight\"><i class=\"icon icon-sync\"></i><span>UPDATE</span></button>\n        </div>\n      </div>\n      <div class=\"row\">\n        \n        <div class=\"col-sm-6 col-md-5\">\n          <h2>Estimate Shipping and Tax</h2>\n          <form class=\"white\" action=\"#\">\n            <label>Country<span class=\"required\">*</span></label>\n            <div class=\"select-wrapper\">\n              <select class=\"form-control\">\n                <option data-code=\"US\" value=\"United States\">United States</option>\n                <option data-code=\"NL\" value=\"Netherlands\">Netherlands</option>\n                <option data-code=\"MY\" value=\"Malaysia\">Malaysia</option>\n                <option data-code=\"CA\" value=\"Canada\">Canada</option>\n                <option data-code=\"IO\" value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\n                <option data-code=\"VG\" value=\"Virgin Islands, British\">British Virgin Islands</option>\n                <option data-code=\"BN\" value=\"Brunei\">Brunei</option>\n                <option data-code=\"BG\" value=\"Bulgaria\">Bulgaria</option>\n                <option data-code=\"BF\" value=\"Burkina Faso\">Burkina Faso</option>\n                <option data-code=\"BI\" value=\"Burundi\">Burundi</option>\n                <option data-code=\"KH\" value=\"Cambodia\">Cambodia</option>\n                <option data-code=\"CM\" value=\"Republic of Cameroon\">Cameroon</option>\n                <option data-code=\"CA\" value=\"Canada\">Canada</option>\n                <option data-code=\"CV\" value=\"Cape Verde\">Cape Verde</option>\n                <option data-code=\"KY\" value=\"Cayman Islands\">Cayman Islands</option>\n                <option data-code=\"CF\" value=\"Central African Republic\">Central African Republic</option>\n                <option data-code=\"TD\" value=\"Chad\">Chad</option>\n                <option data-code=\"CL\" value=\"Chile\">Chile</option>\n                <option data-code=\"CN\" value=\"China\">China</option>\n                <option data-code=\"CX\" value=\"Christmas Island\">Christmas Island</option>\n                <option data-code=\"CC\" value=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</option>\n                <option data-code=\"CO\" value=\"Colombia\">Colombia</option>\n                <option data-code=\"KM\" value=\"Comoros\">Comoros</option>\n                <option data-code=\"CG\" value=\"Congo\">Congo - Brazzaville</option>\n                <option data-code=\"CD\" value=\"Congo, The Democratic Republic Of The\">Congo - Kinshasa</option>\n                <option data-code=\"CK\" value=\"Cook Islands\">Cook Islands</option>\n                <option data-code=\"CR\" value=\"Costa Rica\">Costa Rica</option>\n                <option data-code=\"HR\" value=\"Croatia\">Croatia</option>\n                <option data-code=\"CU\" value=\"Cuba\">Cuba</option>\n                <option data-code=\"CW\" value=\"Curaçao\">Curaçao</option>\n                <option data-code=\"CY\" value=\"Cyprus\">Cyprus</option>\n                <option data-code=\"CZ\" value=\"Czech Republic\">Czech Republic</option>\n                <option data-code=\"CI\" value=\"Côte d'Ivoire\">Côte d’Ivoire</option>\n                <option data-code=\"DK\" value=\"Denmark\">Denmark</option>\n                <option data-code=\"DJ\" value=\"Djibouti\">Djibouti</option>\n                <option data-code=\"DM\" value=\"Dominica\">Dominica</option>\n                <option data-code=\"DO\" value=\"Dominican Republic\">Dominican Republic</option>\n                <option data-code=\"EC\" value=\"Ecuador\">Ecuador</option>\n                <option data-code=\"EG\" value=\"Egypt\">Egypt</option>\n                <option data-code=\"SV\" value=\"El Salvador\">El Salvador</option>\n                <option data-code=\"GQ\" value=\"Equatorial Guinea\">Equatorial Guinea</option>\n                <option data-code=\"ER\" value=\"Eritrea\">Eritrea</option>\n                <option data-code=\"EE\" value=\"Estonia\">Estonia</option>\n                <option data-code=\"ET\" value=\"Ethiopia\">Ethiopia</option>\n                <option data-code=\"FK\" value=\"Falkland Islands (Malvinas)\">Falkland Islands</option>\n                <option data-code=\"FO\" value=\"Faroe Islands\">Faroe Islands</option>\n                <option data-code=\"FJ\" value=\"Fiji\">Fiji</option>\n                <option data-code=\"FI\" value=\"Finland\">Finland</option>\n                <option data-code=\"FR\" value=\"French\">French</option>\n                <option data-code=\"GF\" value=\"French Guiana\">French Guiana</option>\n                <option data-code=\"PF\" value=\"French Polynesia\">French Polynesia</option>\n                <option data-code=\"TF\" value=\"French Southern Territories\">French Southern Territories</option>\n                <option data-code=\"GA\" value=\"Gabon\">Gabon</option>\n                <option data-code=\"GM\" value=\"Gambia\">Gambia</option>\n                <option data-code=\"GE\" value=\"Georgia\">Georgia</option>\n                <option data-code=\"DE\" value=\"German\">German</option>\n                <option data-code=\"GH\" value=\"Ghana\">Ghana</option>\n                <option data-code=\"GI\" value=\"Gibraltar\">Gibraltar</option>\n                <option data-code=\"GR\" value=\"Greece\">Greece</option>\n                <option data-code=\"GL\" value=\"Greenland\">Greenland</option>\n                <option data-code=\"GD\" value=\"Grenada\">Grenada</option>\n                <option data-code=\"GP\" value=\"Guadeloupe\">Guadeloupe</option>\n                <option data-code=\"GT\" value=\"Guatemala\">Guatemala</option>\n                <option data-code=\"GG\" value=\"Guernsey\">Guernsey</option>\n                <option data-code=\"GN\" value=\"Guinea\">Guinea</option>\n                <option data-code=\"GW\" value=\"Guinea Bissau\">Guinea-Bissau</option>\n                <option data-code=\"GY\" value=\"Guyana\">Guyana</option>\n                <option data-code=\"HT\" value=\"Haiti\">Haiti</option>\n                <option data-code=\"HM\" value=\"Heard Island And Mcdonald Islands\">Heard &amp; McDonald Islands</option>\n                <option data-code=\"HN\" value=\"Honduras\">Honduras</option>\n                <option data-code=\"HK\" value=\"Hong Kong\">Hong Kong SAR China</option>\n                <option data-code=\"HU\" value=\"Hungary\">Hungary</option>\n                <option data-code=\"IS\" value=\"Iceland\">Iceland</option>\n                <option data-code=\"IN\" value=\"India\">India</option>\n                <option data-code=\"ID\" value=\"Indonesia\">Indonesia</option>\n                <option data-code=\"IR\" value=\"Iran, Islamic Republic Of\">Iran</option>\n                <option data-code=\"IQ\" value=\"Iraq\">Iraq</option>\n                <option data-code=\"IE\" value=\"Ireland\">Ireland</option>\n                <option data-code=\"IM\" value=\"Isle Of Man\">Isle of Man</option>\n                <option data-code=\"IL\" value=\"Israel\">Israel</option>\n                <option data-code=\"IT\" value=\"Italy\">Italy</option>\n                <option data-code=\"JM\" value=\"Jamaica\">Jamaica</option>\n                <option data-code=\"JP\" value=\"Japan\">Japan</option>\n                <option data-code=\"JE\" value=\"Jersey\">Jersey</option>\n                <option data-code=\"JO\" value=\"Jordan\">Jordan</option>\n                <option data-code=\"KZ\" value=\"Kazakhstan\">Kazakhstan</option>\n                <option data-code=\"KE\" value=\"Kenya\">Kenya</option>\n                <option data-code=\"KI\" value=\"Kiribati\">Kiribati</option>\n                <option data-code=\"KV\" value=\"Kosovo\">Kosovo</option>\n                <option data-code=\"KW\" value=\"Kuwait\">Kuwait</option>\n                <option data-code=\"KG\" value=\"Kyrgyzstan\">Kyrgyzstan</option>\n                <option data-code=\"LA\" value=\"Lao People's Democratic Republic\">Laos</option>\n                <option data-code=\"LV\" value=\"Latvia\">Latvia</option>\n                <option data-code=\"LB\" value=\"Lebanon\">Lebanon</option>\n                <option data-code=\"LS\" value=\"Lesotho\">Lesotho</option>\n                <option data-code=\"LR\" value=\"Liberia\">Liberia</option>\n                <option data-code=\"LY\" value=\"Libyan Arab Jamahiriya\">Libya</option>\n                <option data-code=\"LI\" value=\"Liechtenstein\">Liechtenstein</option>\n                <option data-code=\"LT\" value=\"Lithuania\">Lithuania</option>\n                <option data-code=\"LU\" value=\"Luxembourg\">Luxembourg</option>\n                <option data-code=\"MO\" value=\"Macao\">Macau SAR China</option>\n                <option data-code=\"MK\" value=\"Macedonia, Republic Of\">Macedonia</option>\n                <option data-code=\"MG\" value=\"Madagascar\">Madagascar</option>\n                <option data-code=\"MW\" value=\"Malawi\">Malawi</option>\n                <option data-code=\"MY\" value=\"Malaysia\">Malaysia</option>\n                <option data-code=\"MV\" value=\"Maldives\">Maldives</option>\n                <option data-code=\"ML\" value=\"Mali\">Mali</option>\n                <option data-code=\"MT\" value=\"Malta\">Malta</option>\n                <option data-code=\"MQ\" value=\"Martinique\">Martinique</option>\n                <option data-code=\"MR\" value=\"Mauritania\">Mauritania</option>\n                <option data-code=\"MU\" value=\"Mauritius\">Mauritius</option>\n                <option data-code=\"YT\" value=\"Mayotte\">Mayotte</option>\n                <option data-code=\"MX\" value=\"Mexico\">Mexico</option>\n              </select>\n            </div>\n            <label>State/Province <span class=\"required\">*</span></label>\n            <div class=\"select-wrapper\">\n              <select class=\"form-control\">\n                <option data-code=\"US\" value=\"United States\">United States</option>\n                <option data-code=\"NL\" value=\"Netherlands\">Netherlands</option>\n                <option data-code=\"MY\" value=\"Malaysia\">Malaysia</option>\n                <option data-code=\"CA\" value=\"Canada\">Canada</option>\n                <option data-code=\"IO\" value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\n                <option data-code=\"VG\" value=\"Virgin Islands, British\">British Virgin Islands</option>\n                <option data-code=\"BN\" value=\"Brunei\">Brunei</option>\n                <option data-code=\"BG\" value=\"Bulgaria\">Bulgaria</option>\n                <option data-code=\"BF\" value=\"Burkina Faso\">Burkina Faso</option>\n                <option data-code=\"BI\" value=\"Burundi\">Burundi</option>\n                <option data-code=\"KH\" value=\"Cambodia\">Cambodia</option>\n                <option data-code=\"CM\" value=\"Republic of Cameroon\">Cameroon</option>\n                <option data-code=\"CA\" value=\"Canada\">Canada</option>\n                <option data-code=\"CV\" value=\"Cape Verde\">Cape Verde</option>\n                <option data-code=\"KY\" value=\"Cayman Islands\">Cayman Islands</option>\n                <option data-code=\"CF\" value=\"Central African Republic\">Central African Republic</option>\n                <option data-code=\"TD\" value=\"Chad\">Chad</option>\n                <option data-code=\"CL\" value=\"Chile\">Chile</option>\n                <option data-code=\"CN\" value=\"China\">China</option>\n                <option data-code=\"CX\" value=\"Christmas Island\">Christmas Island</option>\n                <option data-code=\"CC\" value=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</option>\n                <option data-code=\"CO\" value=\"Colombia\">Colombia</option>\n                <option data-code=\"KM\" value=\"Comoros\">Comoros</option>\n                <option data-code=\"CG\" value=\"Congo\">Congo - Brazzaville</option>\n                <option data-code=\"CD\" value=\"Congo, The Democratic Republic Of The\">Congo - Kinshasa</option>\n                <option data-code=\"CK\" value=\"Cook Islands\">Cook Islands</option>\n                <option data-code=\"CR\" value=\"Costa Rica\">Costa Rica</option>\n                <option data-code=\"HR\" value=\"Croatia\">Croatia</option>\n                <option data-code=\"CU\" value=\"Cuba\">Cuba</option>\n                <option data-code=\"CW\" value=\"Curaçao\">Curaçao</option>\n                <option data-code=\"CY\" value=\"Cyprus\">Cyprus</option>\n                <option data-code=\"CZ\" value=\"Czech Republic\">Czech Republic</option>\n                <option data-code=\"CI\" value=\"Côte d'Ivoire\">Côte d’Ivoire</option>\n                <option data-code=\"DK\" value=\"Denmark\">Denmark</option>\n                <option data-code=\"DJ\" value=\"Djibouti\">Djibouti</option>\n                <option data-code=\"DM\" value=\"Dominica\">Dominica</option>\n                <option data-code=\"DO\" value=\"Dominican Republic\">Dominican Republic</option>\n                <option data-code=\"EC\" value=\"Ecuador\">Ecuador</option>\n                <option data-code=\"EG\" value=\"Egypt\">Egypt</option>\n                <option data-code=\"SV\" value=\"El Salvador\">El Salvador</option>\n                <option data-code=\"GQ\" value=\"Equatorial Guinea\">Equatorial Guinea</option>\n                <option data-code=\"ER\" value=\"Eritrea\">Eritrea</option>\n                <option data-code=\"EE\" value=\"Estonia\">Estonia</option>\n                <option data-code=\"ET\" value=\"Ethiopia\">Ethiopia</option>\n                <option data-code=\"FK\" value=\"Falkland Islands (Malvinas)\">Falkland Islands</option>\n                <option data-code=\"FO\" value=\"Faroe Islands\">Faroe Islands</option>\n                <option data-code=\"FJ\" value=\"Fiji\">Fiji</option>\n                <option data-code=\"FI\" value=\"Finland\">Finland</option>\n                <option data-code=\"FR\" value=\"French\">French</option>\n                <option data-code=\"GF\" value=\"French Guiana\">French Guiana</option>\n                <option data-code=\"PF\" value=\"French Polynesia\">French Polynesia</option>\n                <option data-code=\"TF\" value=\"French Southern Territories\">French Southern Territories</option>\n                <option data-code=\"GA\" value=\"Gabon\">Gabon</option>\n                <option data-code=\"GM\" value=\"Gambia\">Gambia</option>\n                <option data-code=\"GE\" value=\"Georgia\">Georgia</option>\n                <option data-code=\"DE\" value=\"German\">German</option>\n                <option data-code=\"GH\" value=\"Ghana\">Ghana</option>\n                <option data-code=\"GI\" value=\"Gibraltar\">Gibraltar</option>\n                <option data-code=\"GR\" value=\"Greece\">Greece</option>\n                <option data-code=\"GL\" value=\"Greenland\">Greenland</option>\n                <option data-code=\"GD\" value=\"Grenada\">Grenada</option>\n                <option data-code=\"GP\" value=\"Guadeloupe\">Guadeloupe</option>\n                <option data-code=\"GT\" value=\"Guatemala\">Guatemala</option>\n                <option data-code=\"GG\" value=\"Guernsey\">Guernsey</option>\n                <option data-code=\"GN\" value=\"Guinea\">Guinea</option>\n                <option data-code=\"GW\" value=\"Guinea Bissau\">Guinea-Bissau</option>\n                <option data-code=\"GY\" value=\"Guyana\">Guyana</option>\n                <option data-code=\"HT\" value=\"Haiti\">Haiti</option>\n                <option data-code=\"HM\" value=\"Heard Island And Mcdonald Islands\">Heard &amp; McDonald Islands</option>\n                <option data-code=\"HN\" value=\"Honduras\">Honduras</option>\n                <option data-code=\"HK\" value=\"Hong Kong\">Hong Kong SAR China</option>\n                <option data-code=\"HU\" value=\"Hungary\">Hungary</option>\n                <option data-code=\"IS\" value=\"Iceland\">Iceland</option>\n                <option data-code=\"IN\" value=\"India\">India</option>\n                <option data-code=\"ID\" value=\"Indonesia\">Indonesia</option>\n                <option data-code=\"IR\" value=\"Iran, Islamic Republic Of\">Iran</option>\n                <option data-code=\"IQ\" value=\"Iraq\">Iraq</option>\n                <option data-code=\"IE\" value=\"Ireland\">Ireland</option>\n                <option data-code=\"IM\" value=\"Isle Of Man\">Isle of Man</option>\n                <option data-code=\"IL\" value=\"Israel\">Israel</option>\n                <option data-code=\"IT\" value=\"Italy\">Italy</option>\n                <option data-code=\"JM\" value=\"Jamaica\">Jamaica</option>\n                <option data-code=\"JP\" value=\"Japan\">Japan</option>\n                <option data-code=\"JE\" value=\"Jersey\">Jersey</option>\n                <option data-code=\"JO\" value=\"Jordan\">Jordan</option>\n                <option data-code=\"KZ\" value=\"Kazakhstan\">Kazakhstan</option>\n                <option data-code=\"KE\" value=\"Kenya\">Kenya</option>\n                <option data-code=\"KI\" value=\"Kiribati\">Kiribati</option>\n                <option data-code=\"KV\" value=\"Kosovo\">Kosovo</option>\n                <option data-code=\"KW\" value=\"Kuwait\">Kuwait</option>\n                <option data-code=\"KG\" value=\"Kyrgyzstan\">Kyrgyzstan</option>\n                <option data-code=\"LA\" value=\"Lao People's Democratic Republic\">Laos</option>\n                <option data-code=\"LV\" value=\"Latvia\">Latvia</option>\n                <option data-code=\"LB\" value=\"Lebanon\">Lebanon</option>\n                <option data-code=\"LS\" value=\"Lesotho\">Lesotho</option>\n                <option data-code=\"LR\" value=\"Liberia\">Liberia</option>\n                <option data-code=\"LY\" value=\"Libyan Arab Jamahiriya\">Libya</option>\n                <option data-code=\"LI\" value=\"Liechtenstein\">Liechtenstein</option>\n                <option data-code=\"LT\" value=\"Lithuania\">Lithuania</option>\n                <option data-code=\"LU\" value=\"Luxembourg\">Luxembourg</option>\n                <option data-code=\"MO\" value=\"Macao\">Macau SAR China</option>\n                <option data-code=\"MK\" value=\"Macedonia, Republic Of\">Macedonia</option>\n                <option data-code=\"MG\" value=\"Madagascar\">Madagascar</option>\n                <option data-code=\"MW\" value=\"Malawi\">Malawi</option>\n                <option data-code=\"MY\" value=\"Malaysia\">Malaysia</option>\n                <option data-code=\"MV\" value=\"Maldives\">Maldives</option>\n                <option data-code=\"ML\" value=\"Mali\">Mali</option>\n                <option data-code=\"MT\" value=\"Malta\">Malta</option>\n                <option data-code=\"MQ\" value=\"Martinique\">Martinique</option>\n                <option data-code=\"MR\" value=\"Mauritania\">Mauritania</option>\n                <option data-code=\"MU\" value=\"Mauritius\">Mauritius</option>\n                <option data-code=\"YT\" value=\"Mayotte\">Mayotte</option>\n                <option data-code=\"MX\" value=\"Mexico\">Mexico</option>\n              </select>\n            </div>\n            <label>Zip/Postal Code</label>\n            <input type=\"text\" class=\"form-control\">\n            <div>\n              <button class=\"btn btn-alt\">Get A Quote</button>\n            </div>\n          </form>\n        </div>\n        <div class=\"col-sm-6 col-md-4\">\n          <h2>Discount Codes</h2>\n          <form class=\"white\" action=\"#\">\n            <label>Enter your coupon code if you have one.</label>\n            <input type=\"text\" class=\"form-control dashed\">\n            <div>\n              <button class=\"btn btn-alt\">Apply Coupon</button>\n            </div>\n          </form>\n        </div>\n        <div class=\"col-md-3 total-wrapper\">\n            <table class=\"total-price\">\n              <tr>\n                <td>Subtotal</td>\n                <td>$241.00</td>\n              </tr>\n              <tr>\n                <td>Discount</td>\n                <td>$12.00</td>\n              </tr>\n              <tr class=\"total\">\n                <td>Grand Total</td>\n                <td>$229.00</td>\n              </tr>\n            </table>\n            <div class=\"cart-action\">\n              <div>\n                <a href=\"checkout.html\" class=\"btn\">Proceed To Checkout</a>\n              </div>\n              <a href=\"#\">Checkout with Multiple Addresses</a>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h2>Billing Details</h2>\n          <form class=\"white\" action=\"#\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <label>Country<span class=\"required\">*</span></label>\n                <div class=\"select-wrapper\">\n                  <select class=\"form-control\">\n                    <option> - Select Country - </option>\n                    <option data-code=\"US\" value=\"United States\">United States</option>\n                    <option data-code=\"NL\" value=\"Netherlands\">Netherlands</option>\n                    <option data-code=\"CA\" value=\"Canada\">Canada</option>\n                    <option data-code=\"TD\" value=\"Chad\">Chad</option>\n                    <option data-code=\"CL\" value=\"Chile\">Chile</option>\n                    <option data-code=\"CN\" value=\"China\">China</option>\n                    <option data-code=\"CY\" value=\"Cyprus\">Cyprus</option>\n                    <option data-code=\"EG\" value=\"Egypt\">Egypt</option>\n                    <option data-code=\"FI\" value=\"Finland\">Finland</option>\n                    <option data-code=\"FR\" value=\"French\">French</option>\n                    <option data-code=\"DE\" value=\"German\">German</option>\n                    <option data-code=\"GR\" value=\"Greece\">Greece</option>\n                    <option data-code=\"HT\" value=\"Haiti\">Haiti</option>\n                    <option data-code=\"HU\" value=\"Hungary\">Hungary</option>\n                    <option data-code=\"IS\" value=\"Iceland\">Iceland</option>\n                    <option data-code=\"IN\" value=\"India\">India</option>\n                    <option data-code=\"ID\" value=\"Indonesia\">Indonesia</option>\n                    <option data-code=\"IR\" value=\"Iran, Islamic Republic Of\">Iran</option>\n                    <option data-code=\"IQ\" value=\"Iraq\">Iraq</option>\n                    <option data-code=\"IE\" value=\"Ireland\">Ireland</option>\n                    <option data-code=\"IL\" value=\"Israel\">Israel</option>\n                    <option data-code=\"IT\" value=\"Italy\">Italy</option>\n                    <option data-code=\"JP\" value=\"Japan\">Japan</option>\n                    <option data-code=\"LU\" value=\"Luxembourg\">Luxembourg</option>\n                    <option data-code=\"MX\" value=\"Mexico\">Mexico</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <label>State/Province <span class=\"required\">*</span></label>\n                <div class=\"select-wrapper\">\n                  <select class=\"form-control\">\n                    <option> - Select Province/State - </option>\n                    <option value=\"AB\">Alberta</option>\n                    <option value=\"BC\">British Columbia</option>\n                    <option value=\"MB\">Manitoba</option>\n                    <option value=\"NB\">New Brunswick</option>\n                    <option value=\"NL\">Newfoundland and Labrador</option>\n                    <option value=\"NS\">Nova Scotia</option>\n                    <option value=\"NT\">Northwest Territories</option>\n                    <option value=\"NU\">Nunavut</option>\n                    <option value=\"ON\">Ontario</option>\n                    <option value=\"PE\">Prince Edward Island</option>\n                    <option value=\"QC\">Quebec</option>\n                    <option value=\"SK\">Saskatchewan</option>\n                    <option value=\"YT\">Yukon</option>\n                    <option> ---------------- </option>\n                    <option value=\"AL\">Alabama</option>\n                    <option value=\"AK\">Alaska</option>\n                    <option value=\"AZ\">Arizona</option>\n                    <option value=\"AR\">Arkansas</option>\n                    <option value=\"CA\">California</option>\n                    <option value=\"CO\">Colorado</option>\n                    <option value=\"CT\">Connecticut</option>\n                    <option value=\"DE\">Delaware</option>\n                    <option value=\"DC\">District Of Columbia</option>\n                    <option value=\"FL\">Florida</option>\n                    <option value=\"GA\">Georgia</option>\n                    <option value=\"HI\">Hawaii</option>\n                    <option value=\"ID\">Idaho</option>\n                    <option value=\"IL\">Illinois</option>\n                    <option value=\"IN\">Indiana</option>\n                    <option value=\"IA\">Iowa</option>\n                    <option value=\"KS\">Kansas</option>\n                    <option value=\"KY\">Kentucky</option>\n                    <option value=\"LA\">Louisiana</option>\n                    <option value=\"ME\">Maine</option>\n                    <option value=\"MD\">Maryland</option>\n                    <option value=\"MA\">Massachusetts</option>\n                    <option value=\"MI\">Michigan</option>\n                    <option value=\"MN\">Minnesota</option>\n                    <option value=\"MS\">Mississippi</option>\n                    <option value=\"MO\">Missouri</option>\n                    <option value=\"MT\">Montana</option>\n                    <option value=\"NE\">Nebraska</option>\n                    <option value=\"NV\">Nevada</option>\n                    <option value=\"NH\">New Hampshire</option>\n                    <option value=\"NJ\">New Jersey</option>\n                    <option value=\"NM\">New Mexico</option>\n                    <option value=\"NY\">New York</option>\n                    <option value=\"NC\">North Carolina</option>\n                    <option value=\"ND\">North Dakota</option>\n                    <option value=\"OH\">Ohio</option>\n                    <option value=\"OK\">Oklahoma</option>\n                    <option value=\"OR\">Oregon</option>\n                    <option value=\"PA\">Pennsylvania</option>\n                    <option value=\"RI\">Rhode Island</option>\n                    <option value=\"SC\">South Carolina</option>\n                    <option value=\"SD\">South Dakota</option>\n                    <option value=\"TN\">Tennessee</option>\n                    <option value=\"TX\">Texas</option>\n                    <option value=\"UT\">Utah</option>\n                    <option value=\"VT\">Vermont</option>\n                    <option value=\"VA\">Virginia</option>\n                    <option value=\"WA\">Washington</option>\n                    <option value=\"WV\">West Virginia</option>\n                    <option value=\"WI\">Wisconsin</option>\n                    <option value=\"WY\">Wyoming</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <label>Street Address</label>\n            <input type=\"text\" class=\"form-control\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <label>Town / City<span class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n              <div class=\"col-sm-6\">\n                <label>Postcode / Zip<span class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <label>First Name<span class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n              <div class=\"col-sm-6\">\n                <label>Last Name<span class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n            <label>Company Name</label>\n            <input type=\"text\" class=\"form-control\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <label>E-mail<span class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n              <div class=\"col-sm-6\">\n                <label>Phone Number<span class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n            <div>\n              <div class=\"checkbox-group\">\n                <input type=\"checkbox\" name=\"createAccount\" id=\"checkbox-createAccount\">\n                <label for=\"checkbox-createAccount\"><span class=\"check\"></span><span class=\"box\"></span>Create an Account ?</label>\n              </div>\n            </div>\n          </form>\n          <h2>Delivery</h2>\n          <p>Choose delivery option below</p>\n          <form class=\"white\" action=\"#\">\n            <div class=\"radioset\">\n              <label class=\"radio\">\n                <input id=\"radioDelivery1\" type=\"radio\" name=\"radioDelivery\" value=\"none\">\n                <span class=\"outer\"><span class=\"inner\"></span></span><b>Standard Delivery</b> $5.99 / Delivery in 5 to 7 business Days\n              </label>\n              <label class=\"radio\">\n                <input id=\"radioDelivery2\" type=\"radio\" name=\"radioDelivery\" value=\"none\">\n                <span class=\"outer\"><span class=\"inner\"></span></span><b>Express Delivery</b> $19.99 / Delivery in 1 business Days\n              </label>\n            </div>\n          </form>\n          <h2>Payment & Order Review</h2>\n          <form class=\"white\" action=\"#\">\n            <p>Credit Card</p>\n            <p class=\"payment-link\">\n              <a href=\"#\"><img src=\"assets/images/payment-logo/icon-pay-1.png\" alt=\"\"></a>\n              <a href=\"#\"><img src=\"assets/images/payment-logo/icon-pay-2.png\" alt=\"\"></a>\n              <a href=\"#\"><img src=\"assets/images/payment-logo/icon-pay-3.png\" alt=\"\"></a>\n              <a href=\"#\"><img src=\"assets/images/payment-logo/icon-pay-4.png\" alt=\"\"></a>\n              <a href=\"#\"><img src=\"assets/images/payment-logo/icon-pay-5.png\" alt=\"\"></a>\n            </p>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <label>Credit Card Number<span class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n              <div class=\"col-xs-6 col-sm-3\">\n                <label>Month<span class=\"required\">*</span></label>\n                <div class=\"select-wrapper\">\n                  <select class=\"form-control\">\n                    <option value=\"\">01</option>\n                    <option value=\"\">02</option>\n                    <option value=\"\">03</option>\n                    <option value=\"\">04</option>\n                    <option value=\"\">05</option>\n                    <option value=\"\">06</option>\n                    <option value=\"\">07</option>\n                    <option value=\"\">08</option>\n                    <option value=\"\">09</option>\n                    <option value=\"\">10</option>\n                    <option value=\"\">11</option>\n                    <option value=\"\">12</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-xs-6 col-sm-3\">\n                <label>Year<span class=\"required\">*</span></label>\n                <div class=\"select-wrapper\">\n                  <select class=\"form-control\">\n                    <option value=\"\">2017</option>\n                    <option value=\"\">2018</option>\n                    <option value=\"\">2019</option>\n                    <option value=\"\">2020</option>\n                    <option value=\"\">2021</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"col-md-6\">\n          <h2>Your Order</h2>\n          <div class=\"cart-table cart-table--sm\">\n            <div class=\"table-header\">\n              <div class=\"photo\">\n                Product Image\n              </div>\n              <div class=\"name\">\n                Product Name\n              </div>\n              <div class=\"price\">\n                Unit Price\n              </div>\n              <div class=\"qty\">\n                Qty\n              </div>\n              <div class=\"subtotal\">\n                Subtotal\n              </div>\n            </div>\n            <div class=\"table-row\">\n              <div class=\"photo\">\n                <a href=\"product.html\"><img src=\"assets/images/products/product-1.jpg\" alt=\"\"></a>\n              </div>\n              <div class=\"name\">\n                <a href=\"product.html\">Boyfriend Short</a>\n              </div>\n              <div class=\"price\">\n                $85.00\n              </div>\n              <div class=\"qty\">\n                1\n              </div>\n              <div class=\"subtotal\">\n                $85.00\n              </div>\n            </div>\n            <div class=\"table-row\">\n              <div class=\"photo\">\n                <a href=\"product.html\"><img src=\"assets/images/products/product-2.jpg\" alt=\"\"></a>\n              </div>\n              <div class=\"name\">\n                <a href=\"product.html\">Floral Print Top</a>\n              </div>\n              <div class=\"price\">\n                $156.00\n              </div>\n              <div class=\"qty\">\n                1\n              </div>\n              <div class=\"subtotal\">\n                $156.00\n              </div>\n            </div>\t\t\t\t\t\t\t\t\t<div class=\"table-row\">\n              <div class=\"photo\">\n                <a href=\"product.html\"><img src=\"assets/images/products/product-2.jpg\" alt=\"\"></a>\n              </div>\n              <div class=\"name\">\n                <a href=\"product.html\">Mens Denim Jackets</a>\n              </div>\n              <div class=\"price\">\n                $99.00\n              </div>\n              <div class=\"qty\">\n                1\n              </div>\n              <div class=\"subtotal\">\n                $99.00\n              </div>\n            </div>\n          </div>\n          <table class=\"total-price\">\n            <tr>\n              <td>Subtotal</td>\n              <td>$340.00</td>\n            </tr>\n            <tr>\n              <td>Discount</td>\n              <td>$35.00</td>\n            </tr>\n            <tr class=\"total\">\n              <td>Grand Total</td>\n              <td>$305.00</td>\n            </tr>\n          </table>\n          <div class=\"clearfix\"></div>\n          <h2>Order Notes</h2>\n          <form class=\"white\" action=\"#\">\n            <label>Notes about your order, e.g. special notes for delivery</label>\n            <textarea class=\"form-control\"></textarea>\n            <div>\n              <button class=\"btn btn-alt\">PLACE ORDER</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"divider\"></div>"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/deals/deals.component.css":
/*!*******************************************!*\
  !*** ./src/app/deals/deals.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/deals/deals.component.html":
/*!********************************************!*\
  !*** ./src/app/deals/deals.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Deal Carousel -->\n<div class=\"title\">\n  <h2 class=\"custom-color\">Deal of the day</h2>\n  <div class=\"toggle-arrow\"></div>\n  <div class=\"carousel-arrows\"></div>\n</div>\n<div class=\"collapsed-content\">\n  <div class=\"deal-carousel-2 products-grid product-variant-5\">\n    <!-- Product Item -->\n    <div class=\"product-item large\">\n      <div class=\"product-item-inside\">\n        <div class=\"product-item-info\">\n          <!-- Product Photo -->\n          <div class=\"product-item-photo\">\n            <!-- product main photo -->\n            <div class=\"product-item-gallery-main\">\n              <a href=\"#\"><img class=\"product-image-photo\" src=\"assets/images/products/product-19.jpg\" alt=\"\"></a>\n              <a href=\"quick-view.html\" title=\"Quick View\" class=\"quick-view-link quick-view-btn\"> <i class=\"icon icon-eye\"></i><span>Quick View</span></a>\n            </div>\n            <!-- /product main photo  -->\n            <!-- Product Label -->\n            <div class=\"product-item-label label-new\"><span>New</span></div>\n            <!-- /Product Label -->\n            <!-- Product Actions -->\n            <a href=\"#\" title=\"Add to Wishlist\" class=\"wishlist active\"> <i class=\"icon icon-heart\"></i><span>Add to Wishlist</span> </a>\n            <div class=\"product-item-actions\">\n              <div class=\"share-button toBottom\">\n                <span class=\"toggle\"></span>\n                <ul class=\"social-list\">\n                  <li>\n                    <a href=\"#\" class=\"icon icon-google google\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-fancy fancy\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-pinterest pinterest\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-twitter-logo twitter\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-facebook-logo facebook\"></a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <!-- /Product Actions -->\n            <!-- product carousel -->\n            <div class=\"product-item-gallery-previews-wrapper\">\n              <div class=\"product-item-gallery-previews\">\n                <div class=\"item\">\n                  <a href=\"#\"><img src=\"assets/images/products/product-19.jpg\" data-image=\"assets/images/products/product-19.jpg\" alt=\"\"></a>\n                </div>\n                <div class=\"item\">\n                  <a href=\"#\"><img src=\"assets/images/products/product-19-1.jpg\" data-image=\"assets/images/products/product-19-1.jpg\" alt=\"\"></a>\n                </div>\n                <div class=\"item\">\n                  <a href=\"#\"><img src=\"assets/images/products/product-19-2.jpg\" data-image=\"assets/images/products/product-19-2.jpg\" alt=\"\"></a>\n                </div>\n                <div class=\"item\">\n                  <a href=\"#\"><img src=\"assets/images/products/product-19-3.jpg\" data-image=\"assets/images/products/product-19-3.jpg\" alt=\"\"></a>\n                </div>\n              </div>\n              <div class=\"carousel-arrows\"></div>\n            </div>\n            <!-- /product carousel -->\n            <ul class=\"color-swatch hidden-xs\">\n              <li class=\"active\">\n                <a data-image=\"assets/images/products/product-19.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-yellow.png\" alt=\"Yellow\"></a>\n              </li>\n              <li>\n                <a data-image=\"assets/images/products/product-19-c1.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-blue.png\" alt=\"Blue\"></a>\n              </li>\n              <li>\n                <a data-image=\"assets/images/products/product-19-c2.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-red.png\" alt=\"Red\"></a>\n              </li>\n              <li>\n                <a data-image=\"assets/images/products/product-19-c3.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-grey.png\" alt=\"Grey\"></a>\n              </li>\n              <li>\n                <a data-image=\"assets/images/products/product-19-c4.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-green.png\" alt=\"Green\"></a>\n              </li>\n              <li>\n                <a data-image=\"assets/images/products/product-19-c5.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-violet.png\" alt=\"Violet\"></a>\n              </li>\n            </ul>\n          </div>\n          <!-- /Product Photo -->\n          <!-- Product Details -->\n          <div class=\"product-item-details\">\n            <div class=\"product-item-name\"> <a title=\"Cover up tunic\" href=\"product.html\" class=\"product-item-link\">Cover up Extra Free tunic</a></div>\n            <div class=\"product-item-description\">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia nonkdni numquam eius modi tempora incidunt ut labore</div>\n            <div class=\"price-box\"> <span class=\"price-container\"> <span class=\"price-wrapper\"> <span class=\"price\">$110.00</span></span>\n              </span>\n            </div>\n            <div class=\"product-item-rating\"> <i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i></div>\n            <button class=\"btn add-to-cart\" data-product=\"789123\"> <i class=\"icon icon-cart\"></i><span>Add to Cart</span> </button>\n          </div>\n          <!-- /Product Details -->\n        </div>\n      </div>\n    </div>\n    <!-- /Product Item -->\n    <!-- Product Item -->\n    <div class=\"product-item large\">\n      <div class=\"product-item-inside\">\n        <div class=\"product-item-info\">\n          <!-- Product Photo -->\n          <div class=\"product-item-photo\">\n            <!-- Product Label -->\n            <div class=\"product-item-label label-new\"><span>New</span></div>\n            <!-- /Product Label -->\n            <div class=\"product-item-gallery\">\n              <!-- product main photo -->\n              <div class=\"product-item-gallery-main\">\n                <a href=\"#\"><img class=\"product-image-photo\" src=\"assets/images/products/product-13.jpg\" alt=\"\"></a>\n                <a href=\"quick-view.html\" title=\"Quick View\" class=\"quick-view-link quick-view-btn\"> <i class=\"icon icon-eye\"></i><span>Quick View</span></a>\n              </div>\n              <!-- /product main photo  -->\n            </div>\n            <!-- Product Actions -->\n            <a href=\"#\" title=\"Add to Wishlist\" class=\"no_wishlist\"> <i class=\"icon icon-heart\"></i><span>Add to Wishlist</span> </a>\n            <div class=\"product-item-actions\">\n              <div class=\"share-button toBottom\">\n                <span class=\"toggle\"></span>\n                <ul class=\"social-list\">\n                  <li>\n                    <a href=\"#\" class=\"icon icon-google google\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-fancy fancy\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-pinterest pinterest\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-twitter-logo twitter\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-facebook-logo facebook\"></a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <!-- /Product Actions -->\n          </div>\n          <!-- /Product Photo -->\n          <!-- Product Details -->\n          <div class=\"product-item-details\">\n            <div class=\"product-item-name\"> <a title=\"Style Dome Men's Solid Red Color\" href=\"product.html\" class=\"product-item-link\">Style Dome Men's Solid Red Color</a> </div>\n            <div class=\"product-item-description\">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia nonkdni numquam eius modi tempora incidunt ut labore</div>\n            <div class=\"price-box\"> <span class=\"price-container\"> <span class=\"price-wrapper\"><span class=\"price\">$359.00</span> </span>\n              </span>\n            </div>\n            <div class=\"product-item-rating\"> <i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i></div>\n            <button class=\"btn add-to-cart\" data-product=\"789123\"> <i class=\"icon icon-cart\"></i><span>Add to Cart</span> </button>\n          </div>\n          <!-- /Product Details -->\n        </div>\n      </div>\n    </div>\n    <!-- /Product Item -->\n    <!-- Product Item -->\n    <div class=\"product-item previews-3 large\">\n      <div class=\"product-item-inside\">\n        <div class=\"product-item-info\">\n          <!-- Product Photo -->\n          <div class=\"product-item-photo\">\n            <!-- Product Label -->\n            <div class=\"product-item-label label-new\"><span>New</span></div>\n            <div class=\"product-item-label label-sale\"><span>-20%</span></div>\n            <!-- /Product Label -->\n            <!-- product main photo -->\n            <div class=\"product-item-gallery-main\">\n              <a href=\"#\"><img class=\"product-image-photo\" src=\"assets/images/products/product-11-1.jpg\" alt=\"\"></a>\n              <a href=\"quick-view.html\" title=\"Quick View\" class=\"quick-view-link quick-view-btn\"> <i class=\"icon icon-eye\"></i><span>Quick View</span></a>\n            </div>\n            <!-- /product main photo  -->\n            <!-- Product Actions -->\n            <a href=\"#\" title=\"Add to Wishlist\" class=\"no_wishlist\"> <i class=\"icon icon-heart\"></i><span>Add to Wishlist</span> </a>\n            <div class=\"product-item-actions\">\n              <div class=\"share-button toBottom\">\n                <span class=\"toggle\"></span>\n                <ul class=\"social-list\">\n                  <li>\n                    <a href=\"#\" class=\"icon icon-google google\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-fancy fancy\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-pinterest pinterest\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-twitter-logo twitter\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-facebook-logo facebook\"></a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <!-- /Product Actions -->\n            <!-- product carousel -->\n            <div class=\"product-item-gallery-previews-wrapper\">\n              <div class=\"product-item-gallery-previews\">\n                <div class=\"item\">\n                  <a href=\"#\"><img src=\"assets/images/products/product-11.jpg\" data-image=\"assets/images/products/product-11.jpg\" alt=\"\"></a>\n                </div>\n                <div class=\"item\">\n                  <a href=\"#\"><img src=\"assets/images/products/product-11-1.jpg\" data-image=\"assets/images/products/product-11-1.jpg\" alt=\"\"></a>\n                </div>\n                <div class=\"item\">\n                  <a href=\"#\"><img src=\"assets/images/products/product-11-2.jpg\" data-image=\"assets/images/products/product-11-2.jpg\" alt=\"\"></a>\n                </div>\n              </div>\n              <div class=\"carousel-arrows\"></div>\n            </div>\n            <!-- /product carousel -->\n          </div>\n          <!-- /Product Photo -->\n          <!-- Product Details -->\n          <div class=\"product-item-details\">\n            <div class=\"product-item-name\"> <a title=\"Boyfriend Shorts Denim\" href=\"product.html\" class=\"product-item-link\">Boyfriend Shorts Denim</a> </div>\n            <div class=\"product-item-description\">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia nonkdni numquam eius modi tempora incidunt ut labore</div>\n            <div class=\"price-box\"> <span class=\"price-container\"> <span class=\"price-wrapper\"> <span class=\"old-price\">$190.00</span> <span class=\"special-price\">$149.00</span> </span>\n              </span>\n            </div>\n            <div class=\"product-item-rating\"> <i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i></div>\n            <button class=\"btn add-to-cart\" data-product=\"789123\"> <i class=\"icon icon-cart\"></i><span>Add to Cart</span> </button>\n          </div>\n          <!-- /Product Details -->\n        </div>\n      </div>\n    </div>\n    <!-- /Product Item -->\n    <!-- Product Item -->\n    <div class=\"product-item large\">\n      <div class=\"product-item-inside\">\n        <div class=\"product-item-info\">\n          <!-- Product Photo -->\n          <div class=\"product-item-photo\">\n            <!-- product main photo -->\n            <div class=\"product-item-gallery-main\">\n              <a href=\"#\"><img class=\"product-image-photo\" src=\"assets/images/products/product-19.jpg\" alt=\"\"></a>\n              <a href=\"quick-view.html\" title=\"Quick View\" class=\"quick-view-link quick-view-btn\"> <i class=\"icon icon-eye\"></i><span>Quick View</span></a>\n            </div>\n            <!-- /product main photo  -->\n            <!-- Product Label -->\n            <div class=\"product-item-label label-new\"><span>New</span></div>\n            <!-- /Product Label -->\n            <!-- Product Actions -->\n            <a href=\"#\" title=\"Add to Wishlist\" class=\"wishlist active\"> <i class=\"icon icon-heart\"></i><span>Add to Wishlist</span> </a>\n            <div class=\"product-item-actions\">\n              <div class=\"share-button toBottom\">\n                <span class=\"toggle\"></span>\n                <ul class=\"social-list\">\n                  <li>\n                    <a href=\"#\" class=\"icon icon-google google\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-fancy fancy\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-pinterest pinterest\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-twitter-logo twitter\"></a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"icon icon-facebook-logo facebook\"></a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <!-- /Product Actions -->\n            <!-- product carousel -->\n            <div class=\"product-item-gallery-previews-wrapper\">\n              <div class=\"product-item-gallery-previews\">\n                <div class=\"item\">\n                  <a href=\"#\"><img src=\"assets/images/products/product-19.jpg\" data-image=\"assets/images/products/product-19.jpg\" alt=\"\"></a>\n                </div>\n                <div class=\"item\">\n                  <a href=\"#\"><img src=\"assets/images/products/product-19-1.jpg\" data-image=\"assets/images/products/product-19-1.jpg\" alt=\"\"></a>\n                </div>\n                <div class=\"item\">\n                  <a href=\"#\"><img src=\"assets/images/products/product-19-2.jpg\" data-image=\"assets/images/products/product-19-2.jpg\" alt=\"\"></a>\n                </div>\n                <div class=\"item\">\n                  <a href=\"#\"><img src=\"assets/images/products/product-19-3.jpg\" data-image=\"assets/images/products/product-19-3.jpg\" alt=\"\"></a>\n                </div>\n              </div>\n              <div class=\"carousel-arrows\"></div>\n            </div>\n            <!-- /product carousel -->\n            <ul class=\"color-swatch hidden-xs\">\n              <li class=\"active\">\n                <a data-image=\"assets/images/products/product-19.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-yellow.png\" alt=\"Yellow\"></a>\n              </li>\n              <li>\n                <a data-image=\"assets/images/products/product-19-c1.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-blue.png\" alt=\"Blue\"></a>\n              </li>\n              <li>\n                <a data-image=\"assets/images/products/product-19-c2.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-red.png\" alt=\"Red\"></a>\n              </li>\n              <li>\n                <a data-image=\"assets/images/products/product-19-c3.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-grey.png\" alt=\"Grey\"></a>\n              </li>\n              <li>\n                <a data-image=\"assets/images/products/product-19-c4.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-green.png\" alt=\"Green\"></a>\n              </li>\n              <li>\n                <a data-image=\"assets/images/products/product-19-c5.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-violet.png\" alt=\"Violet\"></a>\n              </li>\n            </ul>\n          </div>\n          <!-- /Product Photo -->\n          <!-- Product Details -->\n          <div class=\"product-item-details\">\n            <div class=\"product-item-name\"> <a title=\"Cover up tunic\" href=\"product.html\" class=\"product-item-link\">Cover up Extra Free tunic</a></div>\n            <div class=\"product-item-description\">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia nonkdni numquam eius modi tempora incidunt ut labore</div>\n            <div class=\"price-box\"> <span class=\"price-container\"> <span class=\"price-wrapper\"> <span class=\"price\">$110.00</span></span>\n              </span>\n            </div>\n            <div class=\"product-item-rating\"> <i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i><i class=\"icon icon-star-fill\"></i></div>\n            <button class=\"btn add-to-cart\" data-product=\"789123\"> <i class=\"icon icon-cart\"></i><span>Add to Cart</span> </button>\n          </div>\n          <!-- /Product Details -->\n        </div>\n      </div>\n    </div>\n    <!-- /Product Item -->\n  </div>\n</div>\n<!-- /Deal Carousel -->"

/***/ }),

/***/ "./src/app/deals/deals.component.ts":
/*!******************************************!*\
  !*** ./src/app/deals/deals.component.ts ***!
  \******************************************/
/*! exports provided: DealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsComponent", function() { return DealsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DealsComponent = /** @class */ (function () {
    function DealsComponent() {
    }
    // For loading deal carousel
    DealsComponent.prototype.ngOnInit = function () {
        this.loadDealCarousel();
    };
    // load deal carousel
    DealsComponent.prototype.loadDealCarousel = function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_1__(".deal-carousel-2").length) {
            var $this = jquery__WEBPACK_IMPORTED_MODULE_1__(".deal-carousel-2"), arrowsplace = $this;
            var $carouseltitle = $this.prev('.title');
            if ($this.parent().hasClass('collapsed-content')) {
                $carouseltitle = $this.parent().prev('.title');
            }
            if ($carouseltitle.find('.carousel-arrows').length) {
                arrowsplace = $carouseltitle.find('.carousel-arrows');
            }
            $this.slick({
                rows: 1,
                appendArrows: arrowsplace,
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 500,
                infinite: false,
                swipe: false,
                responsive: [{
                        breakpoint: 993,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
            });
        }
    };
    DealsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-deals',
            template: __webpack_require__(/*! ./deals.component.html */ "./src/app/deals/deals.component.html"),
            styles: [__webpack_require__(/*! ./deals.component.css */ "./src/app/deals/deals.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DealsComponent);
    return DealsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"block fullwidth full-nopad bottom-space\">\n  <div class=\"container\"> \n    <!-- Main Slider -->\n<div class=\"mainSlider\" data-thumb=\"true\" data-thumb-width=\"230\" data-thumb-height=\"100\">\n  <div class=\"sliderLoader\">Loading...</div>\n  <!-- Slider main container -->\n  <div class=\"swiper-container\">\n    <div class=\"swiper-wrapper\">\n      <!-- Slides -->\n      <div class=\"swiper-slide\" data-thumb=\"assets/images/slider/slide-02-thumb.png\" data-href=\"http://google.com\" data-target=\"_blank\">\n        <!-- _blank or _self ( _self is default )-->\n        <div class=\"wrapper\">\n          <figure><img src=\"assets/images/slider/slide-02.jpg\" alt=\"\"></figure>\n          <div class=\"text2-1 animate\" data-animate=\"flipInY\" data-delay=\"0\"> Seikō </div>\n          <div class=\"text2-2 animate\" data-animate=\"bounceIn\" data-delay=\"500\"> Season sale </div>\n          <div class=\"text2-3 animate\" data-animate=\"bounceIn\" data-delay=\"1000\"> popular brands </div>\n          <div class=\"text2-4 animate\" data-animate=\"rubberBand\" data-delay=\"1500\"> 70% </div>\n          <div class=\"text2-5 animate\" data-animate=\"hinge\" data-delay=\"2000\"> OFF </div>\n        </div>\n      </div>\n      <div class=\"swiper-slide\" data-thumb=\"assets/images/slider/slide-01-thumb.png\">\n        <div class=\"wrapper\">\n          <figure><img src=\"assets/images/slider/slide-01.jpg\" alt=\"\"></figure>\n          <div class=\"caption animate\" data-animate=\"fadeIn\">\n            <div class=\"text1 animate\" data-animate=\"flipInY\" data-delay=\"0\"> Seikō </div>\n            <div class=\"text2 animate\" data-animate=\"bounceInLeft\" data-delay=\"500\"> <strong>New</strong> collection </div>\n            <div class=\"text3 animate\" data-animate=\"bounceInLeft\" data-delay=\"1500\"> WOMEN'S <strong>FASHION</strong> </div>\n            <div class=\"animate\" data-animate=\"fadeIn\" data-delay=\"2000\">\n              <!-- coolbutton -->\n              <a href=\"#\" class=\"cool-btn\" style=\"-webkit-clip-path: url(#coolButton); clip-path: url(#coolButton);\"> <span>MORE</span> </a>\n              <svg class=\"clip-svg\">\n                <defs>\n                  <clipPath id=\"coolButton\" clipPathUnits=\"objectBoundingBox\">\n                    <polygon points=\"0 .18, .99 .15, .91 .85, .07 .8\" />\n                  </clipPath>\n                </defs>\n              </svg>\n              <!-- // coolbutton -->\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"swiper-slide\" data-thumb=\"assets/images/slider/slide-03-thumb.png\">\n        <div class=\"wrapper\">\n          <figure><img src=\"assets/images/slider/slide-03.jpg\" alt=\"\"></figure>\n          <div class=\"text3-1 animate\" data-animate=\"bounceInDown\" data-delay=\"0\"> Street </div>\n          <div class=\"text3-2 animate\" data-animate=\"bounceInDown\" data-delay=\"500\"> Fashion </div>\n          <div class=\"text3-3 animate\" data-animate=\"bounceInDown\" data-delay=\"1000\"> And </div>\n          <div class=\"text3-4 animate\" data-animate=\"bounceIn\" data-delay=\"1500\"> Urban </div>\n          <div class=\"text3-5 animate\" data-animate=\"bounceIn\" data-delay=\"2000\"> Subcultures </div>\n          <a href=\"#\" class=\"text3-6 animate\" data-animate=\"rubberBand\" data-delay=\"2500\"> SHOP NOW </a>\n        </div>\n      </div>\n      <div class=\"swiper-slide\" data-thumb=\"assets/images/slider/slide-04-thumb.png\">\n        <div class=\"wrapper\">\n          <figure><img src=\"assets/images/slider/slide-04.jpg\" alt=\"\"></figure>\n          <div class=\"text4-1 animate\" data-animate=\"bounceInLeft\" data-delay=\"0\">Summer</div>\n          <div class=\"text4-2 animate\" data-animate=\"bounceInDown\" data-delay=\"500\">very soon</div>\n          <div class=\"text4-3 animate\" data-animate=\"bounceInUp\" data-delay=\"1000\">Things to buy a swimsuit at a discount</div>\n          <a href=\"#\" class=\"text4-4 animate\" data-animate=\"bounceInLeft\" data-delay=\"1500\">SHOP NOW</a>\n        </div>\n      </div>\n    </div>\n    <!-- pagination -->\n    <div class=\"swiper-pagination\"></div>\n    <!-- pagination thumbs -->\n    <div class=\"swiper-pagination-thumbs\">\n      <div class=\"thumbs-wrapper\">\n        <div class=\"thumbs\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Main Slider -->\n  </div>\n</div>\n<div class=\"block\">\n  <div class=\"container\">\n    <!-- Wellcome text -->\n    <div class=\"text-center bottom-space\">\n      <h1 class=\"size-lg no-padding\">{{ 'WELCOMETO' | translate }} <span class=\"logo-font custom-color\">Seikō</span> STORE</h1>\n      <div class=\"line-divider\"></div>\n      <p class=\"custom-color-alt\">Lorem ipsum dolor sit amet, ex eam mundi populo accusamus, aliquam quaestio petentium te cum.\n        <br> Vim ei oblique tacimates, usu cu iudico graeco. Graeci eripuit inimicus vel eu, eu mel unum laoreet splendide, cu integre apeirian has.\n      </p>\n    </div>\n    <!-- /Wellcome text -->\n  </div>\n</div>\n<div class=\"block\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"box style2 bgcolor1 text-center\">\n          <div class=\"box-icon\"><i class=\"icon icon-truck\"></i></div>\n          <h3 class=\"box-title\">FREE SHIPPING</h3>\n          <div class=\"box-text\">Free shipping on all orders over $199</div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"box style2 bgcolor2 text-center\">\n          <div class=\"box-icon\"><i class=\"icon icon-dollar\"></i></div>\n          <h3 class=\"box-title\">MONEY BACK</h3>\n          <div class=\"box-text\">100% money back guarantee</div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"box style2 bgcolor3 text-center\">\n          <div class=\"box-icon\"><i class=\"icon icon-help\"></i></div>\n          <h3 class=\"box-title\">ONLINE SUPPORT</h3>\n          <div class=\"box-text\">Service support fast 24/7</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"block full-nopad fullwidth bottom-space\" style=\"width: 1440px; margin-left: -720px;\">\t\n  <div class=\"container\">\t\n    <ross-banner></ross-banner>\n  </div>\n</div>\n<div class=\"block bottom-space\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <ross-blog></ross-blog>\n      </div>\n      <div class=\"col-md-6\">\n        <ross-deals></ross-deals>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"block fullwidth full-nopad\">\n  <div class=\"container\">\n    <div id=\"instafeed\" class=\"instagramm-feed-full\"></div>\n    <div class=\"instagramm-title\">ROSS</div>\n  </div>\n</div>\n\n\n\n\n<div class=\"container\">\n    <div class=\"row row-table\">\n    <div class=\"col-md-9 aside\">\n    <!-- Products Grid -->\n    <div class=\"products-grid four-in-row product-variant-5\">\n      <ross-product></ross-product>\n      </div>\n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_swiper_swiper_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/js/swiper/swiper.min.js */ "./src/assets/js/swiper/swiper.min.js");
/* harmony import */ var _assets_js_swiper_swiper_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_swiper_swiper_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_instafeed_instafeed_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/js/instafeed/instafeed.min.js */ "./src/assets/js/instafeed/instafeed.min.js");
/* harmony import */ var _assets_js_instafeed_instafeed_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_instafeed_instafeed_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        // instagram feed
        this.loadInstgram();
        // end instagram feed
    };
    // instagram feed
    HomeComponent.prototype.loadInstgram = function () {
        function doStuff() {
            if (jquery__WEBPACK_IMPORTED_MODULE_3__(".instagramm-feed-full").has('a').length) {
                startInstagramCarousel();
                clearInterval(timer);
            }
        }
        function startInstagramCarousel() {
            jquery__WEBPACK_IMPORTED_MODULE_3__(".instagramm-feed-full").find('a').each(function () {
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('target', '_blank');
            });
            var $slider = jquery__WEBPACK_IMPORTED_MODULE_3__(".instagramm-feed-full").slick({
                speed: 700,
                slidesToShow: 10,
                slidesToScroll: 2,
                cssEase: 'linear',
                responsive: [{
                        breakpoint: 993,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 2
                        }
                    }, {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    }, {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }]
            });
            var scroll, speed = 0;
            var stop = function () {
                clearInterval(scroll);
            };
            var rw = function () {
                stop();
                $slider.slick("slickPrev");
                scroll = setInterval(function () {
                    $slider.slick("slickPrev");
                }, speed);
            };
            var fw = function () {
                stop();
                $slider.slick("slickNext");
                scroll = setInterval(function () {
                    $slider.slick("slickNext");
                }, speed);
            };
            jquery__WEBPACK_IMPORTED_MODULE_3__("body").on("mouseenter", ".instagramm-feed-full .slick-next", fw)
                .on("mouseenter", ".instagramm-feed-full .slick-prev", rw)
                .on("mouseleave", ".instagramm-feed-full .slick-next, .instagramm-feed-full .slick-prev", stop);
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_3__("#instafeed").length) {
            var userFeed = new _assets_js_instafeed_instafeed_min_js__WEBPACK_IMPORTED_MODULE_2___default.a({
                get: 'user',
                userId: 'self',
                accessToken: '3489650088.1d65fda.fffa13214cd847439dfb6e8639f98b2b',
                limit: 20,
                resolution: 'low_resolution',
                sortBy: 'most-recent'
            });
            userFeed.run();
            var timer = setInterval(doStuff, 100);
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/back-top/back-top.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/back-top/back-top.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/back-top/back-top.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/back-top/back-top.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-btns\">\n\t\t<!-- Back To Top -->\n\t\t<a href=\"#\" class=\"top-fixed-btn back-to-top\"><i class=\"icon icon-arrow-up\"></i></a>\n\t\t<!-- /Back To Top -->\n\t</div>"

/***/ }),

/***/ "./src/app/layout/back-top/back-top.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/back-top/back-top.component.ts ***!
  \*******************************************************/
/*! exports provided: BackTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackTopComponent", function() { return BackTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackTopComponent = /** @class */ (function () {
    function BackTopComponent() {
    }
    BackTopComponent.prototype.ngOnInit = function () {
    };
    BackTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-back-top',
            template: __webpack_require__(/*! ./back-top.component.html */ "./src/app/layout/back-top/back-top.component.html"),
            styles: [__webpack_require__(/*! ./back-top.component.css */ "./src/app/layout/back-top/back-top.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BackTopComponent);
    return BackTopComponent;
}());



/***/ }),

/***/ "./src/app/layout/breadcrumb/breadcrumb.component.css":
/*!************************************************************!*\
  !*** ./src/app/layout/breadcrumb/breadcrumb.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/breadcrumb/breadcrumb.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/breadcrumb/breadcrumb.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block\">\n    <div class=\"container\">\n      <ul class=\"breadcrumbs\">\n        <li *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\">\n          <a routerLink=\"/\" ><i class=\"icon icon-home\"></i></a>\n          <a routerLink=\"[breadcrumb.url]\" ><span>&nbsp;/&nbsp;<b>{{breadcrumb.name}}</b></span></a></li>\n      </ul>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/layout/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(_router, _activatedRoute, _appConfig, _title) {
        var _this = this;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._appConfig = _appConfig;
        this._title = _title;
        this.breadcrumbs = [];
        this.config = this._appConfig;
        this._router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.breadcrumbs = [];
                _this.parseRoute(_this._router.routerState.snapshot.root);
                _this.title = "";
                _this.breadcrumbs.forEach(function (breadcrumb) {
                    _this.title = breadcrumb.name;
                });
                _this._title.setTitle(_this.title);
            }
        });
    }
    BreadcrumbComponent.prototype.parseRoute = function (node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                var urlSegments_1 = [];
                node.pathFromRoot.forEach(function (routerState) {
                    urlSegments_1 = urlSegments_1.concat(routerState.url);
                });
                var url = urlSegments_1.map(function (urlSegment) {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/layout/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.css */ "./src/app/layout/breadcrumb/breadcrumb.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Footer -->\n  <footer class=\"page-footer variant4 fullboxed\">\n      <div class=\"footer-top bg\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <!-- newsletter -->\n              <div class=\"newsletter variant3\">\n                <div class=\"footer-logo\">\n                  <a href=\"index.html\"><img src=\"assets/images/logo-footer-small.png\" alt=\"Footer Logo\"></a>\n                </div>\n                <div>\n                  <!-- input-group -->\n                  <form action=\"#\">\n                    <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control\">\n                      <span class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"submit\"><i class=\"icon icon-close-envelope\"></i></button>\n                        </span>\n                    </div>\n                  </form>\n                  <!-- /input-group -->\n                </div>\n              </div>\n              <!-- /newsletter -->\n            </div>\n            <div class=\"col-md-3\">\n              <h3><span class=\"custom-color\">HOT</span> Company news </h3>\n              <div class=\"news-item\">\n                <div class=\"news-date\">21.10.06</div>\n                <h4 class=\"news-title\">Neque porro quisquam est</h4>\n                <div class=\"news-text\">\n                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut git, sed quia consequuntur magni dolore</p>\n                  <p><a href=\"#\" class=\"readmore\">Read more</a></p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <h3>Twitter</h3>\n              <a class=\"twitter-timeline\" href=\"https://twitter.com/ThemeForest\" data-chrome=\"transparent nofooter noborders noheader noscrollbar\" data-tweet-limit=\"1\" data-widget-id=\"677235277925113856\">Tweets by @ThemeForest</a>\n              <script>\n                ! function (d, s, id) {\n                  var js, fjs = d.getElementsByTagName(s)[0],\n                    p = /^http:/.test(d.location) ? 'http' : 'https';\n                  if (!d.getElementById(id)) {\n                    js = d.createElement(s);\n                    js.id = id;\n                    js.src = p + \"://platform.twitter.com/widgets.js\";\n                    fjs.parentNode.insertBefore(js, fjs);\n                  }\n                }(document, \"script\", \"twitter-wjs\");\n              </script>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"footer-middle\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-3 col-lg-3\">\n              <div class=\"footer-block collapsed-mobile\">\n                <div class=\"title\">\n                  <h4>INFORMATION</h4>\n                  <div class=\"toggle-arrow\"></div>\n                </div>\n                <div class=\"collapsed-content\">\n                  <ul class=\"marker-list\">\n                    <li><a href=\"about.html\">About Us</a></li>\n                    <li><a href=\"faq.html\">Customer Service</a></li>\n                    <li><a href=\"about.html\">Privacy Policy</a></li>\n                    <li><a href=\"blog.html\">Our Blog</a></li>\n                    <li><a href=\"search.html\">Search Terms</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-lg-3\">\n              <div class=\"footer-block collapsed-mobile\">\n                <div class=\"title\">\n                  <h4>MY ACCOUNT</h4>\n                  <div class=\"toggle-arrow\"></div>\n                </div>\n                <div class=\"collapsed-content\">\n                  <ul class=\"marker-list\">\n                    <li><a href=\"account-create.html\">My account</a></li>\n                    <li><a href=\"login.html\">Logination</a></li>\n                    <li><a href=\"cart.html\">My cart</a></li>\n                    <li><a href=\"wishlist.html\">My wishlist</a></li>\n                    <li><a href=\"search.html\">Search Terms</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-lg-3\">\n              <div class=\"footer-block collapsed-mobile\">\n                <div class=\"title\">\n                  <h4>CUSTOMER CARE</h4>\n                  <div class=\"toggle-arrow\"></div>\n                </div>\n                <div class=\"collapsed-content\">\n                  <ul class=\"marker-list\">\n                    <li><a href=\"blog.html\">Our Blog</a></li>\n                    <li><a href=\"search.html\">Search Terms</a></li>\n                    <li><a href=\"contact.html\">Contact Us</a></li>\n                    <li><a href=\"faq.html\">Customer Service</a></li>\n                    <li><a href=\"about.html\">Privacy Policy</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-lg-3\">\n              <div class=\"footer-block collapsed-mobile\">\n                <div class=\"title\">\n                  <h4>CONTACT US</h4>\n                  <div class=\"toggle-arrow\"></div>\n                </div>\n                <div class=\"collapsed-content\">\n                  <ul class=\"simple-list\">\n                    <li><i class=\"icon icon-phone\"></i>+01 234 567 89</li>\n                    <li><i class=\"icon icon-close-envelope\"></i><a href=\"mailto:support@seiko.com\">support@seiko.com</a></li>\n                    <li><i class=\"icon icon-clock\"></i>8:00 - 19:00, Monday - Saturday</li>\n                  </ul>\n                  <div class=\"footer-social\">\n                    <a href=\"#\"><i class=\"icon icon-facebook-logo icon-circled\"></i></a> <a href=\"#\"><i class=\"icon icon-twitter-logo icon-circled\"></i></a> <a href=\"#\"><i class=\"icon icon-skype-logo icon-circled\"></i></a> <a href=\"#\"><i class=\"icon icon-vimeo icon-circled\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"footer-bot\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-6 col-lg-8\">\n              <div class=\"image-banner text-center\">\n                <a href=\"#\"> <img src=\"assets/images/banners/footer-banner.jpg\" alt=\"Footer Banner\" class=\"img-responsive\"> </a>\n              </div>\n            </div>\n            <div class=\" col-md-6 col-lg-4\">\n              <div class=\"footer-copyright text-center\"> © 2016 Demo Store. All Rights Reserved. </div>\n              <div class=\"footer-payment-link text-center\">\n                <a href=\"#\"><img src=\"assets/images/payment-logo/icon-pay-1.png\" alt=\"\"></a>\n                <a href=\"#\"><img src=\"assets/images/payment-logo/icon-pay-2.png\" alt=\"\"></a>\n                <a href=\"#\"><img src=\"assets/images/payment-logo/icon-pay-3.png\" alt=\"\"></a>\n                <a href=\"#\"><img src=\"assets/images/payment-logo/icon-pay-4.png\" alt=\"\"></a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </footer>\n    <!-- /Footer -->"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Desktop Mega Menu */\n@media screen and (min-width: 992px) {\n    .megamenu {\n      display: inline-block;\n      text-align: center;\n      opacity: 1;\n      transition: opacity 0.2s ease;\n    }\n    .megamenu .nav:after {\n      content: '';\n      position: absolute;\n      z-index: 1;\n      width: 0;\n      top: 0;\n      height: 72px;\n      background: rgba(255, 255, 255, 0);\n      transition: all 0 ease;\n    }\n    .navbar.disabled .megamenu {\n      position: inherit;\n    }\n    .megamenu.unvisible {\n      opacity: 0;\n    }\n  }\n/* Sub Megamenu */\n.mega-dropdown .sub-menu {\n    left: 0;\n    width: 100%;\n    padding: 30px 0;\n  }\n.sub-menu {\n    position: absolute;\n    top: 100%;\n    background-color: #fff;\n    padding: 20px 0 15px;\n    overflow-y: auto;\n    box-shadow: 0 -10px 10px -10px rgba(0, 0, 0, 0.05);\n    border-bottom: 4px solid #f82e56;\n    color: #191919;\n    opacity: 0;\n    visibility: hidden;\n  }\nli.hovered .sub-menu {\n    opacity: 1;\n    visibility: visible;\n  }\n.sub-menu .megamenu-col [class*=\"col-\"] {\n    padding-left: 0;\n  }\n.sub-menu .category-image {\n    margin: 0 0 15px;\n    display: block;\n    position: relative;\n  }\n.sub-menu .category-image img {\n    max-width: 100%;\n  }\n.sub-menu .category-image:not(.light) {\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    transition: background-color 0.5s ease-in-out 0s;\n  }\n.sub-menu .category-image:not(.light) > a {\n    display: block;\n    overflow: hidden;\n  }\n.sub-menu .category-image:not(.light) img {\n    transition: opacity 0.5s ease-in-out 0s, -webkit-transform 0.5s ease-in-out 0s;\n    transition: transform 0.5s ease-in-out 0s, opacity 0.5s ease-in-out 0s;\n    transition: transform 0.5s ease-in-out 0s, opacity 0.5s ease-in-out 0s, -webkit-transform 0.5s ease-in-out 0s;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    image-rendering: optimizeQuality;\n    vertical-align: middle;\n    max-width: 100%;\n    -webkit-transform: scale(1.01) rotate(0.0001deg);\n    transform: scale(1.01) rotate(0.0001deg);\n  }\n.sub-menu .category-image:not(.light):hover {\n    background-color: #000;\n  }\n.sub-menu .category-image:not(.light):hover img {\n    opacity: 0.7;\n    -webkit-transform: scale(1.15) rotate(0.0001deg);\n    transform: scale(1.15) rotate(0.0001deg);\n  }\n.sub-menu .category-image.light {\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n  }\n.sub-menu .category-image.light > a {\n    display: block;\n    overflow: hidden;\n  }\n.sub-menu .category-image.light img {\n    transition: -webkit-transform 0.5s ease 0s;\n    transition: transform 0.5s ease 0s;\n    transition: transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    image-rendering: optimizeQuality;\n    vertical-align: middle;\n    max-width: 100%;\n  }\n.sub-menu .category-image.light:hover img {\n    transition: -webkit-transform 0.6s ease 0.05s;\n    transition: transform 0.6s ease 0.05s;\n    transition: transform 0.6s ease 0.05s, -webkit-transform 0.6s ease 0.05s;\n    -webkit-transform: scale(1.15) rotate(0.0001deg);\n    transform: scale(1.15) rotate(0.0001deg);\n  }\n.sub-menu .category-title,\n  .sub-menu .category-title > a {\n    position: relative;\n    color: #191919;\n    text-decoration: none;\n  }\n.sub-menu .category-title > a:hover {\n    color: #f82e56;\n  }\n.sub-menu .category-title {\n    display: block;\n    width: 100%;\n    margin: -3px 0 10px;\n    font-size: 14px;\n    line-height: 20px;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-family: 'Raleway', sans-serif;\n  }\n.sub-menu .category-title.title-border {\n    margin: 10px 0;\n    padding: 0 0 7px;\n    border-bottom: 1px solid #e8e8e8;\n  }\n.sub-menu .category-links {\n    padding: 0;\n    margin: 5px 0 20px;\n    list-style: none;\n  }\n.sub-menu .category-links a {\n    position: relative;\n    display: inline-block;\n    font-size: 14px;\n    line-height: 20px;\n    color: #191919;\n    padding: 5px 0;\n    padding-left: 7px;\n    margin-left: -7px;\n    transition: margin 0.2s ease;\n  }\n.sub-menu .category-links a:hover {\n    color: #f82e56;\n    text-decoration: none;\n    margin-left: 0;\n    margin-right: -7px;\n  }\n.sub-menu .category-links a:hover:only-child:before {\n    opacity: 1;\n  }\n.sub-menu .category-links a:only-child:before {\n    position: absolute;\n    top: 7px;\n    left: 0;\n    font-family: 'icomoon-reg';\n    font-size: 12px;\n    line-height: 16px;\n    content: \"\\e922\";\n    opacity: 0;\n    transition: opacity 0.3s ease 0.1s;\n  }\n.sub-menu .category-links a:after {\n    position: absolute;\n    top: 5px;\n    right: 3px;\n    font-family: 'icomoon-reg';\n    font-size: 18px;\n    line-height: 21px;\n    content: \"\\e922\";\n  }\n.sub-menu .category-links a:only-child:after {\n    content: '';\n  }\n@supports (-webkit-text-size-adjust:none) and (not (-ms-ime-align:auto)) and (not (-moz-appearance:none)) {\n    .sub-menu .category-links a:only-child:before {\n      top: 5px;\n    }\n  }\n.sub-menu .category-links:last-child {\n    margin-bottom: 0;\n  }\n.sub-menu .off-image .category-image {\n    display: none;\n  }\n.sub-menu .off-title .category-title {\n    display: none;\n  }\n.sub-menu .off-links .category-links {\n    display: none;\n  }\nli.hovered:hover body:not(.touch) .sub-menu {\n    opacity: 1;\n    visibility: visible;\n  }\n/* dropdown effect */\n.megamenu.fadein .sub-menu {\n    transition: opacity 0.4s ease 0s, visibility 0.4s linear 0s;\n  }\n.megamenu.fadein li:hover .sub-menu {\n    transition: opacity 0.4s ease 0s, visibility 0 linear 0s;\n  }\n/* .megamenu.slidetop .sub-menu {\n    transform: translateY(40px);\n    -webkit-transition: transition: opacity 0.4s ease 0s, transform 0.4s ease 0s, visibility 0.4s linear 0s, -webkit-transform 0.4s ease 0s;\n    -o-transition: transition: opacity 0.4s ease 0s, transform 0.4s ease 0s, visibility 0.4s linear 0s, -webkit-transform 0.4s ease 0s;\n    transition: transition: opacity 0.4s ease 0s, transform 0.4s ease 0s, visibility 0.4s linear 0s, -webkit-transform 0.4s ease 0s;\n  } */\n.megamenu.slidetop li:hover .sub-menu {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    transition: opacity 0.4s ease 0s, transform 0.4s ease 0s, -webkit-transform 0.4s ease 0s;\n  }\n/* megacolumns */\n.megamenu-categories .col {\n    position: relative;\n    padding: 0 15px;\n    width: 100%;\n    display: inline-block;\n    margin: 0 -4px 20px 0;\n    vertical-align: top;\n  }\n.megamenu-categories {\n    display: block;\n    overflow: hidden;\n    padding: 0;\n    margin: 0;\n  }\n.megamenu-right,\n  .megamenu-left {\n    display: block;\n    float: left;\n    padding: 0 15px;\n    margin: 0;\n  }\n.megamenu-right {\n    float: right;\n  }\n.megamenu-top {\n    padding: 0 15px;\n    margin-bottom: 30px;\n  }\n.megamenu-bottom {\n    padding: 0 15px;\n    margin-top: 10px;\n  }\n.column-6 .col {\n    width: 16.66667%;\n  }\n.column-5 .col {\n    width: 20%;\n  }\n.column-4 .col {\n    width: 25%;\n  }\n.column-3 .col {\n    width: 33.33333%;\n  }\n.column-2 .col {\n    width: 50%;\n  }\n.width-20 {\n    width: 20%;\n  }\n.width-25 {\n    width: 25%;\n  }\n.width-33 {\n    width: 33.33333%;\n  }\n.width-40 {\n    width: 40%;\n  }\n/* multicolumns not for IE10 less */\n@media screen and (min-width: 1200px) {\n    .column-count-2 {\n      -webkit-column-count: 2;\n      column-count: 2;\n      -webkit-column-gap: 15px;\n      column-gap: 15px;\n    }\n    .column-count-3 {\n      -webkit-column-count: 3;\n      column-count: 3;\n    }\n  }\n/* Menu Label */\n.menu-label,\n  .menu-label-alt {\n    display: inline-block;\n    position: relative;\n    background: #f82e56;\n    height: 14px;\n    margin: 0 0 0 4px;\n    padding: 0 3px;\n    top: -1px;\n    font-family: 'Oswald', sans-serif;\n    font-size: 10px;\n    line-height: 14px;\n    font-weight: 400;\n    color: #ffffff;\n    letter-spacing: 0.5px;\n  }\n.category-title .menu-label,\n  .category-title .menu-label-alt {\n    top: -1px;\n  }\n.nav > li > a > .menu-label,\n  .nav > li > a > .menu-label-alt {\n    position: absolute;\n    top: 4px;\n    left: 50%;\n    margin: 0;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    height: 18px;\n    vertical-align: 0;\n    padding: 0 5px;\n    font-size: 14px;\n    line-height: 18px;\n    font-weight: 400;\n    color: #ffffff;\n    letter-spacing: 0;\n  }\n.nav > li:hover > a > .menu-label,\n  .nav > li:hover > a > .menu-label-alt {\n    top: 6px;\n  }\n@-moz-document url-prefix() {\n    .menu-label,\n    .menu-label-alt {\n      padding-top: 1px;\n      line-height: 10px;\n    }\n  }\n.menu-label-alt {\n    background: #3c7fa5;\n    color: #ffffff;\n  }\n/* Simple drop menu */\n.simple-dropdown .sub-menu {\n    min-width: 200px;\n    overflow: inherit;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n.simple-dropdown .sub-menu ul.category-links li {\n    position: relative;\n  }\n.simple-dropdown .sub-menu ul.category-links li:hover > a {\n    color: #f82e56;\n  }\n.simple-dropdown .sub-menu ul.category-links li a {\n    display: block;\n  }\n.simple-dropdown .sub-menu ul.category-links ul {\n    position: absolute;\n    z-index: 1;\n    left: calc(100% + 10px);\n    top: -15px;\n    min-width: 200px;\n    padding: 15px;\n    background: #f9f9f9;\n    list-style: none;\n    opacity: 0;\n    visibility: hidden;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);\n    transition: all 0.2s ease 0.2s;\n  }\n.simple-dropdown .sub-menu ul.category-links li.edge ul {\n    right: 99.9%;\n    left: auto;\n  }\n.simple-dropdown .sub-menu ul.category-links ul ul {\n    z-index: 2;\n  }\n.simple-dropdown .sub-menu ul.category-links li:hover > ul {\n    opacity: 1;\n    visibility: visible;\n  }\n@media screen and (max-width: 1399px) and (min-width: 992px) {\n    .navbar .nav > li > a,\n    .navbar .nav > li > a:focus {\n      font-size: 20px;\n    }\n    .navbar .nav > li > a:not(.menu-btn-special),\n    .navbar .nav > li > a:focus:not(.menu-btn-special) {\n      padding-left: 10px;\n      padding-right: 10px;\n    }\n    .sub-menu .category-title {\n      font-size: 14px;\n      line-height: 18px;\n    }\n    .sub-menu .category-links {\n      margin: 5px 0 15px;\n    }\n    .sub-menu .category-links a {\n      font-size: 12px;\n      line-height: 16px;\n    }\n  }\n@media screen and (max-width: 1200px) and (min-width: 1200px) {\n    .navbar .nav > li > a,\n    .navbar .nav > li > a:focus {\n      font-size: 18px;\n    }\n    .navbar .nav > li > a:not(.menu-btn-special),\n    .navbar .nav > li > a:not(.menu-btn-special):focus {\n      padding-left: 10px;\n      padding-right: 10px;\n    }\n  }\n@media screen and (max-width: 1199px) and (min-width: 992px) {\n    .navbar .nav > li > a,\n    .navbar .nav > li > a:focus {\n      font-size: 16px;\n    }\n    .navbar .nav > li > a:not(.menu-btn-special),\n    .navbar .nav > li > a:not(.menu-btn-special):focus {\n      padding-left: 8px;\n      padding-right: 8px;\n    }\n  }\n/* vertical menu */\n@media screen and (min-width: 992px) {\n    .megamenu.vertical {\n      background: #ffffff;\n      display: block;\n      text-align: left;\n      position: relative;\n      z-index: 10000;\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n    }\n    .megamenu.vertical li.mega-dropdown {\n      position: inherit;\n    }\n    .megamenu.vertical li.mega-dropdown .sub-menu {\n      top: 0;\n      left: 100%;\n      min-height: 100%;\n      width: calc(300% + 90px);\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n    }\n    .megamenu.vertical li.simple-dropdown {\n      position: relative;\n    }\n    .megamenu.vertical li.simple-dropdown .sub-menu {\n      left: 100%;\n      top: 0;\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n    }\n    .megamenu.vertical .nav > li {\n      display: block;\n      margin-right: 0;\n    }\n    .megamenu.vertical .nav > li > a,\n    .megamenu.vertical .nav > li > a:focus {\n      position: relative;\n      z-index: 100;\n      font-size: 20px;\n      line-height: 1.5em;\n      font-weight: 400;\n      text-transform: uppercase;\n      padding: 10px 20px;\n      font-family: 'Oswald', sans-serif;\n      color: #191919;\n      border-top: 1px solid #e8e8e8;\n      transition: all 0.1s ease;\n    }\n    .megamenu.vertical .nav > li:first-child > a,\n    .megamenu.vertical .nav > li:first-child > a:focus {\n      border-top: 0;\n    }\n    .megamenu.vertical .nav > li:hover > a {\n      margin: 0;\n      padding: 10px 20px;\n      background: #333745;\n      color: #ffffff;\n      box-shadow: 0 0 0 0;\n    }\n    .megamenu.vertical .nav > li.active > a {\n      color: #f82e56;\n    }\n    .megamenu.vertical .nav > li > a:after {\n      position: absolute;\n      top: 13px;\n      right: 15px;\n      font-family: 'icomoon-reg';\n      font-size: 22px;\n      line-height: 1em;\n      content: \"\\e922\";\n    }\n    .megamenu.vertical .nav > li > a:only-child:after {\n      content: '';\n    }\n    .megamenu.vertical .nav > li > a > .menu-label,\n    .megamenu.vertical .nav > li > a > .menu-label-alt {\n      display: inline-block;\n      position: relative;\n      top: -10px;\n      left: auto;\n      margin-left: 10px;\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n    }\n  }\n/* department menu */\n@media screen and (min-width: 992px) {\n    .megamenu.department {\n      position: absolute;\n      overflow: hidden;\n      top: 42px;\n      left: 0;\n      width: 100%;\n      max-height: 0;\n      transition: max-height 0.5s cubic-bezier(0.25, 1, 0.3, 1) 0s;\n    }\n    .megamenu.department .container {\n      width: 100% !important;\n    }\n    .megamenu.department.opened {\n      overflow: hidden;\n      max-height: 1000px;\n    }\n    .nav-department {\n      display: inline-block;\n      position: relative;\n      width: 200px;\n      padding: 0 30px;\n      margin-right: 15px;\n      font-size: 18px;\n      line-height: 42px;\n      font-weight: 400;\n      color: #ffffff;\n      background: #333745;\n      text-transform: uppercase;\n      text-decoration: none;\n    }\n    .nav-department:hover,\n    .nav-department:focus {\n      color: #ffffff;\n      text-decoration: none;\n    }\n    .nav-department:after {\n      position: absolute;\n      top: 12px;\n      right: 15px;\n      font-family: 'icomoon-reg';\n      font-size: 18px;\n      line-height: 1em;\n      content: \"\\e920\";\n    }\n    .megamenu.department {\n      background: transparent;\n      text-align: left;\n      z-index: 1000;\n      box-shadow: none;\n    }\n    .megamenu.department li.mega-dropdown {\n      position: inherit;\n    }\n    .megamenu.department li.mega-dropdown .sub-menu {\n      top: 0;\n      left: 250px;\n      min-height: 100%;\n      width: calc(100% - 250px);\n      border: 0;\n      box-shadow: none;\n    }\n    .megamenu.department li.simple-dropdown {\n      position: relative;\n    }\n    .megamenu.department li.simple-dropdown .sub-menu {\n      left: 100%;\n      top: -5px;\n      padding-top: 10px;\n      padding-bottom: 10px;\n      min-width: 220px;\n      box-shadow: none;\n    }\n    .megamenu.department .nav {\n      width: 250px;\n      padding: 15px 0;\n      background: #f6f6f6;\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n    }\n    .megamenu.department .nav > li {\n      display: block;\n      margin-right: 0;\n    }\n    .megamenu.department .nav > li > a:not(.menu-btn-special),\n    .megamenu.department .nav > li > a:not(.menu-btn-special):focus {\n      position: relative;\n      z-index: 100;\n      font-size: 17px;\n      line-height: 1.2em;\n      font-weight: 500;\n      text-transform: uppercase;\n      padding: 10px 30px;\n      font-family: 'Roboto', sans-serif;\n      color: #191919;\n      transition: all 0.1s ease;\n    }\n    .megamenu.department .nav > li:hover > a:not(.menu-btn-special) {\n      margin: 0;\n      padding: 10px 30px;\n      background: #ffffff;\n      box-shadow: 0 0 0 0;\n    }\n    .megamenu.department .nav > li.active > a:not(.menu-btn-special) {\n      color: #f82e56;\n    }\n    .megamenu.department .nav > li > a:not(.menu-btn-special):after {\n      position: absolute;\n      top: 10px;\n      right: 15px;\n      font-family: 'icomoon-reg';\n      font-size: 18px;\n      line-height: 1em;\n      content: \"\\e922\";\n    }\n    .megamenu.department .nav > li > a:only-child:after {\n      content: '';\n    }\n    .megamenu.department .nav > li > a > .menu-label,\n    .megamenu.department .nav > li > a > .menu-label-alt {\n      display: inline-block;\n      position: relative;\n      top: -10px;\n      left: auto;\n      margin-left: 10px;\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n    }\n  }\n@media screen and (min-width: 1199px) {\n    .nav-department {\n      width: 250px;\n    }\n  }\n/* truncated list */\n.truncateList {\n    position: relative;\n  }\n.view-all {\n    display: inline-block;\n    padding: 0 10px;\n    font-weight: 300;\n    font-style: italic;\n    text-transform: none;\n    cursor: pointer;\n  }\n.view-all:not(.disabled):hover {\n    color: #f82e56;\n  }\n.view-all.disabled .all {\n    display: none;\n  }\n.view-all.disabled .less {\n    display: inline-block;\n  }\n.view-all .all {\n    display: inline-block;\n  }\n.view-all .less {\n    display: none;\n  }\n  "

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n    <div class=\"container\">\n\n\n<!-- Menu Toggle -->\n<div class=\"menu-toggle\"><a href=\"#\" class=\"mobilemenu-toggle\"><i class=\"icon icon-menu\"></i></a></div>\n<!-- /Menu Toggle -->\n<!-- Header Cart -->\n<div class=\"header-link dropdown-link header-cart variant-1\">\n  <a href=\"cart.html\"> <i class=\"icon icon-cart\"></i> <span class=\"badge\">3</span> </a>\n  <!-- minicart wrapper -->\n  <div class=\"dropdown-container right\">\n    <!-- minicart content -->\n    <div class=\"block block-minicart\"></div>\n    <!-- /minicart content -->\n  </div>\n  <!-- /minicart wrapper -->\n</div>\n<!-- /Header Cart -->\n<!-- Header Links -->\n<div class=\"header-links\">\n  <!-- Header Language -->\n  <div class=\"header-link header-select dropdown-link header-language\">\n    <a href=\"#\"><img src=\"assets/images/flags/eng.png\" alt /></a>\n    <ul class=\"dropdown-container\">\n        <li *ngFor=\"let lang of languages\" >\n          <a class=\"anchor\" (click)=\"translate.use(lang.value)\" ><img src=\"assets/images/flags/{{lang.flag}}\" alt />{{lang.name}}</a>\n        </li>\n    </ul>\n  </div>\n  <!-- /Header Language -->\n  <!-- Header Currency -->\n  <div class=\"header-link header-select dropdown-link header-currency\">\n    <a href=\"#\">USD</a>\n    <ul class=\"dropdown-container\">\n      <li><a href=\"#\"><span class=\"symbol\">€</span>EUR</a></li>\n      <li class=\"active\"><a href=\"#\"><span class=\"symbol\">$</span>USD</a></li>\n      <li><a href=\"#\"><span class=\"symbol\">£</span>GBP</a></li>\n    </ul>\n  </div>\n  <!-- /Header Currency -->\n  <!-- Header Account -->\n  <div class=\"header-link dropdown-link header-account\">\n    <a href=\"#\"><i class=\"icon icon-user\"></i></a>\n    <div class=\"dropdown-container right\">\n              <div class=\"title\">Registered Customers</div>\n             <div class=\"top-text\">If you have an account with us, please log in.</div>\n            <!-- form -->\n            <form action=\"#\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"E-mail*\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Password*\">\n                <button type=\"submit\" class=\"btn\">Sign in</button>\n            </form>\n             <!-- /form -->\n            <div class=\"title\">OR</div>\n           <div class=\"bottom-text\">Create a <a href=\"account-create.html\">New Account</a></div>\n           </div>\n  </div>\n  <!-- /Header Account -->\n</div>\n<!-- /Header Links -->\n<!-- Header Search -->\n<div class=\"header-link header-search header-search\">\n  <div class=\"exp-search\">\n    <form>\n      <input class=\"exp-search-input \" placeholder=\"Search here ...\" type=\"text\" value=\"\">\n      <input class=\"exp-search-submit\" type=\"submit\" value=\"\">\n      <span class=\"exp-icon-search\"><i class=\"icon icon-magnify\"></i></span>\n      <span class=\"exp-search-close\"><i class=\"icon icon-close\"></i></span>\n    </form>\n  </div>\n</div>\n<!-- /Header Search -->\n<!-- Logo -->\n<div class=\"header-logo\">\n  <a href=\"index.html\" title=\"Logo\"><img src=\"assets/images/logo.png\" alt=\"Logo\" /></a>\n</div>\n<!-- /Logo -->\n\n<!-- Mega Menu -->\n<div class=\"megamenu fadein blackout\">\n  <ul class=\"nav\">\n    <li class=\"simple-dropdown\">\n      <a routerLink=\"/\">HOME</a>\n    \n    </li>\n    <li class=\"simple-dropdown\">\n      <a href=\"category-fixed-sidebar.html\" title=\"\">Products</a>\n      \n    </li>\n    <li class=\"mega-dropdown\">\n      <a href=\"category.html\">Men<span class=\"menu-label\">-15%</span></a>\n      <div class=\"sub-menu\">\n        <div class=\"container\">\n          <div class=\"megamenu-categories column-4\">\n            <!-- megamenu column -->\n            <div class=\"col\">\n              <a class=\"category-image\" href=\"#\"><img src=\"assets/images/category/megamenu-category-03.jpg\" alt /></a>\n              <div class=\"category-title\"><a href=\"#\">Only New</a></div>\n              <ul class=\"category-links\">\n                <li><a href=\"#\">New In Clothing</a></li>\n                <li><a href=\"#\">New In Shoes</a></li>\n                <li><a href=\"#\">New In Accessories</a></li>\n              </ul>\n            </div>\n            <!-- /megamenu column -->\n            <!-- megamenu column -->\n            <div class=\"col\">\n              <a class=\"category-image\" href=\"#\"><img src=\"assets/images/category/megamenu-category-04.jpg\" alt /></a>\n              <div class=\"category-title\"><a href=\"#\">Only Sale</a></div>\n              <ul class=\"category-links\">\n                <li><a href=\"#\">Sale Clothing</a></li>\n                <li><a href=\"#\"><b>Sale Shoes</b><span class=\"menu-label\">THREE DAYS ONLY!</span></a></li>\n                <li><a href=\"#\">Sale Accessories</a></li>\n              </ul>\n            </div>\n            <!-- /megamenu column -->\n            <!-- megamenu column -->\n            <div class=\"col\">\n              <a class=\"category-image\" href=\"#\"><img src=\"assets/images/category/megamenu-category-05.jpg\" alt /></a>\n              <div class=\"category-title\"><a href=\"#\">Top</a><span class=\"menu-label-alt\">NEW</span></div>\n              <ul class=\"category-links\">\n                <li><a href=\"#\">T-Shirts & Vests</a></li>\n                <li><a href=\"#\">Jumpers & Cardigans</a></li>\n                <li><a href=\"#\">Coats & Jackets</a></li>\n              </ul>\n            </div>\n            <!-- /megamenu column -->\n            <!-- megamenu column -->\n            <div class=\"col\">\n              <a class=\"category-image\" href=\"#\"><img src=\"assets/images/category/megamenu-category-06.jpg\" alt /></a>\n              <div class=\"category-title\"><a href=\"#\">Bottom</a></div>\n              <ul class=\"category-links\">\n                <li><a href=\"#\">Shorts</a></li>\n                <li><a href=\"#\">Pants</a></li>\n                <li><a href=\"#\">Denim</a></li>\n              </ul>\n            </div>\n            <!-- /megamenu column -->\n          </div>\n        </div>\n      </div>\n    </li>\n    <li class=\"mega-dropdown\">\n      <a href=\"category.html\">Women<span class=\"menu-label-alt\">NEW</span></a>\n      <div class=\"sub-menu\">\n        <div class=\"container\">\n          <div class=\"megamenu-right width-25\">\n            <div class=\"banner style-1 autosize-text\" data-fontratio=\"4.2\">\n              <img src=\"assets/images/banners/banner-1.jpg\" alt=\"Banner\">\n              <div class=\"banner-caption vertb\">\n                <div class=\"vert-wrapper\">\n                  <div class=\"vert\">\n                    <div class=\"text-1\">WOMEN 2016</div>\n                    <div class=\"text-2\">collections sale</div>\n                    <div class=\"text-3\"> SAVE UP TO 40% OF</div>\n                    <a href=\"#buttonlink\" class=\"banner-btn-wrap\">\n                      <div class=\"banner-btn text-hoverslide\" data-hcolor=\"#f82e56\"><span><span class=\"text\">SHOP NOW</span><span class=\"hoverbg\"></span></span>\n                      </div>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"megamenu-categories column-2\">\n            <!-- megamenu column 1 -->\n            <div class=\"col\">\n              <a class=\"category-image\" href=\"#\"><img src=\"assets/images/category/megamenu-category-01.jpg\" alt /></a>\n              <div class=\"category-title title-border\"><a href=\"#\">ACCESSORIES<span class=\"menu-label\">HOT</span></a></div>\n              <ul class=\"category-links column-count-2\">\n                <li><a href=\"#\">New In</a></li>\n                <li><a href=\"#\">Belt Buckles</a></li>\n                <li><a href=\"#\">Collar Tips</a></li>\n                <li><a href=\"#\">Fascinators & Headpieces<span class=\"menu-label\">HOT PRICE</span></a></li>\n                <li><a href=\"#\">Gloves & Mittens</a></li>\n                <li><a href=\"#\">Hair Accessories</a></li>\n                <li><a href=\"#\">Handkerchiefs</a></li>\n                <li><a href=\"#\">ID & Document Holders</a></li>\n                <li><a href=\"#\">T-Shirts & Vests</a></li>\n                <li><a href=\"#\">Rings & Finders</a></li>\n                <li><a href=\"#\">Day Planners</a></li>\n                <li><a href=\"#\">Scarves & Wraps</a></li>\n                <li><a href=\"#\">Wallets</a></li>\n                <li><a href=\"#\">Umbrellas</a></li>\n              </ul>\n            </div>\n            <!-- /megamenu column 1 -->\n            <!-- megamenu column 2 -->\n            <div class=\"col\">\n              <a class=\"category-image\" href=\"#\"><img src=\"assets/images/category/megamenu-category-02.jpg\" alt /></a>\n              <div class=\"category-title title-border\"><a href=\"#\">CLOTHING<span class=\"menu-label-alt\">NEW</span></a></div>\n              <ul class=\"category-links column-count-2\">\n                <li><a href=\"#\">New In</a></li>\n                <li><a href=\"#\">T-Shirts & Vests</a></li>\n                <li><a href=\"#\">Jumpers & Cardigans</a></li>\n                <li><a href=\"#\">Hoodies & Sweats<span class=\"menu-label\">-15%</span></a></li>\n                <li><a href=\"#\">Coats & Jackets</a></li>\n                <li><a href=\"#\">Joggers & Tracksuits</a></li>\n                <li><a href=\"#\">Shorts</a></li>\n                <li><a href=\"#\">Athletic Apparel</a></li>\n                <li><a href=\"#\">Intimates & Sleep</a></li>\n                <li><a href=\"#\">Outerwear</a></li>\n                <li><a href=\"#\">Swimwear</a></li>\n                <li><a href=\"#\">Denim Collection</a></li>\n                <li><a href=\"#\">Tops & Blouses</a></li>\n                <li><a href=\"#\">Shorts</a></li>\n              </ul>\n            </div>\n            <!-- /megamenu column 2 -->\n                                    <!-- megamenu bottom -->\n                                   <div class=\"megamenu-bottom\">\n                                       <a href=\"#\"><img class=\"img-responsive\" src=\"assets/images/banners/banner-megamenu.jpg\" alt=\"megamenu banner\"></a>\n                                     </div>\n                                     <!-- /megamenu bottom -->\n          </div>\n        </div>\n      </div>\n    </li>\n  \n    <li><a href=\"category.html\">Sale</a></li>\n  </ul>\n</div>\n<!-- /Mega Menu -->\n\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-translate */ "./node_modules/ng2-translate/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate) {
        this.translate = translate;
        this.languages = [
            { name: 'english', value: 'en', flag: 'eng.png' },
            { name: 'French', value: 'fr', flag: 'fr.png' },
            { name: 'German', value: 'den', flag: 'den.png' },
        ];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/layout/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/layout/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_translate__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/layout/sidemenu/sidemenu.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/sidemenu/sidemenu.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/sidemenu/sidemenu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/sidemenu/sidemenu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Mobile Menu -->\n<div class=\"mobilemenu dblclick\">\n    <div class=\"mobilemenu-header\">\n      <div class=\"title\">MENU</div>\n      <a href=\"#\" class=\"mobilemenu-toggle\"></a>\n    </div>\n    <div class=\"mobilemenu-content\">\n      <ul class=\"nav\">\n        <li><a href=\"index.html\">HOME</a><span class=\"arrow\"></span>\n          <!-- <ul>\n            <li> <a href=\"index.html\" title=\"\">Default</a> </li>\n            <li> <a href=\"index-bg-white.html\" title=\"\">White Background</a> </li>\n            <li> <a href=\"index-layout-6.html\" title=\"\">Wide + Side Panel</a> </li>\n            <li> <a href=\"index-layout-1.html\" title=\"\">Classic</a> </li>\n            <li> <a href=\"index-layout-2.html\" title=\"\">Journal<span class=\"menu-label\">new look</span></a> </li>\n            <li> <a href=\"index-layout-3.html\" title=\"\">Banners Boom</a> </li>\n            <li> <a href=\"index-fullscreen-slider.html\" title=\"\">Fullscreen Slider</a> </li>\n            <li> <a href=\"index-layout-4.html\" title=\"\">Amason</a> </li>\n            <li> <a href=\"index-layout-5.html\" title=\"\">Lookbook</a> </li>\n            <li> <a href=\"index-rtl.html\" title=\"\">RTL</a> </li>\n            <li> <a href=\"index-popup.html\" title=\"\">Popup on Load</a> </li>\n          </ul> -->\n        </li>\n        <li>\n          <a href=\"category-fixed-sidebar.html\" title=\"\">Products</a><span class=\"arrow\"></span>\n          <!-- <ul>\n            <li>\n              <a href=\"category.html\" title=\"\">Listing<span class=\"menu-label-alt\">NEW FEATURES</span></a><span class=\"arrow\"></span>\n              <ul>\n                <li><a href=\"category.html\" title=\"\">Classic Listing</a>\n                </li>\n                <li><a href=\"category-fixed-sidebar.html\" title=\"\">Listing Fixed Filter<span class=\"menu-label-alt\">NEW </span></a>\n                </li>\n                <li><a href=\"category-no-filter.html\" title=\"\">Listing No Filter</a></li>\n                <li><a href=\"category-empty.html\" title=\"\">Empty Category</a></li>\n                <li><a href=\"category.html\" title=\"\">Products per row</a><span class=\"arrow\"></span>\n                  <ul>\n                    <li> <a href=\"category-2-per-row.html\" title=\"\">2 per row</a></li>\n                    <li> <a href=\"category-3-per-row.html\" title=\"\">3 per row</a></li>\n                    <li> <a href=\"category-4-per-row.html\" title=\"\">4 per row</a></li>\n                    <li> <a href=\"category-5-per-row.html\" title=\"\">5 per row</a></li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n            <li>\n              <a href=\"product.html\" title=\"\">Product</a><span class=\"arrow\"></span>\n              <ul>\n                <li> <a href=\"product.html\" title=\"\">Classic design</a><span class=\"arrow\"></span>\n                  <ul>\n                    <li> <a href=\"product-image-small.html\" title=\"\">Image small</a></li>\n                    <li> <a href=\"product-image-medium.html\" title=\"\">Image medium</a></li>\n                    <li> <a href=\"product-image-medium-plus.html\" title=\"\">Image medium plus</a></li>\n                    <li> <a href=\"product-image-large.html\" title=\"\">Image large</a></li>\n                  </ul>\n                </li>\n                <li> <a href=\"product-creative.html\" title=\"\">Creative design</a> </li>\n              </ul>\n            </li>\n            <li>\n              <a href=\"index.html\" title=\"\">Headers</a><span class=\"arrow\"></span>\n              <ul>\n                <li> <a href=\"header-variant-1.html\" title=\"\">Header 1 (one row shift)</a> </li>\n                <li> <a href=\"header-variant-2.html\" title=\"\">Header 2 (one row)</a> </li>\n                <li> <a href=\"header-variant-3.html\" title=\"\">Header 3 (one row dark)</a> </li>\n                <li> <a href=\"header-variant-4.html\" title=\"\">Header 4 (three rows)</a> </li>\n                <li> <a href=\"header-variant-5.html\" title=\"\">Header 5 (two rows)</a> </li>\n                <li> <a href=\"header-variant-6.html\" title=\"\">Header 6 (two rows center)</a> </li>\n                <li> <a href=\"header-variant-7.html\" title=\"\">Header 7 (three row)</a> </li>\n                <li> <a href=\"header-variant-8.html\" title=\"\">Header 8 (department)</a> </li>\n                <li> <a href=\"header-variant-9.html\" title=\"\">Header 9 (creative)</a> </li>\n              </ul>\n            </li>\n            <li>\n              <a href=\"index.html\" title=\"\">Footers</a><span class=\"arrow\"></span>\n              <ul>\n                <li> <a href=\"footer-variant-1.html\" title=\"\">Footer 1 (simple)</a> </li>\n                <li> <a href=\"footer-variant-2.html\" title=\"\">Footer 2 (links)</a> </li>\n                <li> <a href=\"footer-variant-3.html\" title=\"\">Footer 3 (menu)</a> </li>\n                <li> <a href=\"footer-variant-4.html\" title=\"\">Footer 4 (advanced)</a> </li>\n              </ul>\n            </li>\n            <li>\n              <a href=\"gallery.html\" title=\"\">Gallery</a><span class=\"arrow\"></span>\n              <ul>\n                <li> <a href=\"gallery.html\" title=\"\">Gallery 2 in row</a> </li>\n                <li> <a href=\"gallery-3-per-row.html\" title=\"\">Gallery 3 in row</a> </li>\n                <li> <a href=\"gallery-simple.html\" title=\"\">No isotope Gallery</a> </li>\n              </ul>\n            </li>\n            <li>\n              <a href=\"blog.html\" title=\"\">Blog</a>\n              <ul>\n                <li> <a href=\"blog.html\" title=\"\">List+Sidebar</a> </li>\n                <li> <a href=\"blog-grid-2.html\" title=\"\">Grid 2</a> </li>\n                <li> <a href=\"blog-grid-3.html\" title=\"\">Grid 3</a> </li>\n                <li> <a href=\"blog-grid-4.html\" title=\"\">Grid 4</a> </li>\n                <li> <a href=\"blog-single.html\" title=\"\">Single Post</a> </li>\n              </ul>\n            </li>\n            <li>\n              <a href=\"#\" title=\"\">Pages</a><span class=\"arrow\"></span>\n              <ul>\n                <li> <a href=\"faq.html\" title=\"\">Faq</a> </li>\n                <li> <a href=\"about.html\" title=\"\">About Us</a> </li>\n                <li> <a href=\"contact.html\" title=\"\">Contact Us</a> </li>\n                <li> <a href=\"404.html\" title=\"\">404</a> </li>\n                <li> <a href=\"typography.html\" title=\"\">Typography</a> </li>\n                <li> <a href=\"coming-soon.html\" title=\"\">Coming soon</a> </li>\n                <li> <a href=\"login.html\" title=\"\">Login</a> </li>\n                <li> <a href=\"account-create.html\" title=\"\">Account</a> </li>\n                <li> <a href=\"cart.html\" title=\"\">Cart</a> </li>\n                <li> <a href=\"cart-empty.html\" title=\"\">Empty Cart</a> </li>\n                <li> <a href=\"wishlist.html\" title=\"\">Wishlist</a> </li>\n              </ul>\n            </li>\n            <li> <a href=\"http://seiko-shopify.big-skins.com/banners-grid-online-editor/\" title=\"\">Banners / Grid Editor<span class=\"menu-label-alt\">EXCLUSIVE</span></a> </li>\n          </ul> -->\n        </li>\n        <li><a href=\"category.html\">Men</a></li>\n        <li><a href=\"category.html\">Women</a></li>\n        <li><a href=\"category.html\">Electronics</a></li>\n      </ul>\n    </div>\n  </div>\n  <!-- Mobile Menu -->"

/***/ }),

/***/ "./src/app/layout/sidemenu/sidemenu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidemenu/sidemenu.component.ts ***!
  \*******************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent() {
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    SidemenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/layout/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.css */ "./src/app/layout/sidemenu/sidemenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".anchor{\n    color:#f82e56  !important;\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"showLogin\">\n<div class=\"title\">Registered Customers </div>\n<div class=\"top-text\">If you have an account with us, please log in.</div>\n<!-- form -->\n<form action=\"#\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"E-mail*\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Password*\">\n  <button type=\"submit\" class=\"btn\">Sign in</button>\n</form>\n<!-- /form -->\n<div class=\"title\">OR</div>\n<div class=\"bottom-text\">Create a <a class=\"anchor\" (click)=\"openSignUpModal()\">New Account</a></div>\n</div>\n<div *ngIf=\"showSignForm\">\n<form class=\"account-create\" action=\"#\">\n    <label>First Name<span class=\"required\">*</span></label>\n    <input type=\"text\" class=\"form-control\">\n    <label>Last Name<span class=\"required\">*</span></label>\n    <input type=\"text\" class=\"form-control \">\n    <label>E-mail<span class=\"required\">*</span></label>\n    <input type=\"text\" class=\"form-control\">\n    <label>Password<span class=\"required\">*</span></label>\n    <input type=\"password\" class=\"form-control\">\n    <div>\n      <button class=\"btn btn-lg\">Create</button><span class=\"required-text\">* Required Fields</span></div>\n    \n    <div class=\"bottom-text\"><a class=\"anchor\"(click)=\"openSignInModal()\">SignIn</a></div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.showLogin = true;
        this.showSignForm = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.openSignUpModal = function () {
        this.showSignForm = true;
        this.showLogin = false;
    };
    LoginComponent.prototype.openSignInModal = function () {
        this.showLogin = true;
        this.showSignForm = false;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block block-minicart\">\n    <div class=\"minicart-content-wrapper\">\n      <div class=\"block-title\">\n        <span>Recently added item(s)</span>\n      </div>\n      <a class=\"btn-minicart-close\" title=\"Close\">&#10060;</a>\n      <div class=\"block-content\">\n        <div class=\"minicart-items-wrapper overflowed\">\n          <ol class=\"minicart-items\">\n            <li class=\"item product product-item\" *ngFor=\"let product of products\">\n              <div class=\"product\">\n                <a class=\"product-item-photo\" href=\"#\" title=\"{{product?.name}}\">\n                  <span class=\"product-image-container\">\n                  <span class=\"product-image-wrapper\">\n                  <img class=\"product-image-photo\" src=\"assets/images/products/{{product?.photo}}\" alt=\"{{product?.name}}\">\n                  </span>\n                  </span>\n                </a>\n                <div class=\"product-item-details\">\n                  <div class=\"product-item-name\">\n                    <a href=\"#\">{{product?.name}}</a>\n                  </div>\n                  <div class=\"product-item-qty\">\n                    <label class=\"label\">Qty</label>\n                    <input class=\"item-qty cart-item-qty\" maxlength=\"12\" value=\"{{product?.quantity}}\">\n                    <button class=\"update-cart-item\" style=\"display: none\" title=\"Update\">\n                      <span>Update</span>\n                    </button>\n                  </div>\n                  <div class=\"product-item-pricing\">\n                    <div class=\"price-container\">\n                      <span class=\"price-wrapper\">\n                        <span class=\"price-excluding-tax\">\n                        <span class=\"minicart-price\">\n                        <span class=\"price\">${{product?.price}}</span> </span>\n                      </span>\n                      </span>\n                    </div>\n                    <div class=\"product actions\">\n                      <div class=\"secondary\">\n                        <a href=\"#\" class=\"action delete\" title=\"Remove item\">\n                          <span>Delete</span>\n                        </a>\n                      </div>\n                      <div class=\"primary\">\n                        <a class=\"action edit\" routerLink=\"/cart\" title=\"Edit item\">\n                          <span>Edit</span>\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ol>\n        </div>\n        <div class=\"subtotal\">\n          <span class=\"label\">\n            <span>Subtotal</span>\n          </span>\n          <div class=\"amount price-container\">\n            <span class=\"price-wrapper\"><span class=\"price\">$587.00</span></span>\n          </div>\n        </div>\n        <div class=\"actions\">\n          <div class=\"secondary\">\n            <a routerLink=\"/cart\" class=\"btn btn-alt\">\n              <i class=\"icon icon-cart\"></i><span>View and edit cart</span>\n            </a>\n          </div>\n          <div class=\"primary\">\n            <a class=\"btn\" routerLink=\"/checkout\">\n              <i class=\"icon icon-external-link\"></i><span>Go to Checkout</span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
        this.products = [{ name: 'Long sleeve overall', quantity: 2, price: 149.00, photo: 'product-16-c1.jpg' }, { name: 'Lace back mini dress', quantity: 1, price: 200.00, photo: 'product-20.jpg' }];
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-details/product-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-details/product-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product-details/product-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block\">\n  <div class=\"container\">\n    <ul class=\"breadcrumbs\">\n      <li><a href=\"index.html\"><i class=\"icon icon-home\"></i></a></li>\n      <li>/<a href=\"#\">Women</a></li>\n      <li>/<span>Black swimsuit with bindings</span></li>\n      <li class=\"product-nav\">\n        <i class=\"icon icon-angle-left\"></i><a href=\"#\" class=\"product-nav-prev\">prev product\n          <span class=\"product-nav-preview\">\n            <span class=\"image\"><img src=\"assets/images/products/product-prev-preview.jpg\" alt=\"\"><span class=\"price\">$280</span></span>\n            <span class=\"name\">Black swimsuit</span>\n          </span></a>/\n        <a href=\"#\" class=\"product-nav-next\">next product\n          <span class=\"product-nav-preview\">\n            <span class=\"image\"><img src=\"assets/images/products/product-next-preview.jpg\" alt=\"\"><span class=\"price\">$280</span></span>\n            <span class=\"name\">Black swimsuit</span>\n          </span></a><i class=\"icon icon-angle-right\"></i>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"block product-block\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-md-4 col-lg-4\">\n        <!-- Product Gallery -->\n        <div class=\"main-image\">\n          \n          <img src=\"{{SelectedItem.big}}\" class=\"zoom\" alt=\"\" />\n\n\n          <div class=\"dblclick-text\"><span>Double click for enlarge</span></div>\n          <a href=\"http://www.youtube.com/watch?v=qZeeMm35LXo\" class=\"video-link\"><i class=\"icon icon-film\"></i></a>\n          <a  class=\"zoom-link\"><i class=\"icon icon-zoomin\"></i></a>\n        </div>\n        <div class=\"product-previews-wrapper\">\n          <div class=\"product-previews-carousel\" id=\"previewsGallery\">\n            <a href=\"#\"  *ngFor=\"let img of images ; index as i; first as isFirst\">\n              <img class=\"productdetailsthumbimage\" src=\"assets/images/products/{{img}}\" alt=\"Image\" (click)=\"selectImage(img)\"/></a>\n          </div>\n        </div>\n        <!-- /Product Gallery -->\n      </div>\n      <div class=\"col-sm-6 col-md-8 col-lg-5\">\n        <div class=\"product-info-block classic\">\n          <div class=\"product-info-top\">\n            <div class=\"product-sku\">SKU: <span>Stock Keeping Unit</span></div>\n            <div class=\"rating\">\n              <i class=\"icon icon-star fill\"></i><i class=\"icon icon-star fill\"></i><i class=\"icon icon-star fill\"></i><i class=\"icon icon-star fill\"></i><i class=\"icon icon-star\"></i><span class=\"count\">248 reviews</span>\n            </div>\n          </div>\n          <div class=\"product-name-wrapper\">\n            <h1 class=\"product-name\">Cover up tunic</h1>\n            <div class=\"product-labels\">\n              <span class=\"product-label sale\">SALE</span>\n              <span class=\"product-label new\">NEW</span>\n            </div>\n          </div>\n          <div class=\"product-availability\">Availability: <span>In stock</span></div>\n          <div class=\"product-description\">\n            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia nonkdni numquam eius modi tempora incidunt ut labore </p>\n          </div>\n          <div class=\"countdown-circle hidden-xs\">\n            <div class=\"countdown-wrapper\">\n              <div class=\"countdown\" data-promoperiod=\"0\"></div>\n              <div class=\"countdown-text\">\n                <div class=\"text1\">Discount 45% OFF</div>\n                <div class=\"text2\">Hurry, there are only <span>14</span> item(s) left!</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"product-options\">\n            <div class=\"product-size swatches\">\n              <span class=\"option-label\">Size:</span>\n              <div class=\"select-wrapper-sm\">\n                <select class=\"form-control input-sm size-variants\">\n                  <option value=\"36\">36 - $114.00 USD</option>\n                  <option value=\"38\" selected>38 - $114.00 USD</option>\n                  <option value=\"40\">40 - $114.00 USD</option>\n                  <option value=\"42\">42 - $114.00 USD</option>\n                </select>\n              </div>\n              <ul class=\"size-list\">\n                <li class=\"absent-option\"><a href=\"#\" data-value='36'><span class=\"value\">36</span></a></li>\n                <li><a href=\"#\" data-value='38'><span class=\"value\">38</span></a></li>\n                <li><a href=\"#\" data-value='40'><span class=\"value\">40</span></a></li>\n                <li><a href=\"#\" data-value='42'><span class=\"value\">42</span></a></li>\n              </ul>\n            </div>\n            <div class=\"product-color swatches\">\n              <span class=\"option-label\">Color:</span>\n              <div class=\"select-wrapper-sm\">\n                <select class=\"form-control input-sm\">\n                  <option value=\"Red\">Red</option>\n                  <option value=\"Green\">Green</option>\n                  <option value=\"Blue\" selected>Blue</option>\n                  <option value=\"Yellow\">Yellow</option>\n                  <option value=\"Grey\">Grey</option>\n                  <option value=\"Violet\">Violet</option>\n                </select>\n              </div>\n              <ul class=\"color-list\">\n                <li class=\"absent-option\"><a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Red\" data-value=\"Red\" data-image=\"assets/images/products/product-color-red.jpg\"><span class=\"value\"><img src=\"assets/images/colorswatch/color-red.png\" alt=\"\"></span></a></li>\n                <li><a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Pink\" data-value=\"Green\" data-image=\"assets/images/products/product-color-green.jpg\"><span class=\"value\"><img src=\"assets/images/colorswatch/color-green.png\" alt=\"\"></span></a></li>\n                <li><a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Marine\" data-value=\"Blue\" data-image=\"assets/images/products/product-color-blue.jpg\"><span class=\"value\"><img src=\"assets/images/colorswatch/color-blue.png\" alt=\"\"></span></a></li>\n                <li><a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Orange\" data-value=\"yellow\" data-image=\"assets/images/products/product-color-yellow.jpg\"><span class=\"value\"><img src=\"assets/images/colorswatch/color-yellow.png\" alt=\"\"></span></a></li>\n                <li><a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Orange\" data-value=\"grey\" data-image=\"assets/images/products/product-color-grey.jpg\"><span class=\"value\"><img src=\"assets/images/colorswatch/color-grey.png\" alt=\"\"></span></a></li>\n                <li><a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Orange\" data-value=\"grey\" data-image=\"assets/images/products/product-color-violet.jpg\"><span class=\"value\"><img src=\"assets/images/colorswatch/color-violet.png\" alt=\"\"></span></a></li>\n              </ul>\n            </div>\n            <div class=\"product-qty\">\n              <span class=\"option-label\">Qty:</span>\n              <div class=\"qty qty-changer\">\n                <fieldset>\n                  <input type=\"button\" value=\"&#8210;\" class=\"decrease\">\n                  <input type=\"text\" class=\"qty-input\" value=\"2\" data-min=\"0\">\n                  <input type=\"button\" value=\"+\" class=\"increase\">\n                </fieldset>\n              </div>\n            </div>\n          </div>\n          <div class=\"product-actions\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"product-meta\">\n                  <span><a href=\"#\"><i class=\"icon icon-heart\"></i> Add to wishlist</a></span>\n                  <span><a href=\"#\"><i class=\"icon icon-balance\"></i> Add to Compare</a></span>\n                </div>\n                <div class=\"social\">\n                  <div class=\"share-button toLeft\">\n                    <span class=\"toggle\">Share</span>\n                    <ul class=\"social-list\">\n                      <li>\n                        <a href=\"#\" class=\"icon icon-google google\"></a>\n                      </li>\n                      <li>\n                        <a href=\"#\" class=\"icon icon-fancy fancy\"></a>\n                      </li>\n                      <li>\n                        <a href=\"#\" class=\"icon icon-pinterest pinterest\"></a>\n                      </li>\n                      <li>\n                        <a href=\"#\" class=\"icon icon-twitter-logo twitter\"></a>\n                      </li>\n                      <li>\n                        <a href=\"#\" class=\"icon icon-facebook-logo facebook\"></a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"price\">\n                  <span class=\"old-price\"><span>$140.00</span></span>\n                  <span class=\"special-price\"><span>$114.00</span></span>\n                </div>\n                <div class=\"actions\">\n                  <button data-loading-text='<i class=\"icon icon-spinner spin\"></i><span>Add to cart</span>' class=\"btn btn-lg btn-loading\"><i class=\"icon icon-cart\"></i><span>Add to cart</span></button>\n                  <a href=\"#\" class=\"btn btn-lg product-details\"><i class=\"icon icon-external-link\"></i></a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12 col-lg-3 hidden-quickview\">\n        <div class=\"box-icon-row\">\n          <div class=\"box-left-icon-bg\">\n            <div class=\"box-icon\"><i class=\"icon icon-gift\"></i></div>\n            <div class=\"box-text\">\n              <div class=\"title\">Special offer: 1+2=4</div>\n              Get a gift!\n            </div>\n          </div>\n          <div class=\"box-left-icon-bg\">\n            <div class=\"box-icon\"><i class=\"icon icon-dollar-bills\"></i></div>\n            <div class=\"box-text\">\n              <div class=\"title\">Free Reward Card</div>\n              Worth $10, $50, $100\n            </div>\n          </div>\n          <div class=\"box-left-icon-bg\">\n            <div class=\"box-icon\"><i class=\"icon icon-undo\"></i></div>\n            <div class=\"box-text\">\n              <div class=\"title\">Order return</div>\n              Returns within 5 days\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"block\">\n  \n</div>\n<div class=\"block\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <ross-blog></ross-blog>\n      </div>\n      <div class=\"col-md-6\">\n        <ross-deals></ross-deals>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_magnificpopup_dist_jquery_magnific_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/js/magnificpopup/dist/jquery.magnific-popup.js */ "./src/assets/js/magnificpopup/dist/jquery.magnific-popup.js");
/* harmony import */ var _assets_js_magnificpopup_dist_jquery_magnific_popup_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_magnificpopup_dist_jquery_magnific_popup_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_countdown_jquery_countdown_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/js/countdown/jquery.countdown.min.js */ "./src/assets/js/countdown/jquery.countdown.min.js");
/* harmony import */ var _assets_js_countdown_jquery_countdown_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_countdown_jquery_countdown_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_js_ez_plus_jquery_ez_plus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/ez-plus/jquery.ez-plus.js */ "./src/assets/js/ez-plus/jquery.ez-plus.js");
/* harmony import */ var _assets_js_ez_plus_jquery_ez_plus_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_ez_plus_jquery_ez_plus_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(appConfig) {
        this.appConfig = appConfig;
        this.images = ['product-gallery-1.jpg', 'product-gallery-2.jpg', 'product-gallery-3.jpg'];
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        this.appConfig.loadCountDown();
        this.SelectedItem = {
            id: 0,
            big: 'assets/images/products/large/' + this.images[0],
            small: 'assets/images/products/large/' + this.images[0],
            title: "display title"
        };
    };
    ProductDetailsComponent.prototype.ngAfterViewInit = function () {
        this.loadProductPreview();
    };
    ProductDetailsComponent.prototype.selectImage = function (image) {
        if (image) {
            this.selectedimage = image;
            this.SelectedItem = {
                id: 0,
                big: 'assets/images/products/large/' + image,
                small: 'assets/images/products/large/' + image,
                title: "display title"
            };
        }
        else {
            return false;
        }
    };
    ProductDetailsComponent.prototype.loadProductPreview = function () {
        // product previews carousel
        if (jquery__WEBPACK_IMPORTED_MODULE_4__(".product-previews-carousel").length) {
            var $this = jquery__WEBPACK_IMPORTED_MODULE_4__(".product-previews-carousel");
            $this.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                focusOnSelect: true,
                infinite: false
            });
            $this.on('click', '.slick-slide', function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__('.zoom-link').removeClass('disable-gallery');
            });
        }
    };
    ProductDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product-details/product-details.component.css")]
        }),
        __metadata("design:paramtypes", [_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Product Item -->\n<div class=\"product-item large colorvariants category1 category2\">\n  <div class=\"product-item-inside\">\n    <div class=\"product-item-info\">\n      <!-- Product Photo -->\n      <div class=\"product-item-photo\">\n        <!-- Product Label -->\n        <div *ngIf=\"product.new\" class=\"product-item-label label-new\">\n          <span>New</span>\n        </div>\n        <!-- /Product Label -->\n        <!-- Product Label -->\n        <div *ngIf=\"product.sale\" class=\"product-item-label label-sale\">\n          <span>{{product.discount}}%</span>\n        </div>\n        <!-- /Product Label -->\n\n\n        <!-- product inside carousel -->\n        <div class=\"carousel-inside slide\" data-ride=\"carousel\">\n          <div class=\"carousel-inner\" role=\"listbox\">\n            <div class=\"item active\">\n              <a href=\"product-image-medium.html\">\n                <img class=\"product-image-photo\" src=\"assets/images/products/product-20.jpg\" alt=\"\">\n              </a>\n            </div>\n            <div class=\"item\">\n              <a href=\"product-image-medium.html\">\n                <img class=\"product-image-photo\" src=\"assets/images/products/product-20-1.jpg\" alt=\"\">\n              </a>\n            </div>\n            <div class=\"item\">\n              <a href=\"product-image-medium.html\">\n                <img class=\"product-image-photo\" src=\"assets/images/products/product-20-2.jpg\" alt=\"\">\n              </a>\n            </div>\n          </div>\n          <a class=\"carousel-control next\"></a>\n          <a class=\"carousel-control prev\"></a>\n        </div>\n        <!-- /product inside carousel -->\n\n\n        <!-- /product main photo  -->\n        <div class=\"countdown-box hidden-xs\">\n          <div class=\"countdown-wrapper\">\n            <div class=\"countdown-title\">special price expires in</div>\n            <div class=\"countdown\" data-promodate=\"2016/12/01\"></div>\n          </div>\n        </div>\n        <!-- Product Actions -->\n        <a href=\"#\" title=\"Add to Wishlist\" class=\"wishlist active\">\n          <i class=\"icon icon-heart\"></i>\n          <span>Add to Wishlist</span>\n        </a>\n        <div class=\"product-item-actions\">\n          <div class=\"share-button toBottom\">\n            <span class=\"toggle\"></span>\n            <ul class=\"social-list\">\n              <li>\n                <a href=\"#\" class=\"icon icon-google google\"></a>\n              </li>\n              <li>\n                <a href=\"#\" class=\"icon icon-fancy fancy\"></a>\n              </li>\n              <li>\n                <a href=\"#\" class=\"icon icon-pinterest pinterest\"></a>\n              </li>\n              <li>\n                <a href=\"#\" class=\"icon icon-twitter-logo twitter\"></a>\n              </li>\n              <li>\n                <a href=\"#\" class=\"icon icon-facebook-logo facebook\"></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <!-- /Product Actions -->\n        <ul class=\"color-swatch hidden-xs\">\n          <!-- <li class=\"active\" *ngFor=\"let image of colorImages \">\n              <a data-image=\"assets/images/products/{{image.productImage}}\" href=\"#\"><img src=\"assets/images/colorswatch/color-blue.png\" alt=\"Blue\"></a>\n            </li> -->\n          <!-- <li>\n              <a data-image=\"assets/images/products/product-16-c2.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-grey.png\" alt=\"Gray\"></a>\n            </li>\n            <li>\n              <a data-image=\"assets/images/products/product-16-c3.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-red.png\" alt=\"Red\"></a>\n            </li>\n            <li>\n              <a data-image=\"assets/images/products/product-16-c4.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-violet.png\" alt=\"Violet\"></a>\n            </li>\n            <li>\n              <a data-image=\"assets/images/products/product-16-c5.jpg\" href=\"#\"><img src=\"assets/images/colorswatch/color-green.png\" alt=\"Green\"></a>\n            </li> -->\n        </ul>\n      </div>\n      <!-- /Product Photo -->\n      <!-- Product Details -->\n      <div class=\"product-item-details\">\n        <div class=\"product-item-name\">\n          <a title=\"{{product?.name}}\" href=\"product.html\" class=\"product-item-link\">{{product?.name}}</a>\n        </div>\n        <div class=\"product-item-description\">{{product?.description}}</div>\n        <div class=\"price-box\">\n          <span class=\"price-container\">\n            <span class=\"price-wrapper\">\n              <span class=\"old-price\">${{product?.oldPrice}}</span>\n              <span class=\"special-price\">${{product?.specialPrice}}</span>\n            </span>\n          </span>\n        </div>\n        <div class=\"product-item-rating\">\n          <i class=\"icon icon-star-fill\"></i>\n          <i class=\"icon icon-star-fill\"></i>\n          <i class=\"icon icon-star-fill\"></i>\n          <i class=\"icon icon-star-fill\"></i>\n          <i class=\"icon icon-star-fill\"></i>\n        </div>\n        <button class=\"btn add-to-cart\" data-product=\"789123\">\n          <i class=\"icon icon-cart\"></i>\n          <span>Add to Cart</span>\n        </button>\n      </div>\n      <!-- /Product Details -->\n    </div>\n  </div>\n</div>\n<!-- /Product Item -->"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_countdown_jquery_countdown_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/js/countdown/jquery.countdown.min.js */ "./src/assets/js/countdown/jquery.countdown.min.js");
/* harmony import */ var _assets_js_countdown_jquery_countdown_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_countdown_jquery_countdown_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/js/bootstrap.min.js */ "./src/assets/js/bootstrap.min.js");
/* harmony import */ var _assets_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.product = {};
        this.entity = {};
        this.colorImages = [];
        this.product = {
            name: 'Long sleeve overall',
            description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia nonkdni numquam eius modi tempora incidunt ut labore',
            'specialPrice': 149.00,
            'discount': -20,
            'oldPrice': 190.00,
            new: true,
            sale: true,
            images: ["product-20.jpg", "product-20-1.jpg", "product-20-2.jpg"],
        };
        this.colorImages = [{ productImage: 'product-16-c1.jpg', colorImage: 'color-blue.png' }, { 'productImage': 'product-16-c2.jpg', 'colorImage': 'color-grey.png' }, { 'productImage': 'product-16-c3.jpg', 'colorImage': 'color-red.png' },
            { 'productImage': 'product-16-c4.jpg', 'colorImage': 'color-violet.png' }, { 'productImage': 'product-16-c5.jpg', 'colorImage': 'color-green.png' }];
    }
    ProductComponent.prototype.ngOnInit = function () {
        // Countdown
        jquery__WEBPACK_IMPORTED_MODULE_3__('.countdown').each(function () {
            var countdown = jquery__WEBPACK_IMPORTED_MODULE_3__(this);
            var promoperiod;
            if (countdown.attr('data-promoperiod')) {
                promoperiod = new Date().getTime() + parseInt(countdown.attr('data-promoperiod'), 1000000);
            }
            if (countdown.attr('data-promodate')) {
                promoperiod = countdown.attr('data-promodate');
            }
            countdown.countdown(promoperiod, function (event) {
                countdown.html(event.strftime('<span><span>%D</span>DAYS</span>' + '<span><span>%H</span>HRS</span>' + '<span><span>%M</span>MIN</span>' + '<span><span>%S</span>SEC</span>'));
            });
        });
        // colorswatch
        function colorSwatch(link) {
            var link = link + ' a';
            $document.on('click', link, function (e) {
                var $el = jquery__WEBPACK_IMPORTED_MODULE_3__(this);
                if ($el.data('image')) {
                    var $image = $el.closest('.product-item-inside').find('img.product-image-photo');
                    // if inner carousel in product
                    if ($el.closest('.product-item-inside').find('.carousel-inside').length) {
                        $el.closest('.product-item-inside').find('.carousel-inside').carousel(0);
                        $image = $el.closest('.product-item-inside').find('.product-item-photo .item:first-child img');
                    }
                    var imgSrc = $el.data('image');
                    $el.closest('ul.color-swatch').find('li').removeClass('active');
                    $el.parent('li').addClass('active');
                    var newImg = document.createElement("img");
                    newImg.src = $el.data('image');
                    newImg.onload = function () {
                        $image.attr('src', $el.data('image'));
                    };
                }
                e.preventDefault();
            });
        }
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ross-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: createTranslateLoader, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-translate */ "./node_modules/ng2-translate/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// AoT requires an exported function for factories
function createTranslateLoader(http) {
    return new ng2_translate__WEBPACK_IMPORTED_MODULE_3__["TranslateStaticLoader"](http, './assets/i18n', '.json');
}
var SharedModule = /** @class */ (function () {
    function SharedModule(translate, http) {
        this.translate = translate;
        this.http = http;
        translate.addLangs(["en", "fr", "den"]);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|den/) ? browserLang : 'en');
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ng2_translate__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                    provide: ng2_translate__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]]
                })
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ng2_translate__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
            ]
        }),
        __metadata("design:paramtypes", [ng2_translate__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*-----------------------------------------------------------------------------------

	Theme Name: Seiko HTML5 eCommerce Template
	Author: BigSteps
	Author URI: http://themeforest.net/user/bigsteps
	Version: 1.2.0

-----------------------------------------------------------------------------------*/

$(function () {

	"use strict";
  
	var $body = $('body'),
		$window = $(window),
		$document = $(document);

	// detect touch
	var isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;
	if (isTouchDevice) {
		$body.addClass('touch');
	}
	// detect Mac
	if (navigator.userAgent.indexOf('Mac') > 0) {
		$body.addClass('mac');
	}
	// detect IE
	var version = detectIE();
	if (version) {
		$body.addClass('ie');
	}

	function detectIE() {
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf('MSIE ');
		if (msie > 0) {
			// IE 10 or older => return version number
			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}
		var trident = ua.indexOf('Trident/');
		if (trident > 0) {
			// IE 11 => return version number
			var rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}
		var edge = ua.indexOf('Edge/');
		if (edge > 0) {
			// Edge (IE 12+) => return version number
			return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}
		// other browser
		return false;
	}

	// disable scroll function
	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault) e.preventDefault();
		e.returnValue = false;
	}

	function wheel(e) {
		preventDefault(e);
	}

	function disableScroll() {
		if (window.addEventListener) {
			window.addEventListener('DOMMouseScroll', wheel, false);
		}
		window.onmousewheel = document.onmousewheel = wheel;
	}

	function enableScroll() {
		if (window.removeEventListener) {
			window.removeEventListener('DOMMouseScroll', wheel, false);
		}
		window.onmousewheel = document.onmousewheel = null;
	}
	// END disable scroll function

	// price slider
	function priceSlider() {

		var priceSlider = document.getElementById('priceSlider');

		noUiSlider.create(priceSlider, {
			start: [200, 1500],
			connect: true,
			step: 1,
			range: {
				'min': 0,
				'max': 2000
			}
		});

		var inputPriceMax = document.getElementById('priceMax');
		var inputPriceMin = document.getElementById('priceMin');

		priceSlider.noUiSlider.on('update', function (values, handle) {

			var value = values[handle];

			if (handle) {
				inputPriceMax.innerHTML = value;
			} else {
				inputPriceMin.innerHTML = value;
			}
		});

	}

	// create image gallery for product page
	function productImageGallery() {
		var galleryObj = [];

		function createImageGallery() {
			var galleryObj = [];
			$('.product-previews-carousel img').each(function () {
				var imagepath = $(this)[0].src;
				if(imagepath && imagepath.length>0){
					imagepath = imagepath.split('/');
					if(imagepath && imagepath[imagepath.length-1]){
						imagepath.splice(imagepath.length-2, 0, "large");
						imagepath = imagepath.join('/')
					}
				}
				var src = $(this)[0].imagepath,
			
					type = 'image'; // it's always an image
				var image = {};
				image["src"] = src;
				image["type"] = type;
				galleryObj.push(image);
			});
			return galleryObj;
		}

		createImageGallery();

		function getActiveIndex() {
			var current = 0;
			if ($('.product-previews-carousel a.active').length) {
				current = $('.product-previews-carousel a.active').index();
			}
			return current;
		}

		if ($('.zoom-link').length) {
			$('.zoom-link').on('click', function (e) {
				var galleryObj =  createImageGallery();
				if ($(this).is('.disable-gallery')) {
					var msrc = $('.main-image img').attr('src');
					$.magnificPopup.open({
						items: {
							src: msrc
						},
						type: 'image'
					});
				} else {
					getActiveIndex();
					$.magnificPopup.open({
						items: galleryObj,
						gallery: {
							enabled: true,
						}
					}, getActiveIndex());
				}
				e.preventDefault();
			});
		}

	}

	// simple gallery
	$.fn.simpleFilters = function () {

		var $gallery = this,
			$galleryitem = $(".gallery-item", $gallery),
			$filter = $(".filters-gallery .filter-label"),
			selectedCategory = "",
			activeStart;

		$filter.each(function () {
			selectedCategory = $(this).attr("data-filter");
			if ($(this).hasClass('active')) {
				$galleryitem.filter(selectedCategory).fadeIn(0).addClass('isvisible');
				activeStart = true;
			} else {
				$galleryitem.fadeIn(0).addClass('isvisible');
			}
		});

		if (!activeStart) $(".filters-gallery li:first-child .filter-label").addClass('active');

		$filter.on('click', function (e) {
			e.preventDefault();
			if ($(this).hasClass('active')) {
				return false;
			} else {
				$filter.removeClass('active');
				$(this).addClass('active')
			}
			selectedCategory = $(this).attr("data-filter");
			if (!selectedCategory) {
				$galleryitem.fadeIn(0).addClass('isvisible');

			} else {
				$galleryitem.filter(':not(' + selectedCategory + ')').fadeOut(0).removeClass('isvisible');
				$galleryitem.filter(selectedCategory).fadeIn(0).addClass('isvisible');
			}
		});
	}

	// back to top button
	function backToTop(button) {
		var $btn = $(button),
			windowH = $window.height();

		if ($btn.parent('.fixed-btns').length) {
			if (!$btn.parent('.fixed-btns').hasClass('demo-mode')) {
				$btn = $btn.parent('.fixed-btns');
			}
		}

		if ($(this).scrollTop() > windowH) {
			$btn.addClass('is-visible')
		}
		$window.scroll(function () {
			($(this).scrollTop() > windowH) ? $btn.addClass('is-visible'): $btn.removeClass('is-visible');
		});
		$btn.on('click', function () {
			$("html, body").animate({
				scrollTop: 0
			}, "slow");
			return false;
		});
	}


	// add to bookmark
	function addToBookmark(link) {
		var $link = $(link);
		var isBookmarked = document.cookie.replace(/(?:(?:^|.*;\s*)seikobookmark\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		if (isBookmarked == 'yes') $link.hide();

		$link.on('click', function (e) {
			var bookmarkURL = window.location.href;
			var bookmarkTitle = document.title;
			if ('addToHomescreen' in window && addToHomescreen.isCompatible) {
				// Mobile browsers
				addToHomescreen({
					autostart: false,
					startDelay: 0
				}).show(true);
			} else if (window.sidebar && window.sidebar.addPanel) {
				// Firefox version < 23
				window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
			} else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
				// Firefox 23+ and Opera version < 15
				$(this).attr({
					href: bookmarkURL,
					title: bookmarkTitle,
					rel: 'sidebar'
				}).off(e);
				return true;
			} else if (window.external && ('AddFavorite' in window.external)) {
				// IE Favorites
				window.external.AddFavorite(bookmarkURL, bookmarkTitle);
			} else {
				// Other browsers (mainly WebKit & Blink - Safari, Chrome, Opera 15+)
				alert('Press ' + (/Mac/i.test(navigator.userAgent) ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
			}
			document.cookie = 'seikobookmark=yes';
			return false;
		});
	}
	
	// quickView
	function quickView(quickviewlink, modal) {
		var quickviewlink = quickviewlink,
			$modal = $(modal),
			$loader = $('.modalLoader-wrapper', $modal),
			$iframe = $('iframe', $modal),
			windowWidth = $window.width();

		$document.on('click.quickView', quickviewlink, function (e) {
			if (windowWidth > 1199 && !$body.hasClass('touch')) {
				var $this = $(e.target),
					src = $this.attr("href") ? $this.attr("href") : $this.closest('a').attr("href");

				$this.closest('.product-item').addClass('hover');

				$iframe.on('load', function () {
					if ($modal.data('bs.modal')) {
						setTimeout(function () {
							$loader.css({
								'display': 'none'
							});
						}, 500);
						$iframe.animate({
							'opacity': '1'
						}, 300);
					}
				});

				$modal.on('shown.bs.modal', function (e) {
					$('.modal-content', $modal).attr({
						'src': src
					});
					$('iframe', $modal).attr({
						'src': src
					});
				}).on('hidden.bs.modal', function (e) {
					var $this = $(this);
					$this.removeData('bs.modal');
					// clear iframe
					$iframe.empty().attr({
						'src': 'about:blank'
					}).css({
						'opacity': '0'
					});
					$loader.css({
						'display': 'block'
					});
					$('.product-item').removeClass('hover');
				})
				$modal.modal('show');
				e.preventDefault();
			}
		})

	}

	// product page form

	function productOptions(option) {
		var $option = $(option),
			$optionlist = $('ul', $option),
			$optionbtn = $('a', $optionlist),
			$optionselect = $('select', $option);
		$optionlist.find("a[data-value='" + $optionselect.val() + "']").parent().addClass('active');
		$optionbtn.on('click', function (e) {
			$this = $(this);
			if ($this.data('image')) {
				var $image = $('.main-image img');
				var imgSrc = $this.data('image');
				var newImg = document.createElement("img");
				newImg.src = imgSrc;
				newImg.onload = function () {
					$image.attr('src', imgSrc);
					$image.attr('src', imgSrc);
					if ($('.main-image > .zoom').length) {
						$('.main-image > .zoom').data('ezPlus').destroy();
						$('.main-image > .zoom').initProductZoom();
						$('.zoom-link').addClass('disable-gallery');
					}
				}
			}

			if (!$this.parent('li').is('.active')) {
				$optionselect.val($this.attr('data-value'));
				$this.closest('ul').find('li').removeClass('active');
				$this.parent('li').addClass('active');
			}
			e.preventDefault();
		});
	}


	// department button	
	function departmentMenu() {
		var $megamenu = $('.megamenu.department'),
			$departmentbtn = $('.nav-department'),
			$departmentdrop = $('.megamenu.department .nav'),
			slidespeed = 300;

		function closeDepartment() {
			$megamenu.removeClass('opened').css({
				'max-height': '0',
				'overflow': ''
			});
			$("#wrapper").removeClass('overlay');
		}

		if ($body.hasClass('touch')) {
			$departmentbtn.on("click.department", function (e) {
				if (!$megamenu.hasClass('opened')) {
					$megamenu.addClass('opened').css({
						'max-height': $departmentdrop.outerHeight() + 'px'
					});
					if ($megamenu.hasClass('blackout')) {
						$("#wrapper").addClass('overlay');
					}
				} else {
					closeDepartment();
				}
			})
			$departmentdrop.on("click.department", function (e) {
				$megamenu.addClass('opened').css({
					'max-height': $departmentdrop.outerHeight() + 'px',
					'overflow': 'visible'
				});
				if (!$("#wrapper").hasClass('overlay') && $megamenu.hasClass('blackout')) {
					$("#wrapper").addClass('overlay')
				}
			})
			$('#wrapper').on('click.department', function (e) {
				if (!$(e.target).hasClass('nav-department')) {
					if ($megamenu.hasClass('opened')) {
						closeDepartment();
					}
				}

			});
			$megamenu.on('click.department', function (e) {
				if ($(e.target).hasClass('department')) {
					if ($megamenu.hasClass('opened')) {
						closeDepartment();
					}
				}
			});
		} else {
			$departmentbtn.on({
				mouseenter: function () {
					$megamenu.addClass('opened').css({
						'max-height': $departmentdrop.outerHeight() + 'px'
					});
					if ($megamenu.hasClass('blackout')) {
						$("#wrapper").addClass('overlay');
					}
				},
				mouseleave: function () {
					$megamenu.removeClass('opened').css({
						'max-height': '0'
					});
					$("#wrapper").removeClass('overlay');
				}
			})
			$departmentdrop.on({
				mouseenter: function () {
					$megamenu.addClass('opened').css({
						'max-height': $departmentdrop.outerHeight() + 'px',
						'overflow': 'visible'
					});
					if (!$("#wrapper").hasClass('overlay') && $megamenu.hasClass('blackout')) {
						$("#wrapper").addClass('overlay')
					}
				},
				mouseleave: function () {
					$megamenu.removeClass('opened').css({
						'max-height': '0',
						'overflow': ''
					});
					$("#wrapper").removeClass('overlay');
				}
			})
		}
	}


	// tabs
	function productTab(tab) {
		var $tabs = $(tab),
			setCurrent = false;
		$tabs.tabCollapse();
		$('a', $tabs).each(function () {
			$this = $(this);
			if ($this.parent('li').is('.active')) {
				var curTab = $this.attr("href");
				$(curTab).addClass('active');
				setCurrent = true;
			}
		})
		if (!setCurrent) $('li:first-child a', $tabs).tab('show');
		$('a', $tabs).on('click', function (e) {
			var $this = $(this);
			if ($this.parent('.panel-title').length) {
				var href = $this.attr('href'),
					posTab = $this.offset().top - $window.scrollTop();
				setTimeout(function () {
					$('html, body').animate({
						scrollTop: $this.offset().top - posTab
					}, 0);
				}, 0);
				e.preventDefault();
			}
		});
	}

	// product next/prev preview on touch
	function prevnextNav(productnav) {
		var $productnav = $(productnav);
		if ($body.hasClass('touch')) {
			$('> a', $productnav).on("click", function (e) {
				var $this = $(this);
				if (!$this.data('firstclick')) {
					$('> a', $productnav).removeData('firstclick', true);
					$this.data('firstclick', true);
					e.preventDefault();
				}
			}).on("mouseleave", function (e) {
				$('> a', $productnav).removeData('firstclick', true);
			})
		}
	}

	// product view mode
	function viewMode(viewmode) {
		var $grid = $('.grid-view', $(viewmode)),
			$list = $('.list-view', $(viewmode)),
			$products = $('.products-listview, .products-grid');
		if ($('.products-listview').length) {
			$list.addClass('active');
		} else if ($('.products-grid').length) {
			$grid.addClass('active');
		} else return false;
		$grid.on("click", function (e) {
			var $this = $(this);
			$products.addClass('no-animate');
			if (!$this.is('.active')) {
				$list.removeClass('active');
				$this.addClass('active');
				$products.removeClass('products-listview').addClass('products-grid');
			}
			setTimeout(function () {
				$products.removeClass('no-animate');
			}, 500);
			e.preventDefault();
		});
		$list.on("click", function (e) {
			var $this = $(this);
			$products.addClass('no-animate');
			if (!$this.is('.active')) {
				$grid.removeClass('active');
				$this.addClass('active');
				$products.removeClass('products-grid').addClass('products-listview');
			}
			setTimeout(function () {
				$products.removeClass('no-animate');
			}, 500);
			e.preventDefault();
		});
	}

	// tooltip ini
	function tooltipIni() {
		var title;
		$('[data-tooltip]').darkTooltip({
			size: 'small',
			animation: 'fade'
		}).on("mouseenter", function () {
			title = $(this).attr('title');
			$(this).attr('title', '');
		}).on("mouseleave", function () {
			$(this).attr('title', title);
		});
	}

	// icrease/decrease input
	function changeInput() {

		$document.on('click', '.decrease', function (e) {
			var input_el = $(e.target).next('input');
			var v = input_el.val() - 1;
			if (input_el.attr('data-min')) {
				if (v >= input_el.attr('data-min')) input_el.val(v)
			} else {
				input_el.val(v)
			}
			e.preventDefault();
		});

		$document.on('click', '.increase', function (e) {
			var input_el = $(e.target).prev('input');
			var v = input_el.val() * 1 + 1;
			if (input_el.attr('data-max')) {
				if (v <= input_el.attr('data-max')) input_el.val(v)
			} else {
				input_el.val(v)
			}
			e.preventDefault();
		});

	}

	// fullheight page set
	function setFullHeight() {

		if ($('.push-footer').length) $('.push-footer').remove();
		if ($(".block.fullheight").length) {
			$(".block.fullheight").css('height', '');
		}

		var $wrapper = $("body"),
			$footer = $('.page-footer'),
			$content = $(".page-main"),
			footerH = $footer.length ? $footer.height() : 0,
			offsetTop = $content.length ? $content.offset().top : 0,
			wHeight = Math.max($wrapper.height() - footerH - offsetTop, $(".block.fullheight").outerHeight());

		if ($(".block.fullheight").length) {
			$wrapper.css({
				'overflow-y': 'scroll'
			});
			$(".block.fullheight").css('height', wHeight + 'px');
		}

		var footerH = $footer.length ? $footer.outerHeight() : 0,
			footerTop = $footer.length ? $footer.offset().top : 0,
			footerPush = $window.height() - footerH - footerTop;
		if (footerPush > 0) {
			$footer.before('<div class="push-footer"></div>');
			$('.push-footer').css({
				'height': footerPush + 'px'
			});
		}
	}

	// fullwidth page set
	function setFullWidth() {

		var wWidth = $("body").width() - $('.sidebar-wrapper').width();

		$('body:not(.fullwidth) .fullwidth, body:not(fullwidth) .fullboxed, body .boxed').each(function () {
			$(this).css({
				'width': '',
				'margin-left': '',
				'margin-right': ''
			});
		});

		if ($body.hasClass('rtl')) {
			$('body:not(.fullwidth) .fullwidth, body:not(.fullwidth) .fullboxed').each(function () {
				$(this).css({
					'width': wWidth + 'px',
					'margin-right': -wWidth / 2 + 'px',
					'margin-left': ''
				});
			});
		} else {
			$('body:not(.fullwidth) .fullwidth, body:not(.fullwidth) .fullboxed').each(function () {
				$(this).css({
					'width': wWidth + 'px',
					'margin-left': -wWidth / 2 + 'px',
					'margin-right': ''
				});
			});
		}

	}

	// resize events
	$.fn.otherResize = function () {
		setFullWidth();
		if ($(".product-lookbook").length) {
			$('.product-lookbook').lookbookSize();
		}
		if ($(".filter-col.fixed").length) {
			$(".filter-col.fixed").fixedSidebar();
		}
		if ($('.mainSlider').length) {
			$('.mainSlider').swiperUpdate();
		}
		if ($('.gallery.isotope').length) {
			$('.gallery').isotope('layout');
		}
		if ($('.products-grid.isotope').length) {
			$('.products-grid.isotope').isotope('layout');
		}
		if ($(".autosize-text").length) {
			$(".autosize-text").each(function () {
				$this = $(this);
        var fontratio = Math.round($this.attr("data-fontratio")*100)/100;
        if(fontratio > 0) { 
          $this.flowtype({
            fontRatio: fontratio
          });
        }
			});
		}
		setTimeout(function () {
			$('.slick-initialized').slick('setPosition');
		}, 100);
		if ($(".main-image").length) {
			$('.main-image .zoomContainer').remove();
		}
		if ($(".product-creative-slider").length) {
			$('.product-slider-wrapper .zoomContainer').remove();
			setTimeout(function () {
				$('.product-creative-slider .inner-zoom').initCreativeZoom();
			}, 100);
		}
	}

	// slide panel
	function slidePanel() {
		var button = ".slidepanel-toggle",
			$wrapper = $("body");
		$wrapper.on('click', button, function (e) {
			if ($('#toolsPanel').length) {
				$("input[name='slidepanelshow']", $('#toolsPanel')).trigger('click');
			} else $wrapper.toggleClass("open-panel");
			setTimeout(function () {
				$('.slick-initialized').slick('setPosition');
			}, 500);
			$body.otherResize();
			e.preventDefault();
		});
	}

	// collapsed footer block
	$.fn.footerCollapse = function () {
		var $collapsed = this;
		$('.title', $collapsed).on('click', function (e) {
			e.preventDefault;
			$(this).closest('.collapsed-mobile').toggleClass('open');
		})
	}
	
	// select marked category
	$.fn.blockSelectedMark = function () {
		var $block = this;

		function markSelected(block) {
			var $this = block;
			if ($this.find('li.active').length) {
				$this.addClass('selected');
			} else {
				$this.removeClass('selected');
			}
		}
		$block.each(function () {
			markSelected($(this));
		})
		$('li > a', $block).unbind('click.blockSelectedMark');
		$('li > a', $block).on('click.blockSelectedMark', function (e) {
			if ($('.filter-col').hasClass('no-ajax-filter')) return;
			var $this = $(this);
			e.preventDefault();
			$this.parent().toggleClass('active');
			markSelected($this.closest('.sidebar-block'));
		})
	}
	
	// hide shop by if no selected filters
	$.fn.hideShopBy = function () {
		var $content = this,
			$filters = $('.selected-filters', $content);
		if (!$filters.length || $filters.html().trim() === "") $content.closest('.sidebar-block-top').hide();
	}
	
	// collapse filters block
	$.fn.blockCollapse = function () {
		var $collapsed = this,
			slidespeed = 250;

		$('.block-content', $collapsed).each(function () {
			if ($(this).parent().is('.open')) {
				$(this).slideDown(0);
			}
		})
		$('.block-title').unbind('click.blockCollapse');
		$('.block-title', $collapsed).on('click.blockCollapse', function (e) {
			e.preventDefault;
			var $this = $(this),
				$thiscontent = $this.next('.block-content');
			if ($this.parent().is('.open')) {
				$this.parent().removeClass('open');
				$thiscontent.slideUp(slidespeed);
			} else {
				$this.parent().addClass('open');
				$thiscontent.slideDown(slidespeed);
			}
		})
	}
	
	// collapse filters block as accordion for fixed sidebar
	$.fn.blockCollapseAccordion = function () {
		var $collapsed = this,
			slidespeed = 250;
		$('.block-content', $collapsed).each(function () {
			if ($(this).parent().is('.open')) {
				$(this).slideDown(0);
			}
		})
		$('.block-title').unbind('click.blockCollapseAccordion');
		$('.block-title', $collapsed).on('click.blockCollapseAccordion', function (e) {
			e.preventDefault;
			var $this = $(this),
				$thiscontent = $this.next('.block-content');
			if ($this.parent().is('.open')) {
				$this.parent().removeClass('open');
				$thiscontent.slideUp(slidespeed);
			} else {
				$this.closest('.filter-col-content').find('.sidebar-block.collapsed').removeClass('open');
				$this.closest('.filter-col-content').find('.sidebar-block.collapsed .block-content').slideUp(slidespeed);
				$this.parent().addClass('open');
				$thiscontent.slideDown(slidespeed);
			}
			setTimeout(function () {
				$(".filter-col.fixed").fixedSidebar();
			}, slidespeed);
		})
	}
	
	// fixed sidebar
	$.fn.fixedSidebar = function () {
		var $sidebar = this,
			$container = $('.filter-container'),
			$sidebarscroll = $('.fixed-scroll', $sidebar);
		// fixed markers
		var $ymin = $sidebar,
			$ymax = $('.ymax'),
			$fstart = $('.fstart'),
			$fend = $('.fend'),
			delta = 10;

		function checkFixed() {
			var scrollY = $window.scrollTop();
			if (!$sidebar.is('.is-fixed')) {
				if (scrollY > $ymin.offset().top) {
					if ($fend.offset().top < $ymax.offset().top - delta) {
						$sidebar.addClass('is-fixed');
						if ($fend.offset().top > $ymax.offset().top) {
							$sidebar.addClass('is-fixed-bottom');
						}
					}
				}
			} else {
				if (scrollY > $ymin.offset().top) {
					if ($fend.offset().top > $ymax.offset().top) {
						$sidebar.addClass('is-fixed-bottom');
					} else {
						if (scrollY < $fstart.offset().top) {
							$sidebar.removeClass('is-fixed-bottom');
						}
					}
				} else $sidebar.removeClass('is-fixed is-fixed-bottom');
			}

			if ($container.data('hidden')) {
				$container.animate({
					'opacity': '1'
				}, 1000).removeData('hidden');
			}
		}

		function iniFixedSidebar() {
			if ($window.scrollTop() > $ymin.offset().top && !$body.data('checkstart')) {
				$container.data('hidden', true).css({
					'opacity': '0'
				});
				$body.data('checkstart', true);
			} else $body.data('checkstart', true);
			$window.unbind('scroll.fixedsidebar');
			$sidebar.removeClass('is-fixed is-fixed-bottom');
			$container.css({
				'left': '',
				'width': ''
			});
			var windowWidth = $window.width(),
				windowHeight = $window.height();
			if (windowWidth > 991) {
				$sidebarscroll.css({
					'max-height': windowHeight + 'px'
				});
				$container.css({
					'left': $container.offset().left + 'px',
					'width': $container.width() + 'px'
				});
				if (($ymax.offset().top - $fend.offset().top) > 50) {
					$window.on('scroll.fixedsidebar', function (e) {
						checkFixed();
					})
				}
				checkFixed();
			}
		}
		if (!$body.hasClass('touch')) {
			iniFixedSidebar();
			$window.scroll();
			$window.on('resize.fixedsidebar', function () {
				setTimeout(function () {
					iniFixedSidebar();
				}, 2000);
			});
			// hide tooltips on scroll
			$sidebarscroll.on('scroll', function () {
				$('.dark-tooltip').hide();
			})
			$window.on('scroll', function () {
				$('.dark-tooltip').hide();
			})
		}
	}

	// check if filters are in the page
	$.fn.isFilters = function () {
		var $filtercol = this,
			$filtercontent = $('.filter-col-content', this),
			$centercol = $filtercol.next('.aside');
		if (!$filtercol.is(":visible")) $filtercol.show();
		$centercol.css({
			'width': '',
			'float': ''
		});
		if (!$filtercontent.find('.sidebar-block').length) {
			$filtercol.hide();
			$centercol.css({
				'width': '100%',
				'float': 'none'
			});
		}
	}
	
	// mobile slide filters
	$.fn.mobileFilter = function () {
		var $mobilefilter = this,
			$toggleFilter = '.filter-col-toggle';

		$document.on('click', $toggleFilter, function (e) {
			$mobilefilter.toggleClass('active');
			$body.toggleClass('fixed');
			e.preventDefault();
		})

		$document.on('click', '.filter-col', function (e) {
			if ($(e.target).hasClass('active')) {
				$mobilefilter.removeClass('active');
				$body.removeClass('fixed');
				e.preventDefault();
			}
		})
	}

	// mobile menu
	$.fn.mobileMenu = function () {

		var $mobilemenu = $(this),
			$toggleMenu = $('.mobilemenu-toggle'),
			$mobileCaret = $('ul.nav li .arrow', $mobilemenu),
			$mobileLink = $('ul.nav li > a', $mobilemenu);

		$toggleMenu.on('click.mobileMenu', function () {
			$mobilemenu.toggleClass('active');
			$body.toggleClass('fixed');
			return false;
		});
		$mobilemenu.on('click.mobileMenu', function (e) {
			if ($(e.target).is($mobilemenu)) {
				$mobilemenu.toggleClass('active');
				$body.toggleClass('fixed');
				e.preventDefault();
			}
		});

		function mobileEvent() {
			$mobileCaret.on('click.mobileMenu', function (e) {
				e.preventDefault();
				var $parent = $(this).parent();
				if ($parent.hasClass('submenu-open')) {
					$('li.submenu-open ul', $parent).slideUp(200);
					$('li', $parent).removeClass('submenu-open');
					$parent.removeClass('submenu-open');
					$('> ul', $parent).slideUp(200);
					$parent.removeData('firstclick');
				} else {
					$parent.addClass('submenu-open');
					$(' > ul', $parent).slideDown(200);
					$parent.data('firstclick', true);
				}
			});
			if ($mobilemenu.hasClass('dblclick')) {
				$mobileLink.on('click.mobileMenu', function (e) {
					e.preventDefault();
					var $parent = $(this).parent();
					if (!$parent.data('firstclick') && $parent.find('ul').length) {
						$parent.addClass('submenu-open');
						$(' > ul', $parent).slideDown(200);
						$parent.data('firstclick', true);
					} else {
						var href = $(this).attr("href"),
							target = $(this).attr("target") ? $(this).attr("target") : '_self';
						window.open(href, target);
						$parent.removeData('firstclick');
					}
				});
			}
		}

		var windowWidth = $window.width();

		if (windowWidth < 992) {
			mobileEvent();
		}

		var prevWindow = windowWidth;

		$window.on('resize', function () {  
			var currentWindow = window.innerWidth || $window.width();
			if (currentWindow != prevWindow) {   


			setTimeout(function () {
            $mobileLink.unbind('click.mobileMenu');
            $mobileCaret.unbind('click.mobileMenu');
        		if (currentWindow > 991) {
						$body.removeClass('fixed');
						$mobilemenu.removeClass('active');
					} else mobileEvent();
				}, 500);
				prevWindow = currentWindow;
			}
		});
	}

	// minicart	- variant-1
	$.fn.mobileMinicart = function () {

		var $mobilecart = $(this),
			$toggleCart = $('> a', $mobilecart),
			$closeCart = $('.block-title', $mobilecart),
			$dropdown = $('.dropdown-container', $mobilecart);

		function eventsIni() {
			var windowWidth = $window.width();

			if (windowWidth < 992) {
				if (!$mobilecart.data('mobile')) {
					$toggleCart.on('click.mobileMinicart', function (e) {
						$mobilecart.toggleClass('active');
						$body.toggleClass('fixed');
						return false;
					});
					$closeCart.on('click.mobileMinicart', function (e) {
						$mobilecart.removeClass('active');
						$body.removeClass('fixed');
						return false;
					});
					$mobilecart.on('click.mobileMinicart', function (e) {
						if ($(e.target).is($dropdown)) {
							$mobilecart.removeClass('active');
							$body.removeClass('fixed');
							e.preventDefault();
						}
					});
					$mobilecart.data('mobile', true);
				}
			} else {
				$toggleCart.unbind('click.mobileMinicart');
				$closeCart.unbind('click.mobileMinicart');
				$mobilecart.unbind('click.mobileMinicart').removeClass('active');
				$body.removeClass('fixed');
				$mobilecart.removeData('mobile');
			}
		}
		eventsIni();

		$window.on('resize', function () {
			setTimeout(function () {
				eventsIni();
			}, 500);
		});
	}

	// minicart - variant-2
	$.fn.mobileMinicartAlt = function () {  
		var $mobilecart = this,
			$mobilecartscroll = $('.block-minicart', $mobilecart),
			$toggleCart = $('> a', $mobilecart),
			$closeCart = $('.btn-minicart-close', $mobilecart),
			$dropdown = $('.dropdown-container', $mobilecart),
			wHeight = $window.height(),
			$menu = $('.megamenu'),
			$header = $('.page-header');

		var windowWidth = $window.width();

		// Minicart Max Height
		function setMaxHeight(wHeight) {
			var cartH;
			var windowWidth = $window.width();
			if (windowWidth < 992) {
				$dropdown.scrollTop(0);
				if ($header.hasClass('variant-3')) cartH = $window.height() - $header.height();
				else if (!$header.hasClass('is-sticky')) cartH = $window.height() - $toggleCart.offset().top - $toggleCart.height();
				else cartH = $window.height() - $header.height();
			} else {
				cartH = Math.min($window.height() - $header.height(), $mobilecartscroll[0].scrollHeight);
			}
			$dropdown.css({
				'max-height': cartH + 'px'
			});
			$mobilecartscroll.css({
				'max-height': cartH + 'px'
			});
		}

		function eventsIni(wHeight) {  
			if (windowWidth < 992) {
				if (!$mobilecart.data('mobile')) {
				$mobilecartscroll.scrollLock('disable');
				$mobilecart.unbind('.mobileMinicart');
        $toggleCart.unbind('.mobileMinicart');

				$toggleCart.on('click.mobileMinicart', function (e) {
					if ($mobilecart.hasClass('active')) {
						$dropdown.css({
							'max-height': '0'
						});
						$mobilecartscroll.css({
							'max-height': '0'
						});
						$mobilecart.removeClass('active');
						$header.data('cartopen', false);
						return false;
					} else {
						setMaxHeight($window.height());
						$mobilecart.addClass('active');
						$header.data('cartopen', true);
						return false;
					}
				});
				$closeCart.on('click.mobileMinicart', function (e) {
					$dropdown.css({
						'max-height': '0'
					});
					$mobilecartscroll.css({
						'max-height': '0'
					});
					$mobilecart.removeClass('active');
					$header.data('cartopen', false);
					return false;
				});
        $mobilecart.data('mobile', true)
        }
			} else {
				$mobilecartscroll.scrollLock();
				$toggleCart.unbind('click.mobileMinicart');
				$closeCart.unbind('click.mobileMinicart');
				$mobilecart.unbind('click.mobileMinicart');
				$mobilecart.on("mouseenter.mobileMinicart", function () {
					$mobilecartscroll.scrollTop(0);
					$mobilecart.data('open', true);
					setMaxHeight($window.height());
					$header.data('cartopen', true);
				}).on("mouseleave.mobileMinicart", function () {
					$dropdown.css({
						'max-height': ''
					});
					$mobilecartscroll.css({
						'max-height': '0'
					});
					$header.data('cartopen', false);
				});
        $mobilecart.removeData('mobile');
			}
		}

		eventsIni();

		$window.on('resize', function () {
			$mobilecart.removeData('setHeight');
			eventsIni();
		});
	}

	$.fn.expandingSearch = function () {
		var $searchBox = this,
			$submitIcon = $('.exp-icon-search', $searchBox),
			$submitInput = $('.exp-search-input', $searchBox),
			$closeIcon = $('.exp-search-close', $searchBox),
			$navbar = $('.navbar'),
			$menu = $('.megamenu', $navbar),
			isOpen = false,
			$header = $('.page-header'),
			$menu = $('.megamenu', $header);


		$submitIcon.on('click', function (e) {
			if ($menu.css('display') == 'none' || $header.hasClass('variant-7') || $header.hasClass('variant-8')) {
				$(this).closest('form').submit();
			} else {
				if (isOpen == false) {
					$searchBox.addClass('exp-search-open');
					if (!($menu.css('display') == 'none')) {
						var inputW = $searchBox.offset().left - $menu.offset().left + 40
							// for desktop open input until menu start
						if ($body.hasClass('rtl')) {
							inputW = ($menu.offset().left + $menu.width()) - $searchBox.offset().left;
						}
						$searchBox.css({
							'width': inputW + 'px'
						})
					}
					$submitInput.focus();
					$menu.addClass('unvisible');
					isOpen = true;
				} else {
					$(this).closest('form').submit();
				}
			}
		});

		$closeIcon.on('click', function (e) {
			$submitInput.val('');
			$searchBox.removeClass('exp-search-open').css({
				'width': ''
			});
			$menu.removeClass('unvisible');
			isOpen = false;
		});
	}

	// product sharing animation
	function productSharing() {
		var link = 'a.sharing',
			leave = '.product-item-inside, .product-item-inside .social-list';
		$document.on('click', link, function (e) {
			var $el = $(this);
			$el.closest('.product-item').addClass('sharing');
			e.preventDefault();
		})
		$document.on('mouseleave', leave, function (e) {
			var $el = $(this);
			$el.closest('.product-item').removeClass('sharing');
		})
	}
	
	// colorswatch
	function colorSwatch(link) {
		var link = link + ' a';
		$document.on('click', link, function (e) {
			var $el = $(this);
			if ($el.data('image')) {
				var $image = $el.closest('.product-item-inside').find('img.product-image-photo');
				// if inner carousel in product
				if ($el.closest('.product-item-inside').find('.carousel-inside').length) {
					$el.closest('.product-item-inside').find('.carousel-inside').carousel(0);
					$image = $el.closest('.product-item-inside').find('.product-item-photo .item:first-child img');
				}
				var imgSrc = $el.data('image');
				$el.closest('ul.color-swatch').find('li').removeClass('active');
				$el.parent('li').addClass('active');
				var newImg = document.createElement("img");
				newImg.src = $el.data('image');
				newImg.onload = function () {
					$image.attr('src', $el.data('image'))
				}
			}
			e.preventDefault();
		})
	}

	// product stack
	$.fn.ProductStack = function (productstack) {
		var $productstack = this,
			$toggleStack = $(".toggleStack", $productstack),
			$editbtn = $(".action.edit", $productstack),
			$product = $(".products-list li", $productstack);


		$toggleStack.on('click', function (e) {
			$('.productStack').toggleClass('open');
			e.preventDefault();
		})

		$product.on('mouseleave', function (e) {
			var $this = $(this);
			setTimeout(function () {
				$this.find('.actions').removeClass('open');
			}, 200);
		});

		$productstack.on('click', 'a.action.edit', function (e) {
			$('.actions', $(this).closest('li')).toggleClass('open');
			e.preventDefault();
		});

		$window.on('scroll.ProductStack', function () {
			if ($productstack.hasClass('open') && $productstack.hasClass('hide_on_scroll')) {
				$productstack.removeClass('open');
			}
		})
	}

	// fly to cart
	$.fn.FlyToCart = function (options) {

		var options = $.extend($.fn.FlyToCart.defaults, options);
		var $productstack = $(options.productstack);

		$document.on('click.FlyToCart', options.link, function (e) {

			var $el = $(this),
				$flyImg;

			disableScroll();

			var $cart = $('.toggleStack .icon', $productstack),
				cartY = $cart.offset().top + 60,
				cartX = $cart.offset().left + 20;

			if ($productstack.hasClass('disable')) {
				$productstack.removeClass('disable');
				cartY = cartY - 50;
			}
			if (!$productstack.hasClass('open')) {
				$productstack.addClass('open');
				cartY = cartY - $productstack.height();
			} else cartY = cartY - 50;

			if ($el.closest('.product-item-inside').find('.carousel-inside').length) {
				$flyImg = $el.closest('.product-item-inside').find('.product-item-photo .item.active img.product-image-photo');
			} else $flyImg = $el.closest('.product-item-inside').find('img.product-image-photo');

			if ($flyImg) {
				var $cloneImg = $flyImg.clone()
					.offset({
						top: $flyImg.offset().top,
						left: $flyImg.offset().left
					})
					.css({
						'opacity': '0.9',
						'position': 'absolute',
						'width': $flyImg.width(),
						'z-index': '10000'
					})
					.appendTo($body)
					.delay(300)
					.animate({
						'top': cartY,
						'left': cartX,
						'width': 100
					}, 800);

				setTimeout(function () {
					$cart.addClass('bounceIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
						$cart.removeClass('bounceIn animated');
						$cloneImg.detach();
					});
				}, 1500);

				$cloneImg.animate({
						'width': 0,
						'height': 0
					},
					300,
					function () {
						$.isFunction(options.complete) && options.complete.call($el);
						enableScroll()
					}
				);
			}
			e.preventDefault()
		});
	}
	$.fn.FlyToCart.defaults = {
		complete: null,
		link: null,
		productstack: null
	};

	// sticky header - hide when scroll down
	$.fn.stickyHeaderSmart = function () {

		var $header = this,
			$body = $('body'),
			$menu = $('.megamenu', $header),
			isScroll = false,
			lastScrollTop = 0,
			delta = 10,
			headerOffset,
			stickyH;

		function setHeigth() {
			$(".fix-space").remove();
			$header.removeClass('animated is-sticky st-visible slideInDown slideOutUp');
			$body.removeClass('hdr-sticky');
			headerOffset = $('.navbar', $header).offset().top;
			stickyH = $header.height() + headerOffset;
			if ($menu.css('display') == 'none' || $header.hasClass('variant-4') || $header.hasClass('variant-5') || $header.hasClass('variant-6') || $header.hasClass('variant-7') || $header.hasClass('variant-8') || $header.hasClass('variant-9')) {
				headerOffset = stickyH + 52;
			}
		}

		setHeigth();


		$window.on('scroll', function () {
			if (!isScroll) {
				isScroll = true;
				setTimeout(function () {
					hasScrolled();
					isScroll = false;
				}, 50)
			}
		});

		var prevWindow = window.innerWidth || $window.width()

		$window.on('resize', function () {
			var currentWindow = window.innerWidth || $window.width();
			if (currentWindow != prevWindow) {
				setHeigth()
				prevWindow = currentWindow;
			}
		});

		function hasScrolled() {
			if ($header.data('cartopen')) return;
			if ($header.hasClass('sticky')) {
				var st = getCurrentScroll();
				if (Math.abs(lastScrollTop - st) <= delta) return;

				if (st > lastScrollTop) {
					if (st > stickyH) {
						// Scroll Down
						if ($header.hasClass('st-visible')) {
							$header.removeClass('st-visible slideInDown').addClass('st-hidden animated slideOutUp');
							$("li.mega-dropdown,li.simple-dropdown", $header).removeClass('hovered');
							$("#wrapper").removeClass('overlay');
						} else {
							$header.addClass('is-sticky st-hidden');
							if (!$(".fix-space").length) {
								$header.after('<div class="fix-space">.</div>');
								$(".fix-space").css({
									'height': stickyH + 'px'
								});
								$("li.mega-dropdown,li.simple-dropdown", $header).removeClass('hovered');
								$("#wrapper").removeClass('overlay');
							}
						}
					}
					$body.removeClass('hdr-sticky');
				} else if (st < lastScrollTop) {
					if (st <= headerOffset) {
						// Scroll Up Start
						if ($header.hasClass('is-sticky')) {
							$(".fix-space").remove();
							$header.removeClass('animated is-sticky st-visible slideInDown slideOutUp');
							$body.removeClass('hdr-sticky');
						}
					} else {
						// Scroll Up
						$header.addClass('is-sticky');
						if (!$(".fix-space").length) {
							$header.after('<div class="fix-space">.</div>');
							$(".fix-space").css({
								'height': stickyH + 'px'
							});
							$("li.mega-dropdown,li.simple-dropdown", $header).removeClass('hovered');
							$("#wrapper").removeClass('overlay');
						}
						$header.removeClass('st-hidden slideOutUp').addClass('st-visible animated slideInDown');
						$body.addClass('hdr-sticky');
					}
				}
				lastScrollTop = st;
			}
		}

		function getCurrentScroll() {
			return window.pageYOffset || document.documentElement.scrollTop;
		}
	}

	// sticky header - always fixed
	$.fn.stickyHeader = function () {

		var $header = this,
			$body = $('body'),
			$menu = $('.megamenu', $header),
			headerOffset,
			stickyH;

		function setHeigth() {
			$(".fix-space").remove();
			$header.removeClass('animated is-sticky slideInDown');
			$body.removeClass('hdr-sticky');
			headerOffset = $('.navbar', $header).offset().top;
			stickyH = $header.height() + headerOffset;
			if ($menu.css('display') == 'none' || $header.hasClass('variant-4') || $header.hasClass('variant-5') || $header.hasClass('variant-6') || $header.hasClass('variant-7') || $header.hasClass('variant-8') || $header.hasClass('variant-9')) {
				headerOffset = stickyH + 52;
			}
		}

		setHeigth();

		var prevWindow = window.innerWidth || $window.width()

		$window.on('resize', function () {
			var currentWindow = window.innerWidth || $window.width();
			if (currentWindow != prevWindow) {
				setHeigth()
				prevWindow = currentWindow;
			}
		});

		$window.scroll(function () {
			if ($header.data('cartopen')) return;
			var st = getCurrentScroll();
			if (st > headerOffset) {
				if (!$(".fix-space").length) {
					$header.after('<div class="fix-space"></div>');
					$(".fix-space").css({
						'height': $header.height() + 'px'
					});
				}
				$header.addClass('is-sticky animated slideInDown');
				$body.addClass('hdr-sticky');
			} else {
				$(".fix-space").remove();
				$header.removeClass('animated is-sticky slideInDown');
				$body.removeClass('hdr-sticky');
			}
		});

		function getCurrentScroll() {
			return window.pageYOffset || document.documentElement.scrollTop;
		}
	}

	// truncated list megamenu
	function showHideLists(list) {
		var thisBtnsList = list; 
    var num = thisBtnsList.children().length;
    var numVis = thisBtnsList.closest('.truncateList').data('listItems');
    if (num > numVis) {
  		var showBtn = thisBtnsList.prev().find('.view-all');
      var bShowEm = showBtn.data('bShowEm') || false;
      showItems(thisBtnsList, bShowEm, numVis);
      bShowEm ^= true;
      showBtn.data('bShowEm', bShowEm);
      if (bShowEm) {
        showBtn.removeClass('disabled');
      } else {
        showBtn.addClass('disabled');

      }    
    } else {
      thisBtnsList.closest('.truncateList').find('.view-all').hide()
    }
	}

	function showItems(list, bShowAll, numVisible) {
		if (bShowAll) {
			list.find("> li:gt(" + (numVisible - 1) + ")").fadeIn(300);
		} else {
			list.find("> li:lt(" + numVisible + ")").show();
			list.find("> li:gt(" + (numVisible - 1) + ")").fadeOut(300);
		}

	}
	if ($('.truncateList').length) {
		$('.truncateList').each(function () {
			showHideLists($(this).find('ul.category-links'));
		})
		$('.truncateList .view-all').on('click', function (e) {
			showHideLists($(this).parent().next('ul.category-links'));
			e.preventDefault();
		})
	}
	// END truncated list megamenu

	// lookbook
	$.fn.lookbookSize = function () {
		this.each(function () {
			var $this = $(this),
				$photo = $this.find('.product-item-photo'),
				$photohover = $photo.find('a'),
				$info = $this.find('.product-item-info');
			$photo.css({
				'height': ''
			});
			$info.css({
				'height': ''
			});
			$this.removeData('setSize');
			$photohover.on('mouseenter', function (e) {
				var $this = $(this).closest('.product-lookbook').addClass('hovered');
				if (!$this.data('setSize')) {
					var $photo = $this.find('.product-item-photo'),
						$info = $this.find('.product-item-info');
					var maxH = Math.max($photo.outerHeight(), $info.outerHeight());
					$photo.css({
						'height': maxH + 'px'
					});
					$info.css({
						'height': maxH + 'px'
					});
					$this.data('setSize', true);
				}
			})
			$this.on('mouseleave', function (e) {
				$(this).removeClass('hovered');
			})
		})
		$('.lookbook-open', this).on('click', function (e) {
			var modalcontent = $(this).closest('.product-lookbook'),
				$modal = $('#modalLookbook'),
				$modalcontainer = $('.modal-body', $modal);
			$('.product-lookbook', $modal).remove();
			modalcontent.clone().appendTo($modalcontainer);
			$modal.modal('show');
		});
	}

	// banner hover color change
	$('.banner')
		.on('mouseenter', function () {
			$('[data-hcolor]:not(.banner-btn)', $(this)).each(function () {
				var color = $(this).attr("data-hcolor");
				$(this).find('span.text').css({
					'color': color
				});
			})
		})
		.on('mouseleave', function () {
			$('[data-hcolor]:not(.banner-btn)', $(this)).each(function () {
				$(this).find('span.text').css({
					'color': ''
				});
			})
		})

	// banner hover color change
	$('.banner-btn[data-hcolor]')
		.on('mouseenter', function () {
			var color = $(this).attr("data-hcolor");
			$(this).find('span.text').css({
				'color': color
			});
		})
		.on('mouseleave', function () {
			$(this).find('span.text').css({
				'color': ''
			});
		})

	// Modal Show
	if ($('#modal1').length) {
		var modal = $('#modal1');
		var pause = 0;
		if (modal.attr('data-pause') > 0) {
			pause = modal.attr('data-pause')
		}
		setTimeout(function () {
			modal.modal('show');
		}, pause);
	}

	// modal interval
	if ($('.modal-countdown').length) {
		var counter;
		$('.modal-countdown').on('hidden.bs.modal', function () {
			var $modal = $(this);
			if ($modal.attr('data-interval') > 0) {
				$('.count', $modal).html('').fadeOut();
				clearInterval(counter);
			}
		});
		$('.modal-countdown').on('shown.bs.modal', function () {
			var interval = 0,
				$modal = $(this);
			if ($modal.attr('data-interval') > 0) {
				interval = $modal.attr('data-interval')
			}
			var count = interval / 1000;
			if (count > 0) {
				$('.modal-countdown', $modal).show();
				$('.count', $modal).html(count).fadeIn();
				counter = setInterval(
					function modalCount() {
						if (count > 0) {
							count -= 1;
							$('.count', $modal).html(count);
						} else {
							$modal.modal('hide').removeData('bs.modal');
							clearInterval(counter)
						}
					}, 1000);
			}
		});
	}


	// timeout for resize event
	function debouncer(func, timeout) {
		var timeoutID, timeout = timeout || 500;
		return function () {
			var scope = this,
				args = arguments;
			clearTimeout(timeoutID);
			timeoutID = setTimeout(function () {
				func.apply(scope, Array.prototype.slice.call(args));
			}, timeout);
		}
	}

	//Carousel Inside
	$.fn.insideCarousel = function () {
		var $carousel = this,
			next = '.carousel-control.next',
			prev = '.carousel-control.prev';

		$carousel.carousel({
			interval: false
		})
		$document.on('click', next, function () {
			$(this).parent().carousel('next');
		});
		$document.on('click', prev, function () {
			$(this).parent('.carousel-inside').carousel('prev');
		});
	}

	// ini carousel via data params
	if($(".data-carousel").length) {
    $(".data-carousel").slick();   
  }

	// featured carousel
	if ($(".featured-products.products-carousel").length) {
		var $this = $(".featured-products.products-carousel"),
			arrowsplace = $this.prev('.title');
		$this.slick({
			rows: 1,
			appendArrows: arrowsplace,
			slidesToShow: 4,
			slidesToScroll: 4,
			speed: 500,
			infinite: false,
			swipe: false,
			responsive: [{
				breakpoint: 1401,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
            }, {
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
            }, {
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
            }, {
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
            }, {
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
            }]
		});
	}

	// sale carousel
	if ($(".sale-products.products-carousel").length) {
		var $this = $(".sale-products.products-carousel"),
			arrowsplace = $this.prev('.title');
		$this.slick({
			rows: 2,
			slidesPerRow: 1,
			appendArrows: arrowsplace,
			slidesToShow: 3,
			slidesToScroll: 3,
			speed: 500,
			infinite: false,
			responsive: [{
				breakpoint: 1401,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
            }, {
				breakpoint: 1201,
				settings: {
					rows: 1,
					slidesPerRow: 1,
					slidesToShow: 2,
					slidesToScroll: 2
				}
            }, {
				breakpoint: 993,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
            }, {
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
            }, {
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
            }]
		});
	}

	

	// deal carousel
	if ($(".deal-carousel").length) {
		var $this = $(".deal-carousel"),
			arrowsplace = $this;

		var $carouseltitle = $this.prev('.title');

		if ($this.parent().hasClass('collapsed-content')) {
			$carouseltitle = $this.parent().prev('.title');
		}
		if ($carouseltitle.find('.carousel-arrows').length) {
			arrowsplace = $carouseltitle.find('.carousel-arrows');
		}
		$this.slick({
			rows: 1,
			appendArrows: arrowsplace,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 500,
			infinite: false,
			swipe: false,
			responsive: [{
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
            }, {
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
            }]
		});
	}
	
	// testimonials single carousel
	if ($(".testimonial-single-slider").length) {
		var $this = $(".testimonial-single-slider");
		$this.slick({
			rows: 1,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 500,
			infinite: false
		});
	}

	// testimonials carousel
	if ($(".testimonials-carousel").length) {
		var $this = $(".testimonials-carousel"),
			arrowsplace = $this;

		var $carouseltitle = $this.prev('.title');

		if ($this.parent().hasClass('collapsed-content')) {
			$carouseltitle = $this.parent().prev('.title');
		}
		if ($carouseltitle.find('.carousel-arrows').length) {
			arrowsplace = $carouseltitle.find('.carousel-arrows');
		}
		$this.slick({
			rows: 2,
			appendArrows: arrowsplace,
			slidesToShow: 2,
			slidesToScroll: 2,
			speed: 500,
			infinite: false,
			responsive: [{
				breakpoint: 1700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
            }, {
				breakpoint: 1201,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
            }, {
				breakpoint: 993,
				settings: {
					rows: 2,
					slidesToShow: 2,
					slidesToScroll: 1
				}
            }, {
				breakpoint: 769,
				settings: {
					rows: 2,
					slidesToShow: 2,
					slidesToScroll: 1
				}
            }, {
				breakpoint: 481,
				settings: {
					rows: 2,
					slidesToShow: 1,
					slidesToScroll: 1
				}
            }]
		});
	}

	// product vertical carousel
	if ($(".product-vertical-carousel").length) {

		var $this = $(".product-vertical-carousel");
		arrowsplace = $this;

		var $carouseltitle = $this.prev('.title');

		if ($this.parent().hasClass('collapsed-content')) {
			$carouseltitle = $this.parent().prev('.title');
		}
		if ($carouseltitle.find('.carousel-arrows').length) {
			arrowsplace = $carouseltitle.find('.carousel-arrows');
		}
		if ($this.closest('.col-sm-12').length) {
			$this.slick({
				arrows: true,
				appendArrows: arrowsplace,
				vertical: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				speed: 500,
				responsive: [{
					breakpoint: 993,
					settings: {
						vertical: false,
						slidesToShow: 2,
						slidesToScroll: 1
					}
                }, {
					breakpoint: 668,
					settings: {
						vertical: false,
						slidesToShow: 1,
						slidesToScroll: 1
					}
                }]
			})
		} else {
			$this.slick({
				arrows: true,
				appendArrows: arrowsplace,
				vertical: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				speed: 500
			})
		}
	}

	// category carousel
	if ($(".category-slider").length) {
		var $this = $(".category-slider"),
			arrowsplace = $this;

		var $carouseltitle = $this.prev('.title');

		if ($this.parent().hasClass('collapsed-content')) {
			$carouseltitle = $this.parent().prev('.title');
		}
		if ($carouseltitle.find('.carousel-arrows').length) {
			arrowsplace = $carouseltitle.find('.carousel-arrows');
		}
		$this.slick({
			rows: 1,
			appendArrows: arrowsplace,
			slidesToShow: 4,
			slidesToScroll: 4,
			speed: 500,
			infinite: false,
			responsive: [{
				breakpoint: 1401,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
            }, {
				breakpoint: 1201,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
            }, {
				breakpoint: 993,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
            }, {
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
            }, {
				breakpoint: 481,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
            }]
		});
	}

	// product-creative carousel
	$.fn.initCreativeZoom = function () {
		var $this = this;
		$this.ezPlus({
			zoomType: 'inner',
			cursor: 'crosshair',
			zIndex: 2,
			zoomContainerAppendTo: '.product-slider-wrapper',
			borderSize: 0,
			zoomWindowFadeIn: 500,
			zoomWindowFadeOut: 0
		})
	}

	if ($(".product-creative-slider").length) {

		var $this = $(".product-creative-slider"),
			arrowsplace = $this;

		$this.on('init', function (event, slick) {
			$('.product-creative-slider .inner-zoom').initCreativeZoom();
		});

		$body.on('click', '.product-creative-slider-control button', function (e) {
			if (!$(e.target).hasClass('.slick-disabled')) {
				$('.product-slider-wrapper .zoomContainer').remove();
				setTimeout(function () {
					$('.product-creative-slider .inner-zoom').initCreativeZoom();
				}, 500);
			}
		});

		if ($this.parent().find('.product-creative-slider-control').length) {
			arrowsplace = $this.parent().find('.product-creative-slider-control');
		}

		$this.slick({
			rows: 1,
			appendArrows: arrowsplace,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 500,
			infinite: false, //not change if ez-plus is used
			swipe: false,
			responsive: [{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
            }]
		});
	}

	// product single carousel

	$.fn.initProductZoom = function () {
		var $this = this,
			zoompos = $body.is('.rtl') ? 11 : 1;
		if (!$body.is('.touch')) {
			$this.ezPlus({
				zIndex: 1002,
				zoomWindowPosition: zoompos,
				zoomContainerAppendTo: '.page-main',
				gallery: 'previewsGallery',
				galleryActiveClass: 'active'
			});
		} else {
			$this.ezPlus({
				zoomType: 'lens',
				zIndex: 1002,
				zoomContainerAppendTo: '.main-image',
				gallery: 'previewsGallery',
				galleryActiveClass: 'active'
			});
		}
	}

	if ($(".main-image").length) {
		$('.main-image > .zoom').initProductZoom();
	}

	$('.productdetailsthumbimage').on('click', function (e) {
		$('.main-image > .zoom').data('ezPlus').destroy();
		if (e.target) {
			$('.main-image > .zoom').initProductZoom();
		}
	});


	// brand carousel
	if ($(".brand-carousel").length) {
		var $this = $(".brand-carousel"),
			arrowsplace = $this.prev('.title');
		$this.slick({
			rows: 2,
			appendArrows: arrowsplace,
			slidesToShow: 4,
			slidesToScroll: 2,
			speed: 500,
			infinite: false,
			responsive: [{
				breakpoint: 1401,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2
				}
            }, {
				breakpoint: 1201,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2
				}
            }, {
				breakpoint: 993,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2
				}
            }, {
				breakpoint: 769,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2
				}
            }, {
				breakpoint: 481,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
            }]
		});
	}


	
  
  
	// Tools Panel

	if ($("#toolsPanel").length) {
		$("#toolsPanel").toolsPanel();
	}



	

	// flowtype - make banner text responsive

	$.fn.flowtype = function (options) {

		var settings = $.extend({
				maximum: 9999,
				minimum: 1,
				maxFont: 9999,
				minFont: 1,
				fontRatio: 10
			}, options),

			changes = function (el) {
				var $el = $(el),
					elw = $el.width(),
					width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
					fontBase = width / settings.fontRatio,
					fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
				$el.css('font-size', fontSize + 'px');
			};

		return this.each(function () {
			var that = this;
			var timer;
			var cachedWidth = $window.width();
			$window.resize(function () {
				var newWidth = $window.width();
				if (newWidth !== cachedWidth) {
					$('.banner-caption', that).addClass('calc');
					clearTimeout(timer);
					timer = setTimeout(doneResizing, 500);
					cachedWidth = newWidth;
				}
			});
			changes(this);

			function doneResizing() {
				changes(that);
				$('.banner-caption', that).removeClass('calc');
			}
		});
	};

	// Journal Slide - Layout 3

	$.fn.journalSlide = function () {

		var $journal = $(this),
			$panelLeft = $('.journal-category-left', $journal),
			$panelRight = $('.journal-category-right', $journal),
			$panelLeftTitul = $('.journal-category-left .journal-category-inner', $journal),
			$panelRightTitul = $('.journal-category-right .journal-category-inner', $journal),
			$logoCenter = $('.logo-center', $journal),
			$productstack = $('.productStack');

		function hideStack() {
			if ($productstack.length && $productstack.is('.open') && $productstack.is('.hide_on_scroll')) {
				$productstack.removeClass('open');
			}
		}

		$body.css({
			'overflow-y': 'auto'
		})

		$panelLeftTitul.on('click', '.toggle-panel', function () {
			$panelLeft.toggleClass('journal-category-left-active');
			$panelRight.toggleClass('journal-category-right-hidden');
			$logoCenter.toggleClass('logo-hidden');
			$('.page-header').removeClass('open');
			$('.toggleHeader').removeClass('open');
			$(this).toggleClass('open');
			hideStack();
		});

		$panelRightTitul.on('click', '.toggle-panel', function () {
			$panelRight.toggleClass('journal-category-right-active');
			$panelLeft.toggleClass('journal-category-left-hidden');
			$logoCenter.toggleClass('logo-hidden');
			$('.page-header').removeClass('open');
			$('.toggleHeader').removeClass('open');
			$(this).toggleClass('open');
			hideStack();
		});

		$panelLeftTitul.on('click', '.toggle-panel-mobile', function () {
			var $this = $(this);
			if ($panelLeft.hasClass('open')) {
				var category_content = $this.closest('.journal-category-left').find('.journal-category-inner-left').detach();
				$this.closest('.journal-category-left').prepend(category_content);
			} else {
				var category_content = $this.closest('.journal-category-left').find('.journal-category-inner-left').detach();
				$this.closest('.journal-category-left').append(category_content);
			}
			$panelLeft.toggleClass('open');
			$panelRight.removeClass('open');
			$this.toggleClass('open');
			if ($panelLeft.hasClass('open')) {
				$('html,body').animate({
					scrollTop: $this.offset().top
				}, 500);
			} else {
				$('html,body').animate({
					scrollTop: $panelLeft.offset().top
				}, 500);
			}
			hideStack();
		});

		$panelRightTitul.on('click', '.toggle-panel-mobile', function () {
			var $this = $(this);
			$panelRight.toggleClass('open');
			$panelLeft.removeClass('open');
			$this.toggleClass('open');
			if ($panelRight.hasClass('open')) {
				$('html,body').animate({
					scrollTop: $this.offset().top
				}, 500);
			} else {
				$('html,body').animate({
					scrollTop: $panelRight.offset().top
				}, 500);
			}
			hideStack();
		});

		$('.journal-category').on('scroll', function () {
			hideStack();
			$('.page-header').removeClass('open');
			$('.toggleHeader').removeClass('open');
		})
	};

	// Megamenu
  if ($(".megamenu").length) {
	  $(".megamenu").megaMenu();
  }
	// isotope gallery
	function isotopeGallery(gallery) {
		var $gallery = $(gallery);

		// isotope gallery
		var currentFilter;
		var activeStart;

		$gallery.imagesLoaded(function () {
			$gallery.isotope({
				itemSelector: '.gallery-item',
				layoutMode: 'fitRows',
				filter: function () {
					var $this = $(this);
					var filterResult = currentFilter ? $this.is(currentFilter) : true;
					return filterResult;
				}
			});
		});

		//filters gallery

		$('.filters-gallery .filter-label').each(function () {
			var $this = $(this);
			if ($this.hasClass('active')) {
				activeStart = true;
				currentFilter = $this.attr('data-filter');
				$gallery.isotope();
			}
		});

		if (!activeStart) $(".filters-gallery li:first-child .filter-label").addClass('active');

		$('.filters-gallery').on('click', '.filter-label', function (e) {
			e.preventDefault();
			var $this = $(this);
			if ($this.hasClass('active')) return false;
			else {
				$('.filters-gallery .filter-label').removeClass('active');
				$this.addClass('active')
			}
			currentFilter = $this.attr('data-filter');
			$gallery.isotope();
		});
	};

	//product grid gallery
	function productGallery(gallery) {

		var currentFilter,
			activeStart,
			$productgallery = $(gallery);
		$productgallery.imagesLoaded(function () {
			$productgallery.isotope({
				itemSelector: '.product-item',
				layoutMode: 'fitRows',
				filter: function () {
					var $this = $(this);
					var filterResult = currentFilter ? $this.is(currentFilter) : true;
					return filterResult;
				}
			});
		});
		//filters product grid
		$('.filters-product .filter-label').each(function () {
			var $this = $(this);
			var filtered = $this.data('filter'),
				count;
			if (filtered == null) {
				count = $productgallery.find('.product-item').length;
			} else count = $productgallery.find(filtered).length;
			$this.find('.count').html(count);
			if ($this.hasClass('active')) {
				activeStart = true;
				currentFilter = $this.attr('data-filter');
				$productgallery.isotope();
			}
		});
		if (!activeStart) $(".filters-product li:first-child .filter-label").addClass('active');
		$('.filters-product').on('click', '.filter-label', function (e) {
			e.preventDefault();
			var $this = $(this);
			if ($this.hasClass('active')) return false;
			else {
				$('.filters-product .filter-label').removeClass('active');
				$this.addClass('active')
			}
			currentFilter = $this.attr('data-filter');
			$productgallery.isotope();
		});

	}

	//product grid gallery
	function productHoverHeight(product) {
		var product = product;
		$document.on('mouseenter', product, function (e) {
				var $this = $(this);
				var $previews = $this.find('.product-item-gallery-previews');
				var $slick = $this.closest('.slick-list');
				var $inside = $('.product-item-details', $this);
				if (!$this.data('setHeight')) {
					$this.css({
						'height': $(this).find('.product-item-info').outerHeight() + 'px'
					}).data('setHeight', true);
				}
				if (!$this.hasClass('hovered')) {
					$this.addClass('hovered');
					if ($previews.length) {
						$this.addClass('with-previews');
						$inside.css({
							'max-width': $inside.outerWidth() + 'px'
						})
					}
					if ($slick.length) {
						$slick.addClass('out-space')
					}
				}
			})
			.on('mouseleave', product, function (e) {
				var $this = $(this);
				var $previews = $this.find('.product-item-gallery-previews');
				var $slick = $this.closest('.slick-list');
				var $inside = $('.product-item-details', $this);
				$inside.css({
					'max-width': ''
				})
				$this.removeClass('hovered');
				if ($slick.length) {
					$slick.removeClass('out-space')
				}
			})
		$document.on('click', '.product-item-gallery-previews a', function (e) {
			var src = $(this).find('img').attr('data-image');
			var $mainimg = $(this).closest('.product-item').find('.product-item-gallery-main img');
			$mainimg.attr('src', src);
			e.preventDefault();
		})
		$window.on('resize', function () {
			$(product).removeData('setHeight').css({
				'height': ''
			});
		});
	}

	//product grid gallery
	function headerCollapse() {
		$('.collapsed-links-wrapper').on('mouseenter', function (e) {
			if (!$('.page-header').hasClass('is-sticky')) {
				var $this = $(this);
				$this.css({
					'width': $this.find('.collapsed-links').get(0).scrollWidth + 25 + 'px'
				})
				$('.header-right-links').addClass('hovered');
			}
		});
		$('.collapsed-links-wrapper').on('mouseleave', function (e) {
			if (!$('.page-header').hasClass('is-sticky')) {
				$('.header-right-links').removeClass('hovered');
				$('.collapsed-links-wrapper').css({
					'width': ''
				})
			}
		});
	}


	// swiper slider
	$.fn.thumbsPreview = function (options) {
		var options = $.extend({}, $.fn.thumbsPreview.defaults, options);
		return this.each(function () {
			var $this = $(this);

			var $pagination_container = $this.find('.swiper-pagination'),
				$pagination_thumbs = $this.find('.swiper-pagination-thumbs'),
				$pagination_dot = $pagination_container.children('span'),
				toltal_slides = $pagination_dot.length,
				$thumbs_wrapper = $pagination_thumbs.children('.thumbs-wrapper'),
				$thumbs_preview = $thumbs_wrapper.children('.thumbs'),
				$thumbs_preview_item = $thumbs_preview.children('span'),
				border_width = 2,
				r_pagination_thumbs = 60;


			var w_pagination_thumbs = options.thumb_width + 2 * border_width,
				h_pagination_thumbs = options.thumb_height + 2 * border_width,
				t_pagination_thumbs = $pagination_container.position().top - $pagination_container.outerHeight() / 2 - h_pagination_thumbs / 2,
				l_pagination_thumbs = $pagination_container.position().left - w_pagination_thumbs - 5;

			$pagination_thumbs.css({
				width: w_pagination_thumbs + 'px',
				height: h_pagination_thumbs + 'px',
				top: t_pagination_thumbs + 'px',
				left: l_pagination_thumbs + 'px'
			});

			$thumbs_preview_item.css({
				width: options.thumb_width + 'px',
				height: options.thumb_height + 'px'
			});

			$thumbs_preview.css('height', toltal_slides * options.thumb_height + 'px');

			$thumbs_wrapper.css({
				width: options.thumb_width + 'px',
				height: options.thumb_height + 'px'
			});

			$pagination_container.on('mouseenter', function () {
				$(this).data('firsthover', true);
			}).on('mouseleave', function () {
				$(this).removeData('firsthover');
			})

			$pagination_dot.on('mouseenter', function () {
				var $this = $(this),
					idx = $this.index();
				var new_top = $this.parent().position().top + $this.position().top - h_pagination_thumbs / 2 + 10;
				var tempspeed = options.speed;
				if ($pagination_container.data('firsthover')) tempspeed = 0;
				$pagination_thumbs.stop(true)
					.fadeIn(200)
					.animate({
						top: new_top + 'px'
					}, {
						duration: tempspeed,
						queue: false
					});
				$thumbs_preview.stop(true)
					.animate({
						top: -idx * options.thumb_height + 'px'
					}, tempspeed);
			}).on('mouseleave', function () {
				$pagination_container.removeData('firsthover');
				$pagination_thumbs.stop(true).fadeOut(200);
			})

		});
	};
	$.fn.thumbsPreview.defaults = {
		speed: 100,
		thumb_width: 200,
		thumb_height: 100
	};
	$.fn.swiperUpdate = function () {
		var $slider = this;
		var swiper = new Swiper('.mainSlider .swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			//nextButton: '.swiper-button-next',
			//prevButton: '.swiper-button-prev',
			effect: 'fade',
			loop: true,
			autoplay: 10000,
			autoplayDisableOnInteraction: false,
			simulateTouch: false,
			onPaginationRendered: function (swiper) {
				if ($slider.attr('data-thumb') == 'true') {
					var $thumb = $('.thumbs').html('');
					$('.swiper-slide:not(.swiper-slide-duplicate)', $slider).each(function () {
						var preview;
						if ($(this).attr('data-thumb')) {
							preview = '<span><img src=' + $(this).attr('data-thumb') + ' alt=""></span>';
						} else if ($(this).find('figure img').length) {
							preview = '<span><img src=' + $(this).find('figure img').attr('src') + ' alt=""></span>';
						} else if ($(this).css('background-image')) {
							var bg = $(this).css('background-image');
							bg = bg.replace('url(', '').replace(')', '').replace(/\"/gi, "");
							preview = '<span><img src=' + bg + ' alt=""></span>';
						}
						$thumb.append(preview);
					})
					var thumb_width = 200,
						thumb_height = 100;
					if ($slider.attr('data-thumb-width')) thumb_width = +$slider.attr('data-thumb-width');
					if ($slider.attr('data-thumb-height')) thumb_height = +$slider.attr('data-thumb-height');
					$slider.thumbsPreview({
						thumb_width: thumb_width,
						thumb_height: thumb_height,
						speed: 250
					});
				}
			},
			onSlideChangeStart: function (swiper) {
				$('.sliderLoader').hide();
				$('.mainSlider .swiper-container').css({
					'opacity': 1,
					'min-height': '0'
				});
				$('.mainSlider [data-animate]').data('stop', true);
				$('.mainSlider [data-animate]').each(function () {
					var el = $(this);
					var effect = el.attr('data-animate');
					el.removeClass('animated').removeClass(effect).addClass('block-animate');
				});
			},
			onSlideChangeEnd: function (swiper) {
				$('.mainSlider [data-animate]').each(function () {
					var el = $(this);
					var effect = el.attr('data-animate');
					el.finish().removeClass('animated').removeClass(effect).addClass('block-animate');
				});
				if ($('.mainSlider video').length) {
					$(".mainSlider video").each(function () {
						$(this).get(0).pause();
					});
				}
				if ($('.mainSlider .swiper-slide-active video').length) {
					$('.mainSlider .swiper-slide-active video')[0].play();
				}
				$('.mainSlider .swiper-slide-active [data-animate]').each(function () {
					var el = $(this);
					var delay = 0;
					var dataDelay = el.attr('data-delay');
					if (dataDelay) {
						delay += Number(dataDelay)
					}
					el.removeData('stop');
					if (!el.hasClass('animated')) {
						el.addClass('block-animate');
						var effect = el.attr('data-animate');
						setTimeout(function () {
							if (!el.data('stop')) {
								el.removeClass('block-animate').addClass(effect + ' animated');
							} else return false;
						}, delay);
					}
				});
			}
		});
	}

	function swiperSlider(slider) {

		var $slider = $(slider);

		function SliderSize(slider) {
			var $slidercontainer = $('.swiper-container', slider),
				scrHeight = window.innerHeight ? window.innerHeight : $window.height(),
				sliderHeightOff = $slidercontainer.offset().top;

			scrHeight = scrHeight - sliderHeightOff;
			$slidercontainer.css('height', scrHeight);
		}

		if ($slider.is('.fullscreen')) {
			SliderSize($slider);
		}

		$window.on('resize.mainSlider', function () {
			if ($slider.is('.fullscreen')) {
				SliderSize($('.mainSlider.fullscreen'));
			}
		});

		$slider.on('click', '[data-href]', function (event) {
			event.preventDefault();
			var href = $(this).attr("data-href"),
				target = $(this).attr("data-target") ? $(this).attr("data-target") : '_self';
			window.open(href, target);
		});

		var $textBlock = $("div[class^='text'],div[class*=' text'],div.caption,.button", $slider);

		$textBlock.each(function () {
			var $this = $(this),
				thisInlineStyle = '';

			var thisStyle = $this.data();

			$.each(thisStyle, function (index, value) {
				if (index == 'fontcolor') {
					thisInlineStyle += 'color:' + $this.data('fontcolor') + ';'
				}
				if (index == 'fontfamily') {
					thisInlineStyle += 'font-family:' + $this.data('fontfamily') + ';'
				}
				if (index == 'fontsize') {
					thisInlineStyle += 'font-size:' + $this.data('fontsize') + 'vw;'
				}
				if (index == 'fontline') {
					thisInlineStyle += 'line-height:' + $this.data('fontline') + 'em;'
				}
				if (index == 'fontweight') {
					thisInlineStyle += 'font-weight:' + $this.data('fontweight') + ';'
				}
				if (index == 'ypos') {
					var ypos = $this.data('ypos');
					if (ypos == 'center') {
						$this.addClass('vertical-align')
					} else thisInlineStyle += 'top:' + $this.data('ypos') + '%;'
				}
				if (index == 'xpos') {
					var xpos = $this.data('xpos');
					if (xpos == 'center') {
						$this.addClass('horisontal-align')
					} else if (xpos == 'left') {
						thisInlineStyle += 'left:0;right:auto;'
					} else if (xpos == 'right') {
						thisInlineStyle += 'left:auto;right:0;'
					} else thisInlineStyle += 'left:' + $this.data('xpos') + '%;'
				}
				if (index == 'otherstyle') {
					thisInlineStyle += $this.data("otherstyle");
				}
			});
			$this.attr('style', thisInlineStyle);
		})

		$slider.swiperUpdate()
	}

	/* ---------------------- */
	/* Initialize All Scripts */
	/* ---------------------- */
	
	setFullWidth();
	setFullHeight();
	slidePanel();

	// header
	if ($(".page-header.sticky.always").length) {
		$(".page-header.sticky.always").stickyHeader();
	}
	if ($(".page-header.sticky.smart").length) {
		$(".page-header.sticky.smart").stickyHeaderSmart();
	}
	if ($(".page-header.variant-9").length) {
		headerCollapse()
	}
	// expanding  search 
	$(".exp-search").expandingSearch();
	// department megamenu
	if ($('.megamenu.department').length) {
		departmentMenu();
	}
	// mobile menu	
	$(".mobilemenu").mobileMenu();
	if ($(".filter-col").length) {
		$(".filter-col").isFilters();
		$(".filter-col").mobileFilter();
	}
	// mobile cart
	if ($(".header-cart.variant-1").length) {
		$(".header-cart.variant-1").mobileMinicart();
	}
	if ($(".header-cart.variant-2").length) {
	  $(".header-cart.variant-2").mobileMinicartAlt();
	}
	// footer
	$(".collapsed-mobile").footerCollapse();
	$(".sidebar-block").blockSelectedMark();
	$(".sidebar-block-top").hideShopBy();
	if ($(".filter-col.fixed").length) {
		$(".filter-col.fixed").fixedSidebar();
		$(".sidebar-block").blockCollapseAccordion();
	} else {
		$(".sidebar-block").blockCollapse();
	}
	// product
	productHoverHeight('.product-variant-4 .product-item, .product-variant-5 .product-item');
	colorSwatch('.color-swatch');
	if ($('.dark-tooltip').length) {
    tooltipIni();
  }
  if ($('.product-tab').length) {
	  productTab('.product-tab');
  }
	prevnextNav('.product-nav');
	viewMode('.view-mode');
	changeInput();
	productSharing();
	productOptions('.product-size');
	productOptions('.product-color');
	quickView('.quick-view-link', '#quickView');
	$('.carousel-inside').insideCarousel();
	$('.productStack').ProductStack();
	$('.product-item').FlyToCart({
		link: '.add-to-cart',
		productstack: '.productStack',
		complete: function () {
			// add yout action here 
		}
	});
	if ($('#priceSlider').length) {
		priceSlider();
	}
	// product page
	if ($('.product-block').length) {
		productImageGallery()
	}
	// lookbook page
  if ($('.product-lookbook').length) {
    $('.product-lookbook').imagesLoaded(function () {
      $('.product-lookbook').lookbookSize();
    });
  }
	// journal layout
	if ($(".journal").length) {
		$(".journal").journalSlide();
	}
	// gallery

	if ($('.gallery.simple').length) {
		$('.gallery.simple').simpleFilters();
	}    
  if ($('.products-grid.isotope').length) {
	  productGallery('.products-grid.isotope');
  }
  if ($('.gallery.isotope').length) {
	  isotopeGallery('.gallery.isotope');
  }

	//magnific popup for gallery
	if ($('.zoomimage').length) {
		$('.zoomimage').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}
	//magnific popup for video
	// if ($('.video-link').length) {
	// 	$('.video-link').magnificPopup({
	// 		type: 'iframe',
	// 		mainClass: 'mfp-fade',
	// 		removalDelay: 160,
	// 		preloader: false,
	// 		fixedContentPos: false
	// 	});
	// }

	// slider 
	if ($('.mainSlider').length) {
		setTimeout(function () {
			swiperSlider('.mainSlider');
		}, 500);
	}

	// other
	addToBookmark('.bookmark');
	backToTop('.back-to-top');
	$(".autosize-text").each(function () {
		$this = $(this);
		var fontratio = Math.round($this.attr("data-fontratio")*100)/100;
    if(fontratio > 0) { 
      $this.flowtype({
        fontRatio: fontratio
      });
    }
	});
	//parallax
	if ($('block.parallax').length) {
		$('block.parallax').parallax({
			iosFix: false, // enable on IOS device
			androidFix: false // enable on Andriod device
		});
	}
	// loading button
	$('.btn-loading').on('click', function () {
		var $this = $(this);
		$this.button('loading');
		setTimeout(function () {
			$this.button('reset');
		}, 10000);
	});
	// set background image inline
	if ($('[data-bg]').length) {
		$('[data-bg]').each(function () {
			var $this = $(this),
				bg = $this.attr('data-bg');
			$this.css({
				'background-image': 'url(' + bg + ')'
			});
		})
	}
  
  
	// Remove Loader
	$body.addClass('loaded');
  
	var prevWindow = window.innerWidth || $window.width();

	
	/* ---------------------- */
	/*  Resize handle events  */
	/* ---------------------- */
	
	$window.on('resize', function () {
		setTimeout(function () {
			setFullHeight();
			var currentWindow = window.innerWidth || $window.width();
			if (currentWindow != prevWindow) {
				$body.otherResize();
				prevWindow = currentWindow;
			}
		}, 500);
	});
})

/***/ }),

/***/ "./src/assets/js/bootstrap.min.js":
/*!****************************************!*\
  !*** ./src/assets/js/bootstrap.min.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=84f0afa74e21ee203967)
 * Config saved to config.json and https://gist.github.com/84f0afa74e21ee203967
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.alert");n||i.data("bs.alert",n=new o(this)),"string"==typeof e&&n[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.3.4",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function i(){a.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var a=t(s);e&&e.preventDefault(),a.length||(a=n.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof e&&e;n||o.data("bs.button",n=new i(this,s)),"toggle"==e?n.toggle():e&&n.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.3.4",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data();e+="Text",null==s.resetText&&o.data("resetText",o[n]()),setTimeout(t.proxy(function(){o[n](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));t&&this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target);o.hasClass("btn")||(o=o.closest(".btn")),e.call(o,"toggle"),i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.carousel"),s=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e),a="string"==typeof e?e:s.slide;n||o.data("bs.carousel",n=new i(this,s)),"number"==typeof e?n.to(e):a?n[a]():s.interval&&n.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.4",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),o="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(o&&!this.options.wrap)return e;var n="prev"==t?-1:1,s=(i+n)%this.$items.length;return this.$items.eq(s)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,o){var n=this.$element.find(".item.active"),s=o||this.getItemForDirection(e,n),a=this.interval,r="next"==e?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var h=s[0],d=t.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=t(this.$indicators.children()[this.getItemIndex(s)]);p&&p.addClass("active")}var c=t.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,n.addClass(r),s.addClass(r),n.one("bsTransitionEnd",function(){s.removeClass([e,r].join(" ")).addClass("active"),n.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(c)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(c)),a&&this.cycle(),this}};var o=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this};var n=function(i){var o,n=t(this),s=t(n.attr("data-target")||(o=n.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var a=t.extend({},s.data(),n.data()),r=n.attr("data-slide-to");r&&(a.interval=!1),e.call(s,a),r&&s.data("bs.carousel").to(r),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e){e&&3===e.which||(t(n).remove(),t(s).each(function(){var o=t(this),n=i(o),s={relatedTarget:this};n.hasClass("open")&&(n.trigger(e=t.Event("hide.bs.dropdown",s)),e.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger("hidden.bs.dropdown",s)))}))}function i(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.4",a.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=i(n),a=s.hasClass("open");if(e(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var r={relatedTarget:this};if(s.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},a.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var o=t(this);if(e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled")){var n=i(o),a=n.hasClass("open");if(!a&&27!=e.which||a&&27==e.which)return 27==e.which&&n.find(s).trigger("focus"),o.trigger("click");var r=" li:not(.disabled):visible a",l=n.find('[role="menu"]'+r+', [role="listbox"]'+r);if(l.length){var h=l.index(e.target);38==e.which&&h>0&&h--,40==e.which&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](o):a.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.4",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),n=o.attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());o.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",t,e)};i.VERSION="3.3.4",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i&&i.$tip&&i.$tip.is(":visible")?void(i.hoverState="in"):(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,h=l.test(r);h&&(r=r.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element);var d=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(h){var f=r,u=this.options.container?t(this.options.container):this.$element.parent(),g=this.getPosition(u);r="bottom"==r&&d.bottom+c>g.bottom?"top":"top"==r&&d.top-c<g.top?"bottom":"right"==r&&d.right+p>g.width?"left":"left"==r&&d.left-p<g.left?"right":r,s.removeClass(f).addClass(r)}var m=this.getCalculatedOffset(r,d,p,c);this.applyPlacement(m,r);var v=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(i.TRANSITION_DURATION):v()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top=e.top+a,e.left=e.left+r,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=s&&(e.top=e.top+s-h);var d=this.getViewportAdjustedDelta(i,e,l,h);d.left?e.left+=d.left:e.top+=d.top;var p=/top|bottom/.test(i),c=p?2*d.left-n+l:2*d.top-s+h,f=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),a=t.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=o?{top:0,left:0}:e.offset(),a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},r=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,r,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.width&&(n.left=a.left+a.width-d)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.popover",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.4",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.4",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var a=o.find("> .active"),r=n&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.affix"),s="object"==typeof e&&e;n||o.data("bs.affix",n=new i(this,s)),"string"==typeof e&&n[e]()})}var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.4",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>n?"top":!1;if("bottom"==this.affixed)return null!=i?n+this.unpin<=s.top?!1:"bottom":t-o>=n+a?!1:"bottom";var r=null==this.affixed,l=r?n:s.top,h=r?a:e;return null!=i&&i>=n?"top":null!=o&&l+h>=t-o?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),o=this.options.offset,n=o.top,s=o.bottom,a=t(document.body).height();"object"!=typeof o&&(s=n=o),"function"==typeof n&&(n=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element));var r=this.getState(a,e,n,s);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),h=t.Event(l+".bs.affix");if(this.$element.trigger(h),h.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-s})}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),o=i.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.3.4",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var n=t(o);
this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=t(this);n.attr("data-target")||o.preventDefault();var s=e(n),a=s.data("bs.collapse"),r=a?"toggle":n.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(i,o){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var o=t(this),n=o.data("bs.scrollspy"),s="object"==typeof i&&i;n||o.data("bs.scrollspy",n=new e(this,s)),"string"==typeof i&&n[i]()})}e.VERSION="3.3.4",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",o=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",o=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),n=e.data("target")||e.attr("href"),s=/^#./.test(n)&&t(n);return s&&s.length&&s.is(":visible")&&[[s[i]().top+o,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=o)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(void 0===n[t+1]||e<n[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var o=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);

/***/ }),

/***/ "./src/assets/js/countdown/jquery.countdown.min.js":
/*!*********************************************************!*\
  !*** ./src/assets/js/countdown/jquery.countdown.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;g>f;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&10>m&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),1===Math.abs(b)?d:c}var f=[],g=[],h={precision:100,elapse:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",w:"weeks",d:"daysToWeek",D:"totalDays",H:"hours",M:"minutes",S:"seconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&0>b?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear())},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});

/***/ }),

/***/ "./src/assets/js/ez-plus/jquery.ez-plus.js":
/*!*************************************************!*\
  !*** ./src/assets/js/ez-plus/jquery.ez-plus.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* jshint -W071, -W074 */
/* global jQuery:false */

/* Disabled options are:
 * W071: This function has too many statements
 * W074: This function's cyclomatic complexity is too high
 */

/*
 *	jQuery ezPlus 1.1.20
 *	Demo's and documentation:
 *	http://igorlino.github.io/elevatezoom-plus/
 *
 *	licensed under MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 *
 */
"function"!=typeof Object.create&&(Object.create=function(o){function e(){}return e.prototype=o,new e}),function(o,e,i,t){var n={init:function(e,i){function t(){var o=(new Date).getTime(),e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var i=(o+16*Math.random())%16|0;return o=Math.floor(o/16),("x"==e?i:3&i|8).toString(16)});return e}var n,s=this;s.elem=i,s.$elem=o(i),s.options=o.extend({},o.fn.ezPlus.options,s.responsiveConfig(e||{})),s.imageSrc=s.$elem.data(s.options.attrImageZoomSrc)?s.$elem.data(s.options.attrImageZoomSrc):s.$elem.attr("src"),s.options.enabled&&(s.options.tint&&(s.options.lensColour="none",s.options.lensOpacity="1"),"inner"===s.options.zoomType&&(s.options.showLens=!1),-1===s.options.zoomId&&(s.options.zoomId=t()),s.$elem.parent().removeAttr("title").removeAttr("alt"),s.zoomImage=s.imageSrc,s.refresh(1),n=o(s.options.gallery?"#"+s.options.gallery:s.options.gallerySelector),n.on("click.zoom",s.options.galleryItem,function(e){return s.options.galleryActiveClass&&(o(s.options.galleryItem,n).removeClass(s.options.galleryActiveClass),o(this).addClass(s.options.galleryActiveClass)),"A"===this.tagName&&e.preventDefault(),o(this).data(s.options.attrImageZoomSrc)?s.zoomImagePre=o(this).data(s.options.attrImageZoomSrc):s.zoomImagePre=o(this).data("image"),s.swaptheimage(o(this).data("image"),s.zoomImagePre),"A"===this.tagName?!1:void 0}))},refresh:function(o){var e=this;setTimeout(function(){e.fetch(e.imageSrc,e.$elem,e.options.minZoomLevel)},o||e.options.refresh)},fetch:function(o,e,i){var t=this,n=new Image;n.onload=function(){n.width/e.width()<=i?t.largeWidth=e.width()*i:t.largeWidth=n.width,n.height/e.height()<=i?t.largeHeight=e.height()*i:t.largeHeight=n.height,t.startZoom(),t.currentImage=t.imageSrc,t.options.onZoomedImageLoaded(t.$elem)},t.setImageSource(n,o)},setImageSource:function(o,e){o.src=e},startZoom:function(){function e(){return"overflow: hidden;background-position: 0px 0px;text-align:center;background-color: "+String(s.options.zoomWindowBgColour)+";width: "+String(s.options.zoomWindowWidth)+"px;height: "+String(s.options.zoomWindowHeight)+"px;float: left;background-size: "+s.largeWidth/s.currentZoomLevel+"px "+s.largeHeight/s.currentZoomLevel+"px;display: none;z-index:100;border: "+String(s.options.borderSize)+"px solid "+s.options.borderColour+";background-repeat: no-repeat;position: absolute;"}function i(){var o=s.$elem.css("border-left-width");return"overflow: hidden;margin-left: "+String(o)+";margin-top: "+String(o)+";background-position: 0px 0px;width: "+String(s.nzWidth)+"px;height: "+String(s.nzHeight)+"px;float: left;display: none;cursor:"+s.options.cursor+";border: "+String(s.options.borderSize)+"px solid "+s.options.borderColour+";background-repeat: no-repeat;position: absolute;"}function t(){return s.nzHeight<s.options.zoomWindowHeight/s.heightRatio?s.lensHeight=s.nzHeight:s.lensHeight=String(s.options.zoomWindowHeight/s.heightRatio),s.largeWidth<s.options.zoomWindowWidth?s.lensWidth=s.nzWidth:s.lensWidth=String(s.options.zoomWindowWidth/s.widthRatio),"background-position: 0px 0px;width: "+String(s.options.zoomWindowWidth/s.widthRatio)+"px;height: "+String(s.options.zoomWindowHeight/s.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;opacity:"+s.options.lensOpacity+";filter: alpha(opacity = "+100*s.options.lensOpacity+"); zoom:1;width:"+s.lensWidth+"px;height:"+s.lensHeight+"px;background-color:"+s.options.lensColour+";cursor:"+s.options.cursor+";border: "+s.options.lensBorderSize+"px solid "+s.options.lensBorderColour+";background-repeat: no-repeat;position: absolute;"}function n(o){(s.lastX!==o.clientX||s.lastY!==o.clientY)&&(s.setPosition(o),s.currentLoc=o),s.lastX=o.clientX,s.lastY=o.clientY}var s=this;s.nzWidth=s.$elem.width(),s.nzHeight=s.$elem.height(),s.isWindowActive=!1,s.isLensActive=!1,s.isTintActive=!1,s.overWindow=!1,s.options.imageCrossfade&&(s.zoomWrap=s.$elem.wrap('<div style="height:'+s.nzHeight+"px;width:"+s.nzWidth+'px;" class="zoomWrapper" />'),s.$elem.css("position","absolute")),s.zoomLock=1,s.scrollingLock=!1,s.changeBgSize=!1,s.currentZoomLevel=s.options.zoomLevel,s.nzOffset=s.$elem.offset(),s.$elem.closest(".product-slider-wrapper").length?s.nzOffsetLeft=s.nzOffset.left-o(".product-slider-wrapper").offset().left:s.nzOffsetLeft=s.nzOffset.left,s.widthRatio=s.largeWidth/s.currentZoomLevel/s.nzWidth,s.heightRatio=s.largeHeight/s.currentZoomLevel/s.nzHeight,"window"===s.options.zoomType&&(s.zoomWindowStyle=e()),"inner"===s.options.zoomType&&(s.zoomWindowStyle=i()),"window"===s.options.zoomType&&(s.lensStyle=t()),s.tintStyle="display: block;position: absolute;background-color: "+s.options.tintColour+";filter:alpha(opacity=0);opacity: 0;width: "+s.nzWidth+"px;height: "+s.nzHeight+"px;",s.lensRound="","lens"===s.options.zoomType&&(s.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(s.options.borderSize)+"px solid "+s.options.borderColour+";width:"+String(s.options.lensSize)+"px;height:"+String(s.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;"),"round"===s.options.lensShape&&(s.lensRound="border-top-left-radius: "+String(s.options.lensSize/2+s.options.borderSize)+"px;border-top-right-radius: "+String(s.options.lensSize/2+s.options.borderSize)+"px;border-bottom-left-radius: "+String(s.options.lensSize/2+s.options.borderSize)+"px;border-bottom-right-radius: "+String(s.options.lensSize/2+s.options.borderSize)+"px;"),s.zoomContainer=o('<div class="zoomContainer" uuid="'+s.options.zoomId+'"style="position:absolute;left:'+s.nzOffset.left+"px;top:"+s.nzOffset.top+"px;height:"+s.nzHeight+"px;width:"+s.nzWidth+"px;z-index:"+s.options.zIndex+'"></div>'),s.$elem.attr("id")&&s.zoomContainer.attr("id",s.$elem.attr("id")+"-zoomContainer"),o(s.options.zoomContainerAppendTo).append(s.zoomContainer),s.options.containLensZoom&&"lens"===s.options.zoomType&&s.zoomContainer.css("overflow","hidden"),"inner"!==s.options.zoomType&&(s.zoomLens=o('<div class="zoomLens" style="'+s.lensStyle+s.lensRound+'">&nbsp;</div>').appendTo(s.zoomContainer).click(function(){s.$elem.trigger("click")}),s.options.tint&&(s.tintContainer=o("<div/>").addClass("tintContainer"),s.zoomTint=o('<div class="zoomTint" style="'+s.tintStyle+'"></div>'),s.zoomLens.wrap(s.tintContainer),s.zoomTintcss=s.zoomLens.after(s.zoomTint),s.zoomTintImage=o('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+s.nzWidth+"px; height: "+s.nzHeight+'px;" src="'+s.imageSrc+'">').appendTo(s.zoomLens).click(function(){s.$elem.trigger("click")})));var a=isNaN(s.options.zoomWindowPosition)?"body":s.zoomContainer;s.zoomWindow=o('<div style="z-index:999;left:'+s.windowOffsetLeft+"px;top:"+s.windowOffsetTop+"px;"+s.zoomWindowStyle+'" class="zoomWindow">&nbsp;</div>').appendTo(a).click(function(){s.$elem.trigger("click")}),s.zoomWindowContainer=o("<div/>").addClass("zoomWindowContainer").css("width",s.options.zoomWindowWidth),s.zoomWindow.wrap(s.zoomWindowContainer),"lens"===s.options.zoomType&&s.zoomLens.css("background-image",'url("'+s.imageSrc+'")'),"window"===s.options.zoomType&&s.zoomWindow.css("background-image",'url("'+s.imageSrc+'")'),"inner"===s.options.zoomType&&s.zoomWindow.css("background-image",'url("'+s.imageSrc+'")'),s.options.touchEnabled&&(s.$elem.bind("touchmove.ezpspace",function(o){o.preventDefault();var e=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];s.setPosition(e)}),s.zoomContainer.bind("dbltap.ezpspace",function(o){"inner"===s.options.zoomType&&s.showHideWindow("show"),s.options.showLens&&s.showHideLens("show"),o.preventDefault();var e=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];s.setPosition(e)}),s.zoomContainer.bind("touchmove.ezpspace",function(o){if(s.isWindowActive===!0||s.isLensActive===!0){"inner"===s.options.zoomType&&s.isWindowActive===!0&&s.showHideWindow("show"),o.preventDefault();var e=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];s.setPosition(e)}}),s.zoomContainer.bind("touchend.ezpspace",function(o){s.showHideWindow("hide"),s.options.showLens&&s.showHideLens("hide"),s.options.tint&&"inner"!==s.options.zoomType&&s.showHideTint("hide")}),s.$elem.bind("touchend.ezpspace",function(o){s.showHideWindow("hide"),s.options.showLens&&s.showHideLens("hide"),s.options.tint&&"inner"!==s.options.zoomType&&s.showHideTint("hide")}),s.options.showLens&&(s.zoomLens.bind("touchmove.ezpspace",function(o){o.preventDefault();var e=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];s.setPosition(e)}),s.zoomLens.bind("touchend.ezpspace",function(o){s.showHideWindow("hide"),s.options.showLens&&s.showHideLens("hide"),s.options.tint&&"inner"!==s.options.zoomType&&s.showHideTint("hide")}))),s.$elem.bind("mousemove.ezpspace",function(o){s.overWindow===!1&&s.setElements("show"),(s.lastX!==o.clientX||s.lastY!==o.clientY)&&(s.setPosition(o),s.currentLoc=o),s.lastX=o.clientX,s.lastY=o.clientY}),o("body").hasClass("touch")||(s.zoomContainer.bind("click.ezpspace touchstart.ezpspace",s.options.onImageClick),s.zoomContainer.bind("mousemove.ezpspace",function(o){s.overWindow===!1&&s.setElements("show"),n(o)}));var h=null;"inner"!==s.options.zoomType&&(h=s.zoomLens),s.options.tint&&"inner"!==s.options.zoomType&&(h=s.zoomTint),"inner"===s.options.zoomType&&(h=s.zoomWindow),h&&h.bind("mousemove.ezpspace",n),s.zoomContainer.add(s.$elem).mouseenter(function(){s.overWindow===!1&&s.setElements("show")}).mouseleave(function(){s.scrollLock||(s.setElements("hide"),s.options.onDestroy(s.$elem))}),"inner"!==s.options.zoomType&&s.zoomWindow.mouseenter(function(){s.overWindow=!0,s.setElements("hide")}).mouseleave(function(){s.overWindow=!1}),s.options.minZoomLevel?s.minZoomLevel=s.options.minZoomLevel:s.minZoomLevel=2*s.options.scrollZoomIncrement,s.options.scrollZoom&&s.zoomContainer.add(s.$elem).bind("wheel DOMMouseScroll MozMousePixelScroll",function(e){s.scrollLock=!0,clearTimeout(o.data(this,"timer")),o.data(this,"timer",setTimeout(function(){s.scrollLock=!1},250));var i=e.originalEvent.deltaY||-1*e.originalEvent.detail;if(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),0==i)return!1;if(i/120>0){var t=parseFloat(s.currentZoomLevel)-s.options.scrollZoomIncrement;t>=parseFloat(s.minZoomLevel)&&s.changeZoomLevel(t)}else if(!s.fullheight&&!s.fullwidth||!s.options.mantainZoomAspectRatio){var t=parseFloat(s.currentZoomLevel)+s.options.scrollZoomIncrement;s.options.maxZoomLevel?t<=s.options.maxZoomLevel&&s.changeZoomLevel(t):s.changeZoomLevel(t)}return!1})},destroy:function(){var e=this;e.$elem.unbind("ezpspace"),o(e.zoomContainer).remove(),e.options.loadingIcon&&e.spinner&&e.spinner.length&&(e.spinner.remove(),delete e.spinner)},getIdentifier:function(){var o=this;return o.options.zoomId},setElements:function(e){var i=this;return i.options.zoomEnabled?("show"===e&&i.isWindowSet&&("inner"===i.options.zoomType&&i.showHideWindow("show"),"window"===i.options.zoomType&&i.showHideWindow("show"),i.options.showLens&&!o("body").hasClass("touch")&&i.showHideLens("show"),i.options.tint&&"inner"!==i.options.zoomType&&i.showHideTint("show")),void("hide"===e&&("window"===i.options.zoomType&&i.showHideWindow("hide"),i.options.tint||i.showHideWindow("hide"),i.options.showLens&&i.showHideLens("hide"),i.options.tint&&i.showHideTint("hide")))):!1},setPosition:function(o){var e=this;if(!e.options.zoomEnabled)return!1;if(e.nzHeight=e.$elem.height(),e.nzWidth=e.$elem.width(),e.nzOffset=e.$elem.offset(),e.options.tint&&"inner"!==e.options.zoomType&&e.zoomTint.css({top:0,left:0}),e.options.responsive&&!e.options.scrollZoom&&e.options.showLens){e.nzHeight<e.options.zoomWindowWidth/e.widthRatio?e.lensHeight=e.nzHeight:e.lensHeight=String(e.options.zoomWindowHeight/e.heightRatio),e.largeWidth<e.options.zoomWindowWidth?e.lensWidth=e.nzWidth:e.lensWidth=e.options.zoomWindowWidth/e.widthRatio,e.widthRatio=e.largeWidth/e.nzWidth,e.heightRatio=e.largeHeight/e.nzHeight,"lens"!==e.options.zoomType&&(e.nzHeight<e.options.zoomWindowWidth/e.widthRatio?e.lensHeight=e.nzHeight:e.lensHeight=String(e.options.zoomWindowHeight/e.heightRatio),e.nzWidth<e.options.zoomWindowHeight/e.heightRatio?e.lensWidth=e.nzWidth:e.lensWidth=String(e.options.zoomWindowWidth/e.widthRatio),e.zoomLens.css({width:e.lensWidth,height:e.lensHeight}),e.options.tint&&e.zoomTintImage.css({width:e.nzWidth,height:e.nzHeight})),"lens"===e.options.zoomType&&e.zoomLens.css({width:String(e.options.lensSize)+"px",height:String(e.options.lensSize)+"px"})}if(e.zoomContainer.css({top:e.nzOffset.top,left:e.nzOffsetLeft,width:e.nzWidth,height:e.nzHeight}),e.mouseLeft=parseInt(o.pageX-e.nzOffset.left),e.mouseTop=parseInt(o.pageY-e.nzOffset.top),"window"===e.options.zoomType){var i=e.zoomLens.height()/2,t=e.zoomLens.width()/2;e.Etoppos=e.mouseTop<0+i,e.Eboppos=e.mouseTop>e.nzHeight-i-2*e.options.lensBorderSize,e.Eloppos=e.mouseLeft<0+t,e.Eroppos=e.mouseLeft>e.nzWidth-t-2*e.options.lensBorderSize}return"inner"===e.options.zoomType&&(e.Etoppos=e.mouseTop<e.nzHeight/2/e.heightRatio,e.Eboppos=e.mouseTop>e.nzHeight-e.nzHeight/2/e.heightRatio,e.Eloppos=e.mouseLeft<0+e.nzWidth/2/e.widthRatio,e.Eroppos=e.mouseLeft>e.nzWidth-e.nzWidth/2/e.widthRatio-2*e.options.lensBorderSize),e.mouseLeft<0||e.mouseTop<0||e.mouseLeft>e.nzWidth||e.mouseTop>e.nzHeight?void e.setElements("hide"):(e.options.showLens&&(e.lensLeftPos=String(Math.floor(e.mouseLeft-e.zoomLens.width()/2)),e.lensTopPos=String(Math.floor(e.mouseTop-e.zoomLens.height()/2))),e.Etoppos&&(e.lensTopPos=0),e.Eloppos&&(e.windowLeftPos=0,e.lensLeftPos=0,e.tintpos=0),"window"===e.options.zoomType&&(e.Eboppos&&(e.lensTopPos=Math.max(e.nzHeight-e.zoomLens.height()-2*e.options.lensBorderSize,0)),e.Eroppos&&(e.lensLeftPos=e.nzWidth-e.zoomLens.width()-2*e.options.lensBorderSize)),"inner"===e.options.zoomType&&(e.Eboppos&&(e.lensTopPos=Math.max(e.nzHeight-2*e.options.lensBorderSize,0)),e.Eroppos&&(e.lensLeftPos=e.nzWidth-e.nzWidth-2*e.options.lensBorderSize)),"lens"===e.options.zoomType&&(e.windowLeftPos=String(-1*((o.pageX-e.nzOffset.left)*e.widthRatio-e.zoomLens.width()/2)),e.windowTopPos=String(-1*((o.pageY-e.nzOffset.top)*e.heightRatio-e.zoomLens.height()/2)),e.zoomLens.css("background-position",e.windowLeftPos+"px "+e.windowTopPos+"px"),e.changeBgSize&&(e.nzHeight>e.nzWidth?("lens"===e.options.zoomType&&e.zoomLens.css("background-size",e.largeWidth/e.newvalueheight+"px "+e.largeHeight/e.newvalueheight+"px"),e.zoomWindow.css("background-size",e.largeWidth/e.newvalueheight+"px "+e.largeHeight/e.newvalueheight+"px")):("lens"===e.options.zoomType&&e.zoomLens.css("background-size",e.largeWidth/e.newvaluewidth+"px "+e.largeHeight/e.newvaluewidth+"px"),e.zoomWindow.css("background-size",e.largeWidth/e.newvaluewidth+"px "+e.largeHeight/e.newvaluewidth+"px")),e.changeBgSize=!1),e.setWindowPosition(o)),e.options.tint&&"inner"!==e.options.zoomType&&e.setTintPosition(o),"window"===e.options.zoomType&&e.setWindowPosition(o),"inner"===e.options.zoomType&&e.setWindowPosition(o),e.options.showLens&&(e.fullwidth&&"lens"!==e.options.zoomType&&(e.lensLeftPos=0),e.zoomLens.css({left:e.lensLeftPos+"px",top:e.lensTopPos+"px"})),void 0)},showHideZoomContainer:function(o){var e=this;"show"===o&&e.zoomContainer&&e.zoomContainer.show(),"hide"===o&&e.zoomContainer&&e.zoomContainer.hide()},showHideWindow:function(o){var e=this;"show"===o&&!e.isWindowActive&&e.zoomWindow&&(e.options.onShow(e),e.options.zoomWindowFadeIn?e.zoomWindow.stop(!0,!0,!1).fadeIn(e.options.zoomWindowFadeIn):e.zoomWindow.show(),e.isWindowActive=!0),"hide"===o&&e.isWindowActive&&(e.options.zoomWindowFadeOut?e.zoomWindow.stop(!0,!0).fadeOut(e.options.zoomWindowFadeOut,function(){e.loop&&(clearInterval(e.loop),e.loop=!1)}):e.zoomWindow.hide(),e.isWindowActive=!1)},showHideLens:function(o){var e=this;"show"===o&&(e.isLensActive||(e.zoomLens&&(e.options.lensFadeIn?e.zoomLens.stop(!0,!0,!1).fadeIn(e.options.lensFadeIn):e.zoomLens.show()),e.isLensActive=!0)),"hide"===o&&e.isLensActive&&(e.zoomLens&&(e.options.lensFadeOut?e.zoomLens.stop(!0,!0).fadeOut(e.options.lensFadeOut):e.zoomLens.hide()),e.isLensActive=!1)},showHideTint:function(o){var e=this;"show"===o&&!e.isTintActive&&e.zoomTint&&(e.options.zoomTintFadeIn?e.zoomTint.css("opacity",e.options.tintOpacity).animate().stop(!0,!0).fadeIn("slow"):(e.zoomTint.css("opacity",e.options.tintOpacity).animate(),e.zoomTint.show()),e.isTintActive=!0),"hide"===o&&e.isTintActive&&(e.options.zoomTintFadeOut?e.zoomTint.stop(!0,!0).fadeOut(e.options.zoomTintFadeOut):e.zoomTint.hide(),e.isTintActive=!1)},setLensPosition:function(o){},setWindowPosition:function(e){var i=this;if(isNaN(i.options.zoomWindowPosition))i.externalContainer=o(i.options.zoomWindowPosition),i.externalContainer.length||(i.externalContainer=o("#"+i.options.zoomWindowPosition)),i.externalContainerWidth=i.externalContainer.width(),i.externalContainerHeight=i.externalContainer.height(),i.externalContainerOffset=i.externalContainer.offset(),i.windowOffsetTop=i.externalContainerOffset.top,i.windowOffsetLeft=i.externalContainerOffset.left;else switch(i.options.zoomWindowPosition){case 1:i.windowOffsetTop=i.options.zoomWindowOffsetY,i.windowOffsetLeft=+i.nzWidth;break;case 2:i.options.zoomWindowHeight>i.nzHeight?(i.windowOffsetTop=-1*(i.options.zoomWindowHeight/2-i.nzHeight/2),i.windowOffsetLeft=i.nzWidth):o.noop();break;case 3:i.windowOffsetTop=i.nzHeight-i.zoomWindow.height()-2*i.options.borderSize,i.windowOffsetLeft=i.nzWidth;break;case 4:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=i.nzWidth;break;case 5:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=i.nzWidth-i.zoomWindow.width()-2*i.options.borderSize;break;case 6:i.options.zoomWindowHeight>i.nzHeight?(i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=-1*(i.options.zoomWindowWidth/2-i.nzWidth/2+2*i.options.borderSize)):o.noop();break;case 7:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=0;break;case 8:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 9:i.windowOffsetTop=i.nzHeight-i.zoomWindow.height()-2*i.options.borderSize,i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 10:i.options.zoomWindowHeight>i.nzHeight?(i.windowOffsetTop=-1*(i.options.zoomWindowHeight/2-i.nzHeight/2),i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize)):o.noop();break;case 11:i.windowOffsetTop=i.options.zoomWindowOffsetY,i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 12:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 13:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=0;break;case 14:i.options.zoomWindowHeight>i.nzHeight?(i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=-1*(i.options.zoomWindowWidth/2-i.nzWidth/2+2*i.options.borderSize)):o.noop();break;case 15:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=i.nzWidth-i.zoomWindow.width()-2*i.options.borderSize;break;case 16:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=i.nzWidth;break;default:i.windowOffsetTop=i.options.zoomWindowOffsetY,i.windowOffsetLeft=i.nzWidth}if(i.isWindowSet=!0,i.windowOffsetTop=i.windowOffsetTop+i.options.zoomWindowOffsetY,i.windowOffsetLeft=i.windowOffsetLeft+i.options.zoomWindowOffsetX,i.zoomWindow.css({top:i.windowOffsetTop,left:i.windowOffsetLeft}),"inner"===i.options.zoomType&&i.zoomWindow.css({top:0,left:0}),i.windowLeftPos=String(-1*((e.pageX-i.nzOffset.left)*i.widthRatio-i.zoomWindow.width()/2)),i.windowTopPos=String(-1*((e.pageY-i.nzOffset.top)*i.heightRatio-i.zoomWindow.height()/2)),i.Etoppos&&(i.windowTopPos=0),i.Eloppos&&(i.windowLeftPos=0),i.Eboppos&&(i.windowTopPos=-1*(i.largeHeight/i.currentZoomLevel-i.zoomWindow.height())),i.Eroppos&&(i.windowLeftPos=-1*(i.largeWidth/i.currentZoomLevel-i.zoomWindow.width())),i.fullheight&&(i.windowTopPos=0),i.fullwidth&&(i.windowLeftPos=0),"window"===i.options.zoomType||"inner"===i.options.zoomType)if(1===i.zoomLock&&(i.widthRatio<=1&&(i.windowLeftPos=0),i.heightRatio<=1&&(i.windowTopPos=0)),"window"===i.options.zoomType&&(i.largeHeight<i.options.zoomWindowHeight&&(i.windowTopPos=0),i.largeWidth<i.options.zoomWindowWidth&&(i.windowLeftPos=0)),i.options.easing){i.xp||(i.xp=0),i.yp||(i.yp=0);var t=16;Number.isInteger(parseInt(i.options.easing))&&(t=parseInt(i.options.easing)),i.loop||(i.loop=setInterval(function(){i.xp+=(i.windowLeftPos-i.xp)/i.options.easingAmount,i.yp+=(i.windowTopPos-i.yp)/i.options.easingAmount,i.scrollingLock?(clearInterval(i.loop),i.xp=i.windowLeftPos,i.yp=i.windowTopPos,i.xp=-1*((e.pageX-i.nzOffset.left)*i.widthRatio-i.zoomWindow.width()/2),i.yp=-1*((e.pageY-i.nzOffset.top)*i.heightRatio-i.zoomWindow.height()/2),i.changeBgSize&&(i.nzHeight>i.nzWidth?("lens"===i.options.zoomType&&i.zoomLens.css("background-size",i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px"),i.zoomWindow.css("background-size",i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px")):("lens"!==i.options.zoomType&&i.zoomLens.css("background-size",i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvalueheight+"px"),i.zoomWindow.css("background-size",i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvaluewidth+"px")),i.changeBgSize=!1),i.zoomWindow.css("background-position",i.windowLeftPos+"px "+i.windowTopPos+"px"),i.scrollingLock=!1,i.loop=!1):Math.round(Math.abs(i.xp-i.windowLeftPos)+Math.abs(i.yp-i.windowTopPos))<1?(clearInterval(i.loop),i.zoomWindow.css("background-position",i.windowLeftPos+"px "+i.windowTopPos+"px"),i.loop=!1):(i.changeBgSize&&(i.nzHeight>i.nzWidth?("lens"===i.options.zoomType&&i.zoomLens.css("background-size",i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px"),i.zoomWindow.css("background-size",i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px")):("lens"!==i.options.zoomType&&i.zoomLens.css("background-size",i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvaluewidth+"px"),i.zoomWindow.css("background-size",i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvaluewidth+"px")),i.changeBgSize=!1),i.zoomWindow.css("background-position",i.xp+"px "+i.yp+"px"))},t))}else i.changeBgSize&&(i.nzHeight>i.nzWidth?("lens"===i.options.zoomType&&i.zoomLens.css("background-size",i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px"),i.zoomWindow.css("background-size",i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px")):("lens"===i.options.zoomType&&i.zoomLens.css("background-size",i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvaluewidth+"px"),i.largeHeight/i.newvaluewidth<i.options.zoomWindowHeight?i.zoomWindow.css("background-size",i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvaluewidth+"px"):i.zoomWindow.css("background-size",i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px")),i.changeBgSize=!1),i.zoomWindow.css("background-position",i.windowLeftPos+"px "+i.windowTopPos+"px")},setTintPosition:function(o){var e=this,i=e.zoomLens.width(),t=e.zoomLens.height();e.nzOffset=e.$elem.offset(),e.tintpos=String(-1*(o.pageX-e.nzOffset.left-i/2)),e.tintposy=String(-1*(o.pageY-e.nzOffset.top-t/2)),e.Etoppos&&(e.tintposy=0),e.Eloppos&&(e.tintpos=0),e.Eboppos&&(e.tintposy=-1*(e.nzHeight-t-2*e.options.lensBorderSize)),e.Eroppos&&(e.tintpos=-1*(e.nzWidth-i-2*e.options.lensBorderSize)),e.options.tint&&(e.fullheight&&(e.tintposy=0),e.fullwidth&&(e.tintpos=0),e.zoomTintImage.css({left:e.tintpos+"px",top:e.tintposy+"px"}))},swaptheimage:function(e,i){var t=this,n=new Image;if(t.options.loadingIcon&&!t.spinner){var s="background: url('"+t.options.loadingIcon+"') no-repeat center;height:"+t.nzHeight+"px;width:"+t.nzWidth+"px;z-index: 2000;position: absolute; background-position: center center;";"inner"===t.options.zoomType&&(s+="top: 0px;"),t.spinner=o('<div class="ezp-spinner" style="'+s+'"></div>'),t.$elem.after(t.spinner)}else t.spinner&&t.spinner.show();t.options.onImageSwap(t.$elem),n.onload=function(){t.largeWidth=n.width,t.largeHeight=n.height,t.zoomImage=i,t.zoomWindow.css("background-size",t.largeWidth+"px "+t.largeHeight+"px"),t.swapAction(e,i)},t.setImageSource(n,i)},swapAction:function(e,i){var t=this,n=t.$elem.width(),s=t.$elem.height(),a=new Image;if(a.onload=function(){t.nzHeight=a.height,t.nzWidth=a.width,t.options.onImageSwapComplete(t.$elem),t.doneCallback()},t.setImageSource(a,e),t.currentZoomLevel=t.options.zoomLevel,t.options.maxZoomLevel=!1,"lens"===t.options.zoomType&&t.zoomLens.css("background-image",'url("'+i+'")'),"window"===t.options.zoomType&&t.zoomWindow.css("background-image",'url("'+i+'")'),"inner"===t.options.zoomType&&t.zoomWindow.css("background-image",'url("'+i+'")'),t.currentImage=i,t.options.imageCrossfade){var h=t.$elem,d=h.clone();if(t.$elem.attr("src",e),t.$elem.after(d),d.stop(!0).fadeOut(t.options.imageCrossfade,function(){o(this).remove()}),t.$elem.width("auto").removeAttr("width"),t.$elem.height("auto").removeAttr("height"),h.fadeIn(t.options.imageCrossfade),t.options.tint&&"inner"!==t.options.zoomType){var p=t.zoomTintImage,r=p.clone();t.zoomTintImage.attr("src",i),t.zoomTintImage.after(r),r.stop(!0).fadeOut(t.options.imageCrossfade,function(){o(this).remove()}),p.fadeIn(t.options.imageCrossfade),t.zoomTint.css({height:s,width:n})}t.zoomContainer.css({height:s,width:n}),"inner"===t.options.zoomType&&(t.options.constrainType||(t.zoomWrap.parent().css({height:s,width:n}),t.zoomWindow.css({height:s,width:n}))),t.options.imageCrossfade&&t.zoomWrap.css({height:s,width:n})}else t.$elem.attr("src",e),t.options.tint&&(t.zoomTintImage.attr("src",i),t.zoomTintImage.attr("height",s),t.zoomTintImage.css("height",s),t.zoomTint.css("height",s)),t.zoomContainer.css({height:s,width:n}),t.options.imageCrossfade&&t.zoomWrap.css({height:s,width:n});if(t.options.constrainType){if("height"===t.options.constrainType){var l={height:t.options.constrainSize,width:"auto"};t.zoomContainer.css(l),t.options.imageCrossfade?(t.zoomWrap.css(l),t.constwidth=t.zoomWrap.width()):(t.$elem.css(l),t.constwidth=n);var m={height:t.options.constrainSize,width:t.constwidth};"inner"===t.options.zoomType&&(t.zoomWrap.parent().css(m),t.zoomWindow.css(m)),t.options.tint&&(t.tintContainer.css(m),t.zoomTint.css(m),t.zoomTintImage.css(m))}if("width"===t.options.constrainType){var g={height:"auto",width:t.options.constrainSize};t.zoomContainer.css(g),t.options.imageCrossfade?(t.zoomWrap.css(g),t.constheight=t.zoomWrap.height()):(t.$elem.css(g),t.constheight=s);var w={height:t.constheight,width:t.options.constrainSize};"inner"===t.options.zoomType&&(t.zoomWrap.parent().css(w),t.zoomWindow.css(w)),t.options.tint&&(t.tintContainer.css(w),t.zoomTint.css(w),t.zoomTintImage.css(w))}}},doneCallback:function(){var o=this;o.options.loadingIcon&&o.spinner&&o.spinner.length&&o.spinner.hide(),o.nzOffset=o.$elem.offset(),o.nzWidth=o.$elem.width(),o.nzHeight=o.$elem.height(),o.currentZoomLevel=o.options.zoomLevel,o.widthRatio=o.largeWidth/o.nzWidth,o.heightRatio=o.largeHeight/o.nzHeight,"window"===o.options.zoomType&&(o.nzHeight<o.options.zoomWindowHeight/o.heightRatio?o.lensHeight=o.nzHeight:o.lensHeight=String(o.options.zoomWindowHeight/o.heightRatio),o.nzWidth<o.options.zoomWindowWidth?o.lensWidth=o.nzWidth:o.lensWidth=o.options.zoomWindowWidth/o.widthRatio,o.zoomLens&&o.zoomLens.css({width:o.lensWidth,height:o.lensHeight}))},getCurrentImage:function(){var o=this;return o.zoomImage},getGalleryList:function(){var e=this;return e.gallerylist=[],e.options.gallery?o("#"+e.options.gallery+" a").each(function(){var i="";o(this).data(e.options.attrImageZoomSrc)?i=o(this).data(e.options.attrImageZoomSrc):o(this).data("image")&&(i=o(this).data("image")),i===e.zoomImage?e.gallerylist.unshift({href:""+i,title:o(this).find("img").attr("title")}):e.gallerylist.push({href:""+i,title:o(this).find("img").attr("title")})}):e.gallerylist.push({href:""+e.zoomImage,title:o(this).find("img").attr("title")}),e.gallerylist},changeZoomLevel:function(o){var e=this;e.scrollingLock=!0,e.newvalue=parseFloat(o).toFixed(2);var i=e.newvalue,t=e.largeHeight/(e.options.zoomWindowHeight/e.nzHeight*e.nzHeight),n=e.largeWidth/(e.options.zoomWindowWidth/e.nzWidth*e.nzWidth);"inner"!==e.options.zoomType&&(i>=t?(e.heightRatio=e.largeHeight/t/e.nzHeight,e.newvalueheight=t,e.fullheight=!0):(e.heightRatio=e.largeHeight/i/e.nzHeight,e.newvalueheight=i,e.fullheight=!1),i>=n?(e.widthRatio=e.largeWidth/n/e.nzWidth,e.newvaluewidth=n,e.fullwidth=!0):(e.widthRatio=e.largeWidth/i/e.nzWidth,e.newvaluewidth=i,e.fullwidth=!1),"lens"===e.options.zoomType&&(i>=t?(e.fullwidth=!0,e.newvaluewidth=t):(e.widthRatio=e.largeWidth/i/e.nzWidth,e.newvaluewidth=i,e.fullwidth=!1))),"inner"===e.options.zoomType&&(t=parseFloat(e.largeHeight/e.nzHeight).toFixed(2),n=parseFloat(e.largeWidth/e.nzWidth).toFixed(2),i>t&&(i=t),i>n&&(i=n),i>=t?(e.heightRatio=e.largeHeight/i/e.nzHeight,i>t?e.newvalueheight=t:e.newvalueheight=i,e.fullheight=!0):(e.heightRatio=e.largeHeight/i/e.nzHeight,i>t?e.newvalueheight=t:e.newvalueheight=i,e.fullheight=!1),i>=n?(e.widthRatio=e.largeWidth/i/e.nzWidth,i>n?e.newvaluewidth=n:e.newvaluewidth=i,e.fullwidth=!0):(e.widthRatio=e.largeWidth/i/e.nzWidth,e.newvaluewidth=i,e.fullwidth=!1));var s=!1;"inner"===e.options.zoomType&&(e.nzWidth>=e.nzHeight&&(e.newvaluewidth<=n?s=!0:(s=!1,e.fullheight=!0,e.fullwidth=!0)),e.nzHeight>e.nzWidth&&(e.newvaluewidth<=n?s=!0:(s=!1,e.fullheight=!0,e.fullwidth=!0))),"inner"!==e.options.zoomType&&(s=!0),s&&(e.zoomLock=0,e.changeZoom=!0,e.options.zoomWindowHeight/e.heightRatio<=e.nzHeight&&(e.currentZoomLevel=e.newvalueheight,"lens"!==e.options.zoomType&&"inner"!==e.options.zoomType&&(e.changeBgSize=!0,e.zoomLens.css("height",String(e.options.zoomWindowHeight/e.heightRatio)+"px")),("lens"===e.options.zoomType||"inner"===e.options.zoomType)&&(e.changeBgSize=!0)),e.options.zoomWindowWidth/e.widthRatio<=e.nzWidth&&("inner"!==e.options.zoomType&&e.newvaluewidth>e.newvalueheight&&(e.currentZoomLevel=e.newvaluewidth),"lens"!==e.options.zoomType&&"inner"!==e.options.zoomType&&(e.changeBgSize=!0,e.zoomLens.css("width",String(e.options.zoomWindowWidth/e.widthRatio)+"px")),("lens"===e.options.zoomType||"inner"===e.options.zoomType)&&(e.changeBgSize=!0)),"inner"===e.options.zoomType&&(e.changeBgSize=!0,e.nzWidth>e.nzHeight?e.currentZoomLevel=e.newvaluewidth:e.nzHeight>=e.nzWidth&&(e.currentZoomLevel=e.newvaluewidth))),e.setPosition(e.currentLoc)},closeAll:function(){var o=this;o.zoomWindow&&o.zoomWindow.hide(),o.zoomLens&&o.zoomLens.hide(),o.zoomTint&&o.zoomTint.hide()},changeState:function(o){var e=this;"enable"===o&&(e.options.zoomEnabled=!0),"disable"===o&&(e.options.zoomEnabled=!1)},responsiveConfig:function(e){return e.respond&&e.respond.length>0?o.extend({},e,this.configByScreenWidth(e)):e},configByScreenWidth:function(i){var t=o(e).width(),n=o.grep(i.respond,function(o){var e=o.range.split("-");return t>=e[0]&&t<=e[1]});return n.length>0?n[0]:i}};o.fn.ezPlus=function(e){return this.each(function(){var i=Object.create(n);i.init(e,this),o.data(this,"ezPlus",i)})},o.fn.ezPlus.options={attrImageZoomSrc:"data-zoom-image",borderColour:"#888",borderSize:4,constrainSize:!1,constrainType:!1,containLensZoom:!1,cursor:"inherit",debug:!1,easing:!1,easingAmount:12,enabled:!0,gallery:!1,galleryActiveClass:"zoomGalleryActive",gallerySelector:!1,galleryItem:"a",imageCrossfade:!1,lensBorderColour:"#000",lensBorderSize:1,lensColour:"white",lensFadeIn:!1,lensFadeOut:!1,lensOpacity:.4,lensShape:"square",lensSize:200,lenszoom:!1,loadingIcon:!1,mantainZoomAspectRatio:!1,maxZoomLevel:!1,minZoomLevel:1.01,onComplete:o.noop,onDestroy:o.noop,onImageClick:o.noop,onImageSwap:o.noop,onImageSwapComplete:o.noop,onShow:o.noop,onZoomedImageLoaded:o.noop,preloading:1,respond:[],responsive:!0,scrollZoom:!1,scrollZoomIncrement:.1,showLens:!0,tint:!1,tintColour:"#333",tintOpacity:.4,touchEnabled:!0,zoomActivation:"hover",
zoomContainerAppendTo:"body",zoomId:-1,zoomLevel:1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,zoomType:"window",zoomWindowAlwaysShow:!1,zoomWindowBgColour:"#fff",zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowHeight:400,zoomWindowOffsetX:0,zoomWindowOffsetY:0,zoomWindowPosition:1,zoomWindowWidth:400,zoomEnabled:!0,zIndex:999}}(jQuery,window,document);

/***/ }),

/***/ "./src/assets/js/instafeed/instafeed.min.js":
/*!**************************************************!*\
  !*** ./src/assets/js/instafeed/instafeed.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.9.3
(function(){var e;e=function(){function e(e,t){var n,r;this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1};if(typeof e=="object")for(n in e)r=e[n],this.options[n]=r;this.context=t!=null?t:this,this.unique=this._genKey()}return e.prototype.hasNext=function(){return typeof this.context.nextUrl=="string"&&this.context.nextUrl.length>0},e.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},e.prototype.run=function(t){var n,r,i;if(typeof this.options.clientId!="string"&&typeof this.options.accessToken!="string")throw new Error("Missing clientId or accessToken.");if(typeof this.options.accessToken!="string"&&typeof this.options.clientId!="string")throw new Error("Missing clientId or accessToken.");return this.options.before!=null&&typeof this.options.before=="function"&&this.options.before.call(this),typeof document!="undefined"&&document!==null&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=t||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),r="instafeedCache"+this.unique,window[r]=new e(this.options,this),window[r].unique=this.unique),!0},e.prototype.parse=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D;if(typeof e!="object"){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(e.meta.code!==200){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,e.meta.error_message),!1;throw new Error("Error from Instagram: "+e.meta.error_message)}if(e.data.length===0){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}this.options.success!=null&&typeof this.options.success=="function"&&this.options.success.call(this,e),this.context.nextUrl="",e.pagination!=null&&(this.context.nextUrl=e.pagination.next_url);if(this.options.sortBy!=="none"){this.options.sortBy==="random"?M=["","random"]:M=this.options.sortBy.split("-"),O=M[0]==="least"?!0:!1;switch(M[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",O);break;case"liked":e.data=this._sortBy(e.data,"likes.count",O);break;case"commented":e.data=this._sortBy(e.data,"comments.count",O);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}}if(typeof document!="undefined"&&document!==null&&this.options.mock===!1){m=e.data,A=parseInt(this.options.limit,10),this.options.limit!=null&&m.length>A&&(m=m.slice(0,A)),u=document.createDocumentFragment(),this.options.filter!=null&&typeof this.options.filter=="function"&&(m=this._filter(m,this.options.filter));if(this.options.template!=null&&typeof this.options.template=="string"){f="",d="",w="",D=document.createElement("div");for(c=0,N=m.length;c<N;c++){h=m[c],p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);E=p.width,y=p.height,b="square",E>y&&(b="landscape"),E<y&&(b="portrait"),v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),d=this._makeTemplate(this.options.template,{model:h,id:h.id,link:h.link,type:h.type,image:v,width:E,height:y,orientation:b,caption:this._getObjectProperty(h,"caption.text"),likes:h.likes.count,comments:h.comments.count,location:this._getObjectProperty(h,"location.name")}),f+=d}D.innerHTML=f,i=[],r=0,n=D.childNodes.length;while(r<n)i.push(D.childNodes[r]),r+=1;for(x=0,C=i.length;x<C;x++)L=i[x],u.appendChild(L)}else for(T=0,k=m.length;T<k;T++){h=m[T],g=document.createElement("img"),p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),g.src=v,this.options.links===!0?(t=document.createElement("a"),t.href=h.link,t.appendChild(g),u.appendChild(t)):u.appendChild(g)}_=this.options.target,typeof _=="string"&&(_=document.getElementById(_));if(_==null)throw o='No element with id="'+this.options.target+'" on page.',new Error(o);_.appendChild(u),a=document.getElementsByTagName("head")[0],a.removeChild(document.getElementById("instafeed-fetcher")),S="instafeedCache"+this.unique,window[S]=void 0;try{delete window[S]}catch(P){s=P}}return this.options.after!=null&&typeof this.options.after=="function"&&this.options.after.call(this),!0},e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=e+"/"+t,this.options.accessToken!=null?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,this.options.limit!=null&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse",n},e.prototype._genKey=function(){var e;return e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)},""+e()+e()+e()+e()},e.prototype._makeTemplate=function(e,t){var n,r,i,s,o;r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=e;while(r.test(n))s=n.match(r)[1],o=(i=this._getObjectProperty(t,s))!=null?i:"",n=n.replace(r,function(){return""+o});return n},e.prototype._getObjectProperty=function(e,t){var n,r;t=t.replace(/\[(\w+)\]/g,".$1"),r=t.split(".");while(r.length){n=r.shift();if(!(e!=null&&n in e))return null;e=e[n]}return e},e.prototype._sortBy=function(e,t,n){var r;return r=function(e,r){var i,s;return i=this._getObjectProperty(e,t),s=this._getObjectProperty(r,t),n?i>s?1:-1:i<s?1:-1},e.sort(r.bind(this)),e},e.prototype._filter=function(e,t){var n,r,i,s,o;n=[],r=function(e){if(t(e))return n.push(e)};for(i=0,o=e.length;i<o;i++)s=e[i],r(s);return n},e}(),function(e,t){return  true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){return e})}).call(this);

/***/ }),

/***/ "./src/assets/js/magnificpopup/dist/jquery.magnific-popup.js":
/*!*******************************************************************!*\
  !*** ./src/assets/js/magnificpopup/dist/jquery.magnific-popup.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});

/***/ }),

/***/ "./src/assets/js/megamenu.min.js":
/*!***************************************!*\
  !*** ./src/assets/js/megamenu.min.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$.fn.megaMenu=function(){var $menu=$(this);var $submenu=$('.sub-menu',$menu);var wHeight=$(window).height();var timer;function setMaxHeight(wHeight){var maxH=$(window).height()-$('.page-header').height();$menu.data('setHeight',true);if(!$menu.hasClass('vertical')){$submenu.each(function(){var el=$(this);if(el.closest('.page-header.variant-3').length){maxH=el.offset().top+el.outerHeight(true);}
el.css({'max-height':maxH+'px'});})
$('.slick-initialized',$menu).slick('setPosition');}}
$(window).bind('resize',function(){$menu.removeData('setHeight');});if($('body').hasClass('touch')){$menu.on("click.megamenu",".sub-menu a",function(e){var $this=$(this);if(!$this.data('firstclick')){$this.data('firstclick',true);e.preventDefault();}})
$menu.on("click.megamenu","li.mega-dropdown > a,li.simple-dropdown > a",function(e){if(!$(this).parent('li').hasClass('hovered')){if($('.page-header').is('.is-sticky')){setMaxHeight($(window).height());}
else if(!$menu.data('setHeight')){setMaxHeight($(window).height());}
$submenu.scrollTop(0);if($menu.hasClass('blackout')&&!$menu.hasClass('department')){$("#wrapper").addClass('overlay');}
$('li',$menu).removeClass('hovered');$(this).parent('li').addClass('hovered');$menu.data('opened',true);e.preventDefault();}
else{if($menu.hasClass('blackout')&&!$menu.hasClass('department')){$("#wrapper").removeClass('overlay');}
$(this).parent('li').removeClass('hovered');$menu.removeData('opened');$('.sub-menu a',$menu).removeData('firstclick');}})
$menu.on("click.megamenu",function(){event.stopPropagation();})
$('#wrapper').on('click',function(){if($menu.data('opened')){$('li',$menu).removeClass('hovered');$('.sub-menu a',$menu).removeData('firstclick');if($menu.hasClass('blackout')&&!$menu.hasClass('department')){$("#wrapper").removeClass('overlay');}}});}else{$menu.on("mouseenter","li.mega-dropdown > a,li.simple-dropdown > a",function(){if($('.page-header').is('.is-sticky')){setMaxHeight($(window).height());}
else if(!$menu.data('setHeight')){setMaxHeight($(window).height());}
$submenu.scrollTop(0);if($menu.hasClass('blackout')&&!$menu.hasClass('department')){$("#wrapper").addClass('overlay');}
$(this).parent('li').addClass('hovered');}).on("mouseleave","li.mega-dropdown,li.simple-dropdown",function(){if($menu.hasClass('blackout')&&!$menu.hasClass('department')){$("#wrapper").removeClass('overlay');}
$(this).parent('li').removeClass('hovered');});$menu.on("mouseleave","li.mega-dropdown,li.simple-dropdown",function(){if($menu.hasClass('blackout')&&!$menu.hasClass('department')){$("#wrapper").removeClass('overlay');}
$(this).removeClass('hovered');});}
$(".toggleHeader").on('click',function(e){$('.page-header').toggleClass('open');$(this).toggleClass('open');$menu.addClass('disable').delay(1000).queue(function(){$(this).removeClass('disable');$(this).dequeue();});e.preventDefault();})
$(".simple-dropdown li",$menu).on('mouseenter mouseleave',function(e){if($('ul',this).length){var $elm=$('ul:first',this),windowW=$(window).width(),isEntirelyVisible=($elm.offset().left+$elm.width()<=windowW);if($('body').hasClass('rtl')){isEntirelyVisible=($elm.offset().left>=0);}
if(!isEntirelyVisible){$(this).addClass('edge');}else{setTimeout(function(){$(this).removeClass('edge');},300);}}});}

/***/ }),

/***/ "./src/assets/js/slick/slick.min.js":
/*!******************************************!*\
  !*** ./src/assets/js/slick/slick.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
!function(i){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (i),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(i){"use strict";var e=window.Slick||{};e=function(){function e(e,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(e),appendDots:i(e),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" data-role="none" role="button" tabindex="0" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(e),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(e).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,"undefined"!=typeof document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=t++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}var t=0;return e}(),e.prototype.activateADA=function(){var i=this;i.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(0>t||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):o===!0?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),s.options.rtl===!0&&s.options.vertical===!1&&(e=-e),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):s.cssTransitions===!1?(s.options.rtl===!0&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),s.options.vertical===!1?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),s.options.vertical===!1?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this,o=t.getNavTarget();null!==o&&"object"==typeof o&&o.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};e.options.fade===!1?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(i.options.infinite===!1&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1===0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),(e.options.centerMode===!0||e.options.swipeToSlide===!0)&&(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;s>i;i++){var a=document.createElement("div");for(e=0;e<l.options.rows;e++){var d=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&d.appendChild(n.get(c))}a.appendChild(d)}o.appendChild(a)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,a=r.$slider.width(),d=window.innerWidth||i(window).width();if("window"===r.respondTo?n=d:"slider"===r.respondTo?n=a:"min"===r.respondTo&&(n=Math.min(d,a)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(r.originalSettings.mobileFirst===!1?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||l===!1||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!==0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var a=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(a),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t,o=this;if(e=o.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var s in e){if(i<e[s]){i=t;break}t=e[s]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),e.$slider.off("focus.slick blur.slick"),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide)),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),e.options.accessibility===!0&&e.$list.off("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition),i(document).off("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&(i=e.$slides.children().children(),i.removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){var e=this;e.shouldClick===!1&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;t.cssTransitions===!1?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;e.cssTransitions===!1?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var i=this;return i.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(i.options.infinite===!0)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(i.options.centerMode===!0)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s=this,n=0;return s.slideOffset=0,t=s.$slides.first().outerHeight(!0),s.options.infinite===!0?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,n=t*s.options.slidesToShow*-1),s.slideCount%s.options.slidesToScroll!==0&&i+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(i>s.slideCount?(s.slideOffset=(s.options.slidesToShow-(i-s.slideCount))*s.slideWidth*-1,n=(s.options.slidesToShow-(i-s.slideCount))*t*-1):(s.slideOffset=s.slideCount%s.options.slidesToScroll*s.slideWidth*-1,n=s.slideCount%s.options.slidesToScroll*t*-1))):i+s.options.slidesToShow>s.slideCount&&(s.slideOffset=(i+s.options.slidesToShow-s.slideCount)*s.slideWidth,n=(i+s.options.slidesToShow-s.slideCount)*t),s.slideCount<=s.options.slidesToShow&&(s.slideOffset=0,n=0),s.options.centerMode===!0&&s.options.infinite===!0?s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth:s.options.centerMode===!0&&(s.slideOffset=0,s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)),e=s.options.vertical===!1?i*s.slideWidth*-1+s.slideOffset:i*t*-1+n,s.options.variableWidth===!0&&(o=s.slideCount<=s.options.slidesToShow||s.options.infinite===!1?s.$slideTrack.children(".slick-slide").eq(i):s.$slideTrack.children(".slick-slide").eq(i+s.options.slidesToShow),e=s.options.rtl===!0?o[0]?-1*(s.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,s.options.centerMode===!0&&(o=s.slideCount<=s.options.slidesToShow||s.options.infinite===!1?s.$slideTrack.children(".slick-slide").eq(i):s.$slideTrack.children(".slick-slide").eq(i+s.options.slidesToShow+1),e=s.options.rtl===!0?o[0]?-1*(s.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(s.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){var e=this;return e.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(e.options.infinite===!1?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);i>t;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o,s=this;return o=s.options.centerMode===!0?s.slideWidth*Math.floor(s.options.slidesToShow/2):0,s.options.swipeToSlide===!0?(s.$slideTrack.find(".slick-slide").each(function(e,n){return n.offsetLeft-o+i(n).outerWidth()/2>-1*s.swipeLeft?(t=n,!1):void 0}),e=Math.abs(i(t).attr("data-slick-index")-s.currentSlide)||1):s.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){var t=this;t.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),t.options.accessibility===!0&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this;e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),e.$slideTrack.attr("role","listbox"),e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){i(this).attr({role:"option","aria-describedby":"slick-slide"+e.instanceUid+t})}),null!==e.$dots&&e.$dots.attr("role","tablist").find("li").each(function(t){i(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+e.instanceUid+t,id:"slick-slide"+e.instanceUid+t})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(document).on("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.initUI=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:e.options.rtl===!0?"next":"previous"}}):39===i.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:e.options.rtl===!0?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=document.createElement("img");o.onload=function(){e.animate({opacity:0},100,function(){e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,e,t])})},o.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,t])},o.src=t})}var t,o,s,n,r=this;r.options.centerMode===!0?r.options.infinite===!0?(s=r.currentSlide+(r.options.slidesToShow/2+1),n=s+r.options.slidesToShow+2):(s=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),n=2+(r.options.slidesToShow/2+1)+r.currentSlide):(s=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,n=Math.ceil(s+r.options.slidesToShow),r.options.fade===!0&&(s>0&&s--,n<=r.slideCount&&n++)),t=r.$slider.find(".slick-slide").slice(s,n),e(t),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),e(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),e(o)):0===r.currentSlide&&(o=r.$slider.find(".slick-cloned").slice(-1*r.options.slidesToShow),e(o))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var i=this;i.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(i){var e=this;e.unslicked||(e.$slider.trigger("afterChange",[e,i]),e.animating=!1,e.setPosition(),e.swipeLeft=null,e.options.autoplay&&e.autoPlay(),e.options.accessibility===!0&&e.initADA())},e.prototype.prev=e.prototype.slickPrev=function(){var i=this;i.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n=this,r=i("img[data-lazy]",n.$slider);r.length?(t=r.first(),o=t.attr("data-lazy"),s=document.createElement("img"),s.onload=function(){t.attr("src",o).removeAttr("data-lazy").removeClass("slick-loading"),n.options.adaptiveHeight===!0&&n.setPosition(),n.$slider.trigger("lazyLoaded",[n,t,o]),n.progressiveLazyLoad()},s.onerror=function(){3>e?setTimeout(function(){n.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,t,o]),n.progressiveLazyLoad())},s.src=o):n.$slider.trigger("allImagesLoaded",[n])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,t=n[e].breakpoint,n.hasOwnProperty(e)){for(;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;return"boolean"==typeof i?(e=i,i=e===!0?0:o.slideCount-1):i=e===!0?--i:i,o.slideCount<1||0>i||i>o.slideCount-1?!1:(o.unload(),t===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},e.prototype.setCSS=function(i){var e,t,o=this,s={};o.options.rtl===!0&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,o.transformsEnabled===!1?o.$slideTrack.css(s):(s={},o.cssTransitions===!1?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;i.options.vertical===!1?i.options.centerMode===!0&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),i.options.centerMode===!0&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),i.options.vertical===!1&&i.options.variableWidth===!1?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):i.options.variableWidth===!0?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();i.options.variableWidth===!1&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,t.options.rtl===!0?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":"undefined"!=typeof arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),i.options.fade===!1?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=i.options.vertical===!0?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),(void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.msTransition)&&i.options.useCSS===!0&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&i.animType!==!1&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&i.animType!==!1},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),n.options.centerMode===!0?(e=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,
t.slice(o-e+1,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")):i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=n.options.infinite===!0?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===n.options.lazyLoad&&n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(s.options.fade===!0&&(s.options.centerMode=!1),s.options.infinite===!0&&s.options.fade===!1&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=s.options.centerMode===!0?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;o>e;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));return s||(s=0),t.slideCount<=t.options.slidesToShow?(t.setSlideClasses(s),void t.asNavFor(s)):void t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,a=null,d=this;return e=e||!1,d.animating===!0&&d.options.waitForAnimate===!0||d.options.fade===!0&&d.currentSlide===i||d.slideCount<=d.options.slidesToShow?void 0:(e===!1&&d.asNavFor(i),o=i,a=d.getLeft(o),r=d.getLeft(d.currentSlide),d.currentLeft=null===d.swipeLeft?r:d.swipeLeft,d.options.infinite===!1&&d.options.centerMode===!1&&(0>i||i>d.getDotCount()*d.options.slidesToScroll)?void(d.options.fade===!1&&(o=d.currentSlide,t!==!0?d.animateSlide(r,function(){d.postSlide(o)}):d.postSlide(o))):d.options.infinite===!1&&d.options.centerMode===!0&&(0>i||i>d.slideCount-d.options.slidesToScroll)?void(d.options.fade===!1&&(o=d.currentSlide,t!==!0?d.animateSlide(r,function(){d.postSlide(o)}):d.postSlide(o))):(d.options.autoplay&&clearInterval(d.autoPlayTimer),s=0>o?d.slideCount%d.options.slidesToScroll!==0?d.slideCount-d.slideCount%d.options.slidesToScroll:d.slideCount+o:o>=d.slideCount?d.slideCount%d.options.slidesToScroll!==0?0:o-d.slideCount:o,d.animating=!0,d.$slider.trigger("beforeChange",[d,d.currentSlide,s]),n=d.currentSlide,d.currentSlide=s,d.setSlideClasses(d.currentSlide),d.options.asNavFor&&(l=d.getNavTarget(),l=l.slick("getSlick"),l.slideCount<=l.options.slidesToShow&&l.setSlideClasses(d.currentSlide)),d.updateDots(),d.updateArrows(),d.options.fade===!0?(t!==!0?(d.fadeSlideOut(n),d.fadeSlide(s,function(){d.postSlide(s)})):d.postSlide(s),void d.animateHeight()):void(t!==!0?d.animateSlide(a,function(){d.postSlide(s)}):d.postSlide(s))))},e.prototype.startLoad=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),o=Math.round(180*t/Math.PI),0>o&&(o=360-Math.abs(o)),45>=o&&o>=0?s.options.rtl===!1?"left":"right":360>=o&&o>=315?s.options.rtl===!1?"left":"right":o>=135&&225>=o?s.options.rtl===!1?"right":"left":s.options.verticalSwiping===!0?o>=35&&135>=o?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.interrupted=!1,o.shouldClick=o.touchObject.swipeLength>10?!1:!0,void 0===o.touchObject.curX)return!1;if(o.touchObject.edgeHit===!0&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!r.dragging||n&&1!==n.length?!1:(e=r.getLeft(r.currentSlide),r.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,r.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,r.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(r.touchObject.curX-r.touchObject.startX,2))),r.options.verticalSwiping===!0&&(r.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(r.touchObject.curY-r.touchObject.startY,2)))),t=r.swipeDirection(),"vertical"!==t?(void 0!==i.originalEvent&&r.touchObject.swipeLength>4&&i.preventDefault(),s=(r.options.rtl===!1?1:-1)*(r.touchObject.curX>r.touchObject.startX?1:-1),r.options.verticalSwiping===!0&&(s=r.touchObject.curY>r.touchObject.startY?1:-1),o=r.touchObject.swipeLength,r.touchObject.edgeHit=!1,r.options.infinite===!1&&(0===r.currentSlide&&"right"===t||r.currentSlide>=r.getDotCount()&&"left"===t)&&(o=r.touchObject.swipeLength*r.options.edgeFriction,r.touchObject.edgeHit=!0),r.options.vertical===!1?r.swipeLeft=e+o*s:r.swipeLeft=e+o*(r.$list.height()/r.listWidth)*s,r.options.verticalSwiping===!0&&(r.swipeLeft=e+o*s),r.options.fade===!0||r.options.touchMove===!1?!1:r.animating===!0?(r.swipeLeft=null,!1):void r.setCSS(r.swipeLeft)):void 0)},e.prototype.swipeStart=function(i){var e,t=this;return t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,void(t.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i,e=this;i=Math.floor(e.options.slidesToShow/2),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===!1?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&e.options.centerMode===!0&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;r>i;i++)if("object"==typeof s||"undefined"==typeof s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),"undefined"!=typeof t)return t;return o}});

/***/ }),

/***/ "./src/assets/js/swiper/swiper.min.js":
/*!********************************************!*\
  !*** ./src/assets/js/swiper/swiper.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Swiper 3.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: February 7, 2016
 */
!function(){"use strict";function e(e){e.fn.swiper=function(a){var r;return e(this).each(function(){var e=new t(this,a);r||(r=e)}),r}}var a,t=function(e,i){function s(e){return Math.floor(e)}function n(){b.autoplayTimeoutId=setTimeout(function(){b.params.loop?(b.fixLoop(),b._slideNext(),b.emit("onAutoplay",b)):b.isEnd?i.autoplayStopOnLast?b.stopAutoplay():(b._slideTo(0),b.emit("onAutoplay",b)):(b._slideNext(),b.emit("onAutoplay",b))},b.params.autoplay)}function o(e,t){var r=a(e.target);if(!r.is(t))if("string"==typeof t)r=r.parents(t);else if(t.nodeType){var i;return r.parents().each(function(e,a){a===t&&(i=t)}),i?t:void 0}if(0!==r.length)return r[0]}function l(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,r=new t(function(e){e.forEach(function(e){b.onResize(!0),b.emit("onObserverUpdate",b,e)})});r.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),b.observers.push(r)}function p(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!b.params.allowSwipeToNext&&(b.isHorizontal()&&39===a||!b.isHorizontal()&&40===a))return!1;if(!b.params.allowSwipeToPrev&&(b.isHorizontal()&&37===a||!b.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(b.container.parents(".swiper-slide").length>0&&0===b.container.parents(".swiper-slide-active").length)return;var r={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,s=window.innerHeight,n=b.container.offset();b.rtl&&(n.left=n.left-b.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+b.width,n.top],[n.left,n.top+b.height],[n.left+b.width,n.top+b.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=r.left&&p[0]<=r.left+i&&p[1]>=r.top&&p[1]<=r.top+s&&(t=!0)}if(!t)return}b.isHorizontal()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!b.rtl||37===a&&b.rtl)&&b.slideNext(),(37===a&&!b.rtl||39===a&&b.rtl)&&b.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&b.slideNext(),38===a&&b.slidePrev())}}function d(e){e.originalEvent&&(e=e.originalEvent);var a=b.mousewheel.event,t=0,r=b.rtl?-1:1;if("mousewheel"===a)if(b.params.mousewheelForceToAxis)if(b.isHorizontal()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX*r}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*r:-e.wheelDeltaY;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(b.params.mousewheelForceToAxis)if(b.isHorizontal()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX*r}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*r:-e.deltaY;if(0!==t){if(b.params.mousewheelInvert&&(t=-t),b.params.freeMode){var i=b.getWrapperTranslate()+t*b.params.mousewheelSensitivity,s=b.isBeginning,n=b.isEnd;if(i>=b.minTranslate()&&(i=b.minTranslate()),i<=b.maxTranslate()&&(i=b.maxTranslate()),b.setWrapperTransition(0),b.setWrapperTranslate(i),b.updateProgress(),b.updateActiveIndex(),(!s&&b.isBeginning||!n&&b.isEnd)&&b.updateClasses(),b.params.freeModeSticky?(clearTimeout(b.mousewheel.timeout),b.mousewheel.timeout=setTimeout(function(){b.slideReset()},300)):b.params.lazyLoading&&b.lazy&&b.lazy.load(),0===i||i===b.maxTranslate())return}else{if((new window.Date).getTime()-b.mousewheel.lastScrollTime>60)if(0>t)if(b.isEnd&&!b.params.loop||b.animating){if(b.params.mousewheelReleaseOnEdges)return!0}else b.slideNext();else if(b.isBeginning&&!b.params.loop||b.animating){if(b.params.mousewheelReleaseOnEdges)return!0}else b.slidePrev();b.mousewheel.lastScrollTime=(new window.Date).getTime()}return b.params.autoplay&&b.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function u(e,t){e=a(e);var r,i,s,n=b.rtl?-1:1;r=e.attr("data-swiper-parallax")||"0",i=e.attr("data-swiper-parallax-x"),s=e.attr("data-swiper-parallax-y"),i||s?(i=i||"0",s=s||"0"):b.isHorizontal()?(i=r,s="0"):(s=r,i="0"),i=i.indexOf("%")>=0?parseInt(i,10)*t*n+"%":i*t*n+"px",s=s.indexOf("%")>=0?parseInt(s,10)*t+"%":s*t+"px",e.transform("translate3d("+i+", "+s+",0px)")}function c(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,i);var m={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},h=i&&i.virtualTranslate;i=i||{};var f={};for(var g in i)if("object"!=typeof i[g]||null===i[g]||(i[g].nodeType||i[g]===window||i[g]===document||"undefined"!=typeof r&&i[g]instanceof r||"undefined"!=typeof jQuery&&i[g]instanceof jQuery))f[g]=i[g];else{f[g]={};for(var v in i[g])f[g][v]=i[g][v]}for(var w in m)if("undefined"==typeof i[w])i[w]=m[w];else if("object"==typeof i[w])for(var y in m[w])"undefined"==typeof i[w][y]&&(i[w][y]=m[w][y]);var b=this;if(b.params=i,b.originalParams=f,b.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof r&&(a=r),("undefined"!=typeof a||(a="undefined"==typeof r?window.Dom7||window.Zepto||window.jQuery:r))&&(b.$=a,b.currentBreakpoint=void 0,b.getActiveBreakpoint=function(){if(!b.params.breakpoints)return!1;var e,a=!1,t=[];for(e in b.params.breakpoints)b.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var r=0;r<t.length;r++)e=t[r],e>=window.innerWidth&&!a&&(a=e);return a||"max"},b.setBreakpoint=function(){var e=b.getActiveBreakpoint();if(e&&b.currentBreakpoint!==e){var a=e in b.params.breakpoints?b.params.breakpoints[e]:b.originalParams,t=b.params.loop&&a.slidesPerView!==b.params.slidesPerView;for(var r in a)b.params[r]=a[r];b.currentBreakpoint=e,t&&b.destroyLoop&&b.reLoop(!0)}},b.params.breakpoints&&b.setBreakpoint(),b.container=a(e),0!==b.container.length)){if(b.container.length>1){var x=[];return b.container.each(function(){x.push(new t(this,i))}),x}b.container[0].swiper=b,b.container.data("swiper",b),b.classNames.push("swiper-container-"+b.params.direction),b.params.freeMode&&b.classNames.push("swiper-container-free-mode"),b.support.flexbox||(b.classNames.push("swiper-container-no-flexbox"),b.params.slidesPerColumn=1),b.params.autoHeight&&b.classNames.push("swiper-container-autoheight"),(b.params.parallax||b.params.watchSlidesVisibility)&&(b.params.watchSlidesProgress=!0),["cube","coverflow","flip"].indexOf(b.params.effect)>=0&&(b.support.transforms3d?(b.params.watchSlidesProgress=!0,b.classNames.push("swiper-container-3d")):b.params.effect="slide"),"slide"!==b.params.effect&&b.classNames.push("swiper-container-"+b.params.effect),"cube"===b.params.effect&&(b.params.resistanceRatio=0,b.params.slidesPerView=1,b.params.slidesPerColumn=1,b.params.slidesPerGroup=1,b.params.centeredSlides=!1,b.params.spaceBetween=0,b.params.virtualTranslate=!0,b.params.setWrapperSize=!1),("fade"===b.params.effect||"flip"===b.params.effect)&&(b.params.slidesPerView=1,b.params.slidesPerColumn=1,b.params.slidesPerGroup=1,b.params.watchSlidesProgress=!0,b.params.spaceBetween=0,b.params.setWrapperSize=!1,"undefined"==typeof h&&(b.params.virtualTranslate=!0)),b.params.grabCursor&&b.support.touch&&(b.params.grabCursor=!1),b.wrapper=b.container.children("."+b.params.wrapperClass),b.params.pagination&&(b.paginationContainer=a(b.params.pagination),b.params.uniqueNavElements&&"string"==typeof b.params.pagination&&b.paginationContainer.length>1&&1===b.container.find(b.params.pagination).length&&(b.paginationContainer=b.container.find(b.params.pagination)),"bullets"===b.params.paginationType&&b.params.paginationClickable?b.paginationContainer.addClass("swiper-pagination-clickable"):b.params.paginationClickable=!1,b.paginationContainer.addClass("swiper-pagination-"+b.params.paginationType)),(b.params.nextButton||b.params.prevButton)&&(b.params.nextButton&&(b.nextButton=a(b.params.nextButton),b.params.uniqueNavElements&&"string"==typeof b.params.nextButton&&b.nextButton.length>1&&1===b.container.find(b.params.nextButton).length&&(b.nextButton=b.container.find(b.params.nextButton))),b.params.prevButton&&(b.prevButton=a(b.params.prevButton),b.params.uniqueNavElements&&"string"==typeof b.params.prevButton&&b.prevButton.length>1&&1===b.container.find(b.params.prevButton).length&&(b.prevButton=b.container.find(b.params.prevButton)))),b.isHorizontal=function(){return"horizontal"===b.params.direction},b.rtl=b.isHorizontal()&&("rtl"===b.container[0].dir.toLowerCase()||"rtl"===b.container.css("direction")),b.rtl&&b.classNames.push("swiper-container-rtl"),b.rtl&&(b.wrongRTL="-webkit-box"===b.wrapper.css("display")),b.params.slidesPerColumn>1&&b.classNames.push("swiper-container-multirow"),b.device.android&&b.classNames.push("swiper-container-android"),b.container.addClass(b.classNames.join(" ")),b.translate=0,b.progress=0,b.velocity=0,b.lockSwipeToNext=function(){b.params.allowSwipeToNext=!1},b.lockSwipeToPrev=function(){b.params.allowSwipeToPrev=!1},b.lockSwipes=function(){b.params.allowSwipeToNext=b.params.allowSwipeToPrev=!1},b.unlockSwipeToNext=function(){b.params.allowSwipeToNext=!0},b.unlockSwipeToPrev=function(){b.params.allowSwipeToPrev=!0},b.unlockSwipes=function(){b.params.allowSwipeToNext=b.params.allowSwipeToPrev=!0},b.params.grabCursor&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grab",b.container[0].style.cursor="-moz-grab",b.container[0].style.cursor="grab"),b.imagesToLoad=[],b.imagesLoaded=0,b.loadImage=function(e,a,t,r,i){function s(){i&&i()}var n;e.complete&&r?s():a?(n=new window.Image,n.onload=s,n.onerror=s,t&&(n.srcset=t),a&&(n.src=a)):s()},b.preloadImages=function(){function e(){"undefined"!=typeof b&&null!==b&&(void 0!==b.imagesLoaded&&b.imagesLoaded++,b.imagesLoaded===b.imagesToLoad.length&&(b.params.updateOnImagesReady&&b.update(),b.emit("onImagesReady",b)))}b.imagesToLoad=b.container.find("img");for(var a=0;a<b.imagesToLoad.length;a++)b.loadImage(b.imagesToLoad[a],b.imagesToLoad[a].currentSrc||b.imagesToLoad[a].getAttribute("src"),b.imagesToLoad[a].srcset||b.imagesToLoad[a].getAttribute("srcset"),!0,e)},b.autoplayTimeoutId=void 0,b.autoplaying=!1,b.autoplayPaused=!1,b.startAutoplay=function(){return"undefined"!=typeof b.autoplayTimeoutId?!1:b.params.autoplay?b.autoplaying?!1:(b.autoplaying=!0,b.emit("onAutoplayStart",b),void n()):!1},b.stopAutoplay=function(e){b.autoplayTimeoutId&&(b.autoplayTimeoutId&&clearTimeout(b.autoplayTimeoutId),b.autoplaying=!1,b.autoplayTimeoutId=void 0,b.emit("onAutoplayStop",b))},b.pauseAutoplay=function(e){b.autoplayPaused||(b.autoplayTimeoutId&&clearTimeout(b.autoplayTimeoutId),b.autoplayPaused=!0,0===e?(b.autoplayPaused=!1,n()):b.wrapper.transitionEnd(function(){b&&(b.autoplayPaused=!1,b.autoplaying?n():b.stopAutoplay())}))},b.minTranslate=function(){return-b.snapGrid[0]},b.maxTranslate=function(){return-b.snapGrid[b.snapGrid.length-1]},b.updateAutoHeight=function(){var e=b.slides.eq(b.activeIndex)[0];if("undefined"!=typeof e){var a=e.offsetHeight;a&&b.wrapper.css("height",a+"px")}},b.updateContainerSize=function(){var e,a;e="undefined"!=typeof b.params.width?b.params.width:b.container[0].clientWidth,a="undefined"!=typeof b.params.height?b.params.height:b.container[0].clientHeight,0===e&&b.isHorizontal()||0===a&&!b.isHorizontal()||(e=e-parseInt(b.container.css("padding-left"),10)-parseInt(b.container.css("padding-right"),10),a=a-parseInt(b.container.css("padding-top"),10)-parseInt(b.container.css("padding-bottom"),10),b.width=e,b.height=a,b.size=b.isHorizontal()?b.width:b.height)},b.updateSlidesSize=function(){b.slides=b.wrapper.children("."+b.params.slideClass),b.snapGrid=[],b.slidesGrid=[],b.slidesSizesGrid=[];var e,a=b.params.spaceBetween,t=-b.params.slidesOffsetBefore,r=0,i=0;if("undefined"!=typeof b.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*b.size),b.virtualSize=-a,b.rtl?b.slides.css({marginLeft:"",marginTop:""}):b.slides.css({marginRight:"",marginBottom:""});var n;b.params.slidesPerColumn>1&&(n=Math.floor(b.slides.length/b.params.slidesPerColumn)===b.slides.length/b.params.slidesPerColumn?b.slides.length:Math.ceil(b.slides.length/b.params.slidesPerColumn)*b.params.slidesPerColumn,"auto"!==b.params.slidesPerView&&"row"===b.params.slidesPerColumnFill&&(n=Math.max(n,b.params.slidesPerView*b.params.slidesPerColumn)));var o,l=b.params.slidesPerColumn,p=n/l,d=p-(b.params.slidesPerColumn*p-b.slides.length);for(e=0;e<b.slides.length;e++){o=0;var u=b.slides.eq(e);if(b.params.slidesPerColumn>1){var c,m,h;"column"===b.params.slidesPerColumnFill?(m=Math.floor(e/l),h=e-m*l,(m>d||m===d&&h===l-1)&&++h>=l&&(h=0,m++),c=m+h*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(h=Math.floor(e/p),m=e-h*p),u.css({"margin-top":0!==h&&b.params.spaceBetween&&b.params.spaceBetween+"px"}).attr("data-swiper-column",m).attr("data-swiper-row",h)}"none"!==u.css("display")&&("auto"===b.params.slidesPerView?(o=b.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),b.params.roundLengths&&(o=s(o))):(o=(b.size-(b.params.slidesPerView-1)*a)/b.params.slidesPerView,b.params.roundLengths&&(o=s(o)),b.isHorizontal()?b.slides[e].style.width=o+"px":b.slides[e].style.height=o+"px"),b.slides[e].swiperSlideSize=o,b.slidesSizesGrid.push(o),b.params.centeredSlides?(t=t+o/2+r/2+a,0===e&&(t=t-b.size/2-a),Math.abs(t)<.001&&(t=0),i%b.params.slidesPerGroup===0&&b.snapGrid.push(t),b.slidesGrid.push(t)):(i%b.params.slidesPerGroup===0&&b.snapGrid.push(t),b.slidesGrid.push(t),t=t+o+a),b.virtualSize+=o+a,r=o,i++)}b.virtualSize=Math.max(b.virtualSize,b.size)+b.params.slidesOffsetAfter;var f;if(b.rtl&&b.wrongRTL&&("slide"===b.params.effect||"coverflow"===b.params.effect)&&b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}),(!b.support.flexbox||b.params.setWrapperSize)&&(b.isHorizontal()?b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}):b.wrapper.css({height:b.virtualSize+b.params.spaceBetween+"px"})),b.params.slidesPerColumn>1&&(b.virtualSize=(o+b.params.spaceBetween)*n,b.virtualSize=Math.ceil(b.virtualSize/b.params.slidesPerColumn)-b.params.spaceBetween,b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}),b.params.centeredSlides)){for(f=[],e=0;e<b.snapGrid.length;e++)b.snapGrid[e]<b.virtualSize+b.snapGrid[0]&&f.push(b.snapGrid[e]);b.snapGrid=f}if(!b.params.centeredSlides){for(f=[],e=0;e<b.snapGrid.length;e++)b.snapGrid[e]<=b.virtualSize-b.size&&f.push(b.snapGrid[e]);b.snapGrid=f,Math.floor(b.virtualSize-b.size)-Math.floor(b.snapGrid[b.snapGrid.length-1])>1&&b.snapGrid.push(b.virtualSize-b.size)}0===b.snapGrid.length&&(b.snapGrid=[0]),0!==b.params.spaceBetween&&(b.isHorizontal()?b.rtl?b.slides.css({marginLeft:a+"px"}):b.slides.css({marginRight:a+"px"}):b.slides.css({marginBottom:a+"px"})),b.params.watchSlidesProgress&&b.updateSlidesOffset()}},b.updateSlidesOffset=function(){for(var e=0;e<b.slides.length;e++)b.slides[e].swiperSlideOffset=b.isHorizontal()?b.slides[e].offsetLeft:b.slides[e].offsetTop},b.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=b.translate||0),0!==b.slides.length){"undefined"==typeof b.slides[0].swiperSlideOffset&&b.updateSlidesOffset();var a=-e;b.rtl&&(a=e),b.slides.removeClass(b.params.slideVisibleClass);for(var t=0;t<b.slides.length;t++){var r=b.slides[t],i=(a-r.swiperSlideOffset)/(r.swiperSlideSize+b.params.spaceBetween);if(b.params.watchSlidesVisibility){var s=-(a-r.swiperSlideOffset),n=s+b.slidesSizesGrid[t],o=s>=0&&s<b.size||n>0&&n<=b.size||0>=s&&n>=b.size;o&&b.slides.eq(t).addClass(b.params.slideVisibleClass)}r.progress=b.rtl?-i:i}}},b.updateProgress=function(e){"undefined"==typeof e&&(e=b.translate||0);var a=b.maxTranslate()-b.minTranslate(),t=b.isBeginning,r=b.isEnd;0===a?(b.progress=0,b.isBeginning=b.isEnd=!0):(b.progress=(e-b.minTranslate())/a,b.isBeginning=b.progress<=0,b.isEnd=b.progress>=1),b.isBeginning&&!t&&b.emit("onReachBeginning",b),b.isEnd&&!r&&b.emit("onReachEnd",b),b.params.watchSlidesProgress&&b.updateSlidesProgress(e),b.emit("onProgress",b,b.progress)},b.updateActiveIndex=function(){var e,a,t,r=b.rtl?b.translate:-b.translate;for(a=0;a<b.slidesGrid.length;a++)"undefined"!=typeof b.slidesGrid[a+1]?r>=b.slidesGrid[a]&&r<b.slidesGrid[a+1]-(b.slidesGrid[a+1]-b.slidesGrid[a])/2?e=a:r>=b.slidesGrid[a]&&r<b.slidesGrid[a+1]&&(e=a+1):r>=b.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/b.params.slidesPerGroup),t>=b.snapGrid.length&&(t=b.snapGrid.length-1),e!==b.activeIndex&&(b.snapIndex=t,b.previousIndex=b.activeIndex,b.activeIndex=e,b.updateClasses())},b.updateClasses=function(){b.slides.removeClass(b.params.slideActiveClass+" "+b.params.slideNextClass+" "+b.params.slidePrevClass);var e=b.slides.eq(b.activeIndex);e.addClass(b.params.slideActiveClass);var t=e.next("."+b.params.slideClass).addClass(b.params.slideNextClass);b.params.loop&&0===t.length&&b.slides.eq(0).addClass(b.params.slideNextClass);var r=e.prev("."+b.params.slideClass).addClass(b.params.slidePrevClass);if(b.params.loop&&0===r.length&&b.slides.eq(-1).addClass(b.params.slidePrevClass),b.paginationContainer&&b.paginationContainer.length>0){var i,s=b.params.loop?Math.ceil((b.slides.length-2*b.loopedSlides)/b.params.slidesPerGroup):b.snapGrid.length;if(b.params.loop?(i=Math.ceil((b.activeIndex-b.loopedSlides)/b.params.slidesPerGroup),i>b.slides.length-1-2*b.loopedSlides&&(i-=b.slides.length-2*b.loopedSlides),i>s-1&&(i-=s),0>i&&"bullets"!==b.params.paginationType&&(i=s+i)):i="undefined"!=typeof b.snapIndex?b.snapIndex:b.activeIndex||0,"bullets"===b.params.paginationType&&b.bullets&&b.bullets.length>0&&(b.bullets.removeClass(b.params.bulletActiveClass),b.paginationContainer.length>1?b.bullets.each(function(){a(this).index()===i&&a(this).addClass(b.params.bulletActiveClass)}):b.bullets.eq(i).addClass(b.params.bulletActiveClass)),"fraction"===b.params.paginationType&&(b.paginationContainer.find("."+b.params.paginationCurrentClass).text(i+1),b.paginationContainer.find("."+b.params.paginationTotalClass).text(s)),"progress"===b.params.paginationType){var n=(i+1)/s,o=n,l=1;b.isHorizontal()||(l=n,o=1),b.paginationContainer.find("."+b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+o+") scaleY("+l+")").transition(b.params.speed)}"custom"===b.params.paginationType&&b.params.paginationCustomRender&&(b.paginationContainer.html(b.params.paginationCustomRender(b,i+1,s)),b.emit("onPaginationRendered",b,b.paginationContainer[0]))}b.params.loop||(b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.isBeginning?(b.prevButton.addClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.disable(b.prevButton)):(b.prevButton.removeClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.enable(b.prevButton))),b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.isEnd?(b.nextButton.addClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.disable(b.nextButton)):(b.nextButton.removeClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.enable(b.nextButton))))},b.updatePagination=function(){if(b.params.pagination&&b.paginationContainer&&b.paginationContainer.length>0){var e="";if("bullets"===b.params.paginationType){for(var a=b.params.loop?Math.ceil((b.slides.length-2*b.loopedSlides)/b.params.slidesPerGroup):b.snapGrid.length,t=0;a>t;t++)e+=b.params.paginationBulletRender?b.params.paginationBulletRender(t,b.params.bulletClass):"<"+b.params.paginationElement+' class="'+b.params.bulletClass+'"></'+b.params.paginationElement+">";b.paginationContainer.html(e),b.bullets=b.paginationContainer.find("."+b.params.bulletClass),b.params.paginationClickable&&b.params.a11y&&b.a11y&&b.a11y.initPagination()}"fraction"===b.params.paginationType&&(e=b.params.paginationFractionRender?b.params.paginationFractionRender(b,b.params.paginationCurrentClass,b.params.paginationTotalClass):'<span class="'+b.params.paginationCurrentClass+'"></span> / <span class="'+b.params.paginationTotalClass+'"></span>',b.paginationContainer.html(e)),"progress"===b.params.paginationType&&(e=b.params.paginationProgressRender?b.params.paginationProgressRender(b,b.params.paginationProgressbarClass):'<span class="'+b.params.paginationProgressbarClass+'"></span>',b.paginationContainer.html(e)),"custom"!==b.params.paginationType&&b.emit("onPaginationRendered",b,b.paginationContainer[0])}},b.update=function(e){function a(){r=Math.min(Math.max(b.translate,b.maxTranslate()),b.minTranslate()),b.setWrapperTranslate(r),b.updateActiveIndex(),b.updateClasses()}if(b.updateContainerSize(),b.updateSlidesSize(),b.updateProgress(),b.updatePagination(),b.updateClasses(),b.params.scrollbar&&b.scrollbar&&b.scrollbar.set(),e){var t,r;b.controller&&b.controller.spline&&(b.controller.spline=void 0),b.params.freeMode?(a(),b.params.autoHeight&&b.updateAutoHeight()):(t=("auto"===b.params.slidesPerView||b.params.slidesPerView>1)&&b.isEnd&&!b.params.centeredSlides?b.slideTo(b.slides.length-1,0,!1,!0):b.slideTo(b.activeIndex,0,!1,!0),t||a())}else b.params.autoHeight&&b.updateAutoHeight()},b.onResize=function(e){b.params.breakpoints&&b.setBreakpoint();var a=b.params.allowSwipeToPrev,t=b.params.allowSwipeToNext;b.params.allowSwipeToPrev=b.params.allowSwipeToNext=!0,b.updateContainerSize(),b.updateSlidesSize(),("auto"===b.params.slidesPerView||b.params.freeMode||e)&&b.updatePagination(),b.params.scrollbar&&b.scrollbar&&b.scrollbar.set(),b.controller&&b.controller.spline&&(b.controller.spline=void 0);var r=!1;if(b.params.freeMode){var i=Math.min(Math.max(b.translate,b.maxTranslate()),b.minTranslate());b.setWrapperTranslate(i),b.updateActiveIndex(),b.updateClasses(),b.params.autoHeight&&b.updateAutoHeight()}else b.updateClasses(),r=("auto"===b.params.slidesPerView||b.params.slidesPerView>1)&&b.isEnd&&!b.params.centeredSlides?b.slideTo(b.slides.length-1,0,!1,!0):b.slideTo(b.activeIndex,0,!1,!0);b.params.lazyLoading&&!r&&b.lazy&&b.lazy.load(),b.params.allowSwipeToPrev=a,b.params.allowSwipeToNext=t};var T=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?T=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(T=["MSPointerDown","MSPointerMove","MSPointerUp"]),b.touchEvents={start:b.support.touch||!b.params.simulateTouch?"touchstart":T[0],move:b.support.touch||!b.params.simulateTouch?"touchmove":T[1],end:b.support.touch||!b.params.simulateTouch?"touchend":T[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===b.params.touchEventsTarget?b.container:b.wrapper).addClass("swiper-wp8-"+b.params.direction),b.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===b.params.touchEventsTarget?b.container[0]:b.wrapper[0],s=b.support.touch?r:document,n=b.params.nested?!0:!1;b.browser.ie?(r[t](b.touchEvents.start,b.onTouchStart,!1),s[t](b.touchEvents.move,b.onTouchMove,n),s[t](b.touchEvents.end,b.onTouchEnd,!1)):(b.support.touch&&(r[t](b.touchEvents.start,b.onTouchStart,!1),r[t](b.touchEvents.move,b.onTouchMove,n),r[t](b.touchEvents.end,b.onTouchEnd,!1)),!i.simulateTouch||b.device.ios||b.device.android||(r[t]("mousedown",b.onTouchStart,!1),document[t]("mousemove",b.onTouchMove,n),document[t]("mouseup",b.onTouchEnd,!1))),window[t]("resize",b.onResize),b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.nextButton[a]("click",b.onClickNext),b.params.a11y&&b.a11y&&b.nextButton[a]("keydown",b.a11y.onEnterKey)),b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.prevButton[a]("click",b.onClickPrev),b.params.a11y&&b.a11y&&b.prevButton[a]("keydown",b.a11y.onEnterKey)),b.params.pagination&&b.params.paginationClickable&&(b.paginationContainer[a]("click","."+b.params.bulletClass,b.onClickIndex),b.params.a11y&&b.a11y&&b.paginationContainer[a]("keydown","."+b.params.bulletClass,b.a11y.onEnterKey)),(b.params.preventClicks||b.params.preventClicksPropagation)&&r[t]("click",b.preventClicks,!0)},b.attachEvents=function(){b.initEvents()},b.detachEvents=function(){b.initEvents(!0)},b.allowClick=!0,b.preventClicks=function(e){b.allowClick||(b.params.preventClicks&&e.preventDefault(),b.params.preventClicksPropagation&&b.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},b.onClickNext=function(e){e.preventDefault(),(!b.isEnd||b.params.loop)&&b.slideNext()},b.onClickPrev=function(e){e.preventDefault(),(!b.isBeginning||b.params.loop)&&b.slidePrev()},b.onClickIndex=function(e){e.preventDefault();var t=a(this).index()*b.params.slidesPerGroup;b.params.loop&&(t+=b.loopedSlides),b.slideTo(t)},b.updateClickedSlide=function(e){var t=o(e,"."+b.params.slideClass),r=!1;if(t)for(var i=0;i<b.slides.length;i++)b.slides[i]===t&&(r=!0);if(!t||!r)return b.clickedSlide=void 0,void(b.clickedIndex=void 0);if(b.clickedSlide=t,b.clickedIndex=a(t).index(),b.params.slideToClickedSlide&&void 0!==b.clickedIndex&&b.clickedIndex!==b.activeIndex){var s,n=b.clickedIndex;if(b.params.loop){if(b.animating)return;s=a(b.clickedSlide).attr("data-swiper-slide-index"),b.params.centeredSlides?n<b.loopedSlides-b.params.slidesPerView/2||n>b.slides.length-b.loopedSlides+b.params.slidesPerView/2?(b.fixLoop(),n=b.wrapper.children("."+b.params.slideClass+'[data-swiper-slide-index="'+s+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){b.slideTo(n)},0)):b.slideTo(n):n>b.slides.length-b.params.slidesPerView?(b.fixLoop(),n=b.wrapper.children("."+b.params.slideClass+'[data-swiper-slide-index="'+s+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){b.slideTo(n)},0)):b.slideTo(n)}else b.slideTo(n)}};var S,C,z,M,E,P,k,I,L,B,D="input, select, textarea, button",H=Date.now(),A=[];b.animating=!1,b.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,O;if(b.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),G="touchstart"===e.type,G||!("which"in e)||3!==e.which){if(b.params.noSwiping&&o(e,"."+b.params.noSwipingClass))return void(b.allowClick=!0);if(!b.params.swipeHandler||o(e,b.params.swipeHandler)){var t=b.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,r=b.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(b.device.ios&&b.params.iOSEdgeSwipeDetection&&t<=b.params.iOSEdgeSwipeThreshold)){if(S=!0,C=!1,z=!0,E=void 0,O=void 0,b.touches.startX=t,b.touches.startY=r,M=Date.now(),b.allowClick=!0,b.updateContainerSize(),b.swipeDirection=void 0,b.params.threshold>0&&(I=!1),"touchstart"!==e.type){var i=!0;a(e.target).is(D)&&(i=!1),document.activeElement&&a(document.activeElement).is(D)&&document.activeElement.blur(),i&&e.preventDefault()}b.emit("onTouchStart",b,e)}}}},b.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!G||"mousemove"!==e.type){if(e.preventedByNestedSwiper)return b.touches.startX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,void(b.touches.startY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY);if(b.params.onlyExternal)return b.allowClick=!1,void(S&&(b.touches.startX=b.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,b.touches.startY=b.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,M=Date.now()));if(G&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(D))return C=!0,void(b.allowClick=!1);if(z&&b.emit("onTouchMove",b,e),!(e.targetTouches&&e.targetTouches.length>1)){if(b.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,b.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof E){var t=180*Math.atan2(Math.abs(b.touches.currentY-b.touches.startY),Math.abs(b.touches.currentX-b.touches.startX))/Math.PI;E=b.isHorizontal()?t>b.params.touchAngle:90-t>b.params.touchAngle}if(E&&b.emit("onTouchMoveOpposite",b,e),"undefined"==typeof O&&b.browser.ieTouch&&(b.touches.currentX!==b.touches.startX||b.touches.currentY!==b.touches.startY)&&(O=!0),S){if(E)return void(S=!1);if(O||!b.browser.ieTouch){b.allowClick=!1,b.emit("onSliderMove",b,e),e.preventDefault(),b.params.touchMoveStopPropagation&&!b.params.nested&&e.stopPropagation(),C||(i.loop&&b.fixLoop(),k=b.getWrapperTranslate(),b.setWrapperTransition(0),b.animating&&b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),b.params.autoplay&&b.autoplaying&&(b.params.autoplayDisableOnInteraction?b.stopAutoplay():b.pauseAutoplay()),B=!1,b.params.grabCursor&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grabbing",b.container[0].style.cursor="-moz-grabbin",b.container[0].style.cursor="grabbing")),C=!0;var r=b.touches.diff=b.isHorizontal()?b.touches.currentX-b.touches.startX:b.touches.currentY-b.touches.startY;r*=b.params.touchRatio,b.rtl&&(r=-r),b.swipeDirection=r>0?"prev":"next",P=r+k;var s=!0;if(r>0&&P>b.minTranslate()?(s=!1,b.params.resistance&&(P=b.minTranslate()-1+Math.pow(-b.minTranslate()+k+r,b.params.resistanceRatio))):0>r&&P<b.maxTranslate()&&(s=!1,b.params.resistance&&(P=b.maxTranslate()+1-Math.pow(b.maxTranslate()-k-r,b.params.resistanceRatio))),
s&&(e.preventedByNestedSwiper=!0),!b.params.allowSwipeToNext&&"next"===b.swipeDirection&&k>P&&(P=k),!b.params.allowSwipeToPrev&&"prev"===b.swipeDirection&&P>k&&(P=k),b.params.followFinger){if(b.params.threshold>0){if(!(Math.abs(r)>b.params.threshold||I))return void(P=k);if(!I)return I=!0,b.touches.startX=b.touches.currentX,b.touches.startY=b.touches.currentY,P=k,void(b.touches.diff=b.isHorizontal()?b.touches.currentX-b.touches.startX:b.touches.currentY-b.touches.startY)}(b.params.freeMode||b.params.watchSlidesProgress)&&b.updateActiveIndex(),b.params.freeMode&&(0===A.length&&A.push({position:b.touches[b.isHorizontal()?"startX":"startY"],time:M}),A.push({position:b.touches[b.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),b.updateProgress(P),b.setWrapperTranslate(P)}}}}}},b.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),z&&b.emit("onTouchEnd",b,e),z=!1,S){b.params.grabCursor&&C&&S&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grab",b.container[0].style.cursor="-moz-grab",b.container[0].style.cursor="grab");var t=Date.now(),r=t-M;if(b.allowClick&&(b.updateClickedSlide(e),b.emit("onTap",b,e),300>r&&t-H>300&&(L&&clearTimeout(L),L=setTimeout(function(){b&&(b.params.paginationHide&&b.paginationContainer.length>0&&!a(e.target).hasClass(b.params.bulletClass)&&b.paginationContainer.toggleClass(b.params.paginationHiddenClass),b.emit("onClick",b,e))},300)),300>r&&300>t-H&&(L&&clearTimeout(L),b.emit("onDoubleTap",b,e))),H=Date.now(),setTimeout(function(){b&&(b.allowClick=!0)},0),!S||!C||!b.swipeDirection||0===b.touches.diff||P===k)return void(S=C=!1);S=C=!1;var i;if(i=b.params.followFinger?b.rtl?b.translate:-b.translate:-P,b.params.freeMode){if(i<-b.minTranslate())return void b.slideTo(b.activeIndex);if(i>-b.maxTranslate())return void(b.slides.length<b.snapGrid.length?b.slideTo(b.snapGrid.length-1):b.slideTo(b.slides.length-1));if(b.params.freeModeMomentum){if(A.length>1){var s=A.pop(),n=A.pop(),o=s.position-n.position,l=s.time-n.time;b.velocity=o/l,b.velocity=b.velocity/2,Math.abs(b.velocity)<b.params.freeModeMinimumVelocity&&(b.velocity=0),(l>150||(new window.Date).getTime()-s.time>300)&&(b.velocity=0)}else b.velocity=0;A.length=0;var p=1e3*b.params.freeModeMomentumRatio,d=b.velocity*p,u=b.translate+d;b.rtl&&(u=-u);var c,m=!1,h=20*Math.abs(b.velocity)*b.params.freeModeMomentumBounceRatio;if(u<b.maxTranslate())b.params.freeModeMomentumBounce?(u+b.maxTranslate()<-h&&(u=b.maxTranslate()-h),c=b.maxTranslate(),m=!0,B=!0):u=b.maxTranslate();else if(u>b.minTranslate())b.params.freeModeMomentumBounce?(u-b.minTranslate()>h&&(u=b.minTranslate()+h),c=b.minTranslate(),m=!0,B=!0):u=b.minTranslate();else if(b.params.freeModeSticky){var f,g=0;for(g=0;g<b.snapGrid.length;g+=1)if(b.snapGrid[g]>-u){f=g;break}u=Math.abs(b.snapGrid[f]-u)<Math.abs(b.snapGrid[f-1]-u)||"next"===b.swipeDirection?b.snapGrid[f]:b.snapGrid[f-1],b.rtl||(u=-u)}if(0!==b.velocity)p=b.rtl?Math.abs((-u-b.translate)/b.velocity):Math.abs((u-b.translate)/b.velocity);else if(b.params.freeModeSticky)return void b.slideReset();b.params.freeModeMomentumBounce&&m?(b.updateProgress(c),b.setWrapperTransition(p),b.setWrapperTranslate(u),b.onTransitionStart(),b.animating=!0,b.wrapper.transitionEnd(function(){b&&B&&(b.emit("onMomentumBounce",b),b.setWrapperTransition(b.params.speed),b.setWrapperTranslate(c),b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd()}))})):b.velocity?(b.updateProgress(u),b.setWrapperTransition(p),b.setWrapperTranslate(u),b.onTransitionStart(),b.animating||(b.animating=!0,b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd()}))):b.updateProgress(u),b.updateActiveIndex()}return void((!b.params.freeModeMomentum||r>=b.params.longSwipesMs)&&(b.updateProgress(),b.updateActiveIndex()))}var v,w=0,y=b.slidesSizesGrid[0];for(v=0;v<b.slidesGrid.length;v+=b.params.slidesPerGroup)"undefined"!=typeof b.slidesGrid[v+b.params.slidesPerGroup]?i>=b.slidesGrid[v]&&i<b.slidesGrid[v+b.params.slidesPerGroup]&&(w=v,y=b.slidesGrid[v+b.params.slidesPerGroup]-b.slidesGrid[v]):i>=b.slidesGrid[v]&&(w=v,y=b.slidesGrid[b.slidesGrid.length-1]-b.slidesGrid[b.slidesGrid.length-2]);var x=(i-b.slidesGrid[w])/y;if(r>b.params.longSwipesMs){if(!b.params.longSwipes)return void b.slideTo(b.activeIndex);"next"===b.swipeDirection&&(x>=b.params.longSwipesRatio?b.slideTo(w+b.params.slidesPerGroup):b.slideTo(w)),"prev"===b.swipeDirection&&(x>1-b.params.longSwipesRatio?b.slideTo(w+b.params.slidesPerGroup):b.slideTo(w))}else{if(!b.params.shortSwipes)return void b.slideTo(b.activeIndex);"next"===b.swipeDirection&&b.slideTo(w+b.params.slidesPerGroup),"prev"===b.swipeDirection&&b.slideTo(w)}}},b._slideTo=function(e,a){return b.slideTo(e,a,!0,!0)},b.slideTo=function(e,a,t,r){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),b.snapIndex=Math.floor(e/b.params.slidesPerGroup),b.snapIndex>=b.snapGrid.length&&(b.snapIndex=b.snapGrid.length-1);var i=-b.snapGrid[b.snapIndex];b.params.autoplay&&b.autoplaying&&(r||!b.params.autoplayDisableOnInteraction?b.pauseAutoplay(a):b.stopAutoplay()),b.updateProgress(i);for(var s=0;s<b.slidesGrid.length;s++)-Math.floor(100*i)>=Math.floor(100*b.slidesGrid[s])&&(e=s);return!b.params.allowSwipeToNext&&i<b.translate&&i<b.minTranslate()?!1:!b.params.allowSwipeToPrev&&i>b.translate&&i>b.maxTranslate()&&(b.activeIndex||0)!==e?!1:("undefined"==typeof a&&(a=b.params.speed),b.previousIndex=b.activeIndex||0,b.activeIndex=e,b.rtl&&-i===b.translate||!b.rtl&&i===b.translate?(b.params.autoHeight&&b.updateAutoHeight(),b.updateClasses(),"slide"!==b.params.effect&&b.setWrapperTranslate(i),!1):(b.updateClasses(),b.onTransitionStart(t),0===a?(b.setWrapperTranslate(i),b.setWrapperTransition(0),b.onTransitionEnd(t)):(b.setWrapperTranslate(i),b.setWrapperTransition(a),b.animating||(b.animating=!0,b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd(t)}))),!0))},b.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),b.params.autoHeight&&b.updateAutoHeight(),b.lazy&&b.lazy.onTransitionStart(),e&&(b.emit("onTransitionStart",b),b.activeIndex!==b.previousIndex&&(b.emit("onSlideChangeStart",b),b.activeIndex>b.previousIndex?b.emit("onSlideNextStart",b):b.emit("onSlidePrevStart",b)))},b.onTransitionEnd=function(e){b.animating=!1,b.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),b.lazy&&b.lazy.onTransitionEnd(),e&&(b.emit("onTransitionEnd",b),b.activeIndex!==b.previousIndex&&(b.emit("onSlideChangeEnd",b),b.activeIndex>b.previousIndex?b.emit("onSlideNextEnd",b):b.emit("onSlidePrevEnd",b))),b.params.hashnav&&b.hashnav&&b.hashnav.setHash()},b.slideNext=function(e,a,t){if(b.params.loop){if(b.animating)return!1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex+b.params.slidesPerGroup,a,e,t)}return b.slideTo(b.activeIndex+b.params.slidesPerGroup,a,e,t)},b._slideNext=function(e){return b.slideNext(!0,e,!0)},b.slidePrev=function(e,a,t){if(b.params.loop){if(b.animating)return!1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex-1,a,e,t)}return b.slideTo(b.activeIndex-1,a,e,t)},b._slidePrev=function(e){return b.slidePrev(!0,e,!0)},b.slideReset=function(e,a,t){return b.slideTo(b.activeIndex,a,e)},b.setWrapperTransition=function(e,a){b.wrapper.transition(e),"slide"!==b.params.effect&&b.effects[b.params.effect]&&b.effects[b.params.effect].setTransition(e),b.params.parallax&&b.parallax&&b.parallax.setTransition(e),b.params.scrollbar&&b.scrollbar&&b.scrollbar.setTransition(e),b.params.control&&b.controller&&b.controller.setTransition(e,a),b.emit("onSetTransition",b,e)},b.setWrapperTranslate=function(e,a,t){var r=0,i=0,n=0;b.isHorizontal()?r=b.rtl?-e:e:i=e,b.params.roundLengths&&(r=s(r),i=s(i)),b.params.virtualTranslate||(b.support.transforms3d?b.wrapper.transform("translate3d("+r+"px, "+i+"px, "+n+"px)"):b.wrapper.transform("translate("+r+"px, "+i+"px)")),b.translate=b.isHorizontal()?r:i;var o,l=b.maxTranslate()-b.minTranslate();o=0===l?0:(e-b.minTranslate())/l,o!==b.progress&&b.updateProgress(e),a&&b.updateActiveIndex(),"slide"!==b.params.effect&&b.effects[b.params.effect]&&b.effects[b.params.effect].setTranslate(b.translate),b.params.parallax&&b.parallax&&b.parallax.setTranslate(b.translate),b.params.scrollbar&&b.scrollbar&&b.scrollbar.setTranslate(b.translate),b.params.control&&b.controller&&b.controller.setTranslate(b.translate,t),b.emit("onSetTranslate",b,b.translate)},b.getTranslate=function(e,a){var t,r,i,s;return"undefined"==typeof a&&(a="x"),b.params.virtualTranslate?b.rtl?-b.translate:b.translate:(i=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(r=i.transform||i.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new window.WebKitCSSMatrix("none"===r?"":r)):(s=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=s.toString().split(",")),"x"===a&&(r=window.WebKitCSSMatrix?s.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(r=window.WebKitCSSMatrix?s.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),b.rtl&&r&&(r=-r),r||0)},b.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=b.isHorizontal()?"x":"y"),b.getTranslate(b.wrapper[0],e)},b.observers=[],b.initObservers=function(){if(b.params.observeParents)for(var e=b.container.parents(),a=0;a<e.length;a++)l(e[a]);l(b.container[0],{childList:!1}),l(b.wrapper[0],{attributes:!1})},b.disconnectObservers=function(){for(var e=0;e<b.observers.length;e++)b.observers[e].disconnect();b.observers=[]},b.createLoop=function(){b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass).remove();var e=b.wrapper.children("."+b.params.slideClass);"auto"!==b.params.slidesPerView||b.params.loopedSlides||(b.params.loopedSlides=e.length),b.loopedSlides=parseInt(b.params.loopedSlides||b.params.slidesPerView,10),b.loopedSlides=b.loopedSlides+b.params.loopAdditionalSlides,b.loopedSlides>e.length&&(b.loopedSlides=e.length);var t,r=[],i=[];for(e.each(function(t,s){var n=a(this);t<b.loopedSlides&&i.push(s),t<e.length&&t>=e.length-b.loopedSlides&&r.push(s),n.attr("data-swiper-slide-index",t)}),t=0;t<i.length;t++)b.wrapper.append(a(i[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass));for(t=r.length-1;t>=0;t--)b.wrapper.prepend(a(r[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass))},b.destroyLoop=function(){b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass).remove(),b.slides.removeAttr("data-swiper-slide-index")},b.reLoop=function(e){var a=b.activeIndex-b.loopedSlides;b.destroyLoop(),b.createLoop(),b.updateSlidesSize(),e&&b.slideTo(a+b.loopedSlides,0,!1)},b.fixLoop=function(){var e;b.activeIndex<b.loopedSlides?(e=b.slides.length-3*b.loopedSlides+b.activeIndex,e+=b.loopedSlides,b.slideTo(e,0,!1,!0)):("auto"===b.params.slidesPerView&&b.activeIndex>=2*b.loopedSlides||b.activeIndex>b.slides.length-2*b.params.slidesPerView)&&(e=-b.slides.length+b.activeIndex+b.loopedSlides,e+=b.loopedSlides,b.slideTo(e,0,!1,!0))},b.appendSlide=function(e){if(b.params.loop&&b.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&b.wrapper.append(e[a]);else b.wrapper.append(e);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0)},b.prependSlide=function(e){b.params.loop&&b.destroyLoop();var a=b.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&b.wrapper.prepend(e[t]);a=b.activeIndex+e.length}else b.wrapper.prepend(e);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0),b.slideTo(a,0,!1)},b.removeSlide=function(e){b.params.loop&&(b.destroyLoop(),b.slides=b.wrapper.children("."+b.params.slideClass));var a,t=b.activeIndex;if("object"==typeof e&&e.length){for(var r=0;r<e.length;r++)a=e[r],b.slides[a]&&b.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,b.slides[a]&&b.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0),b.params.loop?b.slideTo(t+b.loopedSlides,0,!1):b.slideTo(t,0,!1)},b.removeAllSlides=function(){for(var e=[],a=0;a<b.slides.length;a++)e.push(a);b.removeSlide(e)},b.effects={fade:{setTranslate:function(){for(var e=0;e<b.slides.length;e++){var a=b.slides.eq(e),t=a[0].swiperSlideOffset,r=-t;b.params.virtualTranslate||(r-=b.translate);var i=0;b.isHorizontal()||(i=r,r=0);var s=b.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:s}).transform("translate3d("+r+"px, "+i+"px, 0px)")}},setTransition:function(e){if(b.slides.transition(e),b.params.virtualTranslate&&0!==e){var a=!1;b.slides.transitionEnd(function(){if(!a&&b){a=!0,b.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)b.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<b.slides.length;e++){var t=b.slides.eq(e),r=t[0].progress;b.params.flip.limitRotation&&(r=Math.max(Math.min(t[0].progress,1),-1));var i=t[0].swiperSlideOffset,s=-180*r,n=s,o=0,l=-i,p=0;if(b.isHorizontal()?b.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(r))+b.slides.length,b.params.flip.slideShadows){var d=b.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=b.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-r,0)),u.length&&(u[0].style.opacity=Math.max(r,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){if(b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),b.params.virtualTranslate&&0!==e){var t=!1;b.slides.eq(b.activeIndex).transitionEnd(function(){if(!t&&b&&a(this).hasClass(b.params.slideActiveClass)){t=!0,b.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=0;r<e.length;r++)b.wrapper.trigger(e[r])}})}}},cube:{setTranslate:function(){var e,t=0;b.params.cube.shadow&&(b.isHorizontal()?(e=b.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),b.wrapper.append(e)),e.css({height:b.width+"px"})):(e=b.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),b.container.append(e))));for(var r=0;r<b.slides.length;r++){var i=b.slides.eq(r),s=90*r,n=Math.floor(s/360);b.rtl&&(s=-s,n=Math.floor(-s/360));var o=Math.max(Math.min(i[0].progress,1),-1),l=0,p=0,d=0;r%4===0?(l=4*-n*b.size,d=0):(r-1)%4===0?(l=0,d=4*-n*b.size):(r-2)%4===0?(l=b.size+4*n*b.size,d=b.size):(r-3)%4===0&&(l=-b.size,d=3*b.size+4*b.size*n),b.rtl&&(l=-l),b.isHorizontal()||(p=l,l=0);var u="rotateX("+(b.isHorizontal()?0:-s)+"deg) rotateY("+(b.isHorizontal()?s:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(1>=o&&o>-1&&(t=90*r+90*o,b.rtl&&(t=90*-r-90*o)),i.transform(u),b.params.cube.slideShadows){var c=b.isHorizontal()?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),m=b.isHorizontal()?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");0===c.length&&(c=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),i.append(c)),0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),i.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(b.wrapper.css({"-webkit-transform-origin":"50% 50% -"+b.size/2+"px","-moz-transform-origin":"50% 50% -"+b.size/2+"px","-ms-transform-origin":"50% 50% -"+b.size/2+"px","transform-origin":"50% 50% -"+b.size/2+"px"}),b.params.cube.shadow)if(b.isHorizontal())e.transform("translate3d(0px, "+(b.width/2+b.params.cube.shadowOffset)+"px, "+-b.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+b.params.cube.shadowScale+")");else{var h=Math.abs(t)-90*Math.floor(Math.abs(t)/90),f=1.5-(Math.sin(2*h*Math.PI/360)/2+Math.cos(2*h*Math.PI/360)/2),g=b.params.cube.shadowScale,v=b.params.cube.shadowScale/f,w=b.params.cube.shadowOffset;e.transform("scale3d("+g+", 1, "+v+") translate3d(0px, "+(b.height/2+w)+"px, "+-b.height/2/v+"px) rotateX(-90deg)")}var y=b.isSafari||b.isUiWebView?-b.size/2:0;b.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(b.isHorizontal()?0:t)+"deg) rotateY("+(b.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),b.params.cube.shadow&&!b.isHorizontal()&&b.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=b.translate,t=b.isHorizontal()?-e+b.width/2:-e+b.height/2,r=b.isHorizontal()?b.params.coverflow.rotate:-b.params.coverflow.rotate,i=b.params.coverflow.depth,s=0,n=b.slides.length;n>s;s++){var o=b.slides.eq(s),l=b.slidesSizesGrid[s],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*b.params.coverflow.modifier,u=b.isHorizontal()?r*d:0,c=b.isHorizontal()?0:r*d,m=-i*Math.abs(d),h=b.isHorizontal()?0:b.params.coverflow.stretch*d,f=b.isHorizontal()?b.params.coverflow.stretch*d:0;Math.abs(f)<.001&&(f=0),Math.abs(h)<.001&&(h=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var g="translate3d("+f+"px,"+h+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(g),o[0].style.zIndex=-Math.abs(Math.round(d))+1,b.params.coverflow.slideShadows){var v=b.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=b.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(b.browser.ie){var y=b.wrapper[0].style;y.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},b.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==b.slides.length)){var r=b.slides.eq(e),i=r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!r.hasClass("swiper-lazy")||r.hasClass("swiper-lazy-loaded")||r.hasClass("swiper-lazy-loading")||(i=i.add(r[0])),0!==i.length&&i.each(function(){var e=a(this);e.addClass("swiper-lazy-loading");var i=e.attr("data-background"),s=e.attr("data-src"),n=e.attr("data-srcset");b.loadImage(e[0],s||i,n,!1,function(){if(i?(e.css("background-image",'url("'+i+'")'),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),s&&(e.attr("src",s),e.removeAttr("data-src"))),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),r.find(".swiper-lazy-preloader, .preloader").remove(),b.params.loop&&t){var a=r.attr("data-swiper-slide-index");if(r.hasClass(b.params.slideDuplicateClass)){var o=b.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+b.params.slideDuplicateClass+")");b.lazy.loadImageInSlide(o.index(),!1)}else{var l=b.wrapper.children("."+b.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');b.lazy.loadImageInSlide(l.index(),!1)}}b.emit("onLazyImageReady",b,r[0],e[0])}),b.emit("onLazyImageLoad",b,r[0],e[0])})}},load:function(){var e;if(b.params.watchSlidesVisibility)b.wrapper.children("."+b.params.slideVisibleClass).each(function(){b.lazy.loadImageInSlide(a(this).index())});else if(b.params.slidesPerView>1)for(e=b.activeIndex;e<b.activeIndex+b.params.slidesPerView;e++)b.slides[e]&&b.lazy.loadImageInSlide(e);else b.lazy.loadImageInSlide(b.activeIndex);if(b.params.lazyLoadingInPrevNext)if(b.params.slidesPerView>1||b.params.lazyLoadingInPrevNextAmount&&b.params.lazyLoadingInPrevNextAmount>1){var t=b.params.lazyLoadingInPrevNextAmount,r=b.params.slidesPerView,i=Math.min(b.activeIndex+r+Math.max(t,r),b.slides.length),s=Math.max(b.activeIndex-Math.max(r,t),0);for(e=b.activeIndex+b.params.slidesPerView;i>e;e++)b.slides[e]&&b.lazy.loadImageInSlide(e);for(e=s;e<b.activeIndex;e++)b.slides[e]&&b.lazy.loadImageInSlide(e)}else{var n=b.wrapper.children("."+b.params.slideNextClass);n.length>0&&b.lazy.loadImageInSlide(n.index());var o=b.wrapper.children("."+b.params.slidePrevClass);o.length>0&&b.lazy.loadImageInSlide(o.index())}},onTransitionStart:function(){b.params.lazyLoading&&(b.params.lazyLoadingOnTransitionStart||!b.params.lazyLoadingOnTransitionStart&&!b.lazy.initialImageLoaded)&&b.lazy.load()},onTransitionEnd:function(){b.params.lazyLoading&&!b.params.lazyLoadingOnTransitionStart&&b.lazy.load()}},b.scrollbar={isTouched:!1,setDragPosition:function(e){var a=b.scrollbar,t=b.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,r=t-a.track.offset()[b.isHorizontal()?"left":"top"]-a.dragSize/2,i=-b.minTranslate()*a.moveDivider,s=-b.maxTranslate()*a.moveDivider;i>r?r=i:r>s&&(r=s),r=-r/a.moveDivider,b.updateProgress(r),b.setWrapperTranslate(r,!0)},dragStart:function(e){var a=b.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),b.params.scrollbarHide&&a.track.css("opacity",1),b.wrapper.transition(100),a.drag.transition(100),b.emit("onScrollbarDragStart",b)},dragMove:function(e){var a=b.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),b.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),b.emit("onScrollbarDragMove",b))},dragEnd:function(e){var a=b.scrollbar;a.isTouched&&(a.isTouched=!1,b.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),b.emit("onScrollbarDragEnd",b),b.params.scrollbarSnapOnRelease&&b.slideReset())},enableDraggable:function(){var e=b.scrollbar,t=b.support.touch?e.track:document;a(e.track).on(b.touchEvents.start,e.dragStart),a(t).on(b.touchEvents.move,e.dragMove),a(t).on(b.touchEvents.end,e.dragEnd)},disableDraggable:function(){var e=b.scrollbar,t=b.support.touch?e.track:document;a(e.track).off(b.touchEvents.start,e.dragStart),a(t).off(b.touchEvents.move,e.dragMove),a(t).off(b.touchEvents.end,e.dragEnd)},set:function(){if(b.params.scrollbar){var e=b.scrollbar;e.track=a(b.params.scrollbar),b.params.uniqueNavElements&&"string"==typeof b.params.scrollbar&&e.track.length>1&&1===b.container.find(b.params.scrollbar).length&&(e.track=b.container.find(b.params.scrollbar)),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=b.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=b.size/b.virtualSize,e.moveDivider=e.divider*(e.trackSize/b.size),e.dragSize=e.trackSize*e.divider,b.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",b.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(b.params.scrollbar){var e,a=b.scrollbar,t=(b.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*b.progress,b.rtl&&b.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),b.isHorizontal()?(b.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(b.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),b.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){b.params.scrollbar&&b.scrollbar.drag.transition(e)}},b.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,r;this.x.length;this.interpolate=function(e){return e?(r=i(this.x,e),t=r-1,(e-this.x[t])*(this.y[r]-this.y[t])/(this.x[r]-this.x[t])+this.y[t]):0};var i=function(){var e,a,t;return function(r,i){for(a=-1,e=r.length;e-a>1;)r[t=e+a>>1]<=i?a=t:e=t;return e}}()},getInterpolateFunction:function(e){b.controller.spline||(b.controller.spline=b.params.loop?new b.controller.LinearSpline(b.slidesGrid,e.slidesGrid):new b.controller.LinearSpline(b.snapGrid,e.snapGrid))},setTranslate:function(e,a){function r(a){e=a.rtl&&"horizontal"===a.params.direction?-b.translate:b.translate,"slide"===b.params.controlBy&&(b.controller.getInterpolateFunction(a),s=-b.controller.spline.interpolate(-e)),s&&"container"!==b.params.controlBy||(i=(a.maxTranslate()-a.minTranslate())/(b.maxTranslate()-b.minTranslate()),s=(e-b.minTranslate())*i+a.minTranslate()),b.params.controlInverse&&(s=a.maxTranslate()-s),a.updateProgress(s),a.setWrapperTranslate(s,!1,b),a.updateActiveIndex()}var i,s,n=b.params.control;if(b.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&r(n[o]);else n instanceof t&&a!==n&&r(n)},setTransition:function(e,a){function r(a){a.setWrapperTransition(e,b),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){s&&(a.params.loop&&"slide"===b.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var i,s=b.params.control;if(b.isArray(s))for(i=0;i<s.length;i++)s[i]!==a&&s[i]instanceof t&&r(s[i]);else s instanceof t&&a!==s&&r(s)}},b.hashnav={init:function(){if(b.params.hashnav){b.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,r=b.slides.length;r>t;t++){var i=b.slides.eq(t),s=i.attr("data-hash");if(s===e&&!i.hasClass(b.params.slideDuplicateClass)){var n=i.index();b.slideTo(n,a,b.params.runCallbacksOnInit,!0)}}}},setHash:function(){b.hashnav.initialized&&b.params.hashnav&&(document.location.hash=b.slides.eq(b.activeIndex).attr("data-hash")||"")}},b.disableKeyboardControl=function(){b.params.keyboardControl=!1,a(document).off("keydown",p)},b.enableKeyboardControl=function(){b.params.keyboardControl=!0,a(document).on("keydown",p)},b.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},b.params.mousewheelControl){try{new window.WheelEvent("wheel"),b.mousewheel.event="wheel"}catch(N){(window.WheelEvent||b.container[0]&&"wheel"in b.container[0])&&(b.mousewheel.event="wheel")}!b.mousewheel.event&&window.WheelEvent,b.mousewheel.event||void 0===document.onmousewheel||(b.mousewheel.event="mousewheel"),b.mousewheel.event||(b.mousewheel.event="DOMMouseScroll")}b.disableMousewheelControl=function(){return b.mousewheel.event?(b.container.off(b.mousewheel.event,d),!0):!1},b.enableMousewheelControl=function(){return b.mousewheel.event?(b.container.on(b.mousewheel.event,d),!0):!1},b.parallax={setTranslate:function(){b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){u(this,b.progress)}),b.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);u(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=b.params.speed),b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),r=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),t.transition(r)})}},b._plugins=[];for(var R in b.plugins){var W=b.plugins[R](b,b.params[R]);W&&b._plugins.push(W)}return b.callPlugins=function(e){for(var a=0;a<b._plugins.length;a++)e in b._plugins[a]&&b._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},b.emitterEventListeners={},b.emit=function(e){b.params[e]&&b.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(b.emitterEventListeners[e])for(a=0;a<b.emitterEventListeners[e].length;a++)b.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);b.callPlugins&&b.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},b.on=function(e,a){return e=c(e),b.emitterEventListeners[e]||(b.emitterEventListeners[e]=[]),b.emitterEventListeners[e].push(a),b},b.off=function(e,a){var t;if(e=c(e),"undefined"==typeof a)return b.emitterEventListeners[e]=[],b;if(b.emitterEventListeners[e]&&0!==b.emitterEventListeners[e].length){for(t=0;t<b.emitterEventListeners[e].length;t++)b.emitterEventListeners[e][t]===a&&b.emitterEventListeners[e].splice(t,1);return b}},b.once=function(e,a){e=c(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),b.off(e,t)};return b.on(e,t),b},b.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(b.params.nextButton)?(b.onClickNext(e),b.isEnd?b.a11y.notify(b.params.lastSlideMessage):b.a11y.notify(b.params.nextSlideMessage)):a(e.target).is(b.params.prevButton)&&(b.onClickPrev(e),b.isBeginning?b.a11y.notify(b.params.firstSlideMessage):b.a11y.notify(b.params.prevSlideMessage)),a(e.target).is("."+b.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=b.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.a11y.makeFocusable(b.nextButton),b.a11y.addRole(b.nextButton,"button"),b.a11y.addLabel(b.nextButton,b.params.nextSlideMessage)),b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.a11y.makeFocusable(b.prevButton),b.a11y.addRole(b.prevButton,"button"),b.a11y.addLabel(b.prevButton,b.params.prevSlideMessage)),a(b.container).append(b.a11y.liveRegion)},initPagination:function(){b.params.pagination&&b.params.paginationClickable&&b.bullets&&b.bullets.length&&b.bullets.each(function(){var e=a(this);b.a11y.makeFocusable(e),b.a11y.addRole(e,"button"),b.a11y.addLabel(e,b.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){b.a11y.liveRegion&&b.a11y.liveRegion.length>0&&b.a11y.liveRegion.remove()}},b.init=function(){b.params.loop&&b.createLoop(),b.updateContainerSize(),b.updateSlidesSize(),b.updatePagination(),b.params.scrollbar&&b.scrollbar&&(b.scrollbar.set(),b.params.scrollbarDraggable&&b.scrollbar.enableDraggable()),"slide"!==b.params.effect&&b.effects[b.params.effect]&&(b.params.loop||b.updateProgress(),b.effects[b.params.effect].setTranslate()),b.params.loop?b.slideTo(b.params.initialSlide+b.loopedSlides,0,b.params.runCallbacksOnInit):(b.slideTo(b.params.initialSlide,0,b.params.runCallbacksOnInit),0===b.params.initialSlide&&(b.parallax&&b.params.parallax&&b.parallax.setTranslate(),b.lazy&&b.params.lazyLoading&&(b.lazy.load(),b.lazy.initialImageLoaded=!0))),b.attachEvents(),b.params.observer&&b.support.observer&&b.initObservers(),b.params.preloadImages&&!b.params.lazyLoading&&b.preloadImages(),b.params.autoplay&&b.startAutoplay(),b.params.keyboardControl&&b.enableKeyboardControl&&b.enableKeyboardControl(),b.params.mousewheelControl&&b.enableMousewheelControl&&b.enableMousewheelControl(),
b.params.hashnav&&b.hashnav&&b.hashnav.init(),b.params.a11y&&b.a11y&&b.a11y.init(),b.emit("onInit",b)},b.cleanupStyles=function(){b.container.removeClass(b.classNames.join(" ")).removeAttr("style"),b.wrapper.removeAttr("style"),b.slides&&b.slides.length&&b.slides.removeClass([b.params.slideVisibleClass,b.params.slideActiveClass,b.params.slideNextClass,b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),b.paginationContainer&&b.paginationContainer.length&&b.paginationContainer.removeClass(b.params.paginationHiddenClass),b.bullets&&b.bullets.length&&b.bullets.removeClass(b.params.bulletActiveClass),b.params.prevButton&&a(b.params.prevButton).removeClass(b.params.buttonDisabledClass),b.params.nextButton&&a(b.params.nextButton).removeClass(b.params.buttonDisabledClass),b.params.scrollbar&&b.scrollbar&&(b.scrollbar.track&&b.scrollbar.track.length&&b.scrollbar.track.removeAttr("style"),b.scrollbar.drag&&b.scrollbar.drag.length&&b.scrollbar.drag.removeAttr("style"))},b.destroy=function(e,a){b.detachEvents(),b.stopAutoplay(),b.params.scrollbar&&b.scrollbar&&b.params.scrollbarDraggable&&b.scrollbar.disableDraggable(),b.params.loop&&b.destroyLoop(),a&&b.cleanupStyles(),b.disconnectObservers(),b.params.keyboardControl&&b.disableKeyboardControl&&b.disableKeyboardControl(),b.params.mousewheelControl&&b.disableMousewheelControl&&b.disableMousewheelControl(),b.params.a11y&&b.a11y&&b.a11y.destroy(),b.emit("onDestroy"),e!==!1&&(b=null)},b.init(),b}};t.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),i=!t&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:t||i||r,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var r=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var r=[],i=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var s,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),(0===o.indexOf("<td")||0===o.indexOf("<th"))&&(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,i=0;i<n.childNodes.length;i++)r.push(n.childNodes[i])}else for(s=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],i=0;i<s.length;i++)s[i]&&r.push(s[i])}else if(a.nodeType||a===window||a===document)r.push(a);else if(a.length>0&&a[0].nodeType)for(i=0;i<a.length;i++)r.push(a[i]);return new e(r)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.remove(a[t]);return this},hasClass:function(e){return this[0]?this[0].classList.contains(e):!1},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var r in e)this[t][r]=e[r],this[t].setAttribute(r,e[r]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e);return this},data:function(e,a){if("undefined"!=typeof a){for(var t=0;t<this.length;t++){var r=this[t];r.dom7ElementDataStorage||(r.dom7ElementDataStorage={}),r.dom7ElementDataStorage[e]=a}return this}if(this[0]){var i=this[0].getAttribute("data-"+e);return i?i:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,r,i){function s(e){var i=e.target;if(a(i).is(t))r.call(i,e);else for(var s=a(i).parents(),n=0;n<s.length;n++)a(s[n]).is(t)&&r.call(s[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(r=arguments[1],i=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],r,i);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:r,liveListener:s}),this[n].addEventListener(l[o],s,i);return this},off:function(e,a,t,r){for(var i=e.split(" "),s=0;s<i.length;s++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],r=arguments[2]||!1),this[n].removeEventListener(i[s],t,r);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(i[s],this[n].dom7LiveListeners[o].liveListener,r);return this},once:function(e,a,t,r){function i(n){t(n),s.off(e,a,i,r)}var s=this;"function"==typeof a&&(a=!1,t=arguments[1],r=arguments[2]),s.on(e,a,i,r)},trigger:function(e,a){for(var t=0;t<this.length;t++){var r;try{r=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(i){r=document.createEvent("Event"),r.initEvent(e,!0,!0),r.detail=a}this[t].dispatchEvent(r)}return this},transitionEnd:function(e){function a(s){if(s.target===this)for(e.call(this,s),t=0;t<r.length;t++)i.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<r.length;t++)i.on(r[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,r=e.clientTop||t.clientTop||0,i=e.clientLeft||t.clientLeft||0,s=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+s-r,left:a.left+n-i}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var r in e)this[t].style[r]=e[r];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},text:function(e){if("undefined"==typeof e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a++)this[a].textContent=e;return this},is:function(t){if(!this[0])return!1;var r,i;if("string"==typeof t){var s=this[0];if(s===document)return t===document;if(s===window)return t===window;if(s.matches)return s.matches(t);if(s.webkitMatchesSelector)return s.webkitMatchesSelector(t);if(s.mozMatchesSelector)return s.mozMatchesSelector(t);if(s.msMatchesSelector)return s.msMatchesSelector(t);for(r=a(t),i=0;i<r.length;i++)if(r[i]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(r=t.nodeType?[t]:t,i=0;i<r.length;i++)if(r[i]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}},eq:function(a){if("undefined"==typeof a)return this;var t,r=this.length;return a>r-1?new e([]):0>a?(t=r+a,new e(0>t?[]:[this[t]])):new e([this[a]])},append:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a;i.firstChild;)this[t].appendChild(i.firstChild)}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].appendChild(a[r]);else this[t].appendChild(a);return this},prepend:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a,r=i.childNodes.length-1;r>=0;r--)this[t].insertBefore(i.childNodes[r],this[t].childNodes[0])}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].insertBefore(a[r],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0]);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[r].cloneNode(!0),t[i])},insertAfter:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0].nextSibling);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[r].cloneNode(!0),t[i].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var r=[],i=this[0];if(!i)return new e([]);for(;i.nextElementSibling;){var s=i.nextElementSibling;t?a(s).is(t)&&r.push(s):r.push(s),i=s}return new e(r)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var r=[],i=this[0];if(!i)return new e([]);for(;i.previousElementSibling;){var s=i.previousElementSibling;t?a(s).is(t)&&r.push(s):r.push(s),i=s}return new e(r)},parent:function(e){for(var t=[],r=0;r<this.length;r++)e?a(this[r].parentNode).is(e)&&t.push(this[r].parentNode):t.push(this[r].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],r=0;r<this.length;r++)for(var i=this[r].parentNode;i;)e?a(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],r=0;r<this.length;r++)for(var i=this[r].querySelectorAll(a),s=0;s<i.length;s++)t.push(i[s]);return new e(t)},children:function(t){for(var r=[],i=0;i<this.length;i++)for(var s=this[i].childNodes,n=0;n<s.length;n++)t?1===s[n].nodeType&&a(s[n]).is(t)&&r.push(s[n]):1===s[n].nodeType&&r.push(s[n]);return new e(a.unique(r))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,r=this;for(e=0;e<arguments.length;e++){var i=a(arguments[e]);for(t=0;t<i.length;t++)r[r.length]=i[t],r.length++}return r}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)-1===a.indexOf(e[t])&&a.push(e[t]);return a},a}()),i=["jQuery","Zepto","Dom7"],s=0;s<i.length;s++)window[i[s]]&&e(window[i[s]]);var n;n="undefined"==typeof r?window.Dom7||window.Zepto||window.jQuery:r,n&&("transitionEnd"in n.fn||(n.fn.transitionEnd=function(e){function a(s){if(s.target===this)for(e.call(this,s),t=0;t<r.length;t++)i.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<r.length;t++)i.on(r[t],a);return this}),"transform"in n.fn||(n.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in n.fn||(n.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this})),window.Swiper=t}(), true?module.exports=window.Swiper:undefined;
//# sourceMappingURL=maps/swiper.min.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/sangeetha/Documents/projects/ross/client/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/sangeetha/Documents/projects/ross/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map