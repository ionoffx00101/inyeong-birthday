import Card from "./page/birthday/Card.tsx";
import bday from "./assets/b-day.png";
import Emoji01 from "./page/birthday/emoji01.tsx";
import Eyemask from "./page/birthday/eyemask.tsx";
import Atom from "./page/birthday/atom.tsx";
import Module from "./page/birthday/module.tsx";

const App = () => {
  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="flex justify-center items-center">
              <img src={bday} alt="Birthday" />
            </div>
            <p className="py-6">
              인영이 생일 펀딩에 오신 것을 환영합니다! <br />
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center bg-neutral max-w-full gap-4 p-4">
        <Emoji01 />
        <Eyemask />
        <Module />
        <Atom />
        <Card />
      </div>
    </>
  );
};

export default App;
