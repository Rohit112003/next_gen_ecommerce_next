import MaxWidthWraperr from "@/components/MaxWidthWraperr"
import { ReactNode } from "react"

const Layout =  ({children}:{children:ReactNode})=>{
    return <MaxWidthWraperr className="flex flex-1 flex-col">
        {children}

    </MaxWidthWraperr>
}
export default Layout