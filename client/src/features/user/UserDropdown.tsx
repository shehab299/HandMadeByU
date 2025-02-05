import React, { useState } from "react";
import Dropdown from "@components/Dropdown";
import { NavLink } from "@components/NavLink";
import { User } from "lucide-react";
import UserInfo from "./UserInfo";
import MenuOption from "./MenuOption";

function UserDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <NavLink to="#" icon={<User size={24} />} onClick={toggleDropdown} />

      <Dropdown
        $isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
      >
        <UserInfo />
        <MenuOption />
      </Dropdown>
    </div>
  );
}

export default UserDropdown;
