package com.asap

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactRootView
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.modules.core.PermissionListener
import com.facebook.react.shell.MainReactPackage
import com.facebook.react.ReactInstanceManager

class MainActivity : ReactActivity() {

    override fun getMainComponentName(): String {
        return "asap"
    }

    override fun createReactActivityDelegate(): ReactActivityDelegate {
        return object : ReactActivityDelegate(this, mainComponentName), DefaultHardwareBackBtnHandler {
            override fun getLaunchOptions(): Bundle? {
                return MainApplication.instance.reactNativeHost.reactInstanceManager
                    ?.currentReactContext
                    ?.catalystInstance
                    ?.jsExecutor
                    ?.executeJSCall("MyIntModule", "getLaunchOptions", null)
                    ?.toBundle()
            }

            override fun getReactRootView(): ReactRootView {
                return ReactRootView(this@MainActivity)
            }

            override fun invokeDefaultOnBackPressed() {
                super.onBackPressed()
            }

            override fun onBackPressed() {
                if (this@MainActivity.reactInstanceManager != null) {
                    this@MainActivity.reactInstanceManager!!.onBackPressed()
                } else {
                    super.onBackPressed()
                }
            }

            override fun onNewIntent(intent: Intent) {
                if (this@MainActivity.reactInstanceManager != null) {
                    this@MainActivity.reactInstanceManager!!.onNewIntent(intent)
                } else {
                    super.onNewIntent(intent)
                }
            }

            override fun requestPermissions(
                permissions: Array<String>,
                requestCode: Int,
                listener: PermissionListener
            ) {
                this@MainActivity.permissionListener = listener
                ActivityCompat.requestPermissions(
                    this@MainActivity, permissions, requestCode
                )
            }

            override fun onActivityResult(
                requestCode: Int,
                resultCode: Int,
                data: Intent?
            ) {
                this@MainActivity.onActivityResult(requestCode, resultCode, data)
            }

            override fun onKeyUp(
                keyCode: Int,
                event: KeyEvent
            ): Boolean {
                if (keyCode == KeyEvent.KEYCODE_MENU) {
                    this@MainActivity.reactInstanceManager!!.showDevOptionsDialog()
                    return true
                }
                return super.onKeyUp(keyCode, event)
            }

            override fun onPause() {
                super.onPause()
                if (this@MainActivity.reactInstanceManager != null) {
                    this@MainActivity.reactInstanceManager!!.onHostPause(this@MainActivity)
                }
            }

            override fun onResume() {
                super.onResume()
                if (this@MainActivity.reactInstanceManager != null) {
                    this@MainActivity.reactInstanceManager!!.onHostResume(
                        this@MainActivity,
                        this
                    )
                }
            }

            override fun onHostDestroy() {
                super.onHostDestroy()
                if (this@MainActivity.reactInstanceManager != null) {
                    this@MainActivity.reactInstanceManager!!.onHostDestroy(
                        this@MainActivity
                    )
                }
            }
        }
    }
}
