import React from "react";
import { useRecoilState } from "recoil";
import ModalBox from "../../components/studio/channel/ModalBox";
import ModalButton from "../../components/studio/channel/ModalButton";
import VideoList from "../../components/studio/channel/VideoList";
import Layout from "../../layouts/Layout";
import { modalActiveState } from "../../recoil";

const Channel = () => {
  const [active, setActive] = useRecoilState(modalActiveState);
  return (
    <Layout>
      <div className="flex pointer-events-auto">
        <div className="flex w-60 flex-shrink-0 border border-r-0 border-t-0 z-0">
          side menu
        </div>
        <div className="flex flex-col flex-grow z-0 border border-b-0">
          <ModalButton>
            <div onClick={() => {}}>채널 콘텐츠</div>
            <div
              onClick={() => {
                setActive(true);
              }}
              className="flex justify-center items-center border w-auto ml-auto mr-4 text-md px-3 cursor-pointer"
            >
              <i className="fi fi-rs-video-plus mt-1 mr-2 text-red-500"></i>
              <div className="text-base">만들기</div>
            </div>
          </ModalButton>
          <VideoList />
        </div>
      </div>
      <ModalBox />
    </Layout>
  );
};

export default Channel;
