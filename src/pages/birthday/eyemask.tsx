import eyemask from "../../assets/eyemask.png";
import kakao_send from "../../assets/btn_send_tiny.png";
import emoji01 from "../../assets/emoji_01.png";

export default function Eyemask() {
  return (
    <div className="carousel-item">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <div className="w-96 h-96 flex items-center justify-center bg-white border">
            <img
              src={eyemask}
              alt={emoji01}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </figure>

        <div className="card-body">
          <h2 className="card-title">Xiaomi Dreamlight 4S</h2>
          <h2 className="card-title">13000원</h2>
          <p>엄마한테 뺏겨서 다시 가지고 싶은 수면 안대</p>
          <div className="card-actions justify-end">
            <a
              href="https://link.kakaopay.com/_/byvj2Zk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <img src={kakao_send} alt="Kakao Send" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
