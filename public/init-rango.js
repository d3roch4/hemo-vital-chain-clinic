
const config = {
    to: {
        blockchain: 'SOLANA',
        token: {
            blockchain: 'SOLANA',
            address: '9Brh8PuVqZkvb2e8CfHyuveTYmRJGxh74y1Rz918ZQhk',
            symbol: 'HEMO'
        },
        blockchains: [
            'SOLANA'
        ],
        tokens: {
            SOLANA: {
                isExcluded: false,
                tokens: [
                    {
                        symbol: 'HEMO',
                        address: '9Brh8PuVqZkvb2e8CfHyuveTYmRJGxh74y1Rz918ZQhk',
                        blockchain: 'SOLANA'
                    }
                ]
            }
        },
        pinnedTokens: []
    },
    theme: {
        mode: 'light',
        singleTheme: true
    },
    // This API key is only for test purpose. Don't use it in production.
    apiKey: 'c6381a79-2817-4602-83bf-6a641a409e32',
    // This project id is only for test purpose. Don't use it in production.
    // Get your Wallet Connect project id from https://cloud.walletconnect.com/
    walletConnectProjectId: 'e24844c5deb5193c1c14840a7af6a40b',
    // Here, give your email and URL.
    trezorManifest: {
        appUrl: 'https://widget.rango.exchange/',
        email: 'hi+trezorwidget@rango.exchange'
    },
    tonConnect: {
        manifestUrl: 'https://raw.githubusercontent.com/rango-exchange/assets/refs/heads/main/manifests/tonconnect/manifest.json'
    }
  }
              
  rangoWidget.init(config);