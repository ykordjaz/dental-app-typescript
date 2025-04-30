// inside the curly brackets we have props and the type (typescript) is "any" for now
// Tooth controls what each individual tooth looks like.
// we will be adding onClick as props to the Tooth;

const surfaceColors: any = {
  mesial: "blue",
  distal: "green",
  occlusal: "orange",
  vestibular: "purple",
  lingual: "yellow",
  cervical: "red",
};

const surfacePaths: any = {
  mesial: "M50,80 Q75,60 100,80 L100,140 Q75,160 50,140 Z",
  distal: "M100,80 Q125,60 150,80 L150,140 Q125,160 100,140 Z",
  occlusal: "M75,110 Q100,95 125,110 Q100,125 75,110 Z",
  cervical: "M50,140 L150,140 L145,145 L55,145 Z",
};

const Tooth = ({ id, isAdult, isMissing, fdiNumber, surfaces = [] }: any) => {
  // add logic: if tooth is missing, don't show
  // add styles for adult tooth and milk tooth
  // check if isMissing is true. If it is, you would return null (which means “don’t show anything”).
  // If it’s not, you’d return the existing JSX code.
  return (
    <div>
      <p>
        {id}
        {}
        {surfaces}
      </p>
      <svg
        width="200"
        height="300"
        viewBox="0 0 200 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* where is the line below shown? */}
        <title>Tooth {id}</title>

        {/* 	•	Add a condition that checks the value of isAdult.
              •	If isAdult is true, render one set of paths (for the square shape).
              •	If isAdult is false, render a different set of paths (for the round shape with pink roots). */}
        <path
          d="M50,80 Q100,40 150,80 Q160,100 150,140 Q140,180 100,180 Q60,180 50,140 Q40,100 50,80 Z"
          fill="white"
          stroke="black"
          strokeWidth="4"
        />

        {!isAdult && (
          <path
            d="M 50 140 Q 60 210 82 216 Q 101 224 118 216 Q 140 212 150 140 Z"
            fill="pink"
            stroke="black"
            strokeWidth="4"
          />
        )}

        {surfaces.map((surface: any) => {
          const pathData = surfacePaths[surface as any];
          const color = surfaceColors[surface];
          return pathData ? (
            <path
              key={surface}
              d={pathData}
              fill={color}
              fillOpacity="0.5"
              stroke="none"
            />
          ) : null;
        })}

        {/* Overlay: missing tooth marker */}
        {isMissing && (
          <text
            x="30"
            y="60"
            fontSize="50"
            fill="gray"
            fontWeight="bold"
            textAnchor="middle">
            F
          </text>
        )}
      </svg>
    </div>
  );
};

export default Tooth;
