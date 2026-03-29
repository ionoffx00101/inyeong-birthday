import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher.tsx";
import ThemeToggle from "@/components/ThemeToggle.tsx";
import HeroImg from "@/assets/gift/b-day.png";
import { giftList } from "@/data/gifts";

export const Route = createFileRoute("/gift/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-screen">
      <nav className="navbar w-full flex-shrink-0 bg-base-300">
        <div className="flex-1" />
        <div className="flex items-center gap-0.5">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </nav>
      <div className="flex flex-col gap-6 flex-1 overflow-y-auto p-4">
        <div className="relative w-full overflow-hidden rounded-2xl h-56 bg-linear-to-br from-slate-600 via-slate-500 to-slate-400 flex items-center justify-between px-10">
          <div className="flex flex-col gap-2 z-10">
            <h1 className="text-white text-4xl font-bold">
              인영이의 생일 펀딩
            </h1>
            <p className="text-white/80 text-sm max-w-xs leading-relaxed">
              생일에 가지고 싶은 선물 리스트입니다. <br />
              인영이가 원하는 물건을 살 수 있게 도와주세요.
            </p>
          </div>
          <img
            src={HeroImg}
            alt="인영생일"
            className="h-40 w-auto object-contain drop-shadow-xl"
          />
        </div>

        <div
          id="gift-list"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {giftList.map((item) => (
            <a
              key={item.id}
              href={item.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl overflow-hidden bg-base-100 border border-base-200 hover:border-base-300 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-1.5 bg-white text-black text-sm font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink size={13} />
                    자세히 보기
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 p-4">
                <p className="text-xs text-base-content/40 truncate">
                  {item.reason}
                </p>
                <h2 className="font-semibold text-sm leading-snug line-clamp-2">
                  {item.name}
                </h2>
                <p className="mt-1 text-base font-bold">
                  {item.price.toLocaleString("ko-KR")}
                  <span className="text-sm font-normal text-base-content/60 ml-0.5">
                    원
                  </span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
