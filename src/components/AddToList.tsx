import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img || !input.note) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      note: "",
      img: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        autoComplete="off"
        name="name"
      />

      <input
        type="number"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        autoComplete="off"
        name="age"
      />

      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
        name="img"
        autoComplete="off"
      />

      <textarea
        placeholder="Notes"
        className="AddToList-input"
        onChange={handleChange}
        value={input.note}
        name="note"
      />

      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
