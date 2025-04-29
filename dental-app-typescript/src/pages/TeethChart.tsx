import Tooth from "../components/Tooth";

// array of teeth to be received in the tooth component as props
// since we currently do not have a database or backend logic
const teeth = [
  // Adult teeth
  { id: "11", isMissing: false, surfaces: ["mesial", "occlusal"], isAdult: true },
  { id: "12", isMissing: false, surfaces: ["mesial", "distal"], isAdult: true },
  { id: "13", isMissing: false, surfaces: ["mesial", "occlusal"], isAdult: true },
  { id: "14", isMissing: false, surfaces: ["distal"], isAdult: true },
  { id: "15", isMissing: false, surfaces: ["mesial"], isAdult: true },
  { id: "16", isMissing: false, surfaces: ["distal"], isAdult: true },
  { id: "17", isMissing: false, surfaces: ["mesial", "occlusal"], isAdult: true },
  { id: "18", isMissing: false, surfaces: ["distal"], isAdult: true },
  // Milchzähne
  { id: "51", isMissing: false, surfaces: ["distal", "occlusal"], isAdult: false },
  { id: "52", isMissing: false, surfaces: ["mesial","distal", "occlusal"], isAdult: false },
  { id: "53", isMissing: false, surfaces: ["mesial", "occlusal"], isAdult: false },
  { id: "54", isMissing: false, surfaces: ["mesial","distal"], isAdult: false },
  { id: "55", isMissing: false, surfaces: ["distal", "mesial", "occlusal"], isAdult: false },
  { id: "56", isMissing: true, surfaces: ["mesial", "occlusal"], isAdult: false },
  { id: "57", isMissing: true, surfaces: ["distal", "occlusal"], isAdult: false },
  { id: "58", isMissing: true, surfaces: ["distal", "occlusal"], isAdult: false }
];

// For each object in the teeth array, use its data to create a <Tooth /> component.
// That <Tooth /> component is created by calling the Tooth function and passing props
// This is where the data in teeth array gets turned into React components that will actually show up in the UI.
// Below, "key" helps React identify which items in a list have changed, been added, or removed;
// This is important because React re-renders components whenever data changes.
// You need to define a key whenever you render a list of multiple components.
// if we update the array (for example, by marking a tooth as missing or adding a new one)
// Normally, we'd first fetch that data from a backend or API
// Once we have the data in a variable (e.g., const teeth = response.data), you’d map over it just as we are now.
const TeethChart = () => {
  return (
    <div>
      <h1> Dental Chart</h1>
      {teeth.map((tooth) => (
        <Tooth
          key={tooth.id}
          id={tooth.id}
          isMissing={tooth.isMissing}
          surfaces={tooth.surfaces}
          isAdult={tooth.isAdult}
        />
      ))}
    </div>
  );
};

export default TeethChart;
