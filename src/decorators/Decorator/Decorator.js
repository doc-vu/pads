/*globals define, _*/
/*jshint browser: true, camelcase: false*/
/**
 * @author pmeijer / https://github.com/pmeijer
 */

define([
    'js/Decorators/DecoratorBase',
    './DiagramDesigner/Decorator.DiagramDesignerWidget',
    './PartBrowser/Decorator.PartBrowserWidget'
], function (DecoratorBase, DecoratorDiagramDesignerWidget, DecoratorPartBrowserWidget) {

    'use strict';

    var Decorator,
        DECORATOR_ID = 'Decorator';

    Decorator = function (params) {
        var opts = _.extend({loggerName: this.DECORATORID}, params);

        DecoratorBase.apply(this, [opts]);

        this.logger.debug('Decorator ctor');
    };

    _.extend(Decorator.prototype, DecoratorBase.prototype);
    Decorator.prototype.DECORATORID = DECORATOR_ID;

    /*********************** OVERRIDE DecoratorBase MEMBERS **************************/

    Decorator.prototype.initializeSupportedWidgetMap = function () {
        this.supportedWidgetMap = {
            DiagramDesigner: DecoratorDiagramDesignerWidget,
            PartBrowser: DecoratorPartBrowserWidget
        };
    };

    return Decorator;
});