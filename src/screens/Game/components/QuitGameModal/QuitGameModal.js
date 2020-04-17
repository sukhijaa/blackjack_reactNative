import React from 'react';
import { View } from 'react-native';
import { Button, Modal, Portal, Text } from 'react-native-paper';
import styles from './styles';
import { createStructuredSelector } from 'reselect';
import { modalTextSelector } from '../../selector';
import { useDispatch, useSelector } from 'react-redux';
import {
  quitGameAction,
  startGameAction,
  toggleQuitModalAction,
} from '../../actions';
import { navigate } from 'navigation/NavigationService';

const stateSelector = createStructuredSelector({
  modalText: modalTextSelector,
});

const QuitGameModal = () => {
  const { modalText } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(toggleQuitModalAction.Trigger(''));
  };

  const handleGameQuit = () => {
    handleModalClose();
    dispatch(quitGameAction.Trigger());
    navigate('Home');
  };

  const handleGameRestart = () => {
    handleModalClose();
    dispatch(startGameAction.Trigger());
  };

  return (
    <Portal>
      <Modal visible={!!modalText} onDismiss={handleModalClose}>
        <View style={styles.container}>
          <Text style={styles.modalText}>{modalText}</Text>
          <View style={styles.playerActions}>
            <Button
              mode="contained"
              color={'green'}
              uppercase={true}
              onPress={handleGameRestart}
              contentStyle={styles.actionButtonContent}
              labelStyle={styles.actionButtonLabel}
              style={styles.actionButton}>
              Restart
            </Button>
            <Button
              mode="contained"
              color={'red'}
              uppercase={true}
              onPress={handleGameQuit}
              contentStyle={styles.actionButtonContent}
              labelStyle={styles.actionButtonLabel}
              style={styles.actionButton}>
              Quit
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default QuitGameModal;
