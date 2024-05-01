import { ReactNode } from "react";

interface HeaderImage {
  src: string;
  alt: string;
}

interface HeaderProps {
  image: HeaderImage;
  children: ReactNode;
}

export default function Header({ image, children }: HeaderProps) {
  return (
    <div>
      <header>
        <img src={image.src} alt={image.alt}></img>
        {children}
      </header>
    </div>
  );
}
