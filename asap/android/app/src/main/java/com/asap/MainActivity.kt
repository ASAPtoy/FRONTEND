package com.asap

import android.content.Intent
import android.os.Bundle
import android.view.KeyEvent
import androidx.core.app.ActivityCompat
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactRootView
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
import com.facebook.react.modules.core.PermissionListener

class MainActivity : ReactActivity(), DefaultHardwareBackBtnHandler {

    override fun getMainComponentName(): String {
        return "asap"
    }

    override fun createReactActivityDelegate(): ReactActivityDelegate {
        return object : ReactActivityDelegate(this, mainComponentName) {

            override fun onNewIntent(intent: Intent) {
                if (reactInstanceManager != null) {
                    reactInstanceManager!!.onNewIntent(intent)
                } else {
                    super.onNewIntent(intent)
                }
            }

            override fun invokeDefaultOnBackPressed() {
                super.onBackPressed()
            }

            override fun requestPermissions(
                    permissions: Array<String>,
                    requestCode: Int,
                    listener: PermissionListener
            ) {
                permissionListener = listener
                ActivityCompat.requestPermissions(
                        this@MainActivity, permissions, requestCode
                )
            }

            override fun getReactRootView(): ReactRootView {
                return ReactRootView(this@MainActivity)
            }

            override fun onBackPressed() {
                if (reactInstanceManager != null) {
                    reactInstanceManager!!.onBackPressed()
                } else {
                    super.onBackPressed()
                }
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
                    reactInstanceManager!!.showDevOptionsDialog()
                    return true
                }
                return super.onKeyUp(keyCode, event)
            }

            override fun onPause() {
                super.onPause()
                if (reactInstanceManager != null) {
                    reactInstanceManager!!.onHostPause(this@MainActivity)
                }
            }

            override fun onResume() {
                super.onResume()
                if (reactInstanceManager != null) {
                    reactInstanceManager!!.onHostResume(
                            this@MainActivity,
                            this
                    )
                }
            }

            override fun onHostDestroy() {
                super.onHostDestroy()
                if (reactInstanceManager != null) {
                    reactInstanceManager!!.onHostDestroy(
                            this@MainActivity
                    )
                }
            }
        }
    }
}
