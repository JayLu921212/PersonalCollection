/**
 * Created by jlu122 on 2017/4/4.
 */
(function () {
    'use strict';
    // var
    var routeTreeSource;
    // fn
    function init() {
        _initRouteTree();
        _watchMouseMove();
    }

    function _initRouteTree() {
        setTimeout(function () {
            routeTreeSource = JSON.parse(window.sessionStorage.menuJson);
            $("#route-tree").treeview({
                data: routeTreeSource,
                enableLinks: true
            });
        }, 200)
    }

    function _watchMouseMove() {
        document.addEventListener("mousemove", function (e) {
            if (e.clientX <= 200) {
                //do sth
                console.log(e.clientX);
                if($(".left-nav").attr("class").indexOf("open-left")===-1){
                    $(".left-nav").addClass("open-left");
                }
            } else {
                $(".left-nav").removeClass("open-left");
            }
        })
    }

    // init

    init();

})();