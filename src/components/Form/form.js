import "./form.css";

const Form = () => {
  return (
    <form className="global-form flex flex-wrap px-5 py-2 border-b text-xs gap-4">
      <select class="form-select uppercase">
        <option value="1" selected>
          NORCAL
        </option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <select class="form-select">
        <option value="1" selected>
          Beverages
        </option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <select class="form-select">
        <option value="1" selected>
          Cofee
        </option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div className="inline-flex gap-4">
        <button
          type="submit"
          className="submit text-sky-600 rounded border md:border-2 border-sky-600 md:rounded-md"
        >
          Sort & Filters
        </button>
        <button type="reset" className="reset text-sky-600">
          Reset
        </button>
      </div>
    </form>
  );
};

export default Form;
