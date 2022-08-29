import "./header.css";

const TopHeader = (prop) => {
  document.onkeyup = function (e) {
    if (e.ctrlKey && e.which == 75) {
      document.getElementById("default-search").focus();
    }
  };
  return (
    <div class="sticky top-0 z-50 bg-slate-100 px-5 py-2">
      <div class="flex items-center text-xs">
        <div>
          <span class="py-2 px-2 border-r-2 border-solid md:border-dotted uppercase">
            {prop.header.type}
          </span>
          <span class="py-2 px-2">{prop.header.address}</span>
        </div>
        <div className="search-box relative">
          <div class="flex absolute inset-y-0 right-4 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="text-xs"
            placeholder="Search(Ctrl+K)"
            required
          ></input>
        </div>
        <div className="header-icons">
          <a href="#">
            <i class="bi bi-bell header-icon"></i>
          </a>
          <a href="#">
            <i class="bi bi-sliders header-icon"></i>
          </a>
          <a href="#">
            <i class="bi bi-question-circle header-icon"></i>
          </a>
        </div>
        <div className="user flex items-center">
          <img src="" alt="img"></img>
          <div className="user-details">
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
