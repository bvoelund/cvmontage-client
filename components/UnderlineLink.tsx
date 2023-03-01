import Link from "next/link";
import classNames from "classnames";

type Props = {
  href: string;
  title: string;
  color: string;
};

export default function UnderlineLink({ href, title, color }: Props) {
  return (
    <Link
      href={href}
      className={classNames(color, "group transition duration-300")}
    >
      {title}
      <span
        className={classNames(
          color,
          "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"
        )}
      ></span>
    </Link>
  );
}
