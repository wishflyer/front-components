var $ = require('jquery');
var Debug = require('./debug.js')

var Tools = {
    uuid : function() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");
        return uuid;
    },
    clone: function(obj){

        if(typeof(obj) != 'object') return obj; 
        if(obj == null) return obj; 

        if(obj instanceof Array){
            var newObj = []
        }else{
            var newObj = {}; 
        }
        

        for(var i in obj){
            newObj[i] = this.clone(obj[i]); 
        } 

        return newObj; 
    },

    loadScript : function(url, callback) {

        window.dd = window.dd || {}
        window.dd.loadScriptCallback = window.dd.loadScriptCallback || {}
        window.dd.loadScriptURL = window.dd.loadScriptURL || {}

        //if(!callback) {callback  = function(){}}  //<--加上这一句不知道为什么在IE8下，不论callback有没有值都会给赋一个function(){}

        //如果真，说明已加载，直接运行callback即可
        if(window.dd.loadScriptURL[url] === true){
            callback();
            return true;
        }
        //console.log(url+"未加载，判断情况")
        if(window.dd.loadScriptURL[url] == undefined){
            window.dd.loadScriptURL[url] = false;
            //加载脚本
            var script = document.createElement("script");
            
            // IE
            if (script.readyState) {
                script.onreadystatechange = function () {

                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        window.dd.loadScriptURL[url] = true;//加载完成

                        callback();//回调

                        //调用之前未加载的callback
                        for(var i in window.dd.loadScriptCallback[url]){

                            window.dd.loadScriptCallback[url][i]()
                        }


                    }
                };
            } else { // others
                script.onload = function () {
                    window.dd.loadScriptURL[url] = true;//加载完成

                    callback();

                    //调用之前未加载的callback
                    for(var i in window.dd.loadScriptCallback[url]){

                        window.dd.loadScriptCallback[url][i]()
                    }

                };
            }
            var rgJS = /^(.+)\.js$/ig;
            var rgJSX = /^(.+)\.jsx$/ig;
            if(rgJS.test(url))
                script.type = "text/javascript";
            if(rgJSX.test(url))
                script.type = "text/babel";

            script.src = url;
            document.body.appendChild(script);
            return undefined;
        }
        //如果到这里，说明前面处于加载中状态
        //未加载的callback压入数组中待调用
        window.dd.loadScriptCallback[url] = window.dd.loadScriptCallback[url] || []
        window.dd.loadScriptCallback[url].push(callback)

        return false; 
    },


    loadCSS : function(url, callback) {

        window.dd = window.dd || {}
        window.dd.loadCSSCallback = window.dd.loadCSSCallback || {}
        window.dd.loadCSSURL = window.dd.loadCSSURL || {}

        if(!callback) callback  = function(){}

        //如果真，说明已加载，直接运行callback即可
        if(window.dd.loadCSSURL[url] === true){
            callback();
            return true;
        }
        //console.log(url+"未加载，判断情况")
        if(window.dd.loadCSSURL[url] == undefined){
            window.dd.loadCSSURL[url] = false;

            //加载CSS
            var node = document.createElement("link");

            // IE
            if (node.readyState) {
                node.onreadystatechange = function () {
                    if (node.readyState == "loaded" || node.readyState == "complete") {
                        node.onreadystatechange = null;
                        window.dd.loadCSSURL[url] = true;//加载完成

                        callback();//回调

                        //调用之前未加载的callback
                        for(var i in window.dd.loadCSSCallback[url]){
                            window.dd.loadCSSCallback[url][i]()
                        }
                    }
                };
            } else { // others
                node.onload = function () {
                    window.dd.loadCSSURL[url] = true;//加载完成

                    callback();

                    //调用之前未加载的callback
                    for(var i in window.dd.loadCSSCallback[url]){
                        window.dd.loadCSSCallback[url][i]()
                    }
                };
            }

            node.rel = 'stylesheet';
            node.type = "text/css";
            node.href = url;
            document.getElementsByTagName('head')[0].appendChild(node);
            return undefined;
        }

        //如果到这里，说明前面处于加载中状态
        //未加载的callback压入数组中待调用
        window.dd.loadCSSCallback[url] = window.dd.loadCSSCallback[url] || []
        window.dd.loadCSSCallback[url].push(callback)

        return false; 
    },


    loadJSX: function(url){
        console.log(url);
        if(!window.dd.runScripts){
            console.info("如果你想使用utils.loadJSX异步加载jsx文件, 你必须先通过JSXTransform.js暴露window.dd.runScripts方法!");
            return;
        }
        //先删除其他无用的jsx
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            //if (/^text\/jsx(;|$)/.test(scripts.item(i).type)&&scripts.item(i).src.indexOf("?only")!=-1) {
            if (/^text\/babel(;|$)/.test(scripts.item(i).type)&&scripts.item(i).src.indexOf("?only")!=-1) {
                //console.log("remove script:"+scripts.item(i).src)
                document.body.removeChild(scripts.item(i));
            }
        }
        //删除head中scrpit标签
        /*var scripts = document.head.getElementsByTagName('script');
        var length = scripts.length;
        for (var i = 0; i < length; i++) {
            //console.log("删除scrpit标签:"+scripts[0].src)
            document.head.removeChild(scripts[0]);
        }*/

        var script = document.createElement("script");
        script.type = "text/babel";
        script.src = url+"?only";

        //console.log("add scrpit标签:"+script.src)
        document.body.appendChild(script);

    },
    goJSX: function(url){
        console.log("in goJSX>>url:"+url)
        var RouteConfig = dd.RouteConfig;
        for(var i in RouteConfig){
            if(RouteConfig[i].test(url)){
                console.log("in goJSX...loadJSX");
                this.loadJSX(i);
                return;
            }
        }
    },
    handleA: function(key){
        console.log("handleA.......");
        var key = key||"data-tohash";
        window.$(document).off("click","a");
        window.$(document).on("click","a",function(){
            if(!window.$(this).attr(key))
                return true;
            var href = window.$(this).attr("href");
            window.location.hash = href;
            var RouteConfig = dd.RouteConfig;
            for(var i in RouteConfig){
                RouteConfig[i] = new RegExp(RouteConfig[i]);
                if(RouteConfig[i].test(href)){
                    Tools.loadJSX(i);
                    window.dd.runScripts();
                    return false;
                }
            }
            return false;
        });
    }
}


/**
 * all GET props saved in $_GET
 * for example:
 * in url http://127.0.0.1:8081/sample?id=1 you can use $_GET["id"] to get "1"
 */
window.$_GET = (function(){
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
        for(var i in u){
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();


module.exports = Tools;

