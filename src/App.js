import { useState } from 'react';
import SearchBar from './Components/SearchBar'
import ListItem from './Components/ListItem'
import Location from './Components/Location'

const baseUrl = "https://global.atdtravel.com/api/products";

function App() {
  const [searchItems, setSearchItems] = useState([]);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('en');
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await fetch(`${baseUrl}?geo=${location}&title=${title}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('There is an error.')
          }
          return res.json()
        })
      setSearchItems(data);
      setError(undefined);
    } catch (err) {
      setError('We are searching for your holiday');
      setSearchItems([]);
    }
  }

  const handleSearch = async () => {
    await fetchData();
  }

  const handleLocationChange = async (location) => {
    setLocation(location);
    await fetchData();

  }

  const handleTitleChange = async (text) => {
    setTitle(text);
    await fetchData();
  }

  if (error) {
    <div>
      <h1>ERROR</h1>
      <p>{error}</p>
    </div>
  }

  return (
    <div className='container'>
      <h1>Product Search</h1>
      {error ? <div className="alert alert-danger">{error}</div> : null}
      <Location value={location} onChange={handleLocationChange} />
      <SearchBar onSearch={handleSearch} title={title} onChange={handleTitleChange} />
      <table className="table table-stripped table-bordered">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {searchItems.map(item => (
            <ListItem key={item.id} imageUrl={item.img_sml} title={item.title} destination={item.dest} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;