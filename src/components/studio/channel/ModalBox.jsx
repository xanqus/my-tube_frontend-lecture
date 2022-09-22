import React from "react";
import { useRecoilState } from "recoil";
import { modalActiveState } from "../../../recoil";
import VideoInput from "./VideoInput";

const ModalBox = ({ setVideos }) => {
  const [active, setActive] = useRecoilState(modalActiveState);
  return (
    <>
      <input
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
        checked={active}
        onChange={() => {}}
      />
      <div htmlFor="my-modal-4" className="modal" onClick={() => {}}>
        <VideoInput setVideos={setVideos} />
      </div>
    </>
  );
};

export default ModalBox;
