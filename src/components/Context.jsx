/*
 * @Author: nhsoft.wh
 * @Date: 2022-05-17 13:52:05
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-05-17 15:36:55
 * @Description: file content
 */
import { useReducer } from "react";
import { reducer, initValue, GlobalContext } from "../App";

function Context(props) {
  const { children } = props;

  const [store, dispatch] = useReducer(reducer, initValue);

  return (
    <GlobalContext.Provider value={{ store, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default Context;
