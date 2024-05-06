import { Feather, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export function Icon({ text, iconID, color }) {
    return (React.createElement(View, { style: styles.container },
        iconID === 'x' ? (React.createElement(Feather, { name: iconID, size: 20, color: color })) : (React.createElement(MaterialIcons, { name: iconID, size: 26, color: color })),
        React.createElement(Text, { style: { ...styles.text, fontSize: 12.5 } }, text)));
}
const styles = StyleSheet.create({
    container: {
        height: 64,
        width: 80,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
    },
});
//# sourceMappingURL=Icon.js.map