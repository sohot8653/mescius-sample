/*!
    *
    * Wijmo Library 5.20232.939
    * https://developer.mescius.com/wijmo
    *
    * Copyright(c) MESCIUS inc. All rights reserved.
    *
    * Licensed under the End-User License Agreement For MESCIUS Wijmo Software.
    * us.sales@mescius.com
    * https://developer.mescius.com/wijmo/licensing
    *
    */
/**
* {@module wijmo.angular2.chart.annotation}
* Contains Angular 2 components for the <b>wijmo.chart.annotation</b> module.
*
* <b>wijmo.angular2.chart.annotation</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjAnnotation from 'wijmo/wijmo.angular2.chart.annotation';
* import * as wjChart from 'wijmo/wijmo.angular2.chart';
* &nbsp;
* &#64;Component({
*     directives: [wjChart.WjFlexChart, wjAnnotation.WjFlexChartAnnotationLayer,
*            wjAnnotation.WjFlexChartAnnotationCircle, wjChart.WjFlexChartSeries],
*     template: `
*       &lt;wj-flex-chart [itemsSource]="data" [bindingX]="'x'"&gt;
*           &lt;wj-flex-chart-series [binding]="'y'"&gt;&lt;/wj-flex-chart-series&gt;
*           &lt;wj-flex-chart-annotation-layer&gt;
*               &lt;wj-flex-chart-annotation-circle [radius]="40" [point]="{x: 250, y: 150}"&gt;&lt;/wj-flex-chart-annotation-circle&gt;
*           &lt;/wj-flex-chart-annotation-layer&gt;
*       &lt;/wj-flex-chart&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
/**
 *
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare var ___keepComment: any;
import { EventEmitter, AfterViewInit, ElementRef, Injector, OnInit, OnDestroy } from '@angular/core';
import { IWjComponentMetadata, IWjComponentMeta } from '@grapecity/wijmo.angular2.directivebase';
import * as wjcChartAnnotation from '@grapecity/wijmo.chart.annotation';
declare var wjFlexChartAnnotationLayerMeta: IWjComponentMeta;
export { wjFlexChartAnnotationLayerMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.annotation.AnnotationLayer} class.
 *
 * The <b>wj-flex-chart-annotation-layer</b> component must be
 * contained in one of the following components:
 * {@link wijmo.angular2.chart.WjFlexChart}
 *  or {@link wijmo.angular2.chart.finance.WjFinancialChart}.
 *
 * Use the <b>wj-flex-chart-annotation-layer</b> component to add <b>AnnotationLayer</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartAnnotationLayer</b> component is derived from the <b>AnnotationLayer</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-chart-annotation-layer</b> component may contain the following child components:
 * {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationText}
 * , {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationEllipse}
 * , {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationRectangle}
 * , {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationLine}
 * , {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationPolygon}
 * , {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationCircle}
 * , {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationSquare}
 *  and {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationImage}.
*/
export declare class WjFlexChartAnnotationLayer extends wjcChartAnnotation.AnnotationLayer implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is ''.
     */
    wjProperty: string;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartAnnotationLayer, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartAnnotationLayer, "wj-flex-chart-annotation-layer", never, { "wjProperty": "wjProperty"; }, { "initialized": "initialized"; }, never, ["*"], false, never>;
}
declare var wjFlexChartAnnotationTextMeta: IWjComponentMeta;
export { wjFlexChartAnnotationTextMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.annotation.Text} class.
 *
 * The <b>wj-flex-chart-annotation-text</b> component must be
 * contained in a {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer} component.
 *
 * Use the <b>wj-flex-chart-annotation-text</b> component to add <b>Text</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartAnnotationText</b> component is derived from the <b>Text</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-chart-annotation-text</b> component may contain a {@link wijmo.angular2.chart.WjFlexChartDataPoint} child component.
