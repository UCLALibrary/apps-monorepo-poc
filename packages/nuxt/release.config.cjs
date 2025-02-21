module.exports = {
  branches: ['main'],
  extends: 'semantic-release-monorepo',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'refactor', release: 'patch' },
          { type: 'chore', release: 'patch' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: false, // Disable default npm publish
      },
    ],
    [
      '@semantic-release/exec',
      {
        publishCmd: 'pnpm --filter @apps-monorepo-poc/nuxt-module publish --no-git-checks', // Use pnpm publish
      },
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: [
          'CHANGELOG.md',
          'package.json', // ✅ Ensures updated peerDependencies before publishing
          'dist/*',
        ],
        message:
                    'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
}
