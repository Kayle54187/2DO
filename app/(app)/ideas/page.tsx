import FeedItem from "@/components/feed/feed-item";
import TodoItem from "@/components/todo-item";


const IdeasTasks = () => {
    return (
        <div>
            <div className="mb-10">
                <FeedItem completion_rate='80' status='Ideas' title='Ideas'/>
            </div>
            <div className="space-y-5 overflow-y-auto">
                <TodoItem status="Ideas"/>
                <TodoItem status="Ideas"/>
                <TodoItem status="Ideas"/>
                <TodoItem status="Ideas"/>

            </div>
        </div>
    );
}
 
export default IdeasTasks;