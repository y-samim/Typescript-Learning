import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import AddToList from './components/AddToList';


export interface IState {
  people:{
    name: string
    age: number
    url: string
    note?:string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Yalda Samim",
      url:"https://www.bfh.ch/.imaging/mte/bfh-theme/profile-lg/dam/people/s/smy1.jpg/jcr:content/smy1.jpg",
      age: 30,
      note:"A web-developer to be"


    },
    {
      name:"Fakherudin Samim",
      url:"https://www.client-systems.ch/assets/images/e/clientsystems_0690_b-d24c34db.webp",
      age:25,
      note:"Informatiker EFZ (i. A.)"

    }
  ])

  

  return (
    <div className="App">
      <h1>Employee list</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
