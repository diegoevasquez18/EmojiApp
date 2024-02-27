import ReactSearchBox from "react-search-box";
import { useFetch } from "../../hooks/useApiEmoji";

export default function App() {

    const { data } = useFetch("http://jsonplaceholder.typicode.com/users");
  
    return (
      <ReactSearchBox
        placeholder="Search Emoji"
        onFocus={() => {;
        }}
        onChange={(value) => console.log(value)}
        autoFocus
        leftIcon={<>🎨</>}
        iconBoxSize="48px"
      />
    );
  }