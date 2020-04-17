import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Portal, Modal } from 'react-native-paper';
import { navigate } from 'navigation/NavigationService';
import { useDispatch } from 'react-redux';
import { quitGameAction, toggleQuitModalAction } from './actions';
import PlayerArea from './components/PlayerArea/PlayerArea';
import DealerArea from './components/DealerArea/DealerArea';
import QuitGameModal from './components/QuitGameModal/QuitGameModal';

export default function Home() {
  const dispatch = useDispatch();

  const handleGameQuit = () => {
    dispatch(
      toggleQuitModalAction.Trigger('Are you sure you wish to quit the game'),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.dealerArea}>
        <DealerArea />
      </View>
      <View style={styles.userArea}>
        <PlayerArea quitGame={handleGameQuit} />
      </View>
      <QuitGameModal />
    </View>
  );
}
