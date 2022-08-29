import "./header.css";

const Header = () => {
  return (
    <header className="app-header flex items-center px-5 pt-3 pb-4 border-t-2 border-b">
      <div className="flex flex-col">
        <a href="/worklist" className="text-sky-600 text-xss font-bold">
          <i class="bi bi-arrow-left pr-1"></i>
          WORKLIST
        </a>
        <h1 className="font-bold text-2xl mt-2">Promotion Management</h1>
      </div>
      <button
        type="button"
        class="text-white bg-sky-700 hover:bg-sky-800 rounded-lg text-sm px-3 py-2 focus:outline-none"
      >
        Add Event
      </button>
    </header>
  );
};

export default Header;
