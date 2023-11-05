type Props = {
  titleContents: string[];
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

const SelectTitle = (props: Props) => {
  return (
    <>
      <div className="text-slate-100 p-10 shadow-[50px_50px_78px_0_rgb(3,10,18),-50px_-50px_78px_0_rgb(11,38,74)] flex rounded-2xl justify-between">
        <div className="grid grid-cols-2 gap-4 w-screen place-items-center">
          {props.titleContents.map((titleContent) => {
            return (
              <button
                className="text-2xl duration-200 hover:text-gray-500"
                onClick={() => props.setTitle(titleContent.substring(2))}
              >
                {titleContent}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectTitle;
