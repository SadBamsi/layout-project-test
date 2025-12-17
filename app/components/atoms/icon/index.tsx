import { FC } from "react";

export const Icon: FC<{ className?: string; icon: string }> = ({
  className,
  icon,
}) => {
  return (
    <svg className={className}>
      <use xlinkHref={`/layout-project-test/icons/icons-sprite.svg#${icon}`} />
    </svg>
  );
};
