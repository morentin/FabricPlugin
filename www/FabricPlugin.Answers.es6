const FabricPlugin = require('./FabricPlugin');

class FabricAnswers extends FabricPlugin {
    constructor() {
      super();
    }

    sendPurchase(itemPrice, currency, success, itemName, itemType, itemId, attributes) {
        this.execPlugin('sendPurchase', [
            itemPrice,
            currency,
            success,
            itemName,
            itemType,
            itemId,
            attributes
        ]);
    }

    sendAddToCart(itemPrice, currency, itemName, itemType, itemId, attributes) {
        this.execPlugin('sendAddToCart', [
            itemPrice,
            currency,
            itemName,
            itemType,
            itemId,
            attributes
        ]);
    }

    sendStartCheckout(totalPrice, currency, itemCount, attributes) {
        this.execPlugin('sendStartCheckout', [
            totalPrice,
            currency,
            itemCount,
            attributes
        ]);
    }

    sendSearch(query, attributes) {
        this.execPlugin('sendSearch', [
            query,
            attributes
        ]);
    }

    sendShare(method, contentName, contentType, contentId, attributes) {
        this.execPlugin('sendShare', [
            method,
            contentName,
            contentType,
            contentId,
            attributes
        ]);
    }

    sendRatedContent(rating, contentName, contentType, contentId, attributes) {
        this.execPlugin('sendRatedContent', [
            rating,
            contentName,
            contentType,
            contentId,
            attributes
        ]);
    }

    sendSignUp(method, success, attributes) {
        this.execPlugin('sendSignUp', [
            method,
            success,
            attributes
        ]);
    }

    sendLogIn(method, success, attributes) {
        this.execPlugin('sendLogIn', [
            method,
            success,
            attributes
        ]);
    }

    sendInvite(method, attributes) {
        this.execPlugin('sendInvite', [
            method,
            attributes
        ]);
    }

    sendLevelStart(levelName, attributes) {
        this.execPlugin('sendLevelStart', [
            levelName,
            attributes
        ]);
    }

    sendLevelEnd(levelName, score, success, attributes) {
        this.execPlugin('sendLevelEnd', [
            levelName,
            score,
            success,
            attributes
        ]);
    }

    sendContentView(name, type, id, attributes) {
        this.execPlugin('sendContentView', [
            name,
            type,
            id,
            attributes
        ]);
    }

    sendScreenView(name, id, attributes) {
        this.execPlugin('sendContentView', [
            name,
            "Screen",
            id,
            attributes
        ]);
    }

    sendCustomEvent(name, attributes) {
        this.execPlugin('sendCustomEvent', [
            name,
            attributes
        ]);
    }
}

module.exports = new FabricAnswers();
