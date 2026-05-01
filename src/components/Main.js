// Importing Hooks
import { useState, useEffect } from "react";
// Importing sub-components
import CardComponent from "./CardComponent";
import Shimmer from "./Shimmer";
// Importing data
import dataObj from "../utils/mockData";



const testData = dataObj;
const newDataObj = [
    {
        id : 1,
        name : "Christopher Hainz",
        age : 24,
        gender : "Male"
    },
    {   
        id : 2,
        name : "Robert macy",
        age : 26,
        gender : "Male"
    },
    {
        id : 3,
        name : "Darcy Green",
        age : 23,
        gender : "Female"
    },
    {
        id : 4,
        name : "Victoria Sanchez",
        age : 25,
        gender : "Female"
    },
    {
        id : 5,
        name : "Christine Williams",
        age : 28,
        gender : "Feale"
    }
]


const Main = () =>{

    const [profileList, setProfileList] = useState(dataObj);
    const [searchText, setSearchText] = useState("");
    
    const filterObj = () => {
        const filteredObj = profileList.filter(
            (res) => res.age > 26
        );
        console.log(filteredObj);
        setProfileList (filteredObj);
    }

    const fetchData = async () => {      
        setTimeout(() => {
            console.log(newDataObj);
            setProfileList(newDataObj);
        }, 2000);
        
    }

    useEffect(()=>{fetchData()}, []);

    if(profileList.length == 0){
        return <Shimmer />
    }

    return(
        <div className="main">
            <div className="filter">
                <input 
                    type="text" 
                    className="search-box" 
                    value={searchText} 
                    // onChange={(e)=>{
                    //     setSearchText(e.target.value);
                    // }}
                />
                <button className="search-btn"
                    onClick={()=>{}}
                >
                    Search
                </button>
                <button className="filter-btn" onClick={()=>filterObj()}>
                    Filter Data
                </button>
            </div>

            <div className="profileContainer">
                {
                    profileList.map(profile => <CardComponent key={profile.id} data={profile} />)
                }
            </div>
        </div>
    );
}

export default Main;