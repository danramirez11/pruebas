import * as React from "react";
import './scroll-area.css';

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'vertical' | 'horizontal';
}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className = '', children, ...props }, ref) => (
    <div ref={ref} className={`scroll-area ${className}`} {...props}>
      <div className="scroll-area-viewport">
        {children}
      </div>
      <div className="scroll-area-scrollbar" />
    </div>
  )
);

ScrollArea.displayName = "ScrollArea";

export { ScrollArea };