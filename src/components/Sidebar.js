import { useState } from "react";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import Friend from "./Friend";
import FriendsList from "./FriendsList";

export default function Sidebar({
  friends,
  onAddFriend,
  onSelectFriend,
  selectedFriend,
}) {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((isVisible) => !isVisible);
  }

  return (
    <div className="sidebar">
      <FriendsList>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            selectedFriend={selectedFriend}
            onSelectFriend={onSelectFriend}
            key={friend.id}
          />
        ))}
      </FriendsList>

      {showAddFriend && (
        <FormAddFriend
          onAddFriend={onAddFriend}
          onAfterAddCloseForm={handleShowAddFriend}
        />
      )}

      <Button onAction={handleShowAddFriend}>
        {showAddFriend ? "Colse" : "Add Friend"}
      </Button>
    </div>
  );
}
