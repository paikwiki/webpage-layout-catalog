import './scss/App.scss';
import Card from './Card';
import tw from 'twin.macro';

const CustomH1 = tw.h1`text-green-500 text-2xl`;

function App() {
  return (
    <div className="App">
      <CustomH1>Hello CRA!</CustomH1>
      <Card
        image="https://picsum.photos/640/360"
        title="I am a Card."
        description="Hello, I am a description."
      />
      <Card
        image="https://picsum.photos/640/360"
        title="I am the 2nd Card."
        description="Hello, I am a description."
      />
      <Card
        image="https://picsum.photos/640/360"
        title="I am the 3rd Card."
        description="Hello, I am a description."
      />
      <Card
        image="https://picsum.photos/640/360"
        title="I am an another Card."
        description="Hello, I am a description."
      />
      <Card />
    </div>
  );
}

export default App;
