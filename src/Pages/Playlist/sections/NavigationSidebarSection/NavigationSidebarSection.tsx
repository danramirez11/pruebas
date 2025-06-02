import {
  HomeIcon,
  LayoutGridIcon,
  ListMusicIcon,
  PlusIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const NavigationSidebarSection = (): JSX.Element => {
  // Navigation menu items data
  const mainNavItems = [
    { icon: <HomeIcon className="w-5 h-5" />, label: "Home" },
    { icon: <UserIcon className="w-5 h-5" />, label: "Profile" },
    { icon: <LayoutGridIcon className="w-5 h-5" />, label: "My Jams" },
    { icon: <ListMusicIcon className="w-5 h-5" />, label: "My Playlists" },
  ];

  return (
    <nav className="flex flex-col h-full w-[273px] items-start gap-[42px] px-[30px] py-[26px] bg-[#0f0f0f] border-r-[0.5px] border-[#9e98af80]">
      {/* Logo */}
      <img
        className="w-[65px] h-[52.1px]"
        alt="Mask group"
        src="https://c.animaapp.com/mbe5abedTZBB62/img/mask-group.png"
      />

      {/* Navigation menu */}
      <div className="flex flex-col w-full items-start gap-10 flex-1">
        <div className="flex flex-col items-start gap-2.5 w-full">
          {mainNavItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="flex h-[41px] w-full items-center justify-start gap-[11px] p-2.5 rounded-[5px] text-[#9e98af]"
            >
              {item.icon}
              <span className="font-medium text-base tracking-[-0.16px]">
                {item.label}
              </span>
            </Button>
          ))}
        </div>

        <Separator className="bg-[#9e98af] opacity-20 w-full" />

        <Button
          variant="ghost"
          className="flex h-[41px] w-full items-center justify-start gap-[11px] p-2.5 rounded-[5px] text-[#9e98af]"
        >
          <UsersIcon className="w-5 h-5" />
          <span className="font-medium text-base tracking-[-0.16px]">
            Groups
          </span>
        </Button>
      </div>

      {/* Create Group button */}
      <Button className="flex items-center gap-[11px] p-2.5 bg-[#ff08ce] rounded-[5px] text-white hover:bg-[#ff08ce]/90">
        <PlusIcon className="w-5 h-5" />
        <span className="font-semibold text-sm">Crear Grupo</span>
      </Button>
    </nav>
  );
};
