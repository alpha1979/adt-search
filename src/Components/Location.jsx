const Location = ({ value, onChange }) => {
  const handleLocationChange = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    onChange(selectedValue);
  }

  return (
    <select onChange={handleLocationChange}>
      <option value="en" selected={value === 'en'}>UK</option>
      <option value="en-ir" selected={value === 'en-ir'}>Irleand</option>
      <option value="de-de" selected={value === 'de-de'}>Germany</option>
    </select>
  );
};

export default Location;