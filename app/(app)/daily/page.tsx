import FeedItem from "@/components/feed/feed-item";
import TodoItem from "@/components/todo-item";


const DailyTasks = () => {
    return (
        <div>
            <div className="mb-10">
                <FeedItem completion_rate='90' status='Daily' title='Daily Schedule'/>
            </div>
            <div className="space-y-5 overflow-y-auto">
                <TodoItem status="Daily"/>
                <TodoItem status="Daily"/>
                <TodoItem status="Daily"/>
                <TodoItem status="Daily"/>

            </div>
        </div>
    );
}
 
export default DailyTasks;