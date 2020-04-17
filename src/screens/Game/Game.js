import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { toggleQuitModalAction } from './actions';
import { QUIT_GAME_MESSAGE } from './constants';
import {
  QuitGameModal,
  GameSimulator,
  DealerArea,
  PlayerArea,
} from './components';

export default function Home() {
  const dispatch = useDispatch();

  const handleGameQuit = () => {
    dispatch(toggleQuitModalAction.Trigger(QUIT_GAME_MESSAGE));
  };

  return (
    <View style={styles.container}>
      <View style={styles.dealerArea}>
        <DealerArea />
      </View>
      <View style={styles.userArea}>
        <PlayerArea quitGame={handleGameQuit} />
      </View>
      <GameSimulator />
      <QuitGameModal />
    </View>
  );
}
