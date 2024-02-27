import { Button } from "bootstrap";
import { useFetch } from "../hooks/useApiEmoji";

const Api = () =>{

    const {data, loading, error, handleCancelRequest} = useFetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.");
    
    return(
        <div>
            <ul>
                <button onClick={handleCancelRequest}>Cancel Request</button>
                {error && <li>Error: {error}</li>}
                {loading && <li>Loading...</li>}
                {data?.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Api;