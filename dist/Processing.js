import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
function Processing({ color = '#FFF', size = 'large', customComponent, }) {
    return (React.createElement(View, { style: styles.container }, customComponent ?? React.createElement(ActivityIndicator, { color: color, size: size })));
}
export { Processing };
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#33333355',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
//# sourceMappingURL=Processing.js.map