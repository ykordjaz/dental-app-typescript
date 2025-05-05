import Quadrant from "../components/Quadrant";

// array of teeth to be received in the tooth component as props
// since we currently do not have a database or backend logic
const teeth = [
  // Adult teeth
  // Quadrant 1
  {
    id: "11",
    isMissing: false,
    surfaces: ["mesial", "occlusal", "distal"],
    isAdult: true,
  },
  { id: "12", isMissing: false, surfaces: ["mesial", "distal"], isAdult: true },
  {
    id: "13",
    isMissing: false,
    surfaces: ["mesial", "occlusal"],
    isAdult: true,
  },
  { id: "14", isMissing: false, surfaces: ["mesial", "distal"], isAdult: true },
  { id: "15", isMissing: false, surfaces: ["mesial", "distal"], isAdult: true },
  {
    id: "16", isMissing: false, surfaces: ["mesial", "distal", "occlusal"], isAdult: true,
  },
  {
    id: "17",
    isMissing: false,
    surfaces: ["mesial", "occlusal"],
    isAdult: true,
  },
  {
    id: "18",
    isMissing: false,
    surfaces: ["distal", "occlusal"],
    isAdult: true,
  },
  //Quadrant 2
  {
    id: "21",
    isMissing: false,
    surfaces: ["mesial", "occlusal"],
    isAdult: true,
  },
  { id: "22", isMissing: false, surfaces: ["mesial", "distal"], isAdult: true },
  {
    id: "23",
    isMissing: false,
    surfaces: ["mesial", "occlusal"],
    isAdult: true,
  },
  { id: "24", isMissing: false, surfaces: ["distal"], isAdult: true },
  { id: "25", isMissing: false, surfaces: ["mesial", "distal"], isAdult: true },
  { id: "26", isMissing: false, surfaces: ["distal"], isAdult: true },
  {
    id: "27",
    isMissing: false,
    surfaces: ["mesial", "occlusal", "distal"],
    isAdult: true,
  },
  {
    id: "28",
    isMissing: false,
    surfaces: ["distal", "occlusal"],
    isAdult: true,
  },
  //Quadrant 3
  {
    id: "31",
    isMissing: false,
    surfaces: ["mesial", "occlusal", "distal"],
    isAdult: true,
  },
  { id: "32", isMissing: false, surfaces: ["mesial", "distal"], isAdult: true },
  {
    id: "33",
    isMissing: false,
    surfaces: ["mesial", "occlusal", "distal"],
    isAdult: true,
  },
  { id: "34", isMissing: false, surfaces: ["distal"], isAdult: true },
  {
    id: "35",
    isMissing: false,
    surfaces: ["mesial", "occlusal"],
    isAdult: true,
  },
  {
    id: "36",
    isMissing: false,
    surfaces: ["distal", "occlusal"],
    isAdult: true,
  },
  {
    id: "37",
    isMissing: false,
    surfaces: ["mesial", "occlusal", "distal"],
    isAdult: true,
  },
  { id: "38", isMissing: false, surfaces: ["distal"], isAdult: true },
  //Quadrant 4
  {
    id: "41",
    isMissing: false,
    surfaces: ["mesial", "occlusal", "distal"],
    isAdult: true,
  },
  { id: "42", isMissing: false, surfaces: ["mesial", "distal"], isAdult: true },
  {
    id: "43",
    isMissing: false,
    surfaces: ["mesial", "occlusal", "distal"],
    isAdult: true,
  },
  {
    id: "44",
    isMissing: false,
    surfaces: ["distal", "mesial", "occlusal"],
    isAdult: true,
  },
  {
    id: "45",
    isMissing: false,
    surfaces: ["mesial", "occlusal"],
    isAdult: true,
  },
  {
    id: "46",
    isMissing: false,
    surfaces: ["distal", "occlusal"],
    isAdult: true,
  },
  {
    id: "47",
    isMissing: false,
    surfaces: ["mesial", "occlusal"],
    isAdult: true,
  },
  {
    id: "48",
    isMissing: false,
    surfaces: ["distal", "mesial", "occlusal"],
    isAdult: true,
  },
  // Milchzähne
  {
    id: "51",
    isMissing: false,
    surfaces: ["mesial", "distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "52",
    isMissing: false,
    surfaces: ["mesial", "distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "53",
    isMissing: false,
    surfaces: ["mesial", "occlusal"],
    isAdult: false,
  },
  {
    id: "54",
    isMissing: false,
    surfaces: ["mesial", "distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "55",
    isMissing: false,
    surfaces: ["distal", "mesial", "occlusal"],
    isAdult: false,
  },
  {
    id: "56",
    isMissing: true,
    surfaces: ["mesial", "occlusal"],
    isAdult: false,
  },
  {
    id: "57",
    isMissing: true,
    surfaces: ["distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "58",
    isMissing: true,
    surfaces: ["distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "61",
    isMissing: false,
    surfaces: ["mesial", "distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "62",
    isMissing: false,
    surfaces: ["mesial", "distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "63",
    isMissing: false,
    surfaces: ["mesial", "occlusal"],
    isAdult: false,
  },
  {
    id: "64",
    isMissing: false,
    surfaces: ["mesial", "distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "65",
    isMissing: false,
    surfaces: ["distal", "mesial", "occlusal"],
    isAdult: false,
  },
  {
    id: "66",
    isMissing: true,
    surfaces: ["mesial", "occlusal"],
    isAdult: false,
  },
  {
    id: "67",
    isMissing: true,
    surfaces: ["distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "68",
    isMissing: true,
    surfaces: ["distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "71",
    isMissing: false,
    surfaces: ["mesial", "distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "72",
    isMissing: false,
    surfaces: ["mesial", "distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "73",
    isMissing: false,
    surfaces: ["mesial", "occlusal"],
    isAdult: false,
  },
  {
    id: "74",
    isMissing: false,
    surfaces: ["mesial", "distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "75",
    isMissing: false,
    surfaces: ["distal", "mesial", "occlusal"],
    isAdult: false,
  },
  {
    id: "76",
    isMissing: true,
    surfaces: ["mesial", "occlusal"],
    isAdult: false,
  },
  {
    id: "77",
    isMissing: true,
    surfaces: ["distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "78",
    isMissing: true,
    surfaces: ["distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "81",
    isMissing: false,
    surfaces: ["mesial", "distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "82",
    isMissing: false,
    surfaces: ["mesial", "distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "83",
    isMissing: false,
    surfaces: ["mesial", "occlusal"],
    isAdult: false,
  },
  {
    id: "84",
    isMissing: false,
    surfaces: ["mesial", "distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "85",
    isMissing: false,
    surfaces: ["distal", "mesial", "occlusal"],
    isAdult: false,
  },
  {
    id: "86",
    isMissing: true,
    surfaces: ["mesial", "occlusal"],
    isAdult: false,
  },
  {
    id: "87",
    isMissing: true,
    surfaces: ["distal", "occlusal"],
    isAdult: false,
  },
  {
    id: "88",
    isMissing: true,
    surfaces: ["distal", "occlusal"],
    isAdult: false,
  },
];

// Adult teeth quadrants
const quadrant1 = teeth.filter((tooth) => tooth.id.startsWith("1"));
const quadrant2 = teeth.filter((tooth) => tooth.id.startsWith("2"));
const quadrant3 = teeth.filter((tooth) => tooth.id.startsWith("3"));
const quadrant4 = teeth.filter((tooth) => tooth.id.startsWith("4"));
// Milk teeth quadrants
const quadrant5 = teeth.filter((tooth) => tooth.id.startsWith("5"));
const quadrant6 = teeth.filter((tooth) => tooth.id.startsWith("6"));
const quadrant7 = teeth.filter((tooth) => tooth.id.startsWith("7"));
const quadrant8 = teeth.filter((tooth) => tooth.id.startsWith("8"));

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
    <><div>
      <h2 className="text-xl font-bold text-center m-3">Adult Teeth</h2>
      <div className="grid grid-cols-2">
        <div><Quadrant quadrantNumber={1} teeth={quadrant1} reversed /></div>
        <div><Quadrant quadrantNumber={2} teeth={quadrant2} /></div>
        <div><Quadrant quadrantNumber={4} teeth={quadrant4} reversed /></div>
        <div><Quadrant quadrantNumber={3} teeth={quadrant3} /></div>
      </div>
    </div><div>
        <h2 className="text-xl font-bold text-center m-3">Milk Teeth</h2>
        <div className="grid grid-cols-2 mb-2">
          <div><Quadrant quadrantNumber={5} teeth={quadrant5} reversed /></div>
          <div><Quadrant quadrantNumber={6} teeth={quadrant6} /></div>
          <div><Quadrant quadrantNumber={7} teeth={quadrant7} reversed /></div>
          <div><Quadrant quadrantNumber={8} teeth={quadrant8} /></div>
        </div>
      </div></>
  );
};

export default TeethChart;