*/
export declare class WjFlexChartAnnotationText extends wjcChartAnnotation.Text implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is 'items'.
     */
    wjProperty: string;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartAnnotationText, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartAnnotationText, "wj-flex-chart-annotation-text", never, { "wjProperty": "wjProperty"; "type": "type"; "attachment": "attachment"; "position": "position"; "point": "point"; "seriesIndex": "seriesIndex"; "pointIndex": "pointIndex"; "offset": "offset"; "style": "style"; "isVisible": "isVisible"; "tooltip": "tooltip"; "text": "text"; "content": "content"; "name": "name"; "width": "width"; "height": "height"; "start": "start"; "end": "end"; "radius": "radius"; "length": "length"; "href": "href"; }, { "initialized": "initialized"; }, never, ["*"], false, never>;
}
declare var wjFlexChartAnnotationEllipseMeta: IWjComponentMeta;
export { wjFlexChartAnnotationEllipseMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.annotation.Ellipse} class.
 *
 * The <b>wj-flex-chart-annotation-ellipse</b> component must be
 * contained in a {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer} component.
 *
 * Use the <b>wj-flex-chart-annotation-ellipse</b> component to add <b>Ellipse</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartAnnotationEllipse</b> component is derived from the <b>Ellipse</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-chart-annotation-ellipse</b> component may contain a {@link wijmo.angular2.chart.WjFlexChartDataPoint} child component.
*/
export declare class WjFlexChartAnnotationEllipse extends wjcChartAnnotation.Ellipse implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is 'items'.
     */
    wjProperty: string;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartAnnotationEllipse, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartAnnotationEllipse, "wj-flex-chart-annotation-ellipse", never, { "wjProperty": "wjProperty"; "type": "type"; "attachment": "attachment"; "position": "position"; "point": "point"; "seriesIndex": "seriesIndex"; "pointIndex": "pointIndex"; "offset": "offset"; "style": "style"; "isVisible": "isVisible"; "tooltip": "tooltip"; "text": "text"; "content": "content"; "name": "name"; "width": "width"; "height": "height"; "start": "start"; "end": "end"; "radius": "radius"; "length": "length"; "href": "href"; }, { "initialized": "initialized"; }, never, ["*"], false, never>;
}
declare var wjFlexChartAnnotationRectangleMeta: IWjComponentMeta;
export { wjFlexChartAnnotationRectangleMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.annotation.Rectangle} class.
 *
 * The <b>wj-flex-chart-annotation-rectangle</b> component must be
 * contained in a {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer} component.
 *
 * Use the <b>wj-flex-chart-annotation-rectangle</b> component to add <b>Rectangle</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartAnnotationRectangle</b> component is derived from the <b>Rectangle</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-chart-annotation-rectangle</b> component may contain a {@link wijmo.angular2.chart.WjFlexChartDataPoint} child component.
*/
export declare class WjFlexChartAnnotationRectangle extends wjcChartAnnotation.Rectangle implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is 'items'.
     */
    wjProperty: string;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartAnnotationRectangle, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartAnnotationRectangle, "wj-flex-chart-annotation-rectangle", never, { "wjProperty": "wjProperty"; "type": "type"; "attachment": "attachment"; "position": "position"; "point": "point"; "seriesIndex": "seriesIndex"; "pointIndex": "pointIndex"; "offset": "offset"; "style": "style"; "isVisible": "isVisible"; "tooltip": "tooltip"; "text": "text"; "content": "content"; "name": "name"; "width": "width"; "height": "height"; "start": "start"; "end": "end"; "radius": "radius"; "length": "length"; "href": "href"; }, { "initialized": "initialized"; }, never, ["*"], false, never>;
}
declare var wjFlexChartAnnotationLineMeta: IWjComponentMeta;
export { wjFlexChartAnnotationLineMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.annotation.Line} class.
 *
 * The <b>wj-flex-chart-annotation-line</b> component must be
 * contained in a {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer} component.
 *
 * Use the <b>wj-flex-chart-annotation-line</b> component to add <b>Line</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartAnnotationLine</b> component is derived from the <b>Line</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-chart-annotation-line</b> component may contain a {@link wijmo.angular2.chart.WjFlexChartDataPoint} child component.
