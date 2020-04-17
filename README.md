# Simple BlackJack

This application is very simple BlackJack game where the whole state is controlled by Redux.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Prerequisites

```
1. Node - v9+ - https://nodejs.org/en/download/
2. React Native Setup - https://reactnative.dev/docs/environment-setup
3. iOS / Andoid Simulator - https://reactnative.dev/docs/environment-setup
```

### Installing

A step by step series of examples that tell you how to get a development env running

#### Setting the system up
Assumes that you have installed all the tools mentioned above 

```
1. Clone this repo - git clone https://github.com/sukhijaa/blackjack_reactNative.git
2. $ cd blackJackRN
3. Install all dependencies - $ yarn
4. $ cd ios
5. $ pod install
6. $ cd ..
7. $ yarn ios - To run on iOS emulator
8. $ yarn android - To run on Android Emulator
```

### And coding style tests

```
$ yarn eslint -> To get list of linting errors
```

## About the Project

Whole project is based on React Hooks API.  
All data interactions happens only through redux store  
Code is well configured to enable multi-player mode with minimal code changes  

react-native-paper -> UI Library Used  
redux -> Used for State Management  
redux-Sage -> For Managing SideEffects  
redux-persist -> Used with Async Storage and hence store redux state in Async Storage  
redux-logger -> So that all actions are logged into console  
reselect -> For selectors creation  
react-navigation -> For navigation stack  
immer -> To maintain immutability of store  


## HOW TO
1. Play : 
```
a. Open the App and Enter your name
b. Click Start Game
```

2. Hit : 
```
Click on Hit Button and you will be served a card
```
3. Stand : 
```
Click on Stand and Dealer will take his turn and result will be declared
```
4. Quit
```
Click on Quit Game
```

## TODOs

- [ ] Add Theming Support
- [ ] Add Error Fallback
- [ ] Add Card Animations
- [ ] Validate everything using Flow
- [ ] Add internationalization support

## Authors

Abhishek Sukhija - abhisukhija@ymail.com


