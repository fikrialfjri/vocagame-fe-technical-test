import Link from "next/link";

const TextLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      type="button"
      className="inline-block no-underline items-center gap-x-2 text-sm font-semibold rounded-lg text-primary-400 hover:brightness-90 disabled:opacity-50 disabled:pointer-events-none dark:text-primary-400"
    >
      {children}
    </Link>
  );
};

export default TextLink;
