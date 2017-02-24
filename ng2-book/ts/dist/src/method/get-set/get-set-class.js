var Hello = (function () {
    function Hello() {
    }
    Object.defineProperty(Hello.prototype, "hello", {
        get: function () {
            return this._hello + " world";
        },
        set: function (name) {
            this._hello = name;
        },
        enumerable: true,
        configurable: true
    });
    return Hello;
}());
var m = new Hello();
m.hello = "hello";
console.log(m.hello);
//# sourceMappingURL=get-set-class.js.map