import Graph from "@/components/shared/graph/graph";

const StatsSection = () => {
    return (
        <div className="h-full text-white mr-6">
            <div className="mb-5">
                <h1 className="font-bold text-3xl">Statistics</h1>
            </div>
            <Graph/>
        </div>
    );
}
 
export default StatsSection;