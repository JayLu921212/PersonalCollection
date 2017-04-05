/**
 * Created by jlu122 on 2017/4/4.
 */
(function () {
    'use strict';
    // var
    var routeTreeSource = [
        {
            text: "Parent 1",
            nodes: [
                {
                    text: "Child 1",
                    nodes: [
                        {
                            text: "Grandchild 1"
                        },
                        {
                            text: "Grandchild 2"
                        }
                    ]
                },
                {
                    text: "Child 2"
                }
            ]
        },
        {
            text: "Parent 2"
        },
        {
            text: "Parent 3"
        },
        {
            text: "Parent 4"
        },
        {
            text: "Parent 5"
        }
    ];
    // fn
    function init() {
        _initRouteTree();
    }
    function _initRouteTree() {
        $("#route-tree").treeview({data:routeTreeSource});
    }
    // init

    init();

})();