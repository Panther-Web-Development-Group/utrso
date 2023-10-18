import { useState, useEffect } from "react";
// import OrganizationItem from "./OrganizationItem";

function OrganizationsList() {
    const [data, setData] = useState({});

    const fetchJSON = async () => {
        try {
            const d = await fetch("./data/organizations.json");
            setData(d.json());
        } catch {
            setData({});
        }
    };

    useEffect(() => {
        fetchJSON();
    }, []);

    return (
        <>
            {JSON.stringify(data)}
            <ul className="organization-list" id="organization-list">
            </ul>
        </>
        
    );
}

export default OrganizationsList;