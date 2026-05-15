// create your App component here
import React, { useState, useEffect } from "react";

export default function DogLab() {
  // 1. State Pieces
  const [dogUrl, setDogUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 2. Data Engine Piece
  const fetchRandomDog = () => {
    setIsLoading(true); // Turn on the loading screen before starting
    
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogUrl(data.message);
        setIsLoading(false);
      });
  };

  // 3. Initial Load Trigger Piece
  useEffect(() => {
    fetchRandomDog();
  }, []);

  // 4. View / Layout Piece
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Random Dog Generator</h2>
      
      <button onClick={fetchRandomDog} disabled={isLoading}>
        {isLoading ? "Fetching..." : "Change Dog"}
      </button>
      
      <div style={{ marginTop: "20px" }}>
        {isLoading ? (
          <p>Loading message: Fetching a new doggo...</p>
        ) : (
          dogUrl && <img src={dogUrl} alt="Random Dog" style={{ width: "300px", height: "auto" }} />
        )}
      </div>
    </div>
  );
}