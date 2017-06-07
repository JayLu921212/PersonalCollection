/**
 * Created by jlu122 on 2017/4/4.
 */
(function () {
    'use strict';
    // var
    var routeTreeSource = [JSON.parse(window.sessionStorage.menuJson)];
    // fn
    function init() {
        _initRouteTree();
    }

    function _initRouteTree() {
        $("#route-tree").treeview({
            data: routeTreeSource,
            enableLinks: true
        });
    }

    // init

    init();

})();