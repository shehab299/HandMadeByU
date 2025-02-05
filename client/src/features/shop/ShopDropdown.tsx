import React, { useState } from "react";
import ShopList from "./ShopList";
import Dropdown from "@components/Dropdown";
import { useNavigate } from "react-router";
import { Store } from "lucide-react";
import { NavLink } from "@components/NavLink";

function ShopDropdown() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <NavLink to="#" icon={<Store size={24} />} onClick={toggleDropdown} />

      <Dropdown
        $isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
        showDivider
        showButton
        buttonText="Create New Shop"
        buttonTo="/create-shop"
        buttonOnClick={() => navigate("/create-shop")}
      >
        <ShopList />
      </Dropdown>
    </div>
  );
}

export default ShopDropdown;
