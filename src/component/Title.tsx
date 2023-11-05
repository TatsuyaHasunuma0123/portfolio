type Props = {
  title: string;
};

const Title = (props: Props) => {
  return <div className="text-7xl">{props.title}</div>;
};

export default Title;
