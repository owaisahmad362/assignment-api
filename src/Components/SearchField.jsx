import React , {useState} from 'react'

const SearchField = () => {
    const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
        <div className="container">
        <div className="my-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search by country name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        </div>
        </div> 
    </>
  )
}

export default SearchField
