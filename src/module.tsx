import atom from "./assets/module.png";
import emoji01 from "./assets/emoji_01.png";

export default function Module(){

    return (
        <div className="carousel-item">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <div className="w-96 h-96 flex items-center justify-center bg-white border">
                        <img src={atom} alt={emoji01} className="max-w-full max-h-full object-contain" />
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">식기건조대</h2>
                    <h2 className="card-title">110,000원</h2>
                    <p>현재 사용 중인 식기 건조대가 불안정한 상태에 놓였습니다.</p>
                    <div className="card-actions justify-end">
                        <a href="https://www.coupang.com/vp/products/8366418063?vendorItemId=88012972870" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-success">선물하기</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}