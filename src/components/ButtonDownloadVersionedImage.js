import React from 'react';


export default function ButtonDownloadVersionedImage({type}){
    const [selectedVersion, setSelectedVersion] = React.useState("");
    const [versions, setVersions] = React.useState([]);

    React.useEffect(() => {
        const fetchReleases = async () => {
            try {
                const response = await fetch("https://api.github.com/repos/pioreactor/custopizer/releases?per_page=40");
                if (!response.ok) {
                    throw new Error("Failed to fetch releases");
                }

                const data = await response.json();
                // Filter out prereleases and drafts
                const filteredVersions = data
                    .filter(release => !release.prerelease && !release.draft)
                    .map(release => ({ version: release.tag_name }));

                setVersions(filteredVersions);
            } catch (error) {
                console.error("Error fetching releases:", error);
            }
        };

        fetchReleases();
    }, []);

    const handleDownload = () => {
        if (selectedVersion) {
            const downloadUrl = `https://github.com/Pioreactor/CustoPiZer/releases/download/${selectedVersion}/pioreactor_${type}.zip`;
            window.open(downloadUrl, '_blank');
        }
    };

    return (
        <div>
            <span> Select software version: </span>
            <select name="version" onChange={e => setSelectedVersion(e.target.value)} style={{ width: "100px" }}>
                <option value="">version</option>
                {versions.map((blob, index) => (
                    <option key={index} value={blob.version}>{blob.version}{index === 0 ? " (latest)" : ""}</option>
                ))}
            </select>
            <button onClick={handleDownload} disabled={selectedVersion === ''} style={{"marginLeft": "10px"}}>
                Download {type} image
            </button>
        </div>
    );
}
