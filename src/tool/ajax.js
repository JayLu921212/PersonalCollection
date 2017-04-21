/**
 * Created by lujunjie on 2017/4/19.
 */
(function () {
    function _getRequest (type,url) {
        var returnData ;
        var XMLRequest ;
        if (window.XMLHttpRequest) {
            XMLRequest =  new XMLHttpRequest();
        } else {
            XMLRequest =  new ActiveXObject("Microsoft.XMLHTTP");
        }
        XMLRequest.onreadystatechange = function () {
            if (XMLRequest.readyState == 4 && XMLRequest.status==200 && XMLRequest.responseText) {
                returnData = JSON.parse(XMLRequest.responseText);
                console.log(returnData);
            }
        };
        XMLRequest.open('GET','../assets/treeData.json',true);
        XMLRequest.send();
    }

    _getRequest();
})();