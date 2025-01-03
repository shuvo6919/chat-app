import { IoSearch } from "react-icons/io5";


const SearchInput = () => {
    return (
        <form className="flex items-center gap-2 ">
            <input type="text" placeholder="search..." className="input input-bordered rounded-full " />
            <button type="submit" className="btn btn-circle bg-sky-500 text-white"><IoSearch /></button>
        </form>
    );
};

export default SearchInput;