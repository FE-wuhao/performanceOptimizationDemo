/*
 * @Author: nhsoft.wh
 * @Date: 2022-05-17 10:48:20
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-05-17 15:30:09
 * @Description: file content
 */
import React, { useState, useCallback } from "react";

const Child3 = () => {
  const [title, setTitle] = useState("");

  const [updateCount, setUpdateCount] = useState(0);

  const handleInputChange = useCallback((e) => {
    setTitle(e.target.value);

    setUpdateCount((pre) => pre + 1);
  }, []);

  console.log("333");

  return (
    <>
      <div>
        <div>child3：</div>
        <input value={title} onChange={handleInputChange} />
        <div> count：{updateCount}</div>
      </div>
      <br />
    </>
  );
};

export default Child3;
