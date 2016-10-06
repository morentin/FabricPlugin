const FabricPlugin = require('./FabricPlugin');

class FabricCrashlytics extends FabricPlugin {
  constructor() {
    super();
  }

  addLog(message) {
    this.execPlugin('addLog', [
      message
    ]);
  }

  sendCrash() {
    this.execPlugin('sendCrash', [
    ]);
  }

  sendNonFatalCrash(message) {
    this.execPlugin('sendNonFatalCrash', [
      message
    ]);
  }

  recordError(message, code) {
    this.execPlugin('recordError', [
      message,
      code
    ]);
  }

  setUserIdentifier(userIdentifier) {
    this.execPlugin('setUserIdentifier', [
      userIdentifier
    ]);
  }

  setUserName(userName) {
    this.execPlugin('setUserName', [
      userName
    ]);
  }

  setUserEmail(userEmail) {
    this.execPlugin('setUserEmail', [
      userEmail
    ]);
  }

  setStringValueForKey(value, key) {
    this.execPlugin('setStringValueForKey', [
      value,
      key
    ]);
  }

  setIntValueForKey(value, key) {
    this.execPlugin('setIntValueForKey', [
      value,
      key
    ]);
  }

  setBoolValueForKey(value, key) {
    this.execPlugin('setBoolValueForKey', [
      value,
      key
    ]);
  }

  setFloatValueForKey(value, key) {
    this.execPlugin('setFloatValueForKey', [
      value,
      key
    ]);
  }

}

module.exports = new FabricCrashlytics();
