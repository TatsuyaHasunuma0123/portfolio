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
      {isSmallScreen && (
        <div className="flex justify-center w-full">
          <div
            className="w-5/6  mt-4 flex justify-center items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-8 h-8 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <div className="font-medium  text-xl">Sorry!</div>
              <div className="text-xl">
                小さい画面用のポートフォリオは作成中です...
                ノートPCなどの大きな画面でご覧ください!!
              </div>
            </div>
          </div>
        </div>
      )}
      {isMediumScreen && (
        <div className="flex justify-center w-full">
          <div
            className="w-5/6  mt-4 flex justify-center items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-8 h-8 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <div className="font-medium  text-xl">Sorry!</div>
              <div className="text-xl">
                小さい画面用のポートフォリオは作成中です...
                ノートPCなどの大きな画面でご覧ください!!
              </div>
            </div>
          </div>
        </div>
      )}
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
