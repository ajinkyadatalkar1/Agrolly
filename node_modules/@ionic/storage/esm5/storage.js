/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import * as LocalForage from 'localforage';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
/**
 * Storage is an easy way to store key/value pairs and JSON objects.
 * Storage uses a variety of storage engines underneath, picking the best one available
 * depending on the platform.
 *
 * When running in a native app context, Storage will prioritize using SQLite, as it's one of
 * the most stable and widely used file-based databases, and avoids some of the
 * pitfalls of things like localstorage and IndexedDB, such as the OS deciding to clear out such
 * data in low disk-space situations.
 *
 * When running in the web or as a Progressive Web App, Storage will attempt to use
 * IndexedDB, WebSQL, and localstorage, in that order.
 *
 * \@usage
 * First, if you'd like to use SQLite, install the cordova-sqlite-storage plugin:
 * ```bash
 * ionic cordova plugin add cordova-sqlite-storage
 * ```
 *
 * Next, install the package (comes by default for Ionic apps > Ionic V1):
 * ```bash
 * npm install --save \@ionic/storage
 * ```
 *
 * Next, add it to the imports list in your `NgModule` declaration (for example, in `src/app/app.module.ts`):
 *
 * ```typescript
 * import { IonicStorageModule } from '\@ionic/storage';
 *
 * \@NgModule({
 *   declarations: [
 *     // ...
 *   ],
 *   imports: [
 *     BrowserModule,
 *     IonicModule.forRoot(MyApp),
 *     IonicStorageModule.forRoot()
 *   ],
 *   bootstrap: [IonicApp],
 *   entryComponents: [
 *     // ...
 *   ],
 *   providers: [
 *     // ...
 *   ]
 * })
 * export class AppModule {}
 * ```
 *
 * Finally, inject it into any of your components or pages:
 * ```typescript
 * import { Storage } from '\@ionic/storage';
 * export class MyApp {
 *   constructor(private storage: Storage) { }
 *
 *   ...
 *
 *   // set a key/value
 *   storage.set('name', 'Max');
 *
 *   // Or to get a key/value pair
 *   storage.get('age').then((val) => {
 *     console.log('Your age is', val);
 *   });
 * }
 * ```
 *
 *
 * ### Configuring Storage
 *
 * The Storage engine can be configured both with specific storage engine priorities, or custom configuration
 * options to pass to localForage. See the localForage config docs for possible options: https://github.com/localForage/localForage#configuration
 *
 * Note: Any custom configurations will be merged with the default configuration
 *
 * ```typescript
 * import { IonicStorageModule } from '\@ionic/storage';
 *
 * \@NgModule({
 *   declarations: [...],
 *   imports: [
 *     IonicStorageModule.forRoot({
 *       name: '__mydb',
 * driverOrder: ['indexeddb', 'sqlite', 'websql']
 *     })
 *   ],
 *   bootstrap: [...],
 *   entryComponents: [...],
 *    providers: [...]
 * })
 * export class AppModule { }
 * ```
 */
