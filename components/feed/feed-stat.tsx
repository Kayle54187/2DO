import AvatarComponent from "@/components/avatar";
import { AvatarComponentProps } from "@/interfaces";
import Modal from "@/components/modal";



const FeedStat = ({ completion_rate, status }: AvatarComponentProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <AvatarComponent completion_rate={completion_rate} status={status}/>
                <div className="space-y-1">
                    <h1 className="text-white font-bold">Tasks Completed!</h1>
                    <p className="text-zinc-50 text-sm">Good To Go! Lets get over with this!</p>
                </div>
            </div>
            <div>
                <Modal status={status}/>
            </div>
        </div>
    );
}
 
export default FeedStat;