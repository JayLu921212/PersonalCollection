/**
 * Created by jlu122 on 2017/4/4.
 */
(function () {
    'use strict';
    // var
    var routeTreeSource = [
        {
            "text": "Level 1",
            "nodes": [{
                "text": "test",
                "href": "../pages/test.html"
            },{
                "text": "issues",
                "href": "../pages/issues.html"
            },{
                "text": "RBG Color",
                "href": "../pages/rgb.html"
            },{
                "text": "reference",
                "href": "../pages/reference.html"
            },{
                "text": "fontawesome",
                "href": "../pages/fontawesome.html"
            },{
                "text": "scroll",
                "href": "../pages/scroll.html"
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