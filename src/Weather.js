import React from "react";

export default function Weather() {
  function showAlert(event) {
    event.preventDefault();
    alert("Coming soon...");
  }
  return (
    <button type="button" onClick={showAlert}>
      Current Temperature
    </button>
  );
}
