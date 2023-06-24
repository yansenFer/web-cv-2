import "./App.css"
import { v4 as uuidv4 } from "uuid"
import Card from "./Card"
import Carousel from "./Carousel"
import profile1 from "../../../assets/profile1.jpg"
import github from "../../../assets/github.png"
import projects from "../../../assets/projects.jpg"

function CardView() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={profile1}
          title={"Profile"}
          subtitle={"You can see more details about me"}
          link={"/ProfilePage"}
          buttonText="Go to the page"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={github}
          title={"Github"}
          subtitle={"Here if you want to see my github"}
          link={"https://github.com/yansenFer"}
          buttonText="Go to Github"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={projects}
          title={"Projects"}
          subtitle={"Lets go to see my projects"}
          link={"/ProjectsPage"}
          buttonText="Go to my projects"
        />
      ),
    },
  ]
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  )
}

export default CardView
