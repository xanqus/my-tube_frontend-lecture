import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import ModalBox from "../../components/studio/channel/ModalBox";
import ModalButton from "../../components/studio/channel/ModalButton";
import VideoList from "../../components/studio/channel/VideoList";
import Layout from "../../layouts/Layout";
import { modalActiveState, userState } from "../../recoil";
import { BACKEND_URL } from "../../utils/env";

const Channel = () => {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useRecoilState(modalActiveState);
  const [videos, setVideos] = useState(null);
  const user = useRecoilValue(userState);
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/video?userId=${user.id}`,
      });
      setLoading(false);
      setVideos(data.data);
    };
    getData();
  }, []);

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
          {loading ? <div>loading...</div> : <VideoList videos={videos} />}
        </div>
      </div>
      <ModalBox setVideos={setVideos} />
    </Layout>
  );
};

export default Channel;
