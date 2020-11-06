import './scss/App.scss';
import Card from './Card';
import Header from './Header';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'

const appData = {
  pageTitle: 'The painters',
  cards: [
    {
      title: 'Salvador Dalí',
      description: 'Hello, I am a description.',
      imageUrl: 'https://picsum.photos/640/360',
    },
    {
      title: 'Vincent van Gogh',
      description: 'Hello, I am a description.',
      imageUrl: 'https://picsum.photos/960/540',
    },
    {
      title: 'Pablo Picasso',
      description: 'Hello, I am a description.',
      imageUrl: 'https://picsum.photos/480/270',
    },
    {
      title: 'Gustav Klimt',
      description: 'Hello, I am a description.',
      imageUrl: 'https://picsum.photos/496/279',
    },
  ],
};

function App() {
  return (
    <div className="App">
      <Header headingText={appData.pageTitle}/>
      <div css={tw`md:w-content-md xl:w-content-lg max:w-content-max m-auto flex flex-grow flex-wrap flex-col md:flex-row justify-items-center`}>
        {appData.cards.map(item =>
          <Card
            image={item.imageUrl}
            title={item.title}
            description={item.description}
          />
        )}
        <Card title="More Dummy Card" />
        <Card title="More Dummy Card" />
        <Card title="More Dummy Card" />
        <Card title="More Dummy Card" />
        <Card title="More Dummy Card" />
        <Card title="More Dummy Card" />
      </div>
    </div>
  );
}

export default App;
