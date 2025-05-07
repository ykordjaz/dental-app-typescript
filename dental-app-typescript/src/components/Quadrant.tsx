import Tooth from "./Tooth";

// type ToothType = {
//   id: string;
//   isAdult: boolean;
//   isMissing: boolean;
//   fdiNumber: string;
//   surfaces: string[];
// };

// type QuadrantProps = {
//   quadrantNumber: number;
//   teeth: ToothType[];
// };

// export default function Quadrant({ quadrantNumber, teeth } : QuadrantProps ) {
  export default function Quadrant({ quadrantNumber, teeth, reversed }: any) {
    const displayTeeth = reversed ? [...teeth].reverse() : teeth;

    return (
      <div className="border p- rounded-md">
        <h2 className="text-center font-bold mb-2">Quadrant {quadrantNumber}</h2>
        <div className="flex flex-wrap">
          {displayTeeth.map((tooth: any) => (
            <><Tooth
              key={tooth.id}
              id={tooth.id}
              isMissing={tooth.isMissing}
              surfaces={tooth.surfaces}
              isAdult={tooth.isAdult} /><span className="text-sm mt-1">{tooth.id}</span></>
          ))}
        </div>
      </div>
    );
  }

