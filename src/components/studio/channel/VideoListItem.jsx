import React from "react";

const VideoListItem = () => {
  return (
    <tr>
      <th className="border-y">
        <input
          type="checkbox"
          checked="checked"
          className="rounded-none checkbox checkbox-sm focus:ring-0"
          onChange={() => {}}
        />
      </th>
      <td className="border-y">
        <div className="flex">
          <div className="w-36">
            <img
              src="https://blog.kakaocdn.net/dn/m07x9/btqSLGu0ccF/WuCwiJPrNKx9IB3xpER7C1/img.png"
              alt="thumnail"
            />
          </div>
          <div className="flex flex-col ml-6">
            <div className="cursor-pointer hover:underline">코딩 잘하는법</div>
            <div>설명추가</div>
          </div>
        </div>
      </td>
      <td className="border-y">초안</td>
      <td className="border-y">없음</td>
      <td className="border-y">
        <div className="flex flex-col">
          <div>2022-09-15</div>
          <div>게시날짜</div>
        </div>
      </td>
      <td className="border-y">0</td>
      <td className="border-y">0</td>
      <td className="border-y">0</td>
    </tr>
  );
};

export default VideoListItem;
