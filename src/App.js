import './App.css';

import Likes from './like/Like';
import Title from './Title';
import { rootReducer } from './redux/rootReducer';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            < Title />
            <Likes store={rootReducer} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
