# sql-query-displayer

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

# Page Load Time

Tested page load time using lighthouse in google chrome.

Optimization:
- Route level code-splitting to generate a separate chunk which is lazy-loaded when the route is visited.
- Using the @mdi/js module to only import svg icons that we need.

Below are the results for various metrics before and after optimizations.

### Desktop

| Item                           | Before  | After   |
| ------------------------------ | ------- | ------- |
| FCP (First Contentful Paint)   | 1.1 s   | 0.8 s   |
| SI (Speed Index)               | 1.8 s   | 1.0 s   |
| LCP (Largest Contentful Paint) | 1.1 s   | 0.8 s   |
| TTI (Time to Interactive)      | 1.1 s   | 0.8 ms  |
| TBT (Total Blocking Time)      | 30 ms   | 30 ms   |
| CLS (Cumulative Layout Shift)  | 0.00    | 0.00    |

Screenshot:
![lighthouse desktop results](images/lighthouse-desktop.png)

### Mobile

| Item                           | Value   | After  |
| ------------------------------ | ------- | ------ |
| FCP (First Contentful Paint)   | 3.4 s   | 2.9 s  |
| SI (Speed Index)               | 6.1 s   | 2.9 s  |
| LCP (Largest Contentful Paint) | 3.4 s   | 3.2 s  |
| TTI (Time to Interactive)      | 4.2 s   | 3.7 s  |
| TBT (Total Blocking Time)      | 440 ms  | 440 ms |
| CLS (Cumulative Layout Shift)  | 0.012   | 0.012  |

Screenshot:
![lighthouse desktop results](images/lighthouse-mobile.png)