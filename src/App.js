import { StyleSheet } from 'react-gui/dist/exports/style-sheet';
import { Image } from 'react-gui/dist/exports/image';
import { Text } from 'react-gui/dist/exports/text';
import { View } from 'react-gui/dist/exports/view';
import useHoverState from './hooks/useHoverState';

function App() {
  const [ref, hovered] = useHoverState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This is a React GUI example
      </Text>
      <Image
        source='https://www.lucypetproducts.com/wp-content/uploads/2020/02/Picture4.jpg'
        style={styles.image}
        loading='lazy'
      />
      <Text
        ref={ref}
        style={hovered ? styles.hovered : styles.hoverArea}
      >
        {'<< HOVER >>'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#34495e',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: '10%',
    color: '#f1c40f',
  },
  image: {
    width: '50%'
  },
  hoverArea: {
    fontSize: 36,
    fontWeight: 'bold',
    padding: '5%',
    color: '#ecf0f1',
  },
  hovered: {
    fontSize: 36,
    fontWeight: 'bold',
    padding: '5%',
    color: '#e74c3c',
  }
});

export default App;
