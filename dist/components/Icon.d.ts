import React from 'react';
import { FeatherIconNames, MaterialIconNames } from '../types';
type IconProps = {
    color: string;
    text: string;
    iconID: MaterialIconNames | FeatherIconNames;
};
export declare function Icon({ text, iconID, color }: IconProps): React.JSX.Element;
export {};
