import React, { useState } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import styled from '@emotion/styled';
import { BtDown } from '../styles/writelog';
const items = [
  {
    key: '1',
    label: (
        <>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star.svg' alt=""/>
        </>
    ),
  },
  {
    key: '2',
    label: (
        <>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star_half.svg' alt=""/>
        </>
    ),
  },
  {
    key: '3',
    label: (
        <>
            <img src='/images/icon_star.svg' alt=""/>
            <img src='/images/icon_star.svg' alt=""/>
            <img src='/images/icon_star.svg' alt=""/>
            <img src='/images/icon_star.svg' alt=""/>
        </>
    ),
  },
  {
    key: '4',
    label: (
        <>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star_half.svg' alt=""/>
        </>
    ),
  },
  {
    key: '5',
    label: (
        <>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star.svg' alt=""/>
        </>
    ),
  },
  {
    key: '6',
    label: (
        <>
         <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star_half.svg' alt=""/>
        </>
    ),
  },
  {
    key: '7',
    label: (
        <>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star.svg' alt=""/>
        </>
    ),
  },
  {
    key: '8',
    label: (
        <>
        <img src='/images/icon_star.svg' alt=""/>
        <img src='/images/icon_star_half.svg' alt=""/>
        </>
    ),
  },
  {
    key: '9',
    label: (
        <>
        <img src='/images/icon_star.svg' alt=""/>
        </>
    ),
  },
  {
    key: '10',
    label: (
        <>
        <img src='/images/icon_star_half.svg' alt=""/>
        </>
    ),
  },
];



const StyledMenu = styled(Menu)`

  /* 메뉴에 추가적인 스타일링을 할 수 있습니다. */
`;

const Stardrop = ({onChange}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenuClick = (value) => {
    setSelectedItem(value.key);
    onChange(value);
  };

  const menu = (
    <StyledMenu onClick={handleMenuClick}>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </StyledMenu>
  );

  return (
    <BtDown>
      <Dropdown
        overlay={menu}
        trigger={['click']}
        placement="bottomLeft"
        arrow
        className='custom-dropdown'
      >
        <Button>{selectedItem ? items.find((item) => item.key === selectedItem)?.label : '평점'}</Button>
      </Dropdown>
    </BtDown>
  );
};
export default Stardrop;