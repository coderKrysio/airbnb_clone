import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import Card from "./component/Card"
import data from "./data"

//
export default function App(){
  //<Hero />
  const cards = data.map(item => {
    return(
      <Card
        key = {item.id} 
        {...item}
      />
    )
  })
  return(
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}