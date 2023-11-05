import "./DisplayContent.css";

type Props = {
  title: string;
};

const DisplayContent = (props: Props) => {
  return (
    <>
      {props.title == "Android" ? (
        <div className="h-full grid grid-cols-3 place-items-center gap-8">
          <div className="h-full w-full grid place-items-center mb-20">
            <div className="grid place-items-center w-5/6 h-5/6 box">
              <span></span>
              <div className="content">
                <a
                  href="https://github.com/TatsuyaHasunuma0123/canvas"
                  target="_blank"
                ></a>
                <div className="content_card">
                  <div className="content_card__imgframe">
                    <img
                      src="image/canvas.png"
                      className="w-full h-full object-fill rounded-lg"
                    />
                  </div>
                  <div className="content_card__textbox">
                    <div className="content_card__titletext p-1">
                      <h2>
                        <text className="text-3xl text-[#00B7FF]">C</text>
                        <text className="text-2xl">anvas</text>
                      </h2>
                    </div>
                    <div className="content_card__overviewtext">
                      <div>Drawing app with save and load.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full grid place-items-center mb-20">
            <div className="grid place-items-center w-5/6 h-5/6 box">
              <span></span>
              <div className="content">
                <a
                  href="https://github.com/TatsuyaHasunuma0123/MusicPlayer"
                  target="_blank"
                ></a>
                <div className="content_card">
                  <div className="content_card__imgframe">
                    <img
                      src="image/music.png"
                      className="w-full h-full object-fill rounded-lg"
                    />
                  </div>
                  <div className="content_card__textbox">
                    <div className="content_card__titletext p-1">
                      <h2>
                        <text className="text-3xl text-[#8074FF]">M</text>
                        <text className="text-2xl">usicplayer</text>
                      </h2>
                    </div>
                    <div className="content_card__overviewtext">
                      <div>Music app with various features.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full grid place-items-center mb-20">
            <div className="grid place-items-center w-5/6 h-5/6 box">
              <span></span>
              <div className="content">
                <a
                  href="https://github.com/TatsuyaHasunuma0123/TwitterCalendar"
                  target="_blank"
                ></a>
                <div className="content_card">
                  <div className="content_card__imgframe">
                    <img
                      src="image/twitter.png"
                      className="w-full h-full object-fill rounded-lg"
                    />
                  </div>
                  <div className="content_card__textbox">
                    <div className="content_card__titletext p-1">
                      <h2>
                        <text className="text-3xl text-[#FF30FF]">T</text>
                        <text className="text-2xl">witterCalendar</text>
                      </h2>
                    </div>
                    <div className="content_card__overviewtext">
                      <div>App with Twitter API and calendar.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full grid grid-cols-2 place-items-center gap-8">
          <div className="h-full w-full grid place-items-center mb-20">
            <div className="grid place-items-center w-5/6 h-5/6 box">
              <span></span>
              <div className="content">
                <a
                  href="https://github.com/TatsuyaHasunuma0123/canvas"
                  target="_blank"
                ></a>
                <div className="content_card">
                  <div className="content_card__imgframe">
                    <img
                      src="image/Discussion.png"
                      className="w-full h-full object-fill rounded-lg"
                    />
                  </div>
                  <div className="content_card__textbox">
                    <div className="content_card__titletext p-1">
                      <h2>
                        <text className="text-3xl text-[#00B7FF]">D</text>
                        <text className="text-2xl">iscussion</text>
                      </h2>
                    </div>
                    <div className="content_card__overviewtext">
                      <div>Web app for chatting in threads.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full grid place-items-center mb-20">
            <div className="grid place-items-center w-5/6 h-5/6 box">
              <span></span>
              <div className="content">
                <a
                  href="https://github.com/TatsuyaHasunuma0123/canvas"
                  target="_blank"
                ></a>
                <div className="content_card">
                  <div className="content_card__imgframe">
                    <img
                      src="image/resas.png"
                      className="w-full h-full object-fill rounded-lg"
                    />
                  </div>
                  <div className="content_card__textbox">
                    <div className="content_card__titletext">
                      <h2>
                        <text className="text-3xl text-[#FF30FF]">P</text>
                        <text className="text-2xl">opulation Graph</text>
                      </h2>
                    </div>
                    <div className="content_card__overviewtext">
                      <div>Make a graph of population changes.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayContent;
