import Header from "../components/Header/Header"; 
import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";
import FlexWrapper from "../components/FlexWrapper/FlexWrapper";
import React from "react";
/**
 * A Function renders UI on the root route ("/") of the application
 * @method Workspace
 */
const Workspace = () => {
    return (
      <React.Fragment>
        <Header/>
        <FlexWrapper  height={`calc(100vh - 64.7px)`} >
        <Sidebar/>
        <Content/>
        </FlexWrapper>     
      </React.Fragment>
    );
};

export default Workspace;