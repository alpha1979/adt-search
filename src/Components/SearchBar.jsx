const SearchBar = ({ title, onChange, onSearch }) => {

  const handleChange = (e) => {
    onChange(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch();
  }

  return (
    <div>
        <div className="input-group mb-3">
            <label className="col-form-label">Title: </label>
            <input className="form-control" type='text' value={title} onChange={handleChange} />
            <button type="button" onClick={handleSearch} className="btn btn-outline-secondary">
        Search
        </button>
        </div>
        
    </div>
  );
};

export default SearchBar; 
