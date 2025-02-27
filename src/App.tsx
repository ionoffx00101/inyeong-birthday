import Card from "./Card.tsx";
import bday from "./assets/b-day.png"

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
          <div className="carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 p-4">
             <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
          </div>
      </>
  )
}

export default App
