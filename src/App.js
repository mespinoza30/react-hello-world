//imorts
import Animal from './Animal'
import Human from './Human';

function App() {
  return (
    <div>
      <h1>Title</h1>
      <Animal mammal="dog" name="Rocco" />
      <Animal mammal="cat" name="Garfield"/>
      <Human name="Marisela" location="MS"/>
    </div>
  );
}

export default App;
