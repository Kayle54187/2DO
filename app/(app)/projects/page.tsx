import FeedItem from "@/components/feed/feed-item";
import TodoItem from "@/components/todo-item";


const ProjectsTasks = () => {
    return (
        <div>
            <div className="mb-10">
                <FeedItem completion_rate='90' status='Projects' title='Project'/>
            </div>
            <div className="space-y-5 overflow-y-auto">
                <TodoItem status="Projects"/>
                <TodoItem status="Projects"/>
                <TodoItem status="Projects"/>
                <TodoItem status="Projects"/>

            </div>
        </div>
    );
}
 
export default ProjectsTasks;