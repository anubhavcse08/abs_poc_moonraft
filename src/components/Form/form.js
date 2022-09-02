import Abs_SelectFields from "../common/Abs_SelectFields";
import "./form.css";

const Form = () => {
  return (
    <form className="global-form flex flex-wrap px-5 py-2 border-b text-xs gap-4">
      <Abs_SelectFields data={["NORCAL", "Denver", "Portland"]} classProperties="form-select uppercase" onSelectValue={() => { }} />
      <Abs_SelectFields data={["Snacks", "Soft Drinks"]} classProperties="form-select" onSelectValue={() => { }} />
      <Abs_SelectFields data={["Cookies", "Crackers", "Sports Drinks", "Energy Drinks"]} classProperties="form-select" onSelectValue={() => { }} />
      <div className="inline-flex gap-4">
        <button type="submit" className="submit text-sky-600 rounded border md:border-2 border-sky-600 md:rounded-md">Sort & Filters</button>
        <button type="reset" className="reset text-sky-600">Reset</button>
      </div>
    </form>
  );
};

export default Form;
