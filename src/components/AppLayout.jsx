import Header from './Header';
import Main from './Main';
import Footer from "./Footer";
import PropTypes from "prop-types";

function AppLayout({ 
    showHeader = true,
    showFooter = true,
    children,
    ...props
}) {
    return (
        <>
            {showHeader && <Header title="UTRSO" />}
            <Main {...props}>{children}</Main>
            {showFooter && <Footer />}
        </>
    );
}

AppLayout.propTypes = {
    showHeader: PropTypes.bool,
    showFooter: PropTypes.bool,
    children: PropTypes.node
};

export default AppLayout;