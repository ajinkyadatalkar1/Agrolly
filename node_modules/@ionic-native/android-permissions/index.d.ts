import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Android Permissions
 * @description
 * This plugin is designed to support Android new permissions checking mechanism.
 *
 * You can find all permissions here: https://developer.android.com/reference/android/Manifest.permission.html
 *
 * @usage
 * ```
 * import { AndroidPermissions } from '@ionic-native/android-permissions';
 *
 *
 * constructor(private androidPermissions: AndroidPermissions) { }
 *
 * ...
 *
 * this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
 *   result => console.log('Has permission?',result.hasPermission),
 *   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
 * );
 *
 * this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
 *
 * ```
 *
 * Android 26 and above: due to Android 26's changes to permissions handling (permissions are requested at time of use rather than at runtime,) if your app does not include any functions (eg. other Ionic Native plugins) that utilize a particular permission, then `requestPermission()` and `requestPermissions()` will resolve immediately with no prompt shown to the user.  Thus, you must include a function utilizing the feature you would like to use before requesting permission for it.
 */
export declare class AndroidPermissions extends IonicNativePlugin {
    PERMISSION: any;
    /**
     * Check permission
     * @param {string} permission The name of the permission
     * @return {Promise<any>} Returns a promise
     */
    checkPermission(permission: string): Promise<any>;
    /**
     * Request permission
     * @param {string} permission The name of the permission to request
     * @return {Promise<any>}
     */
    requestPermission(permission: string): Promise<any>;
    /**
     * Request permissions
     * @param {Array<string>} permissions An array with permissions
     * @return {Promise<any>} Returns a promise
     */
    requestPermissions(permissions: string[]): Promise<any>;
    /**
     * This function still works now, will not support in the future.
     * @param {string} permission The name of the permission
     * @return {Promise<any>} Returns a promise
     */
    hasPermission(permission: string): Promise<any>;
}
