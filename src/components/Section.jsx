import PropTypes from "prop-types";

function Section({
    title,
    children,
    icon = null,
    id,
    className,
    ...props
}) {
    return (
        <section 
            className={`section${className ? ` ${className}` : ""}`}
            id={id} {...props}>
            {title && <h2 className="section-title">
                {icon && <span className="section-title__icon">{icon}</span>}
                <span className="section-title__text">{title}</span>
            </h2>}
            <div className="section-content">{children}</div>
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string
};

export default Section;