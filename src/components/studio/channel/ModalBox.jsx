import React from "react";
import { useRecoilState } from "recoil";
import { isEditingState, modalActiveState } from "../../../recoil";
import VideoEdit from "./VideoEdit";
import VideoInput from "./VideoInput";

const ModalBox = ({ setVideos, selectedVideo }) => {
  const [active, setActive] = useRecoilState(modalActiveState);
  const [isEditing, setIsEditing] = useRecoilState(isEditingState);
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
        {isEditing ? (
          <VideoEdit selectedVideo={selectedVideo} setVideos={setVideos} />
        ) : (
          <VideoInput setVideos={setVideos} />
        )}
      </div>
    </>
  );
};

export default ModalBox;
