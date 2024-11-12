
import Link from "next/link"

export function Homepage(){
    return(
        <div className="home-section-text text-focus-in">
            <h1>hello! Welcome to Coin Pulse</h1>
            <Link href={"/crypto-market"}>
            <p>Click Here To check</p>
            </Link>           
        </div>
    )
}
