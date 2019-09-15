package com.coffeeapp;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class Analytics extends ReactContextBaseJavaModule {
    public Analytics(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void trackScreen() {
        System.out.println("Track Screen");
    }

    @Override
    public String getName() {
        return "Analytics";
    }

}