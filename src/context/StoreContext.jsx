import React, { createContext } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const contextValue = {
        food_list
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

StoreContextProvider.propTypes = {
    children: PropTypes.node, // Add PropTypes validation for children
};

export default StoreContextProvider;