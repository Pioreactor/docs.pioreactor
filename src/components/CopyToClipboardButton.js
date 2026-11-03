import React from 'react';
import styles from './CopyToClipboardButton.module.css';

const RESET_AFTER_MS = 2000;

function CopyIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="4 12.5 9.5 18 20 6.5" />
    </svg>
  );
}

// navigator.clipboard is missing on non-https origins (e.g. a LAN preview), so fall back to execCommand.
async function writeToClipboard(text) {
  if (typeof navigator !== 'undefined' && navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand('copy');
  document.body.removeChild(textarea);
  if (!ok) {
    throw new Error('execCommand copy failed');
  }
}

export default function CopyToClipboardButton({
  content,
  label = 'Copy',
  copiedLabel = 'Copied',
  failedLabel = 'Copy failed',
  className = '',
  style = {},
}) {
  // status is 'idle' | 'copied' | 'failed'
  const [status, setStatus] = React.useState('idle');
  const timerRef = React.useRef(null);

  React.useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleCopyClick = async () => {
    if (!content) {
      return;
    }

    let nextStatus = 'copied';
    try {
      await writeToClipboard(content);
    } catch (error) {
      console.error('Unable to copy content to clipboard', error);
      nextStatus = 'failed';
    }

    setStatus(nextStatus);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setStatus('idle'), RESET_AFTER_MS);
  };

  const buttonClassName = [
    styles.button,
    status === 'copied' && styles.copied,
    status === 'failed' && styles.failed,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const currentLabel = { idle: label, copied: copiedLabel, failed: failedLabel }[status];

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={handleCopyClick}
      style={style}
      title={status === 'idle' ? `Copy "${content}"` : undefined}
    >
      <span className={styles.inner}>
        {status === 'copied' ? <CheckIcon /> : <CopyIcon />}
        {/* Copy and copied labels share one grid cell so the button keeps its width when the text swaps. */}
        <span className={styles.labels}>
          {(status === 'failed' ? [failedLabel] : [label, copiedLabel]).map((text, i) => (
            <span key={i} className={text === currentLabel ? undefined : styles.hiddenLabel} aria-hidden={text !== currentLabel}>
              {text}
            </span>
          ))}
        </span>
      </span>
      <span className={styles.srOnly} aria-live="polite">
        {status === 'idle' ? '' : currentLabel}
      </span>
    </button>
  );
}
