import { useState, useEffect } from "react";
import OrganizationItem from "./OrganizationItem";

function OrganizationsList() {
    const [data, setData] = useState({});

    const fetchJSON = async () => {
        try {
            const d = await fetch("./data/organizations.json");
            setData(await d.json());
        } catch {
            setData({});
        }
    };

    useEffect(() => {
        fetchJSON();
    }, []);

    return (
        <>
            <ul className="organization-list" id="organization-list">
                {Object.keys(data).map((name, index) => {
                    const target = data[name];
                    return (<OrganizationItem
                        key={name}
                        name={name}
                        officialName={target["official_name"]}
                        aliases={target["aliases"]}
                        pinSuffix={target["pin_suffix"]}
                        logo={target["logo"]}
                        discordSuffix={target["discord_suffix"]}
                        id={`organization-${index + 1}`} />);
                })}
            </ul>
        </>
        
    );
}

export default OrganizationsList;