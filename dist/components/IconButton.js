import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from './Icon';
export function IconButton({ text, iconID, color, ...buttonProps }) {
    return (React.createElement(TouchableOpacity, { ...buttonProps },
        React.createElement(Icon, { text: text, iconID: iconID, color: color })));
}
//# sourceMappingURL=IconButton.js.map