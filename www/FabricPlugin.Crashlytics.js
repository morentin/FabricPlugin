'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FabricPlugin = require('./FabricPlugin');

var FabricCrashlytics = (function (_FabricPlugin) {
  _inherits(FabricCrashlytics, _FabricPlugin);

  function FabricCrashlytics() {
    _classCallCheck(this, FabricCrashlytics);

    _get(Object.getPrototypeOf(FabricCrashlytics.prototype), 'constructor', this).call(this);
  }

  _createClass(FabricCrashlytics, [{
    key: 'addLog',
    value: function addLog(message) {
      this.execPlugin('addLog', [message]);
    }
  }, {
    key: 'sendCrash',
    value: function sendCrash() {
      this.execPlugin('sendCrash', []);
    }
  }, {
    key: 'sendNonFatalCrash',
    value: function sendNonFatalCrash(message) {
      this.execPlugin('sendNonFatalCrash', [message]);
    }
  }, {
    key: 'recordError',
    value: function recordError(message, code) {
      this.execPlugin('recordError', [message, code]);
    }
  }, {
    key: 'setUserIdentifier',
    value: function setUserIdentifier(userIdentifier) {
      this.execPlugin('setUserIdentifier', [userIdentifier]);
    }
  }, {
    key: 'setUserName',
    value: function setUserName(userName) {
      this.execPlugin('setUserName', [userName]);
    }
  }, {
    key: 'setUserEmail',
    value: function setUserEmail(userEmail) {
      this.execPlugin('setUserEmail', [userEmail]);
    }
  }, {
    key: 'setStringValueForKey',
    value: function setStringValueForKey(value, key) {
      this.execPlugin('setStringValueForKey', [value, key]);
    }
  }, {
    key: 'setIntValueForKey',
    value: function setIntValueForKey(value, key) {
      this.execPlugin('setIntValueForKey', [value, key]);
    }
  }, {
    key: 'setBoolValueForKey',
    value: function setBoolValueForKey(value, key) {
      this.execPlugin('setBoolValueForKey', [value, key]);
    }
  }, {
    key: 'setFloatValueForKey',
    value: function setFloatValueForKey(value, key) {
      this.execPlugin('setFloatValueForKey', [value, key]);
    }
  }]);

  return FabricCrashlytics;
})(FabricPlugin);

module.exports = new FabricCrashlytics();