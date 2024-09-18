import "./App.css";
import addNotification from "react-push-notification";

function App() {
  const clickNotify = () => {
    addNotification({
      title: "SRMD Push Notification",
      message: "Jai Prabhu",
      duration: 5000,
      native: true,
      onClick: () => {
        window.open("http://localhost:3000", "_blank"); // Replace with the desired URL
      },
    });
    console.log("mira");
  };
  return (
    <div className="App">
      <button onClick={clickNotify}>Click me</button>
    </div>
  );
}

export default App;
