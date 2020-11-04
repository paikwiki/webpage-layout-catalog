import './scss/App.scss';
import Card from './Card';
import tw from 'twin.macro';

const CustomH1 = tw.h1`text-green-500 text-2xl`;

function App() {
  return (
    <div className="App">
      <CustomH1>Hello CRA!</CustomH1>
      <Card text="I am a Card." />
      <Card text="I am the 2nd Card." />
      <Card text="I am the 3rd Card." />
      <Card text="I am an another Card." />
      <Card />
    </div>
  );
}

export default App;
