
1. [ ] We should make a separate file for every component
2. [ ] It is a common convention to name the file after the name of the component
3. [ ] Our files can have `.js` or `.jsx` or `.tsx` (typescript)
4. [ ] From the component file we have to export the component with the syntax :
	1. [ ] `export default ComponentName;`
5. [ ] In the files that need the component we have to import it with the syntax : 
	1. [ ] `import name from "ComponentPath`
6. [ ] Never keep any hardcoded data into the components folder
7. [ ] Create a `utils` folder for data
8. [ ] Create a `constant` folder for constant data such as CDN and image links\
9. [ ] Export :
	1. [ ] Default export : 
		1. [ ] Syntax : `export default itemName;`
	2. [ ] Named export : 
		1. [ ] Syntax : `export const varName="...";`
10. [ ] Import 
	1. [ ] Default import : 
		1. [ ] Syntax : `import data from "fileLocation"`
	2. [ ] Named import : 
		1. [ ] Syntax : `import {data} from "fileLocation";`
11. [ ] Name exports are used when we want to export multiple independent items from a file.

#### React hooks

- These are utility functions written by the react developers in the react package
- These are simple JS functions.
- useState()
- useEffect()

#### useState()

- Maintains the state of our component
- `userState` returns an array

```
import CardComponent from "./CardComponent";

import { useState } from "react";

  
  

const ComponentAssembler = () =>{

  

    const [list, setList] = useState([

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

    ]);
    return(
        <>  
            <button
                id="filterBtn"
                className = "filterBtn"
                onClick={()=>{
                    const filteredObj = list.filter((res) => res.age > 26);
                    console.log(list.filter(res => res.age > 26));
                    setList(filteredObj);
                }}
            >
                Age above 25
            </button>

            {
            list.map(profile => <CardComponent key={profile.id} data={profile} />)
            }
        </>
    )
};

  

export default ComponentAssembler;
``` 

- Whenever a state variable changes react re-renders the component.
- react uses a reconciliation algorithm called react fiber.


```
import CardComponent from "./CardComponent";

import { useState } from "react";

import dataObj from "../utils/mockData";

  
  

const ComponentAssembler = () =>{

  

    const [list, setList] = useState(dataObj);

    return(

        <>  

            <button

                id="filterBtn"

                className = "filterBtn"

                onClick={()=>{

                    const filteredObj = list.filter((res) => res.age > 26);

                    console.log(list.filter(res => res.age > 26));

                    setList(filteredObj);

                }}

            >

                Age above 25

            </button>

  
  

            {

            list.map(profile => <CardComponent key={profile.id} data={profile} />)

            }

        </>

    )

};

  

export default ComponentAssembler;
```


```
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
```