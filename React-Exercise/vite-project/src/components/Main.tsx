import Content from "./Content";
import Sidebar from "./Sidebar";
function Main({ posts }: { posts: { id: number; title: string; description: string; }[] })
{
    return(
        <div>
            <Content posts={posts} />
            <Sidebar />
        </div>
    )
}
export default Main;


