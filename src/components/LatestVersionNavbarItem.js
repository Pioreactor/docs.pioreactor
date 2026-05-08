import React from 'react';

const LATEST_RELEASE_URL = 'https://api.github.com/repos/pioreactor/pioreactor/releases/latest';
const RELEASES_URL = 'https://github.com/Pioreactor/pioreactor/releases/latest';

export default function LatestVersionNavbarItem({mobile = false}) {
  const [latestVersion, setLatestVersion] = React.useState('');

  React.useEffect(() => {
    const fetchLatestVersion = async () => {
      try {
        const response = await fetch(LATEST_RELEASE_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch latest Pioreactor release');
        }

        const release = await response.json();
        setLatestVersion(release.tag_name || '');
      } catch (error) {
        console.error('Error fetching latest Pioreactor release:', error);
      }
    };

    fetchLatestVersion();
  }, []);

  const label = latestVersion ? `Latest: ${latestVersion}` : 'Latest docs';

  if (mobile) {
    return (
      <li className="menu__list-item">
        <a className="menu__link latest-version-navbar-item" href={RELEASES_URL} >
          {label}
        </a>
      </li>
    );
  }

  return (
    <a
      className="navbar__item navbar__link latest-version-navbar-item"
      href={RELEASES_URL}
      title={title}>
      {label}
    </a>
  );
}
