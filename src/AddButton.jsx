import React, { useState } from "react";

function AddFlavor({ open }) {
  return (
    <button onClick={open} type="button" className="addButton" id="addItem">
      추가
    </button>
  );
}
export default AddFlavor;
