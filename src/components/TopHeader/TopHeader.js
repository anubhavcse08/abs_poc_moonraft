import "./header.css";
import profile from "../../assets/dummy-profile.png";
import { useEffect } from "react";

const TopHeader = (prop) => {
  document.onkeyup = function (e) {
    if (e.ctrlKey && e.which == 75) {
      document.getElementById("global-search").focus();
    }
  };

  useEffect(() => {
    const outsideSearch = document.querySelector(".modal-background");
    outsideSearch.addEventListener("click", (e) => {
      const searchBox = document.getElementById("global-search-box");
      searchBox.classList.remove("fade-in");
      searchBox.classList.add("fade-out");
      searchBox.addEventListener(
        "animationend",
        () => {
          searchBox?.classList.add("hidden");
        },
        { once: true }
      );
    });
  });

  const toggleSearchBox = () => {
    const searchBox = document.getElementById("global-search-box");
    searchBox?.classList.remove("hidden");
    searchBox.classList.add("fade-in");
    searchBox.classList.remove("fade-out");
  };
  return (
    <div class="sticky top-0 z-50 bg-slate-100 px-5 md:px-5 py-2">
      <div class="flex items-center text-xs">
        <div className="flex flex-col md:flex-row">
          <span class="md:py-2 md:pr-4 md:border-r-2 md:border-dotted uppercase border-blue-200">
            {prop.header.type}
          </span>
          <span class="mt-1 md:mt-0 md:py-2 md:pl-4">
            {prop.header.address}
          </span>
        </div>
        <div
          className="search-box md:relative text-xs md:w-3/12 hidden md:block"
          id="global-search-box"
        >
          <div className="modal-background md:hidden"></div>
          <div class="flex absolute inset-y-0 right-8 items-center md:pl-3 pointer-events-none text-slate-400">
            <i class="bi bi-search"></i>
          </div>
          <input
            type="search"
            id="global-search"
            className="global-search"
            placeholder="Search(Ctrl+K)"
            required
          ></input>
        </div>
        <div className="header-icons flex gap-3 md:gap-4 ml-auto">
          <span
            class="text-slate-400 search-icon md:hidden"
            onClick={toggleSearchBox}
          >
            <i class="bi bi-search"></i>
          </span>
          <a href="#">
            <i
              data-notification={prop.header.notifications ? "." : ""}
              class="bi bi-bell header-icon"
            ></i>
          </a>
          <a href="#">
            <i class="bi bi-sliders header-icon"></i>
          </a>
          <a href="#">
            <i class="bi bi-question-circle header-icon"></i>
          </a>
        </div>
        <div className="user relative flex items-center ml-2 md:ml-4 md:mr-2">
          <div className="user-pic relative">
            <img
              className="rounded-full md:mr-2 w-8 h-8 md:w-10 md:h-10"
              src={profile}
              alt="img"
            ></img>
          </div>
          <div className="user-details hidden md:block">
            <div className="user-name">{prop.header.name}</div>
            <div className="user-designation text-xs">
              {prop.header.designation}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
