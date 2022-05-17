import Link from "next/link";


 export default function Layout(){
    return(
        <header>
            <Link href={{pathname:'/'}}>Home</Link>
            <Link href={{pathname:'/about'}}>About</Link>
            <Link href={{pathname:'/users'}}>Link</Link>
            
        </header>
    )
 }