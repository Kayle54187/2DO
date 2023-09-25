import FeedItem from "@/components/feed/feed-item";



export default function Dashboard() {
  return (
    <main>
        <FeedItem completion_rate='90' status='Daily' title='Daily Schedule'/>
        <FeedItem completion_rate='80' status='Ideas' title='Ideas'/>
        <FeedItem completion_rate='70' status='Work' title='Work'/>
        <FeedItem completion_rate='70' status='Projects' title='Projects'/>

    </main>
  )
}
