import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../utils";
import { useRecoilState } from "recoil";
import { userState } from "../recoil";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const data = await axios({
              url: `${BACKEND_URL}/user/login`,
              method: "POST",
              data: {
                email,
                password,
              },
            });

            setEmail("");
            setPassword("");
            setUser(data.data);
            navigate("/");
            alert("로그인 성공!");
          } catch (e) {
            alert("로그인 실패");
          }
        }}
        className="flex flex-col w-60 items-start p-4"
      >
        <div>로그인</div>

        <div className="mt-4">email을 입력해주세요</div>
        <input
          type="email"
          className="w-full border-2 border-black"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <div className="mt-4">비밀번호를 입력해주세요</div>
        <input
          type="password"
          className="w-full border-2 border-black"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-sm ml-auto mt-4">
          전송
        </button>
      </form>
    </div>
  );
};

export default Login;
