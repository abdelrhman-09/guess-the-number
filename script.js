* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 100%;
  background: linear-gradient(135deg, #74ebd5, #ACB6E5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

#bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  transition: background-color 0.6s ease;
  z-index: 0;
}

.game-container {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 40px 30px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  color: white;
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #fff;
  text-shadow: 1px 1px 4px #000;
}

p {
  font-size: 1rem;
  margin-bottom: 15px;
}

input {
  width: 100%;
  max-width: 150px;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
}

button {
  background: linear-gradient(to right, #0072ff, #00c6ff);
  border: none;
  color: white;
  padding: 12px 20px;
  margin-top: 15px;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 198, 255, 0.4);
}

#message {
  margin-top: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  min-height: 40px;
}

#guessesLeft {
  margin-top: 10px;
  font-size: 1rem;
}

.restart-btn {
  background: linear-gradient(to right, #ff4b2b, #ff416c);
}

/* 🔧 Responsive Tweaks */
@media (max-width: 600px) {
  .game-container {
    padding: 30px 20px;
    max-width: 90%;
  }

  h1 {
    font-size: 1.6rem;
  }

  input {
    max-width: 100%;
    font-size: 1rem;
  }

  button {
    width: 100%;
    font-size: 1rem;
  }
}
