var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Zoparki = /** @class */ (function () {
    function Zoparki() {
        // განვსაზღვრე ცხოველების ახალი ტიპი, და ვუთხარი რომ ის არის ცარიელა ერეი.
        this.cxovelebi = [];
    }
    //კლასებს აქვს მეთოდები ტავისი, ქვემოთ განვსაზღვრავთ მეთოდებს,მეთოდები არის იგივე ფუნქცია ოღონდ კლასში.
    Zoparki.prototype.daamateCxovelebi = function (cxovelebi) {
        this.cxovelebi.push(cxovelebi);
    };
    Zoparki.prototype.amoshaleCxovelebi = function (washaleCxovelebi) {
        this.cxovelebi = this.cxovelebi.filter(function (cxovelebi) { return cxovelebi.saxeli; });
    };
    Zoparki.prototype.yvelasInformacia = function () { };
    return Zoparki;
}());
// : ამ ორ წერტილს იმიტომ ვუწერ რომ ტაიპსკრიპტი ითხოვს განვუსაზღვრო რა ტიპია, სტრინგი ინტეჯერი თუ რა.
var Cxovelebi = /** @class */ (function () {
    function Cxovelebi(saxeli, asaki, saxeoba) {
        this.saxeli = saxeli;
        this.asaki = asaki;
        this.saxeoba = saxeoba;
    }
    Cxovelebi.prototype.gaaketeXma = function () { };
    return Cxovelebi;
}());
var Dzagli = /** @class */ (function (_super) {
    __extends(Dzagli, _super);
    function Dzagli(saxeli, asaki, saxeoba) {
        return _super.call(this, saxeli, asaki, saxeoba) || this;
    }
    Dzagli.prototype.gaaketeXma = function () {
        return "Bark";
    };
    return Dzagli;
}(Cxovelebi));
var Kata = /** @class */ (function () {
    function Kata(saxeli, asaki, saxeoba) {
        return _super.call(this, saxeli, asaki, saxeoba) || this;
    }
    Kata.prototype.gaaketeXma = function () {
        return "Meow";
    };
    return Kata;
}());
var dzagli = new Dzagli('miki', 8, 'dzagli');
var kata = new Kata('chreli', 4, 'kata');
dzagli.gaaketeXma();
kata.gaaketeXma();
var tbilisisZoparki = new Zoparki;
tbilisisZoparki.daamateCxovelebi(dzagli);
tbilisisZoparki.daamateCxovelebi(kata);
