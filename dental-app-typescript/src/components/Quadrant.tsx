import Tooth from "./Tooth";
import TeethChart from "../pages/TeethChart";

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
export default function Quadrant({ quadrantNumber, teeth } : any ) {
  return (
    <div className="border p-4 rounded-md">
      <h2 className="text-center font-bold mb-2">Quadrant {quadrantNumber}</h2>
      <div className="flex flex-row gap-2 justify-center flex-wrap">
      {teeth.map((tooth: any) => (
          <Tooth
            key={tooth.id}
            // id={tooth.id}
            isMissing={tooth.isMissing}
            surfaces={tooth.surfaces}
            isAdult={tooth.isAdult}
          />
        ))}
      </div>
    </div>
  )
};