var /**
 * Storage is an easy way to store key/value pairs and JSON objects.
 * Storage uses a variety of storage engines underneath, picking the best one available
 * depending on the platform.
 *
 * When running in a native app context, Storage will prioritize using SQLite, as it's one of
 * the most stable and widely used file-based databases, and avoids some of the
 * pitfalls of things like localstorage and IndexedDB, such as the OS deciding to clear out such
 * data in low disk-space situations.
 *
 * When running in the web or as a Progressive Web App, Storage will attempt to use
 * IndexedDB, WebSQL, and localstorage, in that order.
 *
 * \@usage
 * First, if you'd like to use SQLite, install the cordova-sqlite-storage plugin:
 * ```bash
 * ionic cordova plugin add cordova-sqlite-storage
 * ```
 *
 * Next, install the package (comes by default for Ionic apps > Ionic V1):
 * ```bash
 * npm install --save \@ionic/storage
 * ```
 *
 * Next, add it to the imports list in your `NgModule` declaration (for example, in `src/app/app.module.ts`):
 *
 * ```typescript
 * import { IonicStorageModule } from '\@ionic/storage';
 *
 * \@NgModule({
 *   declarations: [
 *     // ...
 *   ],
 *   imports: [
 *     BrowserModule,
 *     IonicModule.forRoot(MyApp),
 *     IonicStorageModule.forRoot()
 *   ],
 *   bootstrap: [IonicApp],
 *   entryComponents: [
 *     // ...
 *   ],
 *   providers: [
 *     // ...
 *   ]
 * })
 * export class AppModule {}
 * ```
 *
 * Finally, inject it into any of your components or pages:
 * ```typescript
 * import { Storage } from '\@ionic/storage';
 * export class MyApp {
 *   constructor(private storage: Storage) { }
 *
 *   ...
 *
 *   // set a key/value
 *   storage.set('name', 'Max');
 *
 *   // Or to get a key/value pair
 *   storage.get('age').then((val) => {
 *     console.log('Your age is', val);
 *   });
 * }
 * ```
 *
 *
 * ### Configuring Storage
 *
 * The Storage engine can be configured both with specific storage engine priorities, or custom configuration
 * options to pass to localForage. See the localForage config docs for possible options: https://github.com/localForage/localForage#configuration
 *
 * Note: Any custom configurations will be merged with the default configuration
 *
 * ```typescript
 * import { IonicStorageModule } from '\@ionic/storage';
 *
 * \@NgModule({
 *   declarations: [...],
 *   imports: [
 *     IonicStorageModule.forRoot({
 *       name: '__mydb',
 * driverOrder: ['indexeddb', 'sqlite', 'websql']
 *     })
 *   ],
 *   bootstrap: [...],
 *   entryComponents: [...],
 *    providers: [...]
 * })
 * export class AppModule { }
 * ```
 */
