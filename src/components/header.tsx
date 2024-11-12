import Image from "next/image"
import headerLogo  from "@/components/Images/headerLogo.png"
import Link from "next/link"


export function Header(){
    return(
            <div className="header">
            <div className="header-logo ">
                <Image src={headerLogo} alt="headerLogo"></Image>
            </div>
            <div>
                <ul className="header-buttons">
                    <Link href={"/"}>
                    <li>Home</li>
                    </Link>
                    
                    <Link href={"/crypto-market"}>
                    <li>crypto Market</li>
                    </Link>
                    
                </ul>
            </div>        
            </div>
    )
}

