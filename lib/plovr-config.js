{
  "id": "demo",
  "paths": ".",
  "inputs": [
    "react-0.13.1-build/react.js",
    "../test/entry.js"
  ],
  "output-file": "../test/module-gcc.js",
  "output-charset": "UTF-8",
  "mode": "ADVANCED",
  "pretty-print": false,
  "level": "VERBOSE",
  "experimental-exclude-closure-library": true,
  "custom-warnings-guards": [
    "info.persistent.react.jscomp.ReactWarningsGuard"
  ],
  "custom-passes": [
    {
      "class-name": "info.persistent.react.jscomp.ReactCompilerPass",
      "when": "BEFORE_CHECKS"
    }
  ]
}
