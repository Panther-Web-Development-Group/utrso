import PropTypes from "prop-types";

function OrganizationItem({
    name,
    officialName,
    aliases,
    pinSuffix,
    logo = "",
    description = "",
    // discordSuffix = "",
    ...props
}) {
    const aliasString = aliases.reduce((str, alias, index) => {
        const isOnly = aliases.length === 1;
        const lastIndex = aliases.length - 1;
        if (isOnly) return alias;

        return index !== lastIndex ?
            (lastIndex === 1 ? `${str}${alias} and ` : `${str}${alias}, `) :
            (lastIndex === 1 ? `${str}${alias}` : `${str}and ${alias}`);
    }, "");

    return (
        <li className="organization-item" {...props}>
            <header className="org-header">
                {logo && 
                    <div className="org-logo">
                        <img className="org-logo-image" src={logo} alt={name} />
                    </div>}
                <div className="org-heading">
                    <h3 className="org-official-name">
                        <a href={`https://pin.gsu.edu/organization/${pinSuffix}`} className="org-pin-link">{officialName}</a>
                    </h3>
                    {aliases && Array.from(aliases).length > 0 && 
                        <h4 className="org-aliases">
                            <span className="org-aka">AKA </span>
                            <span className="org-aliases-text">{aliasString}</span>
                        </h4>}
                </div>
            </header>
            <section className="org-details">
                <div className="org-description">{description}</div>
            </section>
        </li>
    )
}

OrganizationItem.propTypes = {
    name: PropTypes.string.isRequired,
    officialName: PropTypes.string.isRequired,
    aliases: PropTypes.arrayOf(PropTypes.string),
    pinSuffix: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    discordSuffix: PropTypes.string
};

export default OrganizationItem;