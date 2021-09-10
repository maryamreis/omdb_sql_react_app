import { greet } from "./utils/greet";
import {data} from "./data"


function App(): JSX.Element {
  console.log(data)
  let labelledData = data.map((movie) => {
    const transformedMovie = {remake_id:movie.c0, original_id:movie.c1}
    return (transformedMovie)
  })
  console.log(labelledData)
  
  
  return <div>
    <h1>Movies</h1>
  </div>;
}

export default App;
