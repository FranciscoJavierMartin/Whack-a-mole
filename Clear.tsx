import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import styles from './PopupStyles';
import Images from './assets/Images';

interface IClearProps {
  level: number;
  onReset: () => void;
  onNextLevel: () => void
  score: number;
}

const clear = (props: IClearProps) => 
            <View style={styles.clearScreen}>
                <View style={styles.clearedLevelContainer}>
                    <Text style={styles.clearedLevelText}>Level</Text>
                    <Text style={styles.clearedLevelText}>{props.level}</Text>
                </View>

                <View style={styles.panel}>
                    <Text style={styles.panelTitle}>Cleared</Text>
                    <Text style={styles.panelText}>Score: {props.score}</Text>

                    <View style={styles.panelButtonsContainer}>
                        <TouchableWithoutFeedback onPress={props.onReset}>
                            <View style={styles.panelButton}>
                                <Image style={styles.panelButtonIcon} resizeMode="contain" source={Images.restartIcon} />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={props.onNextLevel}>
                            <View style={styles.panelButton}>
                                <Image style={styles.panelButtonIcon} resizeMode="contain" source={Images.playIcon} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>

export default clear;
