import axios from "axios";
import {useEffect, useState} from "react";
import {useSelector,useDispatch} from "react-redux"
import { getDatabase } from "../../action";


function Home() {

    const database = useSelector(state => state.Reducer)
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
  
      useEffect(() => {
        axios.get("https://643c9db5f0ec48ce9046b0da.mockapi.io/vnxpress")
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.alet(error)
        })
        .finally(() => {

        })
      }, []);
    

    useEffect(() => {
        if(data){
            dispatch(getDatabase(data))
        }
    }, [data]);
    console.log();
    return ( <div>
        <a href="/pageOne">{data.map((obj,index)=>{
        // console.log(obj)
        return(
            <div key={index}>{obj.search.map((arr,index)=>{
                return (
                    <div key={index}>{arr.searchChild}</div>
                )
            })}</div>
        )
    })}</a>
    </div> );
}

export default Home;