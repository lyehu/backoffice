const path = "/images/icons";

interface IconProps {
  src: Src;
  alt: string;
}

type Src = typeof Src[keyof typeof Src];
const Src = {
  cross: `${path}/cross.svg`,
  smile: `${path}/smile.svg`,
} as const;

export const Icon = ({ src, alt }: IconProps) => <img src={src} alt={alt} />;
Icon.Src = Src;
