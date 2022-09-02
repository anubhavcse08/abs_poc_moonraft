import Dropdown from "../common/dropdown/Dropdown";
import "./PageFilter.css";

const PageFilter = () => {
  return (
    <form className="global-form flex flex-wrap px-5 py-2 border-b text-xs gap-4">
      <Dropdown data={["NORCAL", "Denver", "Portland"]} classProperties="font-medium form-select uppercase" onSelectValue={() => { }} />
      <Dropdown data={["Snacks", "Soft Drinks"]} classProperties="font-medium form-select" onSelectValue={() => { }} />
      <Dropdown data={["Cookies", "Crackers", "Sports Drinks", "Energy Drinks"]} classProperties="font-medium form-select" onSelectValue={() => { }} />
      <div className="inline-flex gap-4">
        <button type="submit" className="submit font-medium text-sky-600 rounded border md:border-2 border-sky-600 md:rounded-md">Sort & Filters</button>
        <button type="reset" className="reset font-medium text-sky-600">Reset</button>
      </div>
    </form>
  );
};

export default PageFilter;
