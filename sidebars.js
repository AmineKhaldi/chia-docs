module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'CAT2 Upgrade Guide',
      items: ['cat2/cat2-intro', 'cat2/cat2-snapshot', 'cat2/cat2-issuance'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/quick-start-guide',
        'getting-started/using-the-gui',
        'getting-started/chia-concepts',
      ],
    },
    {
      type: 'category',
      label: 'About',
      items: ['about/cryptocurrency-intro', 'about/chia-intro'],
    },
    {
      type: 'category',
      label: 'Plotting',
      items: [
        'plotting/plotting-basics',
        'plotting/plotting-software',
        'plotting/k-sizes',
        'plotting/ssd-endurance',
        'plotting/moving-plots',
        'plotting/plotting-faq',
      ],
    },
    {
      type: 'category',
      label: 'Farming',
      items: [
        'farming/farming-basics',
        'farming/farming-many-machines',
        'farming/pool-farming',
        'farming/checking-farm-health',
        'farming/reference-farming-hardware',
        'farming/farming-faq',
      ],
    },
    {
      type: 'category',
      label: 'RPC Reference',
      items: [
        'rpc-reference/rpc',
        'rpc-reference/full-node',
        'rpc-reference/dids',
        'rpc-reference/nfts',
        'rpc-reference/offers',
        'rpc-reference/datalayer',
        'rpc-reference/cadt',
        'rpc-reference/simulator',
      ],
    },
    {
      type: 'category',
      label: 'CLI Reference',
      items: [
        'cli-reference/cli',
        'cli-reference/dids',
        'cli-reference/nfts',
        'cli-reference/offers',
        'cli-reference/datalayer',
        'cli-reference/cat-admin',
        'cli-reference/simulator',
        'cli-reference/custody-tool',
      ],
    },
    {
      type: 'category',
      label: 'Coin Set Model',
      items: [
        'coin-set-model/intro',
        'coin-set-model/costs',
        'coin-set-model/conditions',
        'coin-set-model/spend-bundles',
        'coin-set-model/addresses',
        'coin-set-model/security',
        'coin-set-model/coin-set-vs-utxo',
        'coin-set-model/coin-set-vs-account',
        'coin-set-model/clvm-vs-evm',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/architecture-overview',
        'architecture/full-nodes',
        'architecture/farmers',
        'architecture/harvesters',
        'architecture/timelords',
        'architecture/pools',
        'architecture/wallets',
        'architecture/mempool',
      ],
    },
    {
      type: 'category',
      label: 'Consensus',
      items: [
        'consensus/consensus-intro',
        'consensus/proof-of-space',
        'consensus/proof-of-time',
        {
          type: 'category',
          label: 'Chains',
          items: [
            'consensus/challenges',
            'consensus/signage-and-infusion-points',
            'consensus/harvester-algorithm',
            'consensus/multiple-blocks',
            'consensus/three-vdf-chains',
            'consensus/overflow-blocks',
            'consensus/foliage',
            'consensus/epoch-and-difficulty',
          ],
        },
        {
          type: 'category',
          label: 'Block Validation',
          items: [
            'block-validation/block-validation',
            'consensus/light-clients',
            'block-validation/block-format',
            'block-validation/block-rewards',
          ],
        },
        'consensus/timelords',
        'consensus/attacks-and-countermeasures',
        'consensus/analysis',
      ],
    },
    {
      type: 'category',
      label: 'Keys',
      items: [
        'keys/architecture',
        'keys/keys-and-signatures',
        'keys/plot-ids',
        'keys/plot-public-keys',
      ],
    },
    {
      type: 'category',
      label: 'Protocol',
      items: [
        'protocol/protocol',
        'protocol/networking-protocol',
        'protocol/serialization-protocol',
        'protocol/harvester-protocol',
        'protocol/peer-protocol',
        {
          type: 'category',
          label: 'Pool Protocol',
          items: [
            'protocol/pool/pool-protocol',
            'protocol/pool/pool-protocol-specification',
          ],
        },
        'protocol/wallet-protocol',
      ],
    },
    {
      type: 'category',
      label: 'Reference Client',
      items: [
        'reference-client/chia-installation-guide',
        'reference-client/check-if-things-are-working',
        'reference-client/node-syncing',
        'reference-client/key-management',
        'reference-client/chia-seeder-guide',
        'reference-client/directory-structure',
        'reference-client/freebsd-install',
        'reference-client/openbsd-install',
        'reference-client/logging-reference',
        'reference-client/password-protected-keys',
        'reference-client/raspberry-pi',
        'reference-client/headless-node',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/references',
        'resources/chia-farming-workload',
        'resources/faq',
      ],
    },
  ],
};
