import Quadrant from "../components/Quadrant";
import { getQuadrantTeeth } from "../data/teethData";

const TeethChart = () => {
  return (
    <><div>
      <h2 className="text-xl font-bold text-center m-3">Adult Teeth</h2>
      <div className="grid grid-cols-2">
        <div><Quadrant quadrantNumber={1} teeth={getQuadrantTeeth("1")} reversed /></div>
        <div><Quadrant quadrantNumber={2} teeth={getQuadrantTeeth("2")} /></div>
        <div><Quadrant quadrantNumber={4} teeth={getQuadrantTeeth("3")} reversed /></div>
        <div><Quadrant quadrantNumber={3} teeth={getQuadrantTeeth("4")} /></div>
      </div>
    </div><div>
        <h2 className="text-xl font-bold text-center m-3">Milk Teeth</h2>
        <div className="grid grid-cols-2 mb-2">
          <div><Quadrant quadrantNumber={5} teeth={getQuadrantTeeth("5")} reversed /></div>
          <div><Quadrant quadrantNumber={6} teeth={getQuadrantTeeth("6")} /></div>
          <div><Quadrant quadrantNumber={7} teeth={getQuadrantTeeth("7")} reversed /></div>
          <div><Quadrant quadrantNumber={8} teeth={getQuadrantTeeth("8")} /></div>
        </div>
      </div></>
  );
};

export default TeethChart;
