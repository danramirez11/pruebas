import React from 'react';
import './avatar.css';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className = '', src, alt, fallback, ...props }, ref) => (
    <div ref={ref} className={`avatar ${className}`} {...props}>
      {src ? (
        <img src={src} alt={alt} className="avatar-image" />
      ) : (
        <div className="avatar-fallback">{fallback}</div>
      )}
    </div>
  )
);

Avatar.displayName = "Avatar";

export { Avatar };