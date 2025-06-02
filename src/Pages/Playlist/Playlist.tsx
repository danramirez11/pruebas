import { BellIcon, ChevronDownIcon, SettingsIcon } from "lucide-react";
import {
  Avatar
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSidebarSection } from "./sections/NavigationSidebarSection/NavigationSidebarSection";
import type { JSX } from "react/jsx-runtime";

export const PlaylistPage = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-[#0f0f0f] overflow-hidden">
      {/* Navigation Sidebar */}
      <aside className="w-[21%] h-[85%]">
        <NavigationSidebarSection />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between px-[35px] py-[25px] h-[7%]">
          <div className="flex flex-col items-start gap-1.5">
            <span className="opacity-50 font-semibold text-white text-base tracking-[0]">
              Home
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="p-0 h-[35px] w-[35px]"
              >
                <SettingsIcon className="h-5 w-5 text-white" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="p-0 h-[35px] w-[35px]"
              >
                <BellIcon className="h-5 w-5 text-white" />
              </Button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="p-0 h-[35px] flex items-center gap-1"
                >
                  <Avatar className="h-[35px] w-[35px]">
                    <AvatarImage
                      src="https://c.animaapp.com/mbe5abedTZBB62/img/user-profile.svg"
                      alt="User profile"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <ChevronDownIcon className="h-4 w-4 text-white" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {/* Dropdown menu items would go here */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content Section */}
        <div className="flex-1 h-[93%]">
          <MainContentSection />
        </div>
      </main>
    </div>
  );
};
