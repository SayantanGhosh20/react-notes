import CardComponent from "./CardComponent";
import { useState } from "react";
import dataObj from "../utils/mockData";

const buttonObj = (list, setList) =>{
    const filteredObj = list.filter((res) => res.age > 26);
    console.log(list.filter(res => res.age > 26));
    setList(filteredObj);
}


const ComponentAssembler = () =>{

    const [list, setList] = useState(dataObj);
    return(
        <>  
            <button 
                id="filterBtn" 
                className = "filterBtn" 
                onClick={()=>buttonObj(list, setList)}>
                Age above 25
            </button>


            {
            list.map(profile => <CardComponent key={profile.id} data={profile} />)
            }
        </>
    )
};

export default ComponentAssembler;