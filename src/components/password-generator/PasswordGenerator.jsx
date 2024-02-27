import { useEffect } from "react";
import { useCallback } from "react";
import { useState, useRef } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isSpecialCharAllowed, setIsSpecialCharAllowed] = useState(false);

  const passRef = useRef(null);

  const copyPassToClipboard = useCallback(
    (e) => {
      e.preventDefault();
      passRef.current?.select();
      passRef.current?.setSelectionRange(0, 999);
      window.navigator.clipboard.writeText(password);
    },
    [password]
  );

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) str += "0123456789";
    if (isSpecialCharAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= passLength; i++) {
      let ind = Math.floor(Math.random() * str.length + 1);
      console.log(ind);
      pass += str.charAt(ind);
    }

    setPassword(pass);
  }, [passLength, isNumberAllowed, isSpecialCharAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [passLength, isNumberAllowed, isSpecialCharAllowed, generatePassword]);

  return (
    <div className="flex justify-center items-center my-4">
      <div className="bg-gray-500 rounded-lg  flex flex-col justify-center items-center pb-10 px-32 mt-10">
        <div className="my-5">
          <h1 className="text-4xl font-bold text-white">Password Generator</h1>
        </div>
        <div className="flex flex-row">
          <input
            type="text"
            className="w-96 h-14 px-2 rounded-l-md"
            placeholder="copy password"
            value={password}
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyPassToClipboard}
            className="bg-indigo-300 p-4 rounded-r-md hover:bg-indigo-400  "
          >
            copy
          </button>
        </div>

        <div className="flex justify-center items-center space-x-2 text-white text-lg text-semibold">
          <input
            type="range"
            min={8}
            max={50}
            value={passLength}
            className=" cursor-pointer"
            onChange={(e) => {
              setPassLength(e.target.value);
            }}
          />
          <label>Length: {passLength}</label>
          <div>
            <input
              type="checkbox"
              defaultChecked={isNumberAllowed}
              className=" cursor-pointer"
              id="numberInput"
              onChange={() => {
                setIsNumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={isSpecialCharAllowed}
              className=" cursor-pointer"
              id="characterInput"
              onChange={() => {
                setIsSpecialCharAllowed((prev) => !prev);
              }}
            />
            <label>Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
