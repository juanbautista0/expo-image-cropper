# expo-image-cropper

## Description:

expo-image-cropper is a package designed specifically for Expo applications that require image cropping functionalities. With this package, developers can easily integrate image cropping capabilities into their Expo applications, allowing users to crop and edit images intuitively and efficiently. With a simple and easy-to-use API, expo-image-cropper offers a powerful and flexible solution for handling image cropping operations in Expo-developed mobile apps.

### Inspired in:
https://github.com/thomas-coldwell/expo-image-editor

### Key features:

- Easy integration: designed to be easy to integrate into existing Expo projects.
- Full cropping functionality: Allows users to crop images according to their needs.

## Usage


```js
        <ImageEditor
            imageUri={imageCropSelected}
            fixedAspectRatio={777}
            freeCrop={true}
            aspectRationOptions={[
                {
                    label: "Libre",
                    icon: "crop-free",
                    value: 777
                },
                {
                    label: "1:1",
                    icon: 'crop-square',
                    value: 1 / 1
                },
                {
                    label: "5:4",
                    icon: 'crop-5-4',
                    value: 5 / 4
                },
                {
                    label: "16:9",
                    icon: "crop-16-9",
                    value: 16 / 9
                },
                {
                    label: "7:5",
                    icon: "crop-7-5",
                    value: 7 / 5
                }
            ]}
            minimumCropDimensions={{
                width: 100,
                height: 100,
            }}
            onEditingCancel={() => {
                setShowCropModal(false)
                setImageCropSelected("");

            }}
            onEditingComplete={(image) => {
                setImages(images.map(i => {
                    if (i.route === imageCropSelected) {
                        return { ...i, route: image.uri, file: image.uri, width: image.width, height: image.height }
                    }
                    return i
                }))

                setShowCropModal(false)
                setImageCropSelected("");
            }}
            isVisible={showCropModal}
            editorOptions={{
                controlBar: {
                    backButton: {
                        text: "Cancelar",
                        color: "white",
                        iconName: "cancel"
                    },
                    cancelButton: {
                        text: "Cancelar",
                        color: "white",
                        iconName: "cancel"
                    },
                    cropButton: {
                        text: "Cortar",
                        color: "white",
                        iconName: "crop"
                    },
                    saveButton: {
                        text: "Guardar",
                        color: "white",
                        iconName: "check"
                    }
                }
            }}

            processingComponent={(
                <View style={{ margin: 20 }}>
                    <ActivityIndicator size="large" color={theme.colors.primary} />
                </View>
            )}
        />

```
