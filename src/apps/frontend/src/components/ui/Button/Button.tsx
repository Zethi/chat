import Link from "next/link";
import { type ReactElement } from "react";
import { type StyleSizes } from "../../../lib/types/StylesSizes";

type ButtonColors = "turquese" | "white" | undefined;
type ButtonAnimationTypes = "normal" | undefined;

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  styleClassNames?: string;
  color?: ButtonColors;
  borderRadiusSize?: StyleSizes;
  size?: StyleSizes;
  animationType?: ButtonAnimationTypes;
  prefetch?: boolean;
}

function getBorderRadiusPresets(size: StyleSizes): string {
  switch (size) {
    case "sm":
      return "rounded-[5px]";
    case "md":
      return "rounded-[10px]";
    case "lg":
      return "rounded-[20px]";
    default:
      return "";
  }
}
function getMarginPresets(size: StyleSizes): string {
  switch (size) {
    case "sm":
      return "px-8 py-2";
    case "md":
      return "px-16 py-5";
    case "lg":
      return "px-32 py-4";
    case "full":
      return "w-full py-4";
    default:
      return "";
  }
}

function getColorPresets(color: ButtonColors): string {
  switch (color) {
    case "turquese":
      return "bg-turquese text-white";
    case "white":
      return "bg-white text-black";
    default:
      return "";
  }
}

function getOppositeAnimationColor(color: ButtonColors): string {
  switch (color) {
    case "turquese":
      return "#19544d";
    case "white":
      return "#fffff";
    default:
      return "";
  }
}

function getAnimationPresets(animationType: ButtonAnimationTypes, color: ButtonColors): string {
  switch (animationType) {
    case "normal":
      return `duration-300 hover:bg-[${getOppositeAnimationColor(color)}]`;
    default:
      return "";
  }
}

export function Button({
  children,
  onClick,
  href,
  styleClassNames = "",
  color = "turquese",
  borderRadiusSize,
  size,
  animationType = "normal",
  prefetch = true
}: Props): ReactElement {
  const borderRadius = getBorderRadiusPresets(borderRadiusSize);
  const margins = getMarginPresets(size);
  const colors = getColorPresets(color);
  const animation = getAnimationPresets(animationType, color) + " transition-all";
  const defaultStyles = `${borderRadius} ${margins} ${colors} ${animation}`;

  return href !== undefined ? (
    <Link href={href} prefetch={prefetch} className={`${defaultStyles} ${styleClassNames} text-center`}>
      {children}
    </Link>
  ) : (
    <button className={`${defaultStyles} ${styleClassNames}`} onClick={onClick}>
      {children}
    </button>
  );
}
