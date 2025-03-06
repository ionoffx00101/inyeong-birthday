import Card from "./Card.tsx";
import bday from "./assets/b-day.png"
import Emoji01 from "./emoji01.tsx";
import Eyemask from "./eyemask.tsx";
import Atom from "./atom.tsx";

function App() {

  return (
      <>
          <div className="hero bg-base-200">
              <div className="hero-content text-center">
                  <div className="max-w-md">
                      <div className="flex justify-center items-center">
                          <img src={bday} alt="Birthday" />
                      </div>
                      <p className="py-6">
                         인영이 생일 펀딩에 오신 것을 환영합니다! <br/>
                      </p>
                  </div>
              </div>
          </div>
          <div className="flex flex-wrap justify-center items-center bg-neutral max-w-full gap-4 p-4">

              <Card />
              <Emoji01 />
              <Eyemask/>
              <Atom/>
          </div>

      </>
  )
}

export default App
