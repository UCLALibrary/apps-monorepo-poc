module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    {
      releaseRules: [
        { type: 'refactor', release: 'patch' },
        { type: 'chore', release: 'patch' },
      ],
    },
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: [
          'CHANGELOG.md',
          'dist/*',
        ],
        message:
                    'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
}
