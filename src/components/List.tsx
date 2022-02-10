import React from "react";
import "../App.css";
import { IState as IProps } from "../App"

//the below is the interface could be write or else import { IState as IProps } from "../App"
// interface IProps {
//   people: {
//     name: "Yalda Samim";
//     age: number;
//     url: string;
//     note?: string;
//   }[];
// }

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} />
            <h3>{person.name}</h3>
          </div>
          <p>{person.age} years old </p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default List;
