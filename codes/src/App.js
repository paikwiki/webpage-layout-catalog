import './scss/App.scss';
import tw from 'twin.macro';

const CustomH1 = tw.h1`text-green-500 text-2xl`;

function App() {
  return (
    <div className="App">
      <CustomH1>Hello CRA!</CustomH1>
    </div>
  );
}

export default App;
