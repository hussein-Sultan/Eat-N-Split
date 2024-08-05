import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend, onAfterAddCloseForm }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleAddClick(e) {
    e.preventDefault();

    const id = crypto.randomUUID(); // generate a unique id by the browser

    const newFriend = {
      id,
      name,
      balance: 0,
      image: `${image}?u=${id}`,
    };

    onAddFriend(newFriend);
    onAfterAddCloseForm();

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend">
      <label htmlFor="name">🧑‍🤝‍🧑Firend Name</label>
      <input
        autoFocus
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="name"
      />

      <label htmlFor="img">🌇Image URL</label>
      <input
        type="text"
        id="img"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button onAction={handleAddClick}>ADD</Button>
    </form>
  );
}
