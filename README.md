
# Sample Next.js with Cosmos and Typescript 

## Installation
git clone and run 
```bash
npm install
```

### Running Next.js
```bash
npm run next
```

### Running Cosmos
```bash
npm run cosmos
```

### Configuration to take note of

#### cosmos.config.js

Webpack configuration is relatively hidden by Next.js so define typescript loader inside cosmos.config.js 

```diff
const path = require('path');

module.exports = {
  publicPath: 'static',
  publicUrl: '/static/',

+  webpack: (config, { env }) => {
+    return {
+      ...config,
+      module: {
+        rules: [
+          {
+            test: /\.(ts|tsx)?$/,
+            include: [
+              path.resolve(__dirname, '__fixtures__'), 
+              path.resolve(__dirname, 'components'),
+              // add whatever other paths you need
+            ],
+            use: [
+                {
+                    loader: 'ts-loader'
+                }
+            ]
+          },
+        ]
+      },
+      resolve: {
+        extensions: ['.ts', '.tsx','.js', '.jsx']
+      },
+    };
+  },
};


```

#### ts.config
Not all of this is necessary but it is what I've been using in my next js projects. 
```bash
{
  "compilerOptions": {

    "jsx": "react",
    "module": "commonjs",
    "target": "es6",
    "esModuleInterop": true,
        "experimentalDecorators": true,
        "lib": [
          "dom",
          "es7"
        ],
    }
}
```
