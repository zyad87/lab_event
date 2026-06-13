import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const BASE_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ' +
  'temporibus molestiae dolor animi saepe! Quam corrupti similique, optio ' +
  'veniam aliquam perferendis sapiente minima dolores aut nulla expedita ' +
  'molestiae odit distinctio.';

const EXTRA_TEXT =
  ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia harum ' +
  'reiciendis nesciunt voluptatum ex blanditiis cupiditate id fugit beatae!';

const IMAGE_ONE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntv5FbVb8Z38bFtsL9og7IPcvf9u5VplxIQ&s';
const IMAGE_TWO =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIStnAbvKDKBSEVmxnhxJssyxSRMu83shhw&s';

// نفس فكرة الكود الأصلي: لون عشوائي بصيغة hex
const randomColor = () =>
  '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0');

export default function App() {
  const [text, setText] = useState(BASE_TEXT);
  const [fontSize, setFontSize] = useState(20);
  const [color, setColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const [imageOn, setImageOn] = useState(false);
  const [useImageOne, setUseImageOne] = useState(true);

  const changeContent = () => setText((prev) => prev + EXTRA_TEXT);
  const increaseFont = () => setFontSize((prev) => prev + 1);
  const decreaseFont = () => setFontSize((prev) => prev - 1);
  const changeColor = () => setColor(randomColor());
  const changeBackground = () => setBackgroundColor(randomColor());
  const changeBackgroundImage = () => {
    setImageOn(true);
    setUseImageOne((prev) => !prev);
  };

  const Btn = ({ title, onPress }) => (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );

  const textBlock = (
    <Text style={[styles.text, { fontSize, color }]}>{text}</Text>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.controls}>
        <View style={styles.row}>
          <Btn title="Change content" onPress={changeContent} />
          <Btn title="Increase font size" onPress={increaseFont} />
          <Btn title="Decrease font size" onPress={decreaseFont} />
        </View>
        <View style={styles.row}>
          <Btn title="Change color" onPress={changeColor} />
          <Btn title="Change background" onPress={changeBackground} />
          <Btn title="Change background Image" onPress={changeBackgroundImage} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {imageOn ? (
          <ImageBackground
            source={{ uri: useImageOne ? IMAGE_ONE : IMAGE_TWO }}
            style={styles.imageBackground}
            resizeMode="cover"
          >
            {textBlock}
          </ImageBackground>
        ) : (
          <View style={{ backgroundColor }}>{textBlock}</View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  controls: {
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: '#0d6efd',
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    backgroundColor: '#0b5ed7',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
  scroll: {
    flexGrow: 1,
  },
  imageBackground: {
    flex: 1,
    minHeight: 600,
  },
  text: {
    padding: 16,
  },
});
