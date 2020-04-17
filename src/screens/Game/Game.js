import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Divider } from 'react-native-paper';
import { navigate } from 'navigation/NavigationService';
import { useDispatch } from 'react-redux';
import { quitGameAction } from './actions';
import PlayerArea from './components/PlayerArea/PlayerArea';
import DealerArea from './components/DealerArea/DealerArea';

export default function Home() {
  const dispatch = useDispatch();

  const handleGameQuit = () => {
    dispatch(quitGameAction.Trigger());
    navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.dealerArea}>
        <DealerArea />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.userArea}>
        <PlayerArea quitGame={handleGameQuit} />
      </View>
    </View>
  );
}
