import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { CardGroup } from 'components';
import { createStructuredSelector } from 'reselect';
import { playerCardsSelector } from '../../selector';
import { useDispatch, useSelector } from 'react-redux';
import { givePlayerACardAction, toggleQuitModalAction } from '../../actions';

const stateSelector = createStructuredSelector({
  userCards: playerCardsSelector,
});

const PlayerArea = props => {
  const { quitGame } = props;
  const { userCards } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const handleHit = () => {
    dispatch(givePlayerACardAction.Trigger());
  };

  const handleStand = () => {
    dispatch(toggleQuitModalAction.Trigger('Hurrraaaayyy!! You Won'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsArea}>
        <CardGroup cardsToDisplay={userCards} />
      </View>
      <View style={styles.actionsArea}>
        <View style={styles.playerActions}>
          <Button
            mode="contained"
            uppercase={true}
            onPress={handleHit}
            contentStyle={styles.actionButtonContent}
            labelStyle={styles.actionButtonLabel}
            style={styles.actionButton}>
            Hit
          </Button>
          <Button
            mode="contained"
            uppercase={true}
            onPress={handleStand}
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
