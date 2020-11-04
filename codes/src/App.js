import './scss/App.scss';
import tw from 'twin.macro';

const CustomH1 = tw.h1`text-green-500 text-2xl`;
const Card = tw.div`p-4 shadow-lg max-w-md border-2 bg-white`;

function App() {
  return (
    <div className="App">
      <CustomH1>Hello CRA!</CustomH1>
      <Card>I am a Card.</Card>
    </div>
  );
}

export default App;
