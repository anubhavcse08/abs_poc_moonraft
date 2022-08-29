import "./form.css";

const Form = () => {
  return (
    <form className="flex px-3 py-2 border-b text-xs gap-4">
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
      <button
        type="submit"
        className="submit text-sky-600 border-2 border-sky-600"
      >
        Sort & Filters
      </button>
      <button type="reset" className="reset text-sky-600">
        Reset
      </button>
    </form>
  );
};

export default Form;
