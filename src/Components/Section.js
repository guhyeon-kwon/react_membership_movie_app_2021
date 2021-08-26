import React from "react";
import PropTypes from "prop-types";

const Container = styled.div``;

const Section = ({title, children}) => ();

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
