import Link from "next/link";

const MenuItem = ({ title, path, Icon }) => {
  return (
    <div>
      <Link href={path} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="sm:hidden text-2xl mx-4" />
        <p className="hidden sm:inline uppercase my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
