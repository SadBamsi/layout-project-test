import { FC } from "react";

export const Icon: FC<{ className?: string; icon: string }> = ({
  className,
  icon,
}) => {
  const href =
    process.env.NODE_ENV === "production"
      ? `/layout-project-test/icons/icons-sprite.svg#${icon}`
      : `/icons/icons-sprite.svg#${icon}`;
  return (
    <svg className={className}>
      <use xlinkHref={href} />
    </svg>
  );
};
