import "./header.css";
import profile from "../../assets/dummy-profile.png";

const TopHeader = (prop) => {
  document.onkeyup = function (e) {
    if (e.ctrlKey && e.which == 75) {
      document.getElementById("global-search").focus();
    }
  };
  return (
    <div class="sticky top-0 z-50 bg-slate-100 px-5 py-2">
      <div class="flex items-center text-xs">
        <div>
          <span class="py-2 pr-4 border-r-2 border-solid md:border-dotted uppercase border-blue-200">
            {prop.header.type}
          </span>
          <span class="py-2 pl-4">{prop.header.address}</span>
        </div>
        <div className="search-box relative text-xs">
          <div class="flex absolute inset-y-0 right-4 items-center pl-3 pointer-events-none text-slate-400">
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
        <div className="header-icons flex gap-4 ml-auto">
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
        <div className="user flex items-center">
          <div className="user-pic relative">
            <img className="rounded-full mr-2" src={profile} alt="img"></img>
          </div>
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
