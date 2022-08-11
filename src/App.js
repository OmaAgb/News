import mockData from './mockNewsData.json';
import './App.css';
import NewsSegment from './NewsSegment';


function App() {

  const data = mockData.response.results;

  const segment = data.map( information => < NewsSegment
      key={information.id}
      image={information.fields.thumbnail}
    text={information.fields.headline}
  />)

  return (
    
    <div>
     {segment}
    </div>
  );
}

export default App;
