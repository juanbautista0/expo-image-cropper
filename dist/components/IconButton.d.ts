import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { FeatherIconNames, MaterialIconNames } from '../types';
type IconButtonProps = {
    color: string;
    text: string;
    iconID: MaterialIconNames | FeatherIconNames;
} & TouchableOpacityProps;
export declare function IconButton({ text, iconID, color, ...buttonProps }: IconButtonProps): React.JSX.Element;
export {};
