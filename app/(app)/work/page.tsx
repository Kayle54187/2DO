import FeedItem from "@/components/feed/feed-item";
import TodoItem from "@/components/todo-item";


const WorkTasks = () => {
    return (
        <div>
            <div className="mb-10">
                <FeedItem completion_rate='90' status='Work' title='Work'/>
            </div>
            <div className="space-y-5 overflow-y-auto">
                <TodoItem status="Work"/>
                <TodoItem status="Work"/>
                <TodoItem status="Work"/>
                <TodoItem status="Work"/>

            </div>
        </div>
    );
}
 
export default WorkTasks;