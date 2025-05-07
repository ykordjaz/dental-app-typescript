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
    </div>
  );
}

export default App;

// import ToothClickExample from "./components/ToothClickExample";
// // import CircleClickExample from "./components/CircleClickExample";

// export default function App() {
//   return (
//     <div>
//       <h1>Click the tooth</h1>
//       <ToothClickExample />
//     </div>
//   );
// }
