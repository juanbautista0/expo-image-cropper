/// <reference types="react" />
import { AspectRationOptions } from '../types';
export type EditorContextData = {
    minimumCropDimensions: {
        width: number;
        height: number;
    };
    fixedAspectRatio: number;
    detectedAspectRatio?: number;
    aspectRatioOptions?: AspectRationOptions[];
    setFixedAspectRatio?: (f: number) => void;
    onBackPress: () => void;
    onSave: () => void;
    imageUri: string | null;
};
export declare const EditorContext: import("react").Context<EditorContextData>;
