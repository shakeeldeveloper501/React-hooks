import { useState } from "react";
// import './PopupProject.css'
import Popup from "./Popup";
import Button from "./Button";

function PopupProject() {
  const [editPopup, setEditPopup] = useState(false);
  const [delPopup, setDelPopup] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center gap-5">
        {/* Button component use */}
        <Button color="bg-gray-900" setPopup={setEditPopup}>
          Edit
        </Button>
        <Button color="bg-red-900" setPopup={setDelPopup}>
          Delete
        </Button>

        {/* simple button use */}
        <button
          className="bg-red-900 px-3 py-2 rounded-lg text-white"
          onClick={() => setEditPopup(true)}
        >
          Simple button
        </button>
      </div>
      {/* edit */}
      <Popup
        popup={editPopup}
        setPopup={setEditPopup}
        title={"Edit"}
        description={"Are you sure you want to edit this?"}
      />
      {/* delete */}
      <Popup
        popup={delPopup}
        setPopup={setDelPopup}
        title={"Delete"}
        description={"Are you sure you want to delete this?"}
      />
    </>
  );
}

export default PopupProject;
