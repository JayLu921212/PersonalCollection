/**
 * Created by jlu122 on 2017/4/4.
 */
(function () {
    'use strict';
    // var
    var routeTreeSource = [
        {
            "text": "正则",
            "href": "../pages/test.html",
            "nodes": [{
                "text": "Child1"
            }]
        }
    ];
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