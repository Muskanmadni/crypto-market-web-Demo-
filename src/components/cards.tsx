

import Image from "next/image"
import background from "@/components/Images/background.jpg"
export function Card(){
    return(
        <div className="background">
            <div className="background-image"> 
                <Image src={background} alt="backgound" className="background-image"></Image>

            </div>    
        </div>
    )
}

