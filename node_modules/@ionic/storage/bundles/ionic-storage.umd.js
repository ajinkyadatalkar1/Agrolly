(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('localforage'), require('localforage-cordovasqlitedriver')) :
    typeof define === 'function' && define.amd ? define('@ionic/storage', ['exports', '@angular/core', 'localforage', 'localforage-cordovasqlitedriver'], factory) :
    (factory((global.ionic = global.ionic || {}, global.ionic.storage = {}),global.ng.core,null,null));
}(this, (function (exports,core,LocalForage,CordovaSQLiteDriver) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
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
     */ Storage = /** @class */ (function () {
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
             */ function () {
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
     * @hidden
     * @return {?}
     */
    function getDefaultConfig() {
        return {
            name: '_ionicstorage',
            storeName: '_ionickv',
            dbKey: '_ionickey',
            driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
        };
    }
    /**
     * @hidden
     */
    var /** @type {?} */ StorageConfigToken = new core.InjectionToken('STORAGE_CONFIG_TOKEN');
    /**
     * @hidden
     * @param {?} storageConfig
     * @return {?}
     */
    function provideStorage(storageConfig) {
        var /** @type {?} */ config = !!storageConfig ? storageConfig : getDefaultConfig();
        return new Storage(config);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var IonicStorageModule = /** @class */ (function () {
        function IonicStorageModule() {
        }
        /**
         * @param {?=} storageConfig
         * @return {?}
         */
        IonicStorageModule.forRoot = /**
         * @param {?=} storageConfig
         * @return {?}
         */
            function (storageConfig) {
                if (storageConfig === void 0) {
                    storageConfig = null;
                }
                return {
                    ngModule: IonicStorageModule,
                    providers: [
                        { provide: StorageConfigToken, useValue: storageConfig },
                        {
                            provide: Storage,
                            useFactory: provideStorage,
                            deps: [StorageConfigToken]
                        }
                    ]
                };
            };
        IonicStorageModule.decorators = [
            { type: core.NgModule },
        ];
        return IonicStorageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.StorageConfigToken = StorageConfigToken;
    exports.Storage = Storage;
    exports.IonicStorageModule = IonicStorageModule;
    exports.ɵa = provideStorage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc3RvcmFnZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bpb25pYy9zdG9yYWdlL3N0b3JhZ2UudHMiLCJuZzovL0Bpb25pYy9zdG9yYWdlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIExvY2FsRm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJztcblxuaW1wb3J0ICogYXMgQ29yZG92YVNRTGl0ZURyaXZlciBmcm9tICdsb2NhbGZvcmFnZS1jb3Jkb3Zhc3FsaXRlZHJpdmVyJztcblxuLyoqXG4gKiBTdG9yYWdlIGlzIGFuIGVhc3kgd2F5IHRvIHN0b3JlIGtleS92YWx1ZSBwYWlycyBhbmQgSlNPTiBvYmplY3RzLlxuICogU3RvcmFnZSB1c2VzIGEgdmFyaWV0eSBvZiBzdG9yYWdlIGVuZ2luZXMgdW5kZXJuZWF0aCwgcGlja2luZyB0aGUgYmVzdCBvbmUgYXZhaWxhYmxlXG4gKiBkZXBlbmRpbmcgb24gdGhlIHBsYXRmb3JtLlxuICpcbiAqIFdoZW4gcnVubmluZyBpbiBhIG5hdGl2ZSBhcHAgY29udGV4dCwgU3RvcmFnZSB3aWxsIHByaW9yaXRpemUgdXNpbmcgU1FMaXRlLCBhcyBpdCdzIG9uZSBvZlxuICogdGhlIG1vc3Qgc3RhYmxlIGFuZCB3aWRlbHkgdXNlZCBmaWxlLWJhc2VkIGRhdGFiYXNlcywgYW5kIGF2b2lkcyBzb21lIG9mIHRoZVxuICogcGl0ZmFsbHMgb2YgdGhpbmdzIGxpa2UgbG9jYWxzdG9yYWdlIGFuZCBJbmRleGVkREIsIHN1Y2ggYXMgdGhlIE9TIGRlY2lkaW5nIHRvIGNsZWFyIG91dCBzdWNoXG4gKiBkYXRhIGluIGxvdyBkaXNrLXNwYWNlIHNpdHVhdGlvbnMuXG4gKlxuICogV2hlbiBydW5uaW5nIGluIHRoZSB3ZWIgb3IgYXMgYSBQcm9ncmVzc2l2ZSBXZWIgQXBwLCBTdG9yYWdlIHdpbGwgYXR0ZW1wdCB0byB1c2VcbiAqIEluZGV4ZWREQiwgV2ViU1FMLCBhbmQgbG9jYWxzdG9yYWdlLCBpbiB0aGF0IG9yZGVyLlxuICpcbiAqIEB1c2FnZVxuICogRmlyc3QsIGlmIHlvdSdkIGxpa2UgdG8gdXNlIFNRTGl0ZSwgaW5zdGFsbCB0aGUgY29yZG92YS1zcWxpdGUtc3RvcmFnZSBwbHVnaW46XG4gKiBgYGBiYXNoXG4gKiBpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1zcWxpdGUtc3RvcmFnZVxuICogYGBgXG4gKlxuICogTmV4dCwgaW5zdGFsbCB0aGUgcGFja2FnZSAoY29tZXMgYnkgZGVmYXVsdCBmb3IgSW9uaWMgYXBwcyA+IElvbmljIFYxKTpcbiAqIGBgYGJhc2hcbiAqIG5wbSBpbnN0YWxsIC0tc2F2ZSBAaW9uaWMvc3RvcmFnZVxuICogYGBgXG4gKlxuICogTmV4dCwgYWRkIGl0IHRvIHRoZSBpbXBvcnRzIGxpc3QgaW4geW91ciBgTmdNb2R1bGVgIGRlY2xhcmF0aW9uIChmb3IgZXhhbXBsZSwgaW4gYHNyYy9hcHAvYXBwLm1vZHVsZS50c2ApOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IElvbmljU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICBkZWNsYXJhdGlvbnM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgXSxcbiAqICAgaW1wb3J0czogW1xuICogICAgIEJyb3dzZXJNb2R1bGUsXG4gKiAgICAgSW9uaWNNb2R1bGUuZm9yUm9vdChNeUFwcCksXG4gKiAgICAgSW9uaWNTdG9yYWdlTW9kdWxlLmZvclJvb3QoKVxuICogICBdLFxuICogICBib290c3RyYXA6IFtJb25pY0FwcF0sXG4gKiAgIGVudHJ5Q29tcG9uZW50czogW1xuICogICAgIC8vIC4uLlxuICogICBdLFxuICogICBwcm92aWRlcnM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgXVxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiAqYGBgXG4gKlxuICogRmluYWxseSwgaW5qZWN0IGl0IGludG8gYW55IG9mIHlvdXIgY29tcG9uZW50cyBvciBwYWdlczpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5cbiAqIGV4cG9ydCBjbGFzcyBNeUFwcCB7XG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSkgeyB9XG4gKlxuICogICAuLi5cbiAqXG4gKiAgIC8vIHNldCBhIGtleS92YWx1ZVxuICogICBzdG9yYWdlLnNldCgnbmFtZScsICdNYXgnKTtcbiAqXG4gKiAgIC8vIE9yIHRvIGdldCBhIGtleS92YWx1ZSBwYWlyXG4gKiAgIHN0b3JhZ2UuZ2V0KCdhZ2UnKS50aGVuKCh2YWwpID0+IHtcbiAqICAgICBjb25zb2xlLmxvZygnWW91ciBhZ2UgaXMnLCB2YWwpO1xuICogICB9KTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqXG4gKiAjIyMgQ29uZmlndXJpbmcgU3RvcmFnZVxuICpcbiAqIFRoZSBTdG9yYWdlIGVuZ2luZSBjYW4gYmUgY29uZmlndXJlZCBib3RoIHdpdGggc3BlY2lmaWMgc3RvcmFnZSBlbmdpbmUgcHJpb3JpdGllcywgb3IgY3VzdG9tIGNvbmZpZ3VyYXRpb25cbiAqIG9wdGlvbnMgdG8gcGFzcyB0byBsb2NhbEZvcmFnZS4gU2VlIHRoZSBsb2NhbEZvcmFnZSBjb25maWcgZG9jcyBmb3IgcG9zc2libGUgb3B0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2xvY2FsRm9yYWdlL2xvY2FsRm9yYWdlI2NvbmZpZ3VyYXRpb25cbiAqXG4gKiBOb3RlOiBBbnkgY3VzdG9tIGNvbmZpZ3VyYXRpb25zIHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IElvbmljU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICBkZWNsYXJhdGlvbnM6IFsuLi5dLFxuICogICBpbXBvcnRzOiBbXG4gKiAgICAgSW9uaWNTdG9yYWdlTW9kdWxlLmZvclJvb3Qoe1xuICogICAgICAgbmFtZTogJ19fbXlkYicsXG4gICAgICAgICBkcml2ZXJPcmRlcjogWydpbmRleGVkZGInLCAnc3FsaXRlJywgJ3dlYnNxbCddXG4gKiAgICAgfSlcbiAqICAgXSxcbiAqICAgYm9vdHN0cmFwOiBbLi4uXSxcbiAqICAgZW50cnlDb21wb25lbnRzOiBbLi4uXSxcbiAqICAgIHByb3ZpZGVyczogWy4uLl1cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBTdG9yYWdlIHtcbiAgcHJpdmF0ZSBfZGJQcm9taXNlOiBQcm9taXNlPExvY2FsRm9yYWdlPjtcbiAgcHJpdmF0ZSBfZHJpdmVyOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgU3RvcmFnZSBpbnN0YW5jZSB1c2luZyB0aGUgb3JkZXIgb2YgZHJpdmVycyBhbmQgYW55IGFkZGl0aW9uYWwgY29uZmlnXG4gICAqIG9wdGlvbnMgdG8gcGFzcyB0byBMb2NhbEZvcmFnZS5cbiAgICpcbiAgICogUG9zc2libGUgZHJpdmVyIG9wdGlvbnMgYXJlOiBbJ3NxbGl0ZScsICdpbmRleGVkZGInLCAnd2Vic3FsJywgJ2xvY2Fsc3RvcmFnZSddIGFuZCB0aGVcbiAgICogZGVmYXVsdCBpcyB0aGF0IGV4YWN0IG9yZGVyaW5nLlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnOiBTdG9yYWdlQ29uZmlnKSB7XG4gICAgdGhpcy5fZGJQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGRiOiBMb2NhbEZvcmFnZTtcblxuICAgICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IGdldERlZmF1bHRDb25maWcoKTtcbiAgICAgIGNvbnN0IGFjdHVhbENvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlnIHx8IHt9KTtcblxuICAgICAgTG9jYWxGb3JhZ2UuZGVmaW5lRHJpdmVyKENvcmRvdmFTUUxpdGVEcml2ZXIpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBkYiA9IExvY2FsRm9yYWdlLmNyZWF0ZUluc3RhbmNlKGFjdHVhbENvbmZpZyk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgZGIuc2V0RHJpdmVyKHRoaXMuX2dldERyaXZlck9yZGVyKGFjdHVhbENvbmZpZy5kcml2ZXJPcmRlcikpXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2RyaXZlciA9IGRiLmRyaXZlcigpO1xuICAgICAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2gocmVhc29uID0+IHJlamVjdChyZWFzb24pKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIGRyaXZlciBiZWluZyB1c2VkLlxuICAgKiBAcmV0dXJucyBOYW1lIG9mIHRoZSBkcml2ZXJcbiAgICovXG4gIGdldCBkcml2ZXIoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2RyaXZlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZsZWN0IHRoZSByZWFkaW5lc3Mgb2YgdGhlIHN0b3JlLlxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHN0b3JlIGlzIHJlYWR5XG4gICAqL1xuICByZWFkeSgpOiBQcm9taXNlPExvY2FsRm9yYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZTtcbiAgfVxuXG4gIC8qKiBAaGlkZGVuICovXG4gIHByaXZhdGUgX2dldERyaXZlck9yZGVyKGRyaXZlck9yZGVyKSB7XG4gICAgcmV0dXJuIGRyaXZlck9yZGVyLm1hcChkcml2ZXIgPT4ge1xuICAgICAgc3dpdGNoIChkcml2ZXIpIHtcbiAgICAgICAgY2FzZSAnc3FsaXRlJzpcbiAgICAgICAgICByZXR1cm4gQ29yZG92YVNRTGl0ZURyaXZlci5fZHJpdmVyO1xuICAgICAgICBjYXNlICdpbmRleGVkZGInOlxuICAgICAgICAgIHJldHVybiBMb2NhbEZvcmFnZS5JTkRFWEVEREI7XG4gICAgICAgIGNhc2UgJ3dlYnNxbCc6XG4gICAgICAgICAgcmV0dXJuIExvY2FsRm9yYWdlLldFQlNRTDtcbiAgICAgICAgY2FzZSAnbG9jYWxzdG9yYWdlJzpcbiAgICAgICAgICByZXR1cm4gTG9jYWxGb3JhZ2UuTE9DQUxTVE9SQUdFO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gICAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBpZGVudGlmeSB0aGlzIHZhbHVlXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBrZXlcbiAgICovXG4gIGdldChrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLmdldEl0ZW0oa2V5KSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB2YWx1ZSBmb3IgdGhlIGdpdmVuIGtleS5cbiAgICogQHBhcmFtIGtleSB0aGUga2V5IHRvIGlkZW50aWZ5IHRoaXMgdmFsdWVcbiAgICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSBmb3IgdGhpcyBrZXlcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBrZXkgYW5kIHZhbHVlIGFyZSBzZXRcbiAgICovXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLnNldEl0ZW0oa2V5LCB2YWx1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbnkgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LlxuICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgdG8gaWRlbnRpZnkgdGhpcyB2YWx1ZVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHZhbHVlIGlzIHJlbW92ZWRcbiAgICovXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RiUHJvbWlzZS50aGVuKGRiID0+IGRiLnJlbW92ZUl0ZW0oa2V5KSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGVudGlyZSBrZXkgdmFsdWUgc3RvcmUuIFdBUk5JTkc6IEhPVCFcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBzdG9yZSBpcyBjbGVhcmVkXG4gICAqL1xuICBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuY2xlYXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBudW1iZXIgb2Yga2V5cyBzdG9yZWQuXG4gICAqL1xuICBsZW5ndGgoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIubGVuZ3RoKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUga2V5cyBpbiB0aGUgc3RvcmUuXG4gICAqL1xuICBrZXlzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIua2V5cygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIHRocm91Z2ggZWFjaCBrZXksdmFsdWUgcGFpci5cbiAgICogQHBhcmFtIGl0ZXJhdG9yQ2FsbGJhY2sgYSBjYWxsYmFjayBvZiB0aGUgZm9ybSAodmFsdWUsIGtleSwgaXRlcmF0aW9uTnVtYmVyKVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGl0ZXJhdGlvbiBoYXMgZmluaXNoZWQuXG4gICAqL1xuICBmb3JFYWNoKFxuICAgIGl0ZXJhdG9yQ2FsbGJhY2s6ICh2YWx1ZTogYW55LCBrZXk6IHN0cmluZywgaXRlcmF0aW9uTnVtYmVyOiBOdW1iZXIpID0+IGFueVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGJQcm9taXNlLnRoZW4oZGIgPT4gZGIuaXRlcmF0ZShpdGVyYXRvckNhbGxiYWNrKSk7XG4gIH1cbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Q29uZmlnKCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdfaW9uaWNzdG9yYWdlJyxcbiAgICBzdG9yZU5hbWU6ICdfaW9uaWNrdicsXG4gICAgZGJLZXk6ICdfaW9uaWNrZXknLFxuICAgIGRyaXZlck9yZGVyOiBbJ3NxbGl0ZScsICdpbmRleGVkZGInLCAnd2Vic3FsJywgJ2xvY2Fsc3RvcmFnZSddXG4gIH07XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VDb25maWcge1xuICBuYW1lPzogc3RyaW5nO1xuICB2ZXJzaW9uPzogbnVtYmVyO1xuICBzaXplPzogbnVtYmVyO1xuICBzdG9yZU5hbWU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBkcml2ZXJPcmRlcj86IHN0cmluZ1tdO1xuICBkYktleT86IHN0cmluZztcbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBjb25zdCBTdG9yYWdlQ29uZmlnVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PihcbiAgJ1NUT1JBR0VfQ09ORklHX1RPS0VOJ1xuKTtcblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3RvcmFnZShzdG9yYWdlQ29uZmlnOiBTdG9yYWdlQ29uZmlnKTogU3RvcmFnZSB7XG4gIGNvbnN0IGNvbmZpZyA9ICEhc3RvcmFnZUNvbmZpZyA/IHN0b3JhZ2VDb25maWcgOiBnZXREZWZhdWx0Q29uZmlnKCk7XG4gIHJldHVybiBuZXcgU3RvcmFnZShjb25maWcpO1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGdldERlZmF1bHRDb25maWcsXG4gIHByb3ZpZGVTdG9yYWdlLFxuICBTdG9yYWdlLFxuICBTdG9yYWdlQ29uZmlnLFxuICBTdG9yYWdlQ29uZmlnVG9rZW5cbn0gZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IHsgU3RvcmFnZUNvbmZpZywgU3RvcmFnZUNvbmZpZ1Rva2VuLCBTdG9yYWdlIH07XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgSW9uaWNTdG9yYWdlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3Qoc3RvcmFnZUNvbmZpZzogU3RvcmFnZUNvbmZpZyA9IG51bGwpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElvbmljU3RvcmFnZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFN0b3JhZ2VDb25maWdUb2tlbiwgdXNlVmFsdWU6IHN0b3JhZ2VDb25maWcgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFN0b3JhZ2UsXG4gICAgICAgICAgdXNlRmFjdG9yeTogcHJvdmlkZVN0b3JhZ2UsXG4gICAgICAgICAgZGVwczogW1N0b3JhZ2VDb25maWdUb2tlbl1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMb2NhbEZvcmFnZS5kZWZpbmVEcml2ZXIiLCJMb2NhbEZvcmFnZS5jcmVhdGVJbnN0YW5jZSIsIkNvcmRvdmFTUUxpdGVEcml2ZXIuX2RyaXZlciIsIkxvY2FsRm9yYWdlLklOREVYRUREQiIsIkxvY2FsRm9yYWdlLldFQlNRTCIsIkxvY2FsRm9yYWdlLkxPQ0FMU1RPUkFHRSIsIkluamVjdGlvblRva2VuIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUFBOzs7Ozs7OztRQVdFLGlCQUFZLE1BQXFCO1lBQWpDLGlCQW9CQzsyQkE3QnlCLElBQUk7WUFVNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUM1QyxxQkFBSSxFQUFlLENBQUM7Z0JBRXBCLHFCQUFNLGFBQWEsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN6QyxxQkFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUVoRUEsd0JBQXdCLENBQUMsbUJBQW1CLENBQUM7cUJBQzFDLElBQUksQ0FBQztvQkFDSixFQUFFLEdBQUdDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUMvQyxDQUFDO3FCQUNELElBQUksQ0FBQztvQkFDSixPQUFBLEVBQUUsQ0FB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