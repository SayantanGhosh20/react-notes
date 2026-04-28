import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const dataObj = [
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

const CardComponent = (props) =>{
    const {data} = props;
    const {id, name, age, gender} = data;
    return (
    <div className="cardWrapper">
      <div className="cardParameter">{name}</div>
      <div className="cardParameter">{age}</div>
      <div className="cardParameter">{gender}</div>
    </div>
  );
};

const ComponentAssembler = () =>{
    return(
        <>
            {
            dataObj.map(profile => <CardComponent key={profile.id} data={profile} />)
            }
        </>
    )
};

root.render(<ComponentAssembler />);
