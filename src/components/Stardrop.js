import React, { useState } from "react";
import { Button, Dropdown, Menu } from "antd";
import styled from "@emotion/styled";
import { BtDown } from "../styles/writelog";
import Star from "./Star";
const items = [
  {
    key: "1",
    label: <Star num={1} />,
  },
  {
    key: "2",
    label: <Star num={2} />,
  },
  {
    key: "3",
    label: <Star num={3} />,
  },
  {
    key: "4",
    label: <Star num={4} />,
  },
  {
    key: "5",
    label: <Star num={5} />,
  },
  {
    key: "6",
    label: <Star num={6} />,
  },
  {
    key: "7",
    label: <Star num={7} />,
  },
  {
    key: "8",
    label: <Star num={8} />,
  },
  {
    key: "9",
    label: <Star num={9} />,
  },
  {
    key: "10",
    label: <Star num={10} />,
  },
];

const StyledMenu = styled(Menu)`
  /* 메뉴에 추가적인 스타일링을 할 수 있습니다. */
`;

const Stardrop = ({ onChange }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenuClick = value => {
    setSelectedItem(value.key);
    onChange(value);
  };

  const menu = (
    <StyledMenu onClick={handleMenuClick}>
      {items.map(item => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </StyledMenu>
  );

  return (
    <BtDown>
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        placement="bottomLeft"
        arrow
        className="custom-dropdown"
      >
        <Button>
          {selectedItem
            ? items.find(item => item.key === selectedItem)?.label
            : "평점"}
        </Button>
      </Dropdown>
    </BtDown>
  );
};
export default Stardrop;
