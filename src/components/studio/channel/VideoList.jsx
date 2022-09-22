import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos }) => {
  console.log(videos);
  return (
    <div className="overflow-x">
      <table className="table w-full z-0">
        <thead>
          <tr>
            <th className="bg-white border-y box-border">
              <input
                type="checkbox"
                checked={false}
                className="rounded-none checkbox checkbox-sm focus:ring-0"
                onChange={() => {}}
              />
            </th>
            <th className="bg-white border-y box-border">동영상</th>
            <th className="bg-white border-y box-border">공개상태</th>
            <th className="bg-white border-y box-border">제한사항</th>
            <th className="bg-white border-y box-border">날짜</th>
            <th className="bg-white border-y box-border">조회수</th>
            <th className="bg-white border-y box-border">댓글</th>
            <th className="bg-white border-y box-border">좋아요</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video, index) => (
            <VideoListItem video={video} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideoList;
