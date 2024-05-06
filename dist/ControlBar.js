import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { IconButton } from './components/IconButton';
import { EditorContext } from './context/editor';
import { usePerformCrop } from './customHooks/usePerformCrop';
import { editorOptionsState, isEditState } from './Store';
function ControlBar({ ...props }) {
    const { freeCrop } = props;
    const { width } = useWindowDimensions();
    const [isEdit, setIsEdit] = useRecoilState(isEditState);
    const { setFixedAspectRatio, fixedAspectRatio, aspectRatioOptions } = useContext(EditorContext);
    const { controlBar } = useRecoilValue(editorOptionsState);
    const { onBackPress, onSave } = useContext(EditorContext);
    const performCrop = usePerformCrop();
    const [currentAspectRatio, setCurrentAspectRatio] = useState(undefined);
    const onEditDone = async () => {
        await performCrop();
        setIsEdit(true);
    };
    useEffect(() => {
        if (freeCrop && setFixedAspectRatio) {
            setFixedAspectRatio(777);
            setCurrentAspectRatio({
                label: "Libre",
                icon: "crop-free",
                value: 777
            });
        }
    }, []);
    return (React.createElement(View, { style: [
            styles.container,
            {
                width: width,
                backgroundColor: 'transparent',
                height: controlBar?.height,
                maxWidth: width
            },
        ] },
        React.createElement(View, { style: { flexBasis: `20%`, width: "20%" } },
            React.createElement(IconButton, { iconID: !isEdit
                    ? controlBar?.cancelButton?.iconName
                    : controlBar?.backButton?.iconName, color: !isEdit
                    ? controlBar?.cancelButton?.color
                    : controlBar?.backButton?.color, text: !isEdit
                    ? controlBar?.cancelButton?.text
                    : controlBar?.backButton?.text, onPress: () => {
                    onBackPress();
                    setIsEdit(false);
                } })),
        !isEdit && aspectRatioOptions ? (React.createElement(ScrollView, { horizontal: true, showsHorizontalScrollIndicator: true, style: { flexBasis: `60%`, width: "60%" }, contentContainerStyle: { justifyContent: "center", flexDirection: "row", alignItems: "center" } }, aspectRatioOptions.map((i, k) => (React.createElement(View, { key: k, style: { margin: 0 } },
            React.createElement(IconButton, { iconID: i.icon, text: i.label, color: (currentAspectRatio && currentAspectRatio.value === i.value || fixedAspectRatio === i.value) ? '#00CFA9' : controlBar?.cropButton?.color, onPress: (_) => {
                    if (setFixedAspectRatio !== undefined && currentAspectRatio?.value !== i.value) {
                        setFixedAspectRatio(i.value);
                        setCurrentAspectRatio(i);
                    }
                } })))))) : null,
        !isEdit ? (React.createElement(IconButton, { iconID: controlBar?.cropButton?.iconName, text: controlBar?.cropButton?.text, color: controlBar?.cropButton?.color, onPress: onEditDone, style: { flexBasis: `20%`, width: "20%" } })) : (React.createElement(IconButton, { iconID: controlBar?.saveButton?.iconName, text: controlBar?.saveButton?.text, color: controlBar?.saveButton?.color, onPress: onSave, style: { flexBasis: `20%`, width: "20%" } }))));
}
export { ControlBar };
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 4,
    },
});
//# sourceMappingURL=ControlBar.js.map