import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import * as React from "react";
import './dropdown-menu.css';

interface DropdownMenuProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
}

const DropdownMenu = ({ children, trigger }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown-menu" ref={menuRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="dropdown-menu-trigger">
        {trigger}
      </div>
      {isOpen && (
        <div className="dropdown-menu-content">
          {children}
        </div>
      )}
    </div>
  );
};

const DropdownMenuItem = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`dropdown-menu-item ${className}`} {...props} />
);

const DropdownMenuSeparator = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`dropdown-menu-separator ${className}`} {...props} />
);

export {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  CheckIcon,
  ChevronRightIcon,
  CircleIcon
};