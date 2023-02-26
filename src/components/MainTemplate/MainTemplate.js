import React from "react";
import Header from "../Header/Header";

function MainTemplate(props) {
    const {
        children,
        navItems,
    } = props;

    return (
        <>
            <Header
                navItems={navItems}
            />
            {children}
        </>
    )
}

export default MainTemplate;




