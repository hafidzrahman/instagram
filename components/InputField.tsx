"use client";

import { useState } from "react";

interface propsInterface {
  type: string;
  name: string;
  id: string;
  label: string;
}

function InputField({ type, name, id, label }: propsInterface) {
  const [text, setText] = useState<string>("");
  return (
    <div className="flex flex-col p-2 border-2 border-white rounded-sm max-w-2xl">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        className="outline-none"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
    </div>
  );
}

export default InputField;
