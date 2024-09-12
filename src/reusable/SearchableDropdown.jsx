// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh Wani
// version : 4.0
// maintainer : Lokesh Wani

import React, { useState } from 'react';
import { Dropdown, FormControl } from 'react-bootstrap';

const SearchableDropdown = ({ options, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState('Select an Option');
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = options.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleSelect = (value) => {
    setSearchTerm('');
    onSelect(value);
    setSelectedOption(value);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {selectedOption}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Dropdown.Divider />
        {filteredOptions.map((option, index) => (
          <Dropdown.Item key={index} onClick={() => handleSelect(option)}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchableDropdown;