Storage = /** @class */ (function () {
    /**
     * Create a new Storage instance using the order of drivers and any additional config
     * options to pass to LocalForage.
     *
     * Possible driver options are: ['sqlite', 'indexeddb', 'websql', 'localstorage'] and the
     * default is that exact ordering.
     */
    function Storage(config) {
        var _this = this;
        this._driver = null;
        this._dbPromise = new Promise(function (resolve, reject) {
            var /** @type {?} */ db;
            var /** @type {?} */ defaultConfig = getDefaultConfig();
            var /** @type {?} */ actualConfig = Object.assign(defaultConfig, config || {});
            LocalForage.defineDriver(CordovaSQLiteDriver)
                .then(function () {
                db = LocalForage.createInstance(actualConfig);
            })
                .then(function () {
                return db.setDriver(_this._getDriverOrder(actualConfig.driverOrder));
            })
                .then(function () {
                _this._driver = db.driver();
                resolve(db);
            })
                .catch(function (reason) { return reject(reason); });
        });
    }
    Object.defineProperty(Storage.prototype, "driver", {
        /**
         * Get the name of the driver being used.
         * @returns Name of the driver
         */
        get: /**
         * Get the name of the driver being used.
         * @return {?} Name of the driver
         */
        function () {
            return this._driver;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Reflect the readiness of the store.
     * @returns Returns a promise that resolves when the store is ready
     */
    /**
     * Reflect the readiness of the store.
     * @return {?} Returns a promise that resolves when the store is ready
     */
    Storage.prototype.ready = /**
     * Reflect the readiness of the store.
     * @return {?} Returns a promise that resolves when the store is ready
     */
    function () {
        return this._dbPromise;
    };
    /**
     * @hidden
     * @param {?} driverOrder
     * @return {?}
     */
    Storage.prototype._getDriverOrder = /**
     * @hidden
     * @param {?} driverOrder
     * @return {?}
     */
    function (driverOrder) {
        return driverOrder.map(function (driver) {
            switch (driver) {
                case 'sqlite':
                    return CordovaSQLiteDriver._driver;
                case 'indexeddb':
                    return LocalForage.INDEXEDDB;
                case 'websql':
                    return LocalForage.WEBSQL;
                case 'localstorage':
                    return LocalForage.LOCALSTORAGE;
            }
        });
    };
    /**
     * Get the value associated with the given key.
     * @param key the key to identify this value
     * @returns Returns a promise with the value of the given key
     */
    /**
     * Get the value associated with the given key.
     * @param {?} key the key to identify this value
     * @return {?} Returns a promise with the value of the given key
     */
    Storage.prototype.get = /**
     * Get the value associated with the given key.
     * @param {?} key the key to identify this value
     * @return {?} Returns a promise with the value of the given key
     */
    function (key) {
        return this._dbPromise.then(function (db) { return db.getItem(key); });
    };
    /**
     * Set the value for the given key.
     * @param key the key to identify this value
     * @param value the value for this key
     * @returns Returns a promise that resolves when the key and value are set
     */
    /**
     * Set the value for the given key.
     * @param {?} key the key to identify this value
     * @param {?} value the value for this key
     * @return {?} Returns a promise that resolves when the key and value are set
     */
    Storage.prototype.set = /**
     * Set the value for the given key.
     * @param {?} key the key to identify this value
     * @param {?} value the value for this key
     * @return {?} Returns a promise that resolves when the key and value are set
     */
    function (key, value) {
        return this._dbPromise.then(function (db) { return db.setItem(key, value); });
    };
    /**
     * Remove any value associated with this key.
     * @param key the key to identify this value
     * @returns Returns a promise that resolves when the value is removed
     */
    /**
     * Remove any value associated with this key.
     * @param {?} key the key to identify this value
     * @return {?} Returns a promise that resolves when the value is removed
     */
    Storage.prototype.remove = /**
     * Remove any value associated with this key.
     * @param {?} key the key to identify this value
     * @return {?} Returns a promise that resolves when the value is removed
     */
    function (key) {
        return this._dbPromise.then(function (db) { return db.removeItem(key); });
    };
    /**
     * Clear the entire key value store. WARNING: HOT!
     * @returns Returns a promise that resolves when the store is cleared
     */
    /**
     * Clear the entire key value store. WARNING: HOT!
     * @return {?} Returns a promise that resolves when the store is cleared
     */
    Storage.prototype.clear = /**
     * Clear the entire key value store. WARNING: HOT!
     * @return {?} Returns a promise that resolves when the store is cleared
     */
    function () {
        return this._dbPromise.then(function (db) { return db.clear(); });
    };
    /**
     * @returns Returns a promise that resolves with the number of keys stored.
     */
    /**
     * @return {?} Returns a promise that resolves with the number of keys stored.
     */
    Storage.prototype.length = /**
     * @return {?} Returns a promise that resolves with the number of keys stored.
     */
    function () {
        return this._dbPromise.then(function (db) { return db.length(); });
    };
    /**
     * @returns Returns a promise that resolves with the keys in the store.
     */
    /**
     * @return {?} Returns a promise that resolves with the keys in the store.
     */
    Storage.prototype.keys = /**
     * @return {?} Returns a promise that resolves with the keys in the store.
     */
    function () {
        return this._dbPromise.then(function (db) { return db.keys(); });
    };
    /**
     * Iterate through each key,value pair.
     * @param iteratorCallback a callback of the form (value, key, iterationNumber)
     * @returns Returns a promise that resolves when the iteration has finished.
     */
    /**
     * Iterate through each key,value pair.
     * @param {?} iteratorCallback a callback of the form (value, key, iterationNumber)
     * @return {?} Returns a promise that resolves when the iteration has finished.
     */
    Storage.prototype.forEach = /**
     * Iterate through each key,value pair.
     * @param {?} iteratorCallback a callback of the form (value, key, iterationNumber)
     * @return {?} Returns a promise that resolves when the iteration has finished.
     */
    function (iteratorCallback) {
        return this._dbPromise.then(function (db) { return db.iterate(iteratorCallback); });
    };
    return Storage;
}());
/**
 * Storage is an easy way to store key/value pairs and JSON objects.
 * Storage uses a variety of storage engines underneath, picking the best one available
 * depending on the platform.
 *
 * When running in a native app context, Storage will prioritize using SQLite, as it's one of
 * the most stable and widely used file-based databases, and avoids some of the
 * pitfalls of things like localstorage and IndexedDB, such as the OS deciding to clear out such
 * data in low disk-space situations.
 *
 * When running in the web or as a Progressive Web App, Storage will attempt to use
 * IndexedDB, WebSQL, and localstorage, in that order.
 *
 * \@usage
 * First, if you'd like to use SQLite, install the cordova-sqlite-storage plugin:
 * ```bash
 * ionic cordova plugin add cordova-sqlite-storage
 * ```
 *
 * Next, install the package (comes by default for Ionic apps > Ionic V1):
 * ```bash
 * npm install --save \@ionic/storage
 * ```
 *
 * Next, add it to the imports list in your `NgModule` declaration (for example, in `src/app/app.module.ts`):
 *
 * ```typescript
 * import { IonicStorageModule } from '\@ionic/storage';
 *
 * \@NgModule({
 *   declarations: [
 *     // ...
 *   ],
 *   imports: [
 *     BrowserModule,
 *     IonicModule.forRoot(MyApp),
 *     IonicStorageModule.forRoot()
 *   ],
 *   bootstrap: [IonicApp],
 *   entryComponents: [
 *     // ...
 *   ],
 *   providers: [
 *     // ...
 *   ]
 * })
 * export class AppModule {}
 * ```
 *
 * Finally, inject it into any of your components or pages:
 * ```typescript
 * import { Storage } from '\@ionic/storage';
 * export class MyApp {
 *   constructor(private storage: Storage) { }
 *
 *   ...
 *
 *   // set a key/value
 *   storage.set('name', 'Max');
 *
 *   // Or to get a key/value pair
 *   storage.get('age').then((val) => {
 *     console.log('Your age is', val);
 *   });
 * }
 * ```
 *
 *
 * ### Configuring Storage
 *
 * The Storage engine can be configured both with specific storage engine priorities, or custom configuration
 * options to pass to localForage. See the localForage config docs for possible options: https://github.com/localForage/localForage#configuration
 *
 * Note: Any custom configurations will be merged with the default configuration
 *
 * ```typescript
 * import { IonicStorageModule } from '\@ionic/storage';
 *
 * \@NgModule({
 *   declarations: [...],
 *   imports: [
 *     IonicStorageModule.forRoot({
 *       name: '__mydb',
 * driverOrder: ['indexeddb', 'sqlite', 'websql']
 *     })
 *   ],
 *   bootstrap: [...],
 *   entryComponents: [...],
 *    providers: [...]
 * })
 * export class AppModule { }
 * ```
 */
export { Storage };
function Storage_tsickle_Closure_declarations() {
    /** @type {?} */
    Storage.prototype._dbPromise;
    /** @type {?} */
    Storage.prototype._driver;
}
/**
 * @hidden
 * @return {?}
 */
export function getDefaultConfig() {
    return {
        name: '_ionicstorage',
        storeName: '_ionickv',
        dbKey: '_ionickey',
        driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
    };
}
/**
 * @hidden
 * @record
 */
export function StorageConfig() { }
function StorageConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    StorageConfig.prototype.name;
    /** @type {?|undefined} */
    StorageConfig.prototype.version;
    /** @type {?|undefined} */
    StorageConfig.prototype.size;
    /** @type {?|undefined} */
    StorageConfig.prototype.storeName;
    /** @type {?|undefined} */
    StorageConfig.prototype.description;
    /** @type {?|undefined} */
    StorageConfig.prototype.driverOrder;
    /** @type {?|undefined} */
    StorageConfig.prototype.dbKey;
}
/**
 * @hidden
 */
export var /** @type {?} */ StorageConfigToken = new InjectionToken('STORAGE_CONFIG_TOKEN');
/**
 * @hidden
 * @param {?} storageConfig
 * @return {?}
 */
export function provideStorage(storageConfig) {
    var /** @type {?} */ config = !!storageConfig ? storageConfig : getDefaultConfig();
    return new Storage(config);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25pYy9zdG9yYWdlLyIsInNvdXJjZXMiOlsic3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEtBQUssV0FBVyxNQUFNLGFBQWEsQ0FBQztBQUUzQyxPQUFPLEtBQUssbUJBQW1CLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnR3ZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUlFOzs7Ozs7T0FNRztJQUNILGlCQUFZLE1BQXFCO1FBQWpDLGlCQW9CQzt1QkE3QnlCLElBQUk7UUFVNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQzVDLHFCQUFJLEVBQWUsQ0FBQztZQUVwQixxQkFBTSxhQUFhLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztZQUN6QyxxQkFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRWhFLFdBQVcsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUM7aUJBQzFDLElBQUksQ0FBQztnQkFDSixFQUFFLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvQyxDQUFDO2lCQUNELElBQUksQ0FBQztnQkFDSixPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7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SUFpT0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTdIRCxtQkE2SEM7Ozs7Ozs7Ozs7O0FBR0QsTUFBTTtJQUNKLE9BQU87UUFDTCxJQUFJLEVBQUUsZUFBZTtRQUNyQixTQUFTLEVBQUUsVUFBVTtRQUNyQixLQUFLLEVBQUUsV0FBVztRQUNsQixXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxjQUFjLENBQUM7S0FDL0QsQ0FBQztDQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0QsTUFBTSxDQUFDLHFCQUFNLGtCQUFrQixHQUFHLElBQUksY0FBYyxDQUNsRCxzQkFBc0IsQ0FDdkIsQ0FBQzs7Ozs7O0FBR0YsTUFBTSx5QkFBeUIsYUFBNEI7SUFDekQscUJBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNwRSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgTG9jYWxGb3JhZ2UgZnJvbSAnbG9jYWxmb3JhZ2UnO1xuXG5pbXBvcnQgKiBhcyBDb3Jkb3ZhU1FMaXRlRHJpdmVyIGZyb20gJ2xvY2FsZm9yYWdlLWNvcmRvdmFzcWxpdGVkcml2ZXInO1xuXG4vKipcbiAqIFN0b3JhZ2UgaXMgYW4gZWFzeSB3YXkgdG8gc3RvcmUga2V5L3ZhbHVlIHBhaXJzIGFuZCBKU09OIG9iamVjdHMuXG4gKiBTdG9yYWdlIHVzZXMgYSB2YXJpZXR5IG9mIHN0b3JhZ2UgZW5naW5lcyB1bmRlcm5lYXRoLCBwaWNraW5nIHRoZSBiZXN0IG9uZSBhdmFpbGFibGVcbiAqIGRlcGVuZGluZyBvbiB0aGUgcGxhdGZvcm0uXG4gKlxuICogV2hlbiBydW5uaW5nIGluIGEgbmF0aXZlIGFwcCBjb250ZXh0LCBTdG9yYWdlIHdpbGwgcHJpb3JpdGl6ZSB1c2luZyBTUUxpdGUsIGFzIGl0J3Mgb25lIG9mXG4gKiB0aGUgbW9zdCBzdGFibGUgYW5kIHdpZGVseSB1c2VkIGZpbGUtYmFzZWQgZGF0YWJhc2VzLCBhbmQgYXZvaWRzIHNvbWUgb2YgdGhlXG4gKiBwaXRmYWxscyBvZiB0aGluZ3MgbGlrZSBsb2NhbHN0b3JhZ2UgYW5kIEluZGV4ZWREQiwgc3VjaCBhcyB0aGUgT1MgZGVjaWRpbmcgdG8gY2xlYXIgb3V0IHN1Y2hcbiAqIGRhdGEgaW4gbG93IGRpc2stc3BhY2Ugc2l0dWF0aW9ucy5cbiAqXG4gKiBXaGVuIHJ1bm5pbmcgaW4gdGhlIHdlYiBvciBhcyBhIFByb2dyZXNzaXZlIFdlYiBBcHAsIFN0b3JhZ2Ugd2lsbCBhdHRlbXB0IHRvIHVzZVxuICogSW5kZXhlZERCLCBXZWJTUUwsIGFuZCBsb2NhbHN0b3JhZ2UsIGluIHRoYXQgb3JkZXIuXG4gKlxuICogQHVzYWdlXG4gKiBGaXJzdCwgaWYgeW91J2QgbGlrZSB0byB1c2UgU1FMaXRlLCBpbnN0YWxsIHRoZSBjb3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlIHBsdWdpbjpcbiAqIGBgYGJhc2hcbiAqIGlvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlXG4gKiBgYGBcbiAqXG4gKiBOZXh0LCBpbnN0YWxsIHRoZSBwYWNrYWdlIChjb21lcyBieSBkZWZhdWx0IGZvciBJb25pYyBhcHBzID4gSW9uaWMgVjEpOlxuICogYGBgYmFzaFxuICogbnBtIGluc3RhbGwgLS1zYXZlIEBpb25pYy9zdG9yYWdlXG4gKiBgYGBcbiAqXG4gKiBOZXh0LCBhZGQgaXQgdG8gdGhlIGltcG9ydHMgbGlzdCBpbiB5b3VyIGBOZ01vZHVsZWAgZGVjbGFyYXRpb24gKGZvciBleGFtcGxlLCBpbiBgc3JjL2FwcC9hcHAubW9kdWxlLnRzYCk6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW9uaWNTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuICpcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGRlY2xhcmF0aW9uczogW1xuICogICAgIC8vIC4uLlxuICogICBdLFxuICogICBpbXBvcnRzOiBbXG4gKiAgICAgQnJvd3Nlck1vZHVsZSxcbiAqICAgICBJb25pY01vZHVsZS5mb3JSb290KE15QXBwKSxcbiAqICAgICBJb25pY1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCgpXG4gKiAgIF0sXG4gKiAgIGJvb3RzdHJhcDogW0lvbmljQXBwXSxcbiAqICAgZW50cnlDb21wb25lbnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgIF0sXG4gKiAgIHByb3ZpZGVyczogW1xuICogICAgIC8vIC4uLlxuICogICBdXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuICpgYGBcbiAqXG4gKiBGaW5hbGx5LCBpbmplY3QgaXQgaW50byBhbnkgb2YgeW91ciBjb21wb25lbnRzIG9yIHBhZ2VzOlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcblxuICogZXhwb3J0IGNsYXNzIE15QXBwIHtcbiAqICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlKSB7IH1cbiAqXG4gKiAgIC4uLlxuICpcbiAqICAgLy8gc2V0IGEga2V5L3ZhbHVlXG4gKiAgIHN0b3JhZ2Uuc2V0KCduYW1lJywgJ01heCcpO1xuICpcbiAqICAgLy8gT3IgdG8gZ2V0IGEga2V5L3ZhbHVlIHBhaXJcbiAqICAgc3RvcmFnZS5nZXQoJ2FnZScpLnRoZW4oKHZhbCkgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKCdZb3VyIGFnZSBpcycsIHZhbCk7XG4gKiAgIH0pO1xuICogfVxuICogYGBgXG4gKlxuICpcbiAqICMjIyBDb25maWd1cmluZyBTdG9yYWdlXG4gKlxuICogVGhlIFN0b3JhZ2UgZW5naW5lIGNhbiBiZSBjb25maWd1cmVkIGJvdGggd2l0aCBzcGVjaWZpYyBzdG9yYWdlIGVuZ2luZSBwcmlvcml0aWVzLCBvciBjdXN0b20gY29uZmlndXJhdGlvblxuICogb3B0aW9ucyB0byBwYXNzIHRvIGxvY2FsRm9yYWdlLiBTZWUgdGhlIGxvY2FsRm9yYWdlIGNvbmZpZyBkb2NzIGZvciBwb3NzaWJsZSBvcHRpb25zOiBodHRwczovL2dpdGh1Yi5jb20vbG9jYWxGb3JhZ2UvbG9jYWxGb3JhZ2UjY29uZmlndXJhdGlvblxuICpcbiAqIE5vdGU6IEFueSBjdXN0b20gY29uZmlndXJhdGlvbnMgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW9uaWNTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuICpcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGRlY2xhcmF0aW9uczogWy4uLl0sXG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICBJb25pY1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCh7XG4gKiAgICAgICBuYW1lOiAnX19teWRiJyxcbiAgICAgICAgIGRyaXZlck9yZGVyOiBbJ2luZGV4ZWRkYicsICdzcWxpdGUnLCAnd2Vic3FsJ11cbiAqICAgICB9KVxuICogICBdLFxuICogICBib290c3RyYXA6IFsuLi5dLFxuICogICBlbnRyeUNvbXBvbmVudHM6IFsuLi5dLFxuICogICAgcHJvdmlkZXJzOiBbLi4uXVxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIFN0b3JhZ2Uge1xuICBwcml2YXRlIF9kYlByb21pc2U6IFByb21pc2U8TG9jYWxGb3JhZ2U+O1xuICBwcml2YXRlIF9kcml2ZXI6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBTdG9yYWdlIGluc3RhbmNlIHVzaW5nIHRoZSBvcmRlciBvZiBkcml2ZXJzIGFuZCBhbnkgYWRkaXRpb25hbCBjb25maWdcbiAgICogb3B0aW9ucyB0byBwYXNzIHRvIExvY2FsRm9yYWdlLlxuICAgKlxuICAgKiBQb3NzaWJsZSBkcml2ZXIgb3B0aW9ucyBhcmU6IFsnc3FsaXRlJywgJ2luZGV4ZWRkYicsICd3ZWJzcWwnLCAnbG9jYWxzdG9yYWdlJ10gYW5kIHRoZVxuICAgKiBkZWZhdWx0IGlzIHRoYXQgZXhhY3Qgb3JkZXJpbmcuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IFN0b3JhZ2VDb25maWcpIHtcbiAgICB0aGlzLl9kYlByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgZGI6IExvY2FsRm9yYWdlO1xuXG4gICAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0gZ2V0RGVmYXVsdENvbmZpZygpO1xuICAgICAgY29uc3QgYWN0dWFsQ29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWcgfHwge30pO1xuXG4gICAgICBMb2NhbEZvcmFnZS5kZWZpbmVEcml2ZXIoQ29yZG92YVNRTGl0ZURyaXZlcilcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGRiID0gTG9jYWxGb3JhZ2UuY3JlYXRlSW5zdGFuY2UoYWN0dWFsQ29uZmlnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICBkYi5zZXREcml2ZXIodGhpcy5fZ2V0RHJpdmVyT3JkZXIoYWN0dWFsQ29uZmlnLmRyaXZlck9yZGVyKSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fZHJpdmVyID0gZGIuZHJpdmVyKCk7XG4gICAgICAgICAgcmVzb2x2ZShkYik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChyZWFzb24gPT4gcmVqZWN0KHJlYXNvbikpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZSBvZiB0aGUgZHJpdmVyIGJlaW5nIHVzZWQuXG4gICAqIEByZXR1cm5zIE5hbWUgb2YgdGhlIGRyaXZlclxuICAgKi9cbiAgZ2V0IGRyaXZlcigpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZHJpdmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZmxlY3QgdGhlIHJlYWRpbmVzcyBvZiB0aGUgc3RvcmUuXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc3RvcmUgaXMgcmVhZHlcbiAgICovXG4gIHJlYWR5KCk6IFByb21pc2U8TG9jYWxGb3JhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlO1xuICB9XG5cbiAgLyoqIEBoaWRkZW4gKi9cbiAgcHJpdmF0ZSBfZ2V0RHJpdmVyT3JkZXIoZHJpdmVyT3JkZXIpIHtcbiAgICByZXR1cm4gZHJpdmVyT3JkZXIubWFwKGRyaXZlciA9PiB7XG4gICAgICBzd2l0Y2ggKGRyaXZlcikge1xuICAgICAgICBjYXNlICdzcWxpdGUnOlxuICAgICAgICAgIHJldHVybiBDb3Jkb3ZhU1FMaXRlRHJpdmVyLl9kcml2ZXI7XG4gICAgICAgIGNhc2UgJ2luZGV4ZWRkYic6XG4gICAgICAgICAgcmV0dXJuIExvY2FsRm9yYWdlLklOREVYRUREQjtcbiAgICAgICAgY2FzZSAnd2Vic3FsJzpcbiAgICAgICAgICByZXR1cm4gTG9jYWxGb3JhZ2UuV0VCU1FMO1xuICAgICAgICBjYXNlICdsb2NhbHN0b3JhZ2UnOlxuICAgICAgICAgIHJldHVybiBMb2NhbEZvcmFnZS5MT0NBTFNUT1JBR0U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAgICogQHBhcmFtIGtleSB0aGUga2V5IHRvIGlkZW50aWZ5IHRoaXMgdmFsdWVcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGtleVxuICAgKi9cbiAgZ2V0KGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuZ2V0SXRlbShrZXkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHZhbHVlIGZvciB0aGUgZ2l2ZW4ga2V5LlxuICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgdG8gaWRlbnRpZnkgdGhpcyB2YWx1ZVxuICAgKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIGZvciB0aGlzIGtleVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGtleSBhbmQgdmFsdWUgYXJlIHNldFxuICAgKi9cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuc2V0SXRlbShrZXksIHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFueSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBrZXkuXG4gICAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBpZGVudGlmeSB0aGlzIHZhbHVlXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgdmFsdWUgaXMgcmVtb3ZlZFxuICAgKi9cbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIucmVtb3ZlSXRlbShrZXkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgZW50aXJlIGtleSB2YWx1ZSBzdG9yZS4gV0FSTklORzogSE9UIVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHN0b3JlIGlzIGNsZWFyZWRcbiAgICovXG4gIGNsZWFyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5jbGVhcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIG51bWJlciBvZiBrZXlzIHN0b3JlZC5cbiAgICovXG4gIGxlbmd0aCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5sZW5ndGgoKSk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBrZXlzIGluIHRoZSBzdG9yZS5cbiAgICovXG4gIGtleXMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5rZXlzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIGtleSx2YWx1ZSBwYWlyLlxuICAgKiBAcGFyYW0gaXRlcmF0b3JDYWxsYmFjayBhIGNhbGxiYWNrIG9mIHRoZSBmb3JtICh2YWx1ZSwga2V5LCBpdGVyYXRpb25OdW1iZXIpXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgaXRlcmF0aW9uIGhhcyBmaW5pc2hlZC5cbiAgICovXG4gIGZvckVhY2goXG4gICAgaXRlcmF0b3JDYWxsYmFjazogKHZhbHVlOiBhbnksIGtleTogc3RyaW5nLCBpdGVyYXRpb25OdW1iZXI6IE51bWJlcikgPT4gYW55XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihkYiA9PiBkYi5pdGVyYXRlKGl0ZXJhdG9yQ2FsbGJhY2spKTtcbiAgfVxufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRDb25maWcoKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ19pb25pY3N0b3JhZ2UnLFxuICAgIHN0b3JlTmFtZTogJ19pb25pY2t2JyxcbiAgICBkYktleTogJ19pb25pY2tleScsXG4gICAgZHJpdmVyT3JkZXI6IFsnc3FsaXRlJywgJ2luZGV4ZWRkYicsICd3ZWJzcWwnLCAnbG9jYWxzdG9yYWdlJ11cbiAgfTtcbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmFnZUNvbmZpZyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZlcnNpb24/OiBudW1iZXI7XG4gIHNpemU/OiBudW1iZXI7XG4gIHN0b3JlTmFtZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGRyaXZlck9yZGVyPzogc3RyaW5nW107XG4gIGRiS2V5Pzogc3RyaW5nO1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGNvbnN0IFN0b3JhZ2VDb25maWdUb2tlbiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KFxuICAnU1RPUkFHRV9DT05GSUdfVE9LRU4nXG4pO1xuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdG9yYWdlKHN0b3JhZ2VDb25maWc6IFN0b3JhZ2VDb25maWcpOiBTdG9yYWdlIHtcbiAgY29uc3QgY29uZmlnID0gISFzdG9yYWdlQ29uZmlnID8gc3RvcmFnZUNvbmZpZyA6IGdldERlZmF1bHRDb25maWcoKTtcbiAgcmV0dXJuIG5ldyBTdG9yYWdlKGNvbmZpZyk7XG59XG4iXX0=