*/
export declare class WjFlexChartAnnotationLine extends wjcChartAnnotation.Line implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is 'items'.
     */
    wjProperty: string;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartAnnotationLine, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartAnnotationLine, "wj-flex-chart-annotation-line", never, { "wjProperty": "wjProperty"; "type": "type"; "attachment": "attachment"; "position": "position"; "point": "point"; "seriesIndex": "seriesIndex"; "pointIndex": "pointIndex"; "offset": "offset"; "style": "style"; "isVisible": "isVisible"; "tooltip": "tooltip"; "text": "text"; "content": "content"; "name": "name"; "width": "width"; "height": "height"; "start": "start"; "end": "end"; "radius": "radius"; "length": "length"; "href": "href"; }, { "initialized": "initialized"; }, never, ["*"], false, never>;
}
declare var wjFlexChartAnnotationPolygonMeta: IWjComponentMeta;
export { wjFlexChartAnnotationPolygonMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.annotation.Polygon} class.
 *
 * The <b>wj-flex-chart-annotation-polygon</b> component must be
 * contained in a {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer} component.
 *
 * Use the <b>wj-flex-chart-annotation-polygon</b> component to add <b>Polygon</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartAnnotationPolygon</b> component is derived from the <b>Polygon</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-chart-annotation-polygon</b> component may contain a {@link wijmo.angular2.chart.WjFlexChartDataPoint} child component.
*/
export declare class WjFlexChartAnnotationPolygon extends wjcChartAnnotation.Polygon implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is 'items'.
     */
    wjProperty: string;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartAnnotationPolygon, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartAnnotationPolygon, "wj-flex-chart-annotation-polygon", never, { "wjProperty": "wjProperty"; "type": "type"; "attachment": "attachment"; "position": "position"; "point": "point"; "seriesIndex": "seriesIndex"; "pointIndex": "pointIndex"; "offset": "offset"; "style": "style"; "isVisible": "isVisible"; "tooltip": "tooltip"; "text": "text"; "content": "content"; "name": "name"; "width": "width"; "height": "height"; "start": "start"; "end": "end"; "radius": "radius"; "length": "length"; "href": "href"; }, { "initialized": "initialized"; }, never, ["*"], false, never>;
}
declare var wjFlexChartAnnotationCircleMeta: IWjComponentMeta;
export { wjFlexChartAnnotationCircleMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.annotation.Circle} class.
 *
 * The <b>wj-flex-chart-annotation-circle</b> component must be
 * contained in a {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer} component.
 *
 * Use the <b>wj-flex-chart-annotation-circle</b> component to add <b>Circle</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartAnnotationCircle</b> component is derived from the <b>Circle</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-chart-annotation-circle</b> component may contain a {@link wijmo.angular2.chart.WjFlexChartDataPoint} child component.
*/
export declare class WjFlexChartAnnotationCircle extends wjcChartAnnotation.Circle implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is 'items'.
     */
    wjProperty: string;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartAnnotationCircle, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartAnnotationCircle, "wj-flex-chart-annotation-circle", never, { "wjProperty": "wjProperty"; "type": "type"; "attachment": "attachment"; "position": "position"; "point": "point"; "seriesIndex": "seriesIndex"; "pointIndex": "pointIndex"; "offset": "offset"; "style": "style"; "isVisible": "isVisible"; "tooltip": "tooltip"; "text": "text"; "content": "content"; "name": "name"; "width": "width"; "height": "height"; "start": "start"; "end": "end"; "radius": "radius"; "length": "length"; "href": "href"; }, { "initialized": "initialized"; }, never, ["*"], false, never>;
}
declare var wjFlexChartAnnotationSquareMeta: IWjComponentMeta;
export { wjFlexChartAnnotationSquareMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.annotation.Square} class.
 *
 * The <b>wj-flex-chart-annotation-square</b> component must be
 * contained in a {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer} component.
 *
 * Use the <b>wj-flex-chart-annotation-square</b> component to add <b>Square</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartAnnotationSquare</b> component is derived from the <b>Square</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-chart-annotation-square</b> component may contain a {@link wijmo.angular2.chart.WjFlexChartDataPoint} child component.
