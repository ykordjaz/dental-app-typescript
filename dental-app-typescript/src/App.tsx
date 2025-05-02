// App.tsx is the main container. It’s the first component React renders, and it pulls in ToothChart.
// import "./App.css";
import "./index.css";
import TeethChart from "./pages/TeethChart";

function App() {
  return (
    // in App.css you can add styles to this div;
    // otherwise <TeethChart /> is already in a div and doesn't require this div here
    <div className="App">
      <TeethChart />
      <div className="bg-blue-200 text-white text-2xl font-bold p-4 rounded">
      Tailwind is working 🎉
</div>
    </div>
  );
}

export default App;
