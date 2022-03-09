import Link from "next/link";
import { ReactNode } from "react";

type CustomLinkProps = {
  href: string;
  target?: "_blank" | "_self";
  className?: string;
  children: ReactNode;
};

export const StyledLink = ({
  href,
  className,
  target,
  children,
}: CustomLinkProps) => (
  <Link href={href}>
    <a className={className} target={target}>
      {children}
    </a>
  </Link>
);
