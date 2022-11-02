import './Search.css'
import SearchButton from '../buttons/Searchbutton';

const SearchBar = (props) => {
    return (
        <form action="#" className='search'>
            <input type="text" placeholder={props.children} name='search'/>
            <SearchButton></SearchButton>
        </form>       
    )
};

export default SearchBar;
