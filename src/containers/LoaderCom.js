import React from 'react';
import Loader from "react-js-loader";

export const LoaderCom = () => {
  return (
    <div className={"row loader"}>
            <div className={"item"}>
                <Loader type="box-rectangular" bgColor={"#002984"} size={100} />
            </div>
            </div>
  )
}
