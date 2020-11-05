import './scss/App.scss';
import Card from './Card';
import Header from './Header';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'

function App() {
  return (
    <div className="App">
      <Header headingText="The painters"/>
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
