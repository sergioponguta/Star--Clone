interface Props {
  title: string;
  icon: JSX.Element;
}

function HeaderButton({ title, icon }: Props) {
  return (
    <div className="flex">
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
}

export default HeaderButton;
