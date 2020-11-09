import React from 'react';
import { MenuStyle, Wrapper } from './Navbar.styles';

const Navbar = () => {
  const links = [
    {
      name: 'Kanał Youtube',
      url: '#',
    },
    {
      name: 'O mnie',
      url: '#',
    },
    {
      name: 'Inne Kanały',
      url: '#',
    },
  ];

  return (
    <Wrapper>
      <h1 className='logo' style={{ zIndex: '10' }}>
        Martyna TV
      </h1>
      <MenuStyle>
        {links.map((link) => (
          <div style={{ zIndex: 20 }} key={link.name}>
            <a href={link.url}>{link.name}</a>
          </div>
        ))}
      </MenuStyle>
    </Wrapper>
  );
};

export default Navbar;
