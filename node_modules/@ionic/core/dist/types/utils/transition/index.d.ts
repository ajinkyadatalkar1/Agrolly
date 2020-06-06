import { Animation, IonicAnimation, NavOptions } from '../../interface';
export declare type IonicAnimationInterface = (((navEl: HTMLElement, opts: TransitionOptions) => IonicAnimation) | ((navEl: HTMLElement, opts: TransitionOptions) => Promise<IonicAnimation>));
export declare const transition: (opts: TransitionOptions) => Promise<TransitionResult>;
export declare const lifecycle: (el: HTMLElement | undefined, eventName: string) => void;
export declare const deepReady: (el: any) => Promise<void>;
export declare const setPageHidden: (el: HTMLElement, hidden: boolean) => void;
export declare const getIonPageElement: (element: HTMLElement) => Element;
export interface TransitionOptions extends NavOptions {
    progressCallback?: ((ani: IonicAnimation | Animation | undefined) => void);
    baseEl: any;
    enteringEl: HTMLElement;
    leavingEl: HTMLElement | undefined;
}
export interface TransitionResult {
    hasCompleted: boolean;
    animation?: Animation | IonicAnimation;
}
