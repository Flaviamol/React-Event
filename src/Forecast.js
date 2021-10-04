import React from "react";

export default function Forecast() {
  function showAlert(event) {
    event.preventDefault();
    alert("Forecast feature is not ready yet");
  }
  return (
    <a href="/" onClick={showAlert}>
      See Forecast
    </a>
  );
}
