var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var VibrationOriginal = /** @class */ (function (_super) {
    __extends(VibrationOriginal, _super);
    function VibrationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VibrationOriginal.prototype.vibrate = function (time) { return cordova(this, "vibrate", { "sync": true }, arguments); };
    VibrationOriginal.pluginName = "Vibration";
    VibrationOriginal.plugin = "cordova-plugin-vibration";
    VibrationOriginal.pluginRef = "navigator";
    VibrationOriginal.repo = "https://github.com/apache/cordova-plugin-vibration";
    VibrationOriginal.platforms = ["Android", "iOS", "Windows"];
    return VibrationOriginal;
}(IonicNativePlugin));
var Vibration = new VibrationOriginal();
export { Vibration };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ZpYnJhdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFxQ3pDLDZCQUFpQjs7OztJQVM5QywyQkFBTyxhQUFDLElBQXVCOzs7Ozs7b0JBL0NqQztFQXNDK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuXG4vKipcbiAqIEBuYW1lIFZpYnJhdGlvblxuICogQGRlc2NyaXB0aW9uIFZpYnJhdGVzIHRoZSBkZXZpY2VcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgVmlicmF0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS92aWJyYXRpb24vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpYnJhdGlvbjogVmlicmF0aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBWaWJyYXRlIHRoZSBkZXZpY2UgZm9yIGEgc2Vjb25kXG4gKiAvLyBEdXJhdGlvbiBpcyBpZ25vcmVkIG9uIGlPUy5cbiAqIHRoaXMudmlicmF0aW9uLnZpYnJhdGUoMTAwMCk7XG4gKlxuICogLy8gVmlicmF0ZSAyIHNlY29uZHNcbiAqIC8vIFBhdXNlIGZvciAxIHNlY29uZFxuICogLy8gVmlicmF0ZSBmb3IgMiBzZWNvbmRzXG4gKiAvLyBQYXR0ZXJucyB3b3JrIG9uIEFuZHJvaWQgYW5kIFdpbmRvd3Mgb25seVxuICogdGhpcy52aWJyYXRpb24udmlicmF0ZShbMjAwMCwxMDAwLDIwMDBdKTtcbiAqXG4gKiAvLyBTdG9wIGFueSBjdXJyZW50IHZpYnJhdGlvbnMgaW1tZWRpYXRlbHlcbiAqIC8vIFdvcmtzIG9uIEFuZHJvaWQgYW5kIFdpbmRvd3Mgb25seVxuICogdGhpcy52aWJyYXRpb24udmlicmF0ZSgwKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1ZpYnJhdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXZpYnJhdGlvbicsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXZpYnJhdGlvbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlicmF0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBWaWJyYXRlcyB0aGUgZGV2aWNlIGZvciBnaXZlbiBhbW91bnQgb2YgdGltZS5cbiAgICogQHBhcmFtIHRpbWUge251bWJlcnxudW1iZXJbXX0gTWlsbGlzZWNvbmRzIHRvIHZpYnJhdGUgdGhlIGRldmljZS4gSWYgcGFzc2VkIGFuIGFycmF5IG9mIG51bWJlcnMsIGl0IHdpbGwgZGVmaW5lIGEgdmlicmF0aW9uIHBhdHRlcm4uIFBhc3MgMCB0byBzdG9wIGFueSB2aWJyYXRpb24gaW1tZWRpYXRlbHkuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICB2aWJyYXRlKHRpbWU6IG51bWJlciB8IG51bWJlcltdKSB7IH1cblxufVxuIl19