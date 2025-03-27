import { LucideIcon } from "lucide-react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  Icon: LucideIcon;
  text: string;
  textColor?: string;
  navLink: string;
}

const SidebarItem: FC<SidebarItemProps> = ({
  Icon,
  text,
  textColor = "text-gray-600",
  navLink,
}) => {
  return (
    <NavLink to={navLink} className="w-full flex gap-2 items-center">
      {({ isActive }) => (
        <>
          <Icon
            className={`w-5 h-5 ${isActive ? "text-pink-500" : textColor}`}
          />
          <p
            className={`${
              isActive ? "text-pink-500" : textColor
            } font-roboto font-semibold text-base`}
          >
            {text}
          </p>
        </>
      )}
    </NavLink>
  );
};

export default SidebarItem;
