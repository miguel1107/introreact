function SearchBar({ search, doSearch }) {
  return (
    <div>
      <input
        value={search}
        onChange={ (ev)=> {
            doSearch(ev.target.value);
        } }
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      ></input>
    </div>
  );
}

export default SearchBar;
