import FeedStat from "@/components/feed/feed-stat";
import { FeedItemProps } from "@/interfaces";
import Link from "next/link";


const FeedItem = ({ completion_rate, status, title }: FeedItemProps) => {
    return (
        <div className="space-y-5 mb-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="font-bold text-2xl text-white">{title}</h1>
                    {
                        status === 'Daily' ? (
                            <p className="text-white italic">Monday Sep 18, 2023</p>
                        ) : ''
                    }
                </div>
                <Link href='#' className="text-[#2196F3]">View All</Link>
            </div>
            <div>
                <FeedStat completion_rate={completion_rate} status={status}/>
            </div>
        </div>
    );
}
 
export default FeedItem;