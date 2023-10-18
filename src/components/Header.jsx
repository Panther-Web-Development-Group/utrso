import PropTypes from "prop-types";

function Header({ title }) {
    return (
        <header className="header" id="header">
            <h1 className="logo">
                <a href="#" className="logo-link" id="logo-link">
                    {title.split("")
                        .map(letter => <span className="logo-letter" key={`letter-${letter}`}>{letter}</span>)}
                </a> 
            </h1>
            <div className="test" id="test">Hello World</div>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string
};

export default Header;