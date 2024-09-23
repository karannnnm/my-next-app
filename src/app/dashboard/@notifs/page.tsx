import Card from "@/components/Card";
import Link from "next/link";

export default function Notifications(){
    return (
        <Card>
            <div>
                <h3>Showing current notifications</h3><br/>
                <Link href={'/dashboard/archivedNotifs'}>click for archived Notifications</Link>
            </div>


        </Card>
    )
}