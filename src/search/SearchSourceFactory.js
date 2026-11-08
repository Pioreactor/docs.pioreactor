import {SearchSourceFactory as originalFactory} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/SearchSourceFactory';
import {recordSearch} from './recordSearch';

export function SearchSourceFactory(...args) {
  const source = originalFactory(...args);
  return (query, callback) => source(query, (results) => {
    callback(results);
    recordSearch(query, results.length > 0);
  });
}
