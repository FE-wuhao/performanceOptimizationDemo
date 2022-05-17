/*
 * @Author: nhsoft.wh
 * @Date: 2022-05-17 09:35:34
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-05-17 15:35:41
 * @Description: file content
 */
import React, { useContext, useState, useCallback } from "react";
import { GlobalContext } from "../App";

const Child2 = () => {
  const { store, dispatch } = useContext(GlobalContext);

  const title = store.child2Title;

  const [updateCount, setUpdateCount] = useState(0);

  const handleInputChange = useCallback(
    (e) => {
      dispatch({
        type: "changeStore",
        payload: e.target.value,
        storeKey: "child2Title",
      });

      setUpdateCount((pre) => pre + 1);
    },
    [dispatch]
  );

  console.log("222");

  return (
    <>
      <div>
        <div>child2：</div>
        <input value={title} onChange={handleInputChange} />
        <div> count：{updateCount}</div>
      </div>
      <br />
    </>
  );
};

export default Child2;
