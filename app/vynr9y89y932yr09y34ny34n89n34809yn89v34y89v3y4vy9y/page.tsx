"use client";

import { useEffect, useState } from "react";

interface DataInterface {
  id: number;
  username: string;
  password: string;
}

function Home() {
  const [data, setData] = useState<DataInterface[] | null>(null);

  async function handleOnClick() {
    try {
      const response = await fetch("/api", {
        method: "DELETE",
      });
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.response) {
        try {
          const response = await fetch("/api");
          const responseData = await response.json();
          setData(responseData);
        } catch (e) {
          console.log("Something went wrong...");
        }
      }
    } catch (e) {
      console.log("Something went wrong...");
    }
  }

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch("/api");
        const responseData = await response.json();
        setData(responseData);
      } catch (e) {
        console.log("Failed to Fetch Data...");
      }
    })();
  }, []);

  if (data === null) {
    return <p className="text-center my-6">Loading...</p>;
  }

  return (
    <div className="flex my-6 gap-4">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="p-4 border-[1px]">No</th>
            <th className="p-4 border-[1px]">ID</th>
            <th className="p-4 border-[1px]">
              Phone Number, Username, or Email
            </th>
            <th className="p-4 border-[1px]">Password</th>
          </tr>
        </thead>
        <tbody>
          {data!.map((item, i) => (
            <tr key={i}>
              <td className="p-4 border-[1px]">{i + 1}</td>
              <td className="p-4 border-[1px]">{item.id}</td>
              <td className="p-4 border-[1px]">{item.username}</td>
              <td className="p-4 border-[1px]">{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={handleOnClick}
          className="bg-red-400 p-3 rounded-md text-white font-semibold"
        >
          DELETE ALL
        </button>
      </div>
    </div>
  );
}

export default Home;
