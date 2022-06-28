
module.exports = {
  ci: {
    collect: {
      staticDistDir: "./build",
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:performance": ["warn", { minScore: 0.9 }],
        "unused-javascript": "warn",
        "csp-xss": "warn",
      },
    },
  },
};