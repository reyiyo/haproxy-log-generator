# haproxy-log-generator

Generate fake haproxy log lines.

```
const generateHaproxyLog = require('haproxy-log-generator');

console.log(generateHaproxyLog());

// Example output:
// 96.87.209.193:5804 [10/Nov/2017:23:33:29.847] casey-http-in 10.62.182.105:29502 21/3/1/312/62 200 50964 - - --- 48668/8958/74879/44772/8 8/0 {} {} "GET /et HTTP/1.1"
```