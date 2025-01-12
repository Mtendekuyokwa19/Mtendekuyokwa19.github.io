import { IoSearch } from "react-icons/io5"

export default function Home() {
  return (
    <div>
      <Search />



    </div>
  )
}
function Search() {




  return (
    <div>

      <input placeholder="Search article..." type="search" />
      <button>
        <IoSearch />
      </button>

    </div>


  )
}
