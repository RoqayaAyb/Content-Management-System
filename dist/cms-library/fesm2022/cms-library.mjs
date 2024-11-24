import * as i0 from '@angular/core';
import { NgModule, Injectable, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

class CmsLibraryModule {
    /** @nocollapse */ static ɵfac = function CmsLibraryModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CmsLibraryModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: CmsLibraryModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            HttpClientModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmsLibraryModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    CommonModule,
                    HttpClientModule
                ],
                exports: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CmsLibraryModule, { imports: [CommonModule,
        HttpClientModule] }); })();

class CmsLibraryService {
    constructor() { }
    getLibraryInfo() {
        return 'This is the CMS Library service providing reusable functionalities.';
    }
    /** @nocollapse */ static ɵfac = function CmsLibraryService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CmsLibraryService)(); };
    /** @nocollapse */ static ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: CmsLibraryService, factory: CmsLibraryService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmsLibraryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();

class CmsLibraryComponent {
    title = 'CMS Library';
    /** @nocollapse */ static ɵfac = function CmsLibraryComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CmsLibraryComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: CmsLibraryComponent, selectors: [["app-cms-library"]], decls: 5, vars: 1, consts: [[1, "cms-library"]], template: function CmsLibraryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4, "Welcome to the CMS Library! Explore reusable components here.");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmsLibraryComponent, [{
        type: Component,
        args: [{ selector: 'app-cms-library', template: "<div class=\"cms-library\">\r\n    <h1>{{ title }}</h1>\r\n    <p>Welcome to the CMS Library! Explore reusable components here.</p>\r\n  </div>\r\n  " }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CmsLibraryComponent, { className: "CmsLibraryComponent", filePath: "lib/cms-library.component.ts", lineNumber: 8 }); })();

/*
 * Public API Surface of cms-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CmsLibraryComponent, CmsLibraryModule, CmsLibraryService };
//# sourceMappingURL=cms-library.mjs.map
