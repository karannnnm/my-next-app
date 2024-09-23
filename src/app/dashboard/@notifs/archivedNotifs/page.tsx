import Card from "@/components/Card";
import Link from "next/link";

export default function ArchivedNotifs(){

    return(
        <Card>
            <h3>
                Showing archived notifications.
            </h3>
            <Link href={'/dashboard'}>Click for default notifications</Link>
        </Card>
    )


}