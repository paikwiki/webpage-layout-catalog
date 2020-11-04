import './scss/App.scss';
import Card from './Card';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'

const CustomH1 = tw.h1`pb-4 text-blue-500 text-2xl`;

function App() {
  return (
    <div className="App">
    <CustomH1>Hello CRA!</CustomH1>
      <div css={tw`md:w-content-md xl:w-content-lg m-auto flex flex-grow flex-wrap flex-col md:flex-row justify-items-center`}>
        <Card
          image="https://picsum.photos/640/360"
          title="Salvador Dalí"
          description="Hello, I am a description."
        />
        <Card
          image="https://picsum.photos/640/360"
          title="Vincent van Gogh"
          description="Hello, I am a description."
        />
        <Card
          image="https://picsum.photos/640/360"
          title="Pablo Picasso"
          description="Hello, I am a description."
        />
        <Card
          image="https://picsum.photos/640/360"
          title="Gustav Klimt"
          description="Hello, I am a description."
        />
        <Card />
      </div>
    </div>
  );
}

export default App;
