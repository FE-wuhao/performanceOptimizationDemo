/*
 * @Author: nhsoft.wh
 * @Date: 2022-05-17 09:35:28
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-05-17 15:35:34
 * @Description: file content
 */
import React, { useContext, useState, useCallback } from "react";
import { GlobalContext } from "../App";

const Child1 = () => {
  const { store, dispatch } = useContext(GlobalContext);

  const title = store.child1Title;

  const [updateCount, setUpdateCount] = useState(0);

  const handleInputChange = useCallback(
    (e) => {
      dispatch({
        type: "changeStore",
        payload: e.target.value,
        storeKey: "child1Title",
      });

      setUpdateCount((pre) => pre + 1);
    },
    [dispatch]
  );

  console.log("111");

  return (
    <>
      <div>
        <div>child1：</div>
        <input value={title} onChange={handleInputChange} />
        <div>count：{updateCount}</div>
        <br />
      </div>
    </>
  );
};

export default Child1;
