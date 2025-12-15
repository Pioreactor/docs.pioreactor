import React from 'react';

export default function CopyToClipboardButton({
  content,
  label = 'Copy',
  copiedLabel = 'Copied!',
  className = '',
  style = {},
}) {
  const [copied, setCopied] = React.useState(false);

  const handleCopyClick = async () => {
    if (!content || typeof navigator === 'undefined' || !navigator.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Unable to copy content to clipboard', error);
    }
  };

  const successStyles = copied
    ? { backgroundColor: '#2c8b43', borderColor: '#2c8b43', color: '#ffffff' }
    : {};

  const buttonClassName = ['button button--sm', className]
    .filter(Boolean)
    .join(' ');

  const baseStyle = {
    backgroundColor: '#e3e4e6',
    border: '1px solid #b7b9bd',
    borderColor: '#b7b9bd',
    color: '#1b1b1d',
  };

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={handleCopyClick}
      style={{ ...baseStyle, ...style, ...successStyles }}
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
