import React from 'react';
import { ReactNode } from 'react';
import { ImageEditorProps } from './types';
type Props = {
    processingComponent?: ReactNode;
    freeCrop?: boolean;
};
export declare function ImageEditorView({ processingComponent, freeCrop }: Props): React.JSX.Element;
export declare function ImageEditor({ isVisible, ...props }: ImageEditorProps): React.JSX.Element;
export {};
