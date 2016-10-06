'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FabricPlugin = require('./FabricPlugin');

var FabricAnswers = (function (_FabricPlugin) {
    _inherits(FabricAnswers, _FabricPlugin);

    function FabricAnswers() {
        _classCallCheck(this, FabricAnswers);

        _get(Object.getPrototypeOf(FabricAnswers.prototype), 'constructor', this).call(this);
    }

    _createClass(FabricAnswers, [{
        key: 'sendPurchase',
        value: function sendPurchase(itemPrice, currency, success, itemName, itemType, itemId, attributes) {
            this.execPlugin('sendPurchase', [itemPrice, currency, success, itemName, itemType, itemId, attributes]);
        }
    }, {
        key: 'sendAddToCart',
        value: function sendAddToCart(itemPrice, currency, itemName, itemType, itemId, attributes) {
            this.execPlugin('sendAddToCart', [itemPrice, currency, itemName, itemType, itemId, attributes]);
        }
    }, {
        key: 'sendStartCheckout',
        value: function sendStartCheckout(totalPrice, currency, itemCount, attributes) {
            this.execPlugin('sendStartCheckout', [totalPrice, currency, itemCount, attributes]);
        }
    }, {
        key: 'sendSearch',
        value: function sendSearch(query, attributes) {
            this.execPlugin('sendSearch', [query, attributes]);
        }
    }, {
        key: 'sendShare',
        value: function sendShare(method, contentName, contentType, contentId, attributes) {
            this.execPlugin('sendShare', [method, contentName, contentType, contentId, attributes]);
        }
    }, {
        key: 'sendRatedContent',
        value: function sendRatedContent(rating, contentName, contentType, contentId, attributes) {
            this.execPlugin('sendRatedContent', [rating, contentName, contentType, contentId, attributes]);
        }
    }, {
        key: 'sendSignUp',
        value: function sendSignUp(method, success, attributes) {
            this.execPlugin('sendSignUp', [method, success, attributes]);
        }
    }, {
        key: 'sendLogIn',
        value: function sendLogIn(method, success, attributes) {
            this.execPlugin('sendLogIn', [method, success, attributes]);
        }
    }, {
        key: 'sendInvite',
        value: function sendInvite(method, attributes) {
            this.execPlugin('sendInvite', [method, attributes]);
        }
    }, {
        key: 'sendLevelStart',
        value: function sendLevelStart(levelName, attributes) {
            this.execPlugin('sendLevelStart', [levelName, attributes]);
        }
    }, {
        key: 'sendLevelEnd',
        value: function sendLevelEnd(levelName, score, success, attributes) {
            this.execPlugin('sendLevelEnd', [levelName, score, success, attributes]);
        }
    }, {
        key: 'sendContentView',
        value: function sendContentView(name, type, id, attributes) {
            this.execPlugin('sendContentView', [name, type, id, attributes]);
        }
    }, {
        key: 'sendScreenView',
        value: function sendScreenView(name, id, attributes) {
            this.execPlugin('sendContentView', [name, "Screen", id, attributes]);
        }
    }, {
        key: 'sendCustomEvent',
        value: function sendCustomEvent(name, attributes) {
            this.execPlugin('sendCustomEvent', [name, attributes]);
        }
    }]);

    return FabricAnswers;
})(FabricPlugin);

module.exports = new FabricAnswers();