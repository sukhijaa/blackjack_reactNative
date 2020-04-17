import { TOTAL_DECKS_COUNT, CARD_SUITS } from './constants';

export const getCardName = cardId => {
  const indexedValue = cardId - 1;
  const normalizedValue = indexedValue / 52;
  const groupVal = normalizedValue / 13;
  const groupName = CARD_SUITS[groupVal];
  const cardDisplayNumber = (normalizedValue % 13) + 1;

  return `${cardDisplayNumber} of ${groupName}`;
};

export const getShuffledMainDeckOfCards = () => {
  const arrayLength = 52 * TOTAL_DECKS_COUNT;
  let iterator = 0;
  const finalArray = Array(arrayLength)
    .fill()
    .map((i, index) => index + 1);

  console.log(finalArray);
  while (iterator < arrayLength) {
    const randomIndex = Math.floor(Math.random() * arrayLength) % arrayLength;
    const currentVal = finalArray[iterator];
    const finalValue = finalArray[randomIndex];

    finalArray[randomIndex] = currentVal;
    finalArray[iterator] = finalValue;
    iterator++;
  }

  return finalArray;
};
