import Images from './pages/Images';
import './App.css';
function App() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div >
      <h1>Images</h1>
      <button onClick={refreshPage}>Click to reload!</button>
      <Images/>
      
    </div>
  );
}

export default App;
