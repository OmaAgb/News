import mockData from './mockNewsData.json';
import './App.css';
import NewsSegment from './NewsSegment';

// Next steps
// 1. use mockData.response.results as initial state in the useState hook - check whether it still works
// 2. Make the initial state of data an empty array - check that it compiles but nothing is shown
// 3. Call setData in a useEffect hook - make sure that headlines are displayed again
// 4. Write an async function (called getData defined above useEffect hook) - that uses axios.get to get the data from http://localhost:4000/response and calls setData with response.data.results
// 5. Make the useEffect hook call getData() rather than setData
// 6. Run json-server on a separate terminal using mockNewsData.json on port 4000 - json-server mockNewsData.json -p 4000
// 7. Check everything still works!

function App() {

  const data = mockData.response.results; // This will be replaced with useState, getData and useEffect

  const segment = data.map(information => < NewsSegment
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
