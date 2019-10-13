import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import styles from './PopupStyles';
import Images from './assets/Images';

interface IPauseProps {
    onReset: () => void;
    onResume: () => void;
}

const pause = (props: IPauseProps) => (
            <View style={styles.clearScreen}>
                <View style={styles.panel}>
                    <Text style={styles.panelTitle}>Ready?</Text>
                    <View style={styles.panelButtonsContainer}>
                        <TouchableWithoutFeedback onPress={props.onReset}>
                            <View style={styles.panelButton}>
                                <Image style={styles.panelButtonIcon} resizeMode="contain" source={Images.restartIcon} />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={props.onResume}>
                            <View style={styles.panelButton}>
                                <Image style={styles.panelButtonIcon} resizeMode="contain" source={Images.playIcon} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        );

export default pause;