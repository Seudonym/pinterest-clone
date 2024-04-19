import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <>
      <Navbar minimal={false}/>
      <Hero />
    </>
  )
}

export default Home