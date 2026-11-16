// Retry a single pasted configuration assignment without its value.
export function withAssignmentFallback(source) {
  return (query, callback) => source(query, (results) => {
    const assignment = query.match(/^\s*([a-zA-Z_][\w.]*)\s*=[^\r\n]*$/);
    if (!results.length && assignment) {
      source(assignment[1], callback);
    } else {
      callback(results);
    }
  });
}
