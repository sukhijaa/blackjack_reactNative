import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { CardGroup } from '../../../../components';

const PlayerArea = props => {
  const { quitGame } = props;

  const doNothing = () => {};

  return (
    <View style={styles.container}>
      <View styles={styles.cardsArea}>
        <CardGroup />
      </View>
      <View style={styles.playerActions}>
        <Button
          mode="contained"
          uppercase={true}
          onPress={doNothing}
          contentStyle={styles.actionButtonContent}
          labelStyle={styles.actionButtonLabel}
          style={styles.actionButton}>
          Hit
        </Button>
        <Button
          mode="contained"
          uppercase={true}
          onPress={doNothing}
          contentStyle={styles.actionButtonContent}
          labelStyle={styles.actionButtonLabel}
          style={styles.actionButton}>
          Stand
        </Button>
      </View>
      <Button
        mode="contained"
        uppercase={true}
        style={styles.quitButton}
        labelStyle={styles.quitButtonLabel}
        onPress={quitGame}>
        Quit Game
      </Button>
    </View>
  );
};

PlayerArea.propTypes = {
  quitGame: PropTypes.func,
};

PlayerArea.defaultProps = {
  quitGame: () => {},
};

export default PlayerArea;
