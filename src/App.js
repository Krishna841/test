import "./App.css";

function App() {
  const clickNotify = () => {
    if (Notification.permission === "granted") {
      new Notification("Notification Title", {
        body: "This is the notification message.",
        icon: "/path/to/icon.png", // Optional: add an icon
      }).onclick = () => {
        window.open("https://yourwebsite.com", "_blank");
      };
    } else {
      console.log("Notification permission denied");
    }
  };
  return (
    <div className="App">
      <button onClick={clickNotify}>Click me</button>
    </div>
  );
}

export default App;
