import "./scss/style.scss";
// Anime.js
import Anime from "./assets/Anime";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Visual from "./pages/Visual";
import Profile from "./pages/Profile";
import Portfolio from "./pages/Portfolio";
import More from "./pages/More";
import Footer from "./components/Footer";
import GoTop from "./components/GoTop";
import MobileNav from "./components/MobileNav";
import Contact from "./pages/Contact";

const App = () => {
  // Anime 적용대상
  const main = useRef(null);
  // 이동할 위치값 저장
  // useRef : html 대상을 저장하는 용도
  // useRef : 화면갱신과 상관없는 변수 저장
  const pos = useRef([]);
  // 화면이 리사이징 (반응형) 이므로 section 위치가 변경됨
  const getPos = () => {
    // 2. 기본 section 스크롤 위치값을 초기화
    pos.current = [];
    // 3. 각 section 위치값을 파악해서 저장한다
    const secs = main.current.querySelectorAll(".scroll");
    for (const item of secs) {
      // 각 영역의 스크롤 픽셀 위치값
      const winW = window.innerWidth;
      if (winW < 860) {
        pos.current.push(item.offsetTop - 80);
      } else {
        pos.current.push(item.offsetTop);
      }
    }
    // console.log(pos.current);

    // 모바일 메뉴 숨기기
    const winW = window.innerWidth;
    if (winW > 860) {
      setOpen(false);
    }

    // 콘택트 아이콘 숨기기
    const headerIcons = document.querySelector(".header-contact");
    if (winW > 860) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > pos.current[3] + 50) {
          headerIcons.style.opacity = 0;
        } else {
          headerIcons.style.opacity = 1;
        }
      });
    }

    const titleScroll = document.querySelector(".title-scroll");
    if (winW > 860) {
      if (window.scrollY > pos.current[0]) {
        titleScroll.style.opacity = 0;
      } else {
        titleScroll.style.opacity = 1;
      }
    } else {
      if (window.scrollY > pos.current[0] + 80) {
        titleScroll.style.opacity = 0;
      } else {
        titleScroll.style.opacity = 1;
      }
    }
  };
  // 6. header 의 메뉴를 클릭시 페이지 번호 전달
  const [page, setPage] = useState(0);
  useEffect(() => {
    // console.log("현재 이동 페이지 : ", page);
    new Anime(window, {
      prop: "scroll",
      value: pos.current[page],
      duration: 500,
    });
  }, [page]);
  useEffect(() => {
    // aos 초기화
    AOS.init();
    // 1. 최초 section 스크롤 위치값을 파악
    getPos();
    // 4. 화면 리사이즈 할 때도 getPos() 실행 필요
    window.addEventListener("resize", getPos);
    window.addEventListener("scroll", getPos);
    // 5. 클린업 함수 작성
    return () => {
      window.removeEventListener("resize", getPos);
      window.removeEventListener("scroll", getPos);
    };
  }, []);

  // 모바일 메뉴 펼치기 상태관리
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <div className="wrap" ref={main}>
      <GoTop />
      {/* 7. page 변경 props 전달 */}
      <div className="container">
        <div className="main-container">
          <Header setPage={setPage} open={open} setOpen={setOpen} />
          <MobileNav
            setPage={setPage}
            open={open}
            setOpen={setOpen}
            toggleDrawer={toggleDrawer}
          />
          {/* <MobileMenu setPage={setPage} open={open} setOpen={setOpen} /> */}
          <div className="main-contents">
            <Visual />
            <Profile />
            <Portfolio />
            <More />
          </div>
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