*/
export declare class WjFlexChartAnnotationSquare extends wjcChartAnnotation.Square implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is 'items'.
     */
    wjProperty: string;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartAnnotationSquare, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartAnnotationSquare, "wj-flex-chart-annotation-square", never, { "wjProperty": "wjProperty"; "type": "type"; "attachment": "attachment"; "position": "position"; "point": "point"; "seriesIndex": "seriesIndex"; "pointIndex": "pointIndex"; "offset": "offset"; "style": "style"; "isVisible": "isVisible"; "tooltip": "tooltip"; "text": "text"; "content": "content"; "name": "name"; "width": "width"; "height": "height"; "start": "start"; "end": "end"; "radius": "radius"; "length": "length"; "href": "href"; }, { "initialized": "initialized"; }, never, ["*"], false, never>;
}
declare var wjFlexChartAnnotationImageMeta: IWjComponentMeta;
export { wjFlexChartAnnotationImageMeta };
/**
 * Angular 2 component for the {@link wijmo.chart.annotation.Image} class.
 *
 * The <b>wj-flex-chart-annotation-image</b> component must be
 * contained in a {@link wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer} component.
 *
 * Use the <b>wj-flex-chart-annotation-image</b> component to add <b>Image</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjFlexChartAnnotationImage</b> component is derived from the <b>Image</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-chart-annotation-image</b> component may contain a {@link wijmo.angular2.chart.WjFlexChartDataPoint} child component.
*/
export declare class WjFlexChartAnnotationImage extends wjcChartAnnotation.Image implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is 'items'.
     */
    wjProperty: string;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjFlexChartAnnotationImage, [null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjFlexChartAnnotationImage, "wj-flex-chart-annotation-image", never, { "wjProperty": "wjProperty"; "type": "type"; "attachment": "attachment"; "position": "position"; "point": "point"; "seriesIndex": "seriesIndex"; "pointIndex": "pointIndex"; "offset": "offset"; "style": "style"; "isVisible": "isVisible"; "tooltip": "tooltip"; "text": "text"; "content": "content"; "name": "name"; "width": "width"; "height": "height"; "start": "start"; "end": "end"; "radius": "radius"; "length": "length"; "href": "href"; }, { "initialized": "initialized"; }, never, ["*"], false, never>;
}
export declare class WjChartAnnotationModule {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjChartAnnotationModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<WjChartAnnotationModule, [typeof WjFlexChartAnnotationLayer, typeof WjFlexChartAnnotationText, typeof WjFlexChartAnnotationEllipse, typeof WjFlexChartAnnotationRectangle, typeof WjFlexChartAnnotationLine, typeof WjFlexChartAnnotationPolygon, typeof WjFlexChartAnnotationCircle, typeof WjFlexChartAnnotationSquare, typeof WjFlexChartAnnotationImage], [typeof ɵngcc1.CommonModule], [typeof WjFlexChartAnnotationLayer, typeof WjFlexChartAnnotationText, typeof WjFlexChartAnnotationEllipse, typeof WjFlexChartAnnotationRectangle, typeof WjFlexChartAnnotationLine, typeof WjFlexChartAnnotationPolygon, typeof WjFlexChartAnnotationCircle, typeof WjFlexChartAnnotationSquare, typeof WjFlexChartAnnotationImage]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<WjChartAnnotationModule>;
}
