import PropTypes from "prop-types";

function Main({ children, className, ...props }) {
    return (
        <main className={`content-wrapper${className ? ` ${className}`: ""}`} {...props}>
            {children}
        </main>
    );
}

Main.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Main;