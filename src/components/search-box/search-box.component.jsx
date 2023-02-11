import './search-box.styles.css';

const Searchbox = ( {className, placeholder, onChangeHandler} ) => (
  <input 
    className= {`search-box ${className}`}
    type='search' 
    placeholder= { placeholder}
    onChange={onChangeHandler}
  />
)

export default Searchbox;