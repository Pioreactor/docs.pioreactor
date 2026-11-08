let timer;
let lastQuery = '';

export function recordSearch(input, hasResults) {
  if (typeof window === 'undefined' || window.location.hostname !== 'docs.pioreactor.com') return;
  clearTimeout(timer);
  const query = input.trim().slice(0, 200);
  const path = window.location.pathname;
  if (query.length < 2 || query === lastQuery) return;
  timer = setTimeout(() => {
    lastQuery = query;
    try {
      fetch('https://events.pioreactor.com/search', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: crypto.randomUUID(), query, path, has_results: hasResults}),
        credentials: 'omit',
        keepalive: true,
      }).catch(() => {});
    } catch {
      // Analytics failure must not interrupt local search.
    }
  }, 1000);
}
