interface Props {
  title: string;
  icon: JSX.Element;
}

function HeaderButton({ title, icon }: Props) {
  return (
    <a className="hidden sm:hidden md:hidden lg:flex items-center px-4 cursor-pointer text-[#f9f9f9] font-mono font-semibold text-sm space-x-2.5 group">
      <div>{icon}</div>
      <span className="span">{title}</span>
    </a>
  );
}

export default HeaderButton;
