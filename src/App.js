/*
 * @Author: nhsoft.wh
 * @Date: 2022-05-17 09:28:08
 * @LastEditors: nhsoft.wh
 * @LastEditTime: 2022-05-17 15:40:46
 * @Description: file content
 */
import { createContext, useReducer } from "react";
import Context from "./components/Context.jsx";
import Child1 from "./components/Child1.jsx";
import Child2 from "./components/Child2.jsx";
import Child3 from "./components/Child3.jsx";

// #region 不封装context
export const GlobalContext = createContext(null);

export const initValue = {
  child1Title: "",
  child2Title: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "changeStore": {
      if (action.storeKey) {
        if (action.storeKey instanceof Array) {
          const obj = action.storeKey.reduce((res, cur, index) => {
            return { ...res, [cur]: action.payload[index] };
          }, {});

          return { ...state, ...obj };
        }
        return {
          ...state,
          [action.storeKey]: action.payload,
        };
      }
      return { ...action.payload };
    }

    default:
      return { ...state };
  }
};
// #endregion

function App() {
  const [store, dispatch] = useReducer(reducer, initValue);

  return (
    <GlobalContext.Provider value={{ store, dispatch }}>
      {/* <Context> */}
      <Child1 />
      <Child2 />
      <Child3 />
      {/* </Context> */}
    </GlobalContext.Provider>
  );
}

export default App;
