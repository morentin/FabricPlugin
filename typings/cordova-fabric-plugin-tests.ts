/// <reference path="cordova-fabric-plugin.d.ts" />

var fabricApi: FabricPlugin.FabricPluginStatic = fabricPlugin;
var answersApi: FabricPlugin.Answers = fabricPlugin.Answers;
var crashlyticsApi: FabricPlugin.Crashlytics = fabricPlugin.Crashlytics;

fabricPlugin.Crashlytics.addLog("Message");

fabricPlugin.Crashlytics.sendCrash();

fabricPlugin.Crashlytics.sendNonFatalCrash("Error");

fabricPlugin.Crashlytics.recordError("Error", -1);

fabricPlugin.Crashlytics.setUserIdentifier("123");

fabricPlugin.Crashlytics.setUserName("bob");

fabricPlugin.Crashlytics.setUserEmail("bob@email.com");

fabricPlugin.Crashlytics.setStringValueForKey("value", "key");

fabricPlugin.Crashlytics.setIntValueForKey(1, "key");

fabricPlugin.Crashlytics.setBoolValueForKey(true, "key");

fabricPlugin.Crashlytics.setFloatValueForKey(1.1, "key");

fabricPlugin.Answers.sendPurchase();
fabricPlugin.Answers.sendPurchase(24.95);
fabricPlugin.Answers.sendPurchase(24.95, "USD");
fabricPlugin.Answers.sendPurchase(24.95, "USD", true);
fabricPlugin.Answers.sendPurchase(24.95, "USD", true, "Foo Bar Shirt");
fabricPlugin.Answers.sendPurchase(24.95, "USD", true, "Foo Bar Shirt", "apparel");
fabricPlugin.Answers.sendPurchase(24.95, "USD", true, "Foo Bar Shirt", "apparel", "123");
fabricPlugin.Answers.sendPurchase(24.95, "USD", true, "Foo Bar Shirt", "apparel", "123", { "key": "value" });

fabricPlugin.Answers.sendAddToCart();
fabricPlugin.Answers.sendAddToCart(24.95);
fabricPlugin.Answers.sendAddToCart(24.95, "USD");
fabricPlugin.Answers.sendAddToCart(24.95, "USD", "Foo Bar Shirt");
fabricPlugin.Answers.sendAddToCart(24.95, "USD", "Foo Bar Shirt", "apparel");
fabricPlugin.Answers.sendAddToCart(24.95, "USD", "Foo Bar Shirt", "apparel", "123");
fabricPlugin.Answers.sendAddToCart(24.95, "USD", "Foo Bar Shirt", "apparel", "123", { "key": "value" });

fabricPlugin.Answers.sendStartCheckout();
fabricPlugin.Answers.sendStartCheckout(24.95);
fabricPlugin.Answers.sendStartCheckout(24.95, "USD", 2);
fabricPlugin.Answers.sendStartCheckout(24.95, "USD", 2, { "key": "value" });

fabricPlugin.Answers.sendSearch("query");
fabricPlugin.Answers.sendSearch("query", { "key": "value" });

fabricPlugin.Answers.sendShare();
fabricPlugin.Answers.sendShare("Facebook");
fabricPlugin.Answers.sendShare("Facebook", "Foo Bar Shirt");
fabricPlugin.Answers.sendShare("Facebook", "Foo Bar Shirt", "apparel");
fabricPlugin.Answers.sendShare("Facebook", "Foo Bar Shirt", "apparel", "123");
fabricPlugin.Answers.sendShare("Facebook", "Foo Bar Shirt", "apparel", "123", { "key": "value" });

fabricPlugin.Answers.sendRatedContent();
fabricPlugin.Answers.sendRatedContent(5);
fabricPlugin.Answers.sendRatedContent(5, "Foo Bar Shirt");
fabricPlugin.Answers.sendRatedContent(5, "Foo Bar Shirt", "apparel");
fabricPlugin.Answers.sendRatedContent(5, "Foo Bar Shirt", "apparel", "123", { "key": "value" });

fabricPlugin.Answers.sendSignUp();
fabricPlugin.Answers.sendSignUp("Facebook");
fabricPlugin.Answers.sendSignUp("Facebook", true);
fabricPlugin.Answers.sendSignUp("Facebook", true, { "key": "value" });

fabricPlugin.Answers.sendLogIn();
fabricPlugin.Answers.sendLogIn("Facebook");
fabricPlugin.Answers.sendLogIn("Facebook", true);
fabricPlugin.Answers.sendLogIn("Facebook", true, { "key": "value" });

fabricPlugin.Answers.sendInvite();
fabricPlugin.Answers.sendInvite("Facebook");
fabricPlugin.Answers.sendInvite("Facebook", { "key": "value" });

fabricPlugin.Answers.sendLevelStart();
fabricPlugin.Answers.sendLevelStart("Chemical Plant Zone - Act 1");
fabricPlugin.Answers.sendLevelStart("Chemical Plant Zone - Act 1", { "key": "value" });

fabricPlugin.Answers.sendLevelEnd();
fabricPlugin.Answers.sendLevelEnd("Brinstar");
fabricPlugin.Answers.sendLevelEnd("Brinstar", 9000);
fabricPlugin.Answers.sendLevelEnd("Brinstar", 9000, true);
fabricPlugin.Answers.sendLevelEnd("Brinstar", 9000, true, { "key": "value" });

fabricPlugin.Answers.sendContentView("Home");
fabricPlugin.Answers.sendContentView("Home", "Page");
fabricPlugin.Answers.sendContentView("Home", "Page", "123");
fabricPlugin.Answers.sendContentView("Home", "Page", "123", { "key": "value" });

fabricPlugin.Answers.sendCustomEvent("My Event");
fabricPlugin.Answers.sendCustomEvent("My Event", { "key": "value" });
