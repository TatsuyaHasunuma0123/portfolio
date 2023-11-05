import { useEffect, useState } from "react";
import Profile from "./component/Profile";
import Title from "./component/Title";
import SelectTitle from "./component/SelectTitle";
import DisplayContent from "./component/DisplayContent";
import { useMediaQuery } from "react-responsive";

function App() {
  //ブレイクポイントを定義
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 641px) and (max-width: 1024px)",
  });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1025px)" });

  const [myAge, setMyAge] = useState(0);
  const [title, setTitle] = useState("Android");

  const titleContents = ["- Android", "- web"];

  useEffect(() => {
    const birthDate = new Date("2001-01-23");

    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    setMyAge(age);
  }, []);

  return (
    <>
      {isSmallScreen && <div className="bg-white">小画面の表示</div>}
      {isMediumScreen && <div className="bg-white">中画面の表示</div>}
      {isLargeScreen && (
        <div className="h-screen grid grid-rows-4 grid-cols-4 gap-1 bg-[#07182e] place-items-center">
          <div className="grid text-white col-span-1 row-span-4 place-items-center h-full w-full p-5">
            <Profile age={myAge} />
          </div>
          <div className="text-white  col-span-1">
            <Title title={title} />
          </div>
          <div className="text-white  col-span-2 w-5/6">
            <SelectTitle titleContents={titleContents} setTitle={setTitle} />
          </div>
          <div className="text-white col-span-3 row-span-3 w-full h-full">
            <DisplayContent title={title} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
