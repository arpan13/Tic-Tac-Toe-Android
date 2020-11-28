import {
  Body,
  Button,
  Card,
  Container,
  Content,
  H1,
  H3,
  Header,
  Text,
  Title,
} from 'native-base';
import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import Icons from './components/Icons';

const itemArray = new Array(9).fill('empty');

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  const changeItem = (itemNumber) => {
    //
    if (winMessage) {
      return Snackbar.show({
        text: winMessage,
        backgroundColor: '#000',
        textColor: '#fff',
      });
    }
    if (itemArray[itemNumber] == 'empty') {
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'Position is already filled',
        backgroundColor: 'red',
        color: 'white',
      });
    }
    checkIsWinner();
  };

  const reloadGame = () => {
    //
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty', 0, 9);
  };

  const checkIsWinner = () => {
    //TODO:wining logic
    if (
      itemArray[0] !== 'empty' &&
      itemArray[0] == itemArray[1] &&
      itemArray[1] == itemArray[2]
    ) {
      setWinMessage((itemArray[0] ? 'cross' : 'circle').concat(' Wins 🤩🤩'));
    }
    if (
      itemArray[0] !== 'empty' &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      setWinMessage((itemArray[0] ? 'cross' : 'circle').concat(' Wins 🤩🤩'));
    }
    if (
      itemArray[0] !== 'empty' &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      setWinMessage((itemArray[0] ? 'cross' : 'circle').concat(' Wins 🤩🤩'));
    }
    if (
      itemArray[1] !== 'empty' &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      setWinMessage((itemArray[1] ? 'cross' : 'circle').concat(' Wins 🤩🤩'));
    }
    if (
      itemArray[2] !== 'empty' &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      setWinMessage((itemArray[2] ? 'cross' : 'circle').concat(' Wins 🤩🤩'));
    }
    if (
      itemArray[2] !== 'empty' &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      setWinMessage((itemArray[2] ? 'cross' : 'circle').concat(' Wins 🤩🤩'));
    }
    if (
      itemArray[3] !== 'empty' &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      setWinMessage((itemArray[3] ? 'cross' : 'circle').concat(' Wins 🤩🤩'));
    }
    if (
      itemArray[6] !== 'empty' &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      setWinMessage((itemArray[6] ? 'cross' : 'circle').concat(' Wins 🤩🤩'));
    }
  };
  return (
    <Container style={{backgroundColor: '#333945'}}>
      <Header>
        <Body>
          <Title>Tic Tac Toe</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
          {itemArray.map((item, index) => (
            <TouchableOpacity
              style={styles.box}
              key={index}
              onPress={() => changeItem(index)}>
              <Card style={styles.card}>
                <Icons name={item} />
              </Card>
            </TouchableOpacity>
          ))}
        </View>
        {winMessage ? (
          <View>
            <H1 style={styles.message}>{winMessage}</H1>
            <Button onPress={reloadGame} primary block rounded>
              <Text>Reload Game</Text>
            </Button>
          </View>
        ) : (
          <H3 style={styles.message}>{isCross ? 'Cross' : 'Circle'} turns</H3>
        )}
      </Content>
    </Container>
  );
};
export default App;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  box: {
    width: '33%',
    marginBottom: 6,
  },
  card: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'white',
    marginTop: 20,
    borderStartColor: '#4652b3',
    paddingVertical: 10,
  },
});
