import { EditorOptions } from './types';
export declare const imageDataState: import("recoil").RecoilState<{
    uri: string;
    width: number;
    height: number;
}>;
export declare const imageScaleFactorState: import("recoil").RecoilState<number>;
export declare const imageBoundsState: import("recoil").RecoilState<{
    x: number;
    y: number;
    width: number;
    height: number;
}>;
export declare const readyState: import("recoil").RecoilState<boolean>;
export declare const processingState: import("recoil").RecoilState<boolean>;
export declare const accumulatedPanState: import("recoil").RecoilState<{
    x: number;
    y: number;
}>;
export declare const cropSizeState: import("recoil").RecoilState<{
    width: number;
    height: number;
}>;
export declare const editingModeState: import("recoil").RecoilState<string>;
export declare const isEditState: import("recoil").RecoilState<boolean>;
export declare const editorOptionsState: import("recoil").RecoilState<EditorOptions>;
