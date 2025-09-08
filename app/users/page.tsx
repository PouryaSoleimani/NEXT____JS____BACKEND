"use client";
import Axios from "@/lib/axios";
import React from "react";
import useSWR from "swr";
type SingleUserType = { id: number; firstName: string; lastName: string };
const usersFetcher = () => Axios.get("/users").then((res) => res.data);

const UsersPage = () => {
  const { data, isLoading, error } = useSWR("USERS", usersFetcher);

  if (isLoading || error) {
    return <div>LOADING</div>;
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="bg-neutral-900 p-4 rounded-lg flex flex-col gap-3 font-bold">
        {data?.data?.map((item: SingleUserType) => (
          <div key={item.id} className="text-white">
            {item.id}. {item.firstName} {item.lastName} شسیشسیشسی
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
