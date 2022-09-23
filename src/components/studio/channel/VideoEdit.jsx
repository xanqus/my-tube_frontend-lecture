import React from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isEditingState, modalActiveState } from "../../../recoil";

const VideoEdit = ({ selectedVideo }) => {
  const setActive = useSetRecoilState(modalActiveState);
  const setIsEditing = useSetRecoilState(isEditingState);
  return (
    <div className="flex flex-col modal-box relative max-w-full w-240 h-192 rounded-md p-0">
      <div className="flex border-b h-14">
        <div className="flex justify-center h-14 items-center ml-5 text-lg">
          {selectedVideo.title}
        </div>
        <div className="ml-auto w-14">
          <label
            htmlFor="my-modal-4"
            className="flex justify-center items-center h-full cursor-pointer text-gray-700 font-bold"
            onClick={() => {
              setActive(false);
              setIsEditing(false);
            }}
          >
            ✕
          </label>
        </div>
      </div>
      <div className="flex justify-center items-end h-96 h-auto">
        <div className="flex h-full pt-4">
          <div className=" w-3/5 pl-12">
            <div className="text-2xl font-bold h-12">세부정보</div>
            <div className="border border-gray-300 focus-within:border-blue-500 rounded">
              <div className="text-sm pl-2 pt-2">제목(필수항목)</div>
              <input
                type="text"
                className="w-full p-4 pt-3 focus:ring-0 border-0 outline-0"
                value={selectedVideo?.title}
                onChange={() => {}}
              />
            </div>
            <div className="mt-6 border border-gray-300 focus-within:border-blue-500 rounded">
              <div className="text-sm pl-2 pt-2">설명</div>
              <textarea
                type="text"
                className="w-full p-4 pt-3 focus:ring-0 resize-none outline-0"
                placeholder="시청자에게 동영상에 대해 이야기하기"
                value={selectedVideo?.description || ""}
                onChange={() => {}}
              />
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <div>미리보기 이미지</div>
              <div className="text-sm text-gray-400">
                동영상의 내용을 알려주는 사진을 선택하거나 업로드하세요.
                시청자의 시선을 사로잡을만한 이미지를 사용해 보세요.
              </div>
              <input type="file" />
            </div>
            <div className="text-2xl font-bold h-12 mt-6">공개 상태</div>
            <div className="flex flex-col">
              <div className="border border-gray-300 focus-within:border-blue-500 rounded px-6 py-3 mb-3">
                저장 또는 게시
                <div className="flex ml-6 mt-4">
                  <input
                    type="radio"
                    name="radio-6"
                    className="radio checked:bg-gray-500 border-gray-500 "
                    checked
                    onClick={() => {}}
                    onChange={() => {}}
                  />
                  <div className="ml-3">비공개</div>
                </div>
                <div className="flex ml-6 mt-4">
                  <input
                    type="radio"
                    name="radio-6"
                    className="radio checked:bg-gray-500 border-gray-500"
                    checked
                    onClick={() => {}}
                    onChange={() => {}}
                  />
                  <div className="ml-3">공개</div>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 focus-within:border-blue-500 rounded p-3">
              예약
            </div>
            <div className="bg-gray-50 h-auto mt-4 px-6 pt-3">
              <div>게시 전에 다음 사항을 확인하세요.</div>
              <div className="text-sm my-3">
                이 동영상에 어린이가 등장하나요?
              </div>
              <div className="my-3 text-gray-500 text-sm">
                위해, 착취, 괴롭힘, 노동법 위반으로부터 미성년자를 보호하는
                YouTube 정책을 준수해야 합니다.
              </div>
              <div>콘텐츠 전반에 대한 가이드라인을 찾으시나요?</div>
              <div className="my-3 text-gray-500 text-sm pb-6">
                MyTube 커뮤니티 가이드를 활용하면 문제를 예방하고 YouTube를
                안전하고 활발한 커뮤니티로 유지할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end h-full w-2/5 pr-12">
            <div className="w-72 h-40 mt-12 ">
              <video
                className="w-full h-full rounded-t"
                poster={selectedVideo.thumbnailUrl}
                controls
              >
                <source src={selectedVideo.videoUrl} />
              </video>
            </div>
            <div className="w-72 border border-gray-400 h-32  rounded-b text-sm p-2">
              <div>동영상 링크</div>
              <div className="text-blue-500">https://~~</div>
              <div className="mt-3">파일 이름</div>
              <div>{selectedVideo.filename}</div>
            </div>
            <div className="btn btn-sm bg-blue-500 text-white border-none hover:bg-blue-500 rounded-none mt-auto mb-4">
              저장
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEdit;
