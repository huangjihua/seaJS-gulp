define("b",function(c,n,o){console.log("bbbbbbbbbbb")}),define("c",function(c,n,o){console.log("ccccccccc")}),define("index",["c","b"],function(c,n,o){c("c"),c("b"),console.log("index"),console.log("about")}),seajs.use("index");