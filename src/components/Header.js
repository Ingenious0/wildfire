import { Icon } from '@iconify/react';
import organisationIcon from '@iconify/icons-mdi/group';
import { useState } from 'react';
const Header = () => {
  const [filter, setfilter] = useState('filter');
  const [value1, setvalue1] = useState('by team');
  const [value2, setvalue2] = useState('by calamities');
  const [value3, setvalue3] = useState('by govt teams');
  const [value4, setvalue4] = useState('by NGOs');
  return (
    <header className="header">
      <select
        style={{
          marginLeft: '10px',
          padding: '10px 10px 10px 10px',
          backgroundColor: '#dadada',
          color: 'crimson',
          borderRadius: '5px',
          fontSize: '14px',
        }}
        name="filter by name"
        value={filter}
        id="filter"
      >
        filter by name
        <option value={value1}>by team</option>
        <option value={value2}>by calamities</option>
        <option value={value3}>by govt teams</option>
        <option value={value4}>by NGOs</option>
      </select>
      <div className="side">
        <a>HOME</a>
        <a>Database Update</a>
        <a>Team Details</a>
        <a>Login</a>
      </div>
    </header>
  );
};

export default Header;
