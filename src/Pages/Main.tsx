import { MyFooter } from "../Components/MyFooter"
import { About } from "./About"
import { Features } from "./Features"
import { Home } from "./Home"
import { Newsletter } from "./Newsletter"
import { Pricing } from "./Pricing"

export const Main = () => {
  return (
    <>
    <Home/>
    <Features/>
    <About/>
    <Pricing/>
    <Newsletter/>
    <MyFooter/>
    </>
  )
}

