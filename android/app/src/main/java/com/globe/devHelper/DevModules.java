package com.globe.devHelper;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.NativeViewHierarchyManager;
import com.facebook.react.uimanager.UIBlock;
import com.facebook.react.uimanager.UIManagerModule;
import com.globe.MainApplication;

public class DevModules extends ReactContextBaseJavaModule {
    private static final String MODULES_NAME_Dev = "DevHelper" ;
    public DevModules(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @Override
    public String getName() {
        return MODULES_NAME_Dev;
    }
    @ReactMethod
    public void reload() {

        UIManagerModule uiManager = getReactApplicationContext().getNativeModule(UIManagerModule.class);
        uiManager.addUIBlock(new UIBlock() {
            @Override
            public void execute(NativeViewHierarchyManager nativeViewHierarchyManager) {
                getReactNativeHost().getReactInstanceManager()
                        .getDevSupportManager().handleReloadJS();
            }
        });


    }
    protected ReactNativeHost getReactNativeHost() {
        return  MainApplication.getMyApplication().getReactNativeHost();
    }
}
