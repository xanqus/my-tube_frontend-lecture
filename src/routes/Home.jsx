import React from "react";
import Layout from "../layouts/Layout";
import { userState } from "../recoil";
import { useRecoilState } from "recoil";

const Home = () => {
  const [user, setUser] = useRecoilState(userState);
  return (
    <Layout>
      <div>Home {user && `안녕하세요 ${user.username}님`}</div>
    </Layout>
  );
};

export default Home;
