# ChepeastSwap — Web Application

**A browser interface for multi-chain swaps, with free route previews and an x402 service payment in Algorand USDC.**

ChepeastSwap lets users choose tokens, inspect an estimated swap or bridge route, pay for executable route data, and sign the swap from their own wallet. LI.FI supplies the route through the companion API.

This repository contains the **web interface and prebuilt wallet modules**. The backend is maintained separately in [algorand-swap-x402](https://github.com/sashax402-ops/algorand-swap-x402).

## Features

- EVM wallet connection using injected browser providers, with EIP-6963 discovery and a wallet picker when multiple providers are detected.
- Free route previews showing the estimated output, provider and gas cost.
- Amount entry in token units or approximate USD value, using live token prices from the API.
- Source-token filtering based on the connected wallet's network.
- Pera Wallet integration for the Algorand USDC service payment.
- x402 v2 payment preparation, client-side transaction validation and signing.
- Source-chain switching, ERC-20 allowance checks and exact-amount approval when the current allowance is insufficient.
- Swap submission and source-chain transaction confirmation through ethers.js.
- English, Spanish, French and German interface text, with the selected language saved locally.

Private keys remain with the wallets. The application requests wallet authorization and signatures; it does not ask users to enter seed phrases.

## Networks and tokens in the current interface

The token selector is defined in `CHAIN_INFO` and `TOKENS` inside `index.html`.

| EVM network | Chain ID | Native token | USDC option |
| --- | --- | --- | --- |
| Ethereum | `1` | ETH | Yes |
| Polygon | `137` | Native token, currently labeled `MATIC` in the UI | Yes |
| Arbitrum | `42161` | ETH | Yes |
| Base | `8453` | ETH | Yes |
| Optimism | `10` | ETH | Yes |
| BNB Smart Chain | `56` | BNB | No |
| Avalanche | `43114` | AVAX | Yes |

These are the options implemented in this interface, not a guarantee that LI.FI can route every pair or amount. The current UI sends the swap output to the connected EVM address; it does not expose a separate destination-address field.

Algorand is used for the service payment. It is not offered as a swap source or destination in this token selector.

## Before using the application

You need:

1. An injected EVM wallet, such as MetaMask or another compatible browser wallet, holding the tokens to swap and native gas on the source chain.
2. An Algorand account accessible through Pera, opted in to USDC and holding enough USDC for the service fee.
3. Access to the companion API and the wallet/network services it uses.

The default service fee is **0.01 USDC**. The facilitator sponsors the Algorand payment group's transaction fees. Swap gas, ERC-20 approval gas and route-provider costs are separate. Account setup and USDC opt-in are prerequisites and are not performed by this interface.

## Run locally

The checked-in frontend is ready to serve. There is no `package.json`, npm installation step or frontend build command in this repository.

```bash
git clone https://github.com/sashax402-ops/web-algorand-swap-x402.git
cd web-algorand-swap-x402
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

Use an HTTP server rather than opening `index.html` as a local file: the application imports its wallet module from `/wallet.js`.

### Select the API

Edit the `BACKEND_URL` constant in `index.html`. Its checked-in value is:

```javascript
const BACKEND_URL = 'https://algorand-swap-x402.onrender.com';
```

To use a backend running locally:

```javascript
const BACKEND_URL = 'http://localhost:8000';
```

Start that API using the instructions in the [backend repository](https://github.com/sashax402-ops/algorand-swap-x402). For local use, its `SERVICE_URL` must also be `http://localhost:8000` so the payment resource matches the API origin expected by the browser.

This is a static application: changing a hosting environment variable named `BACKEND_URL` will not rewrite the JavaScript constant. Edit the file and publish the updated static files.

## Use the application

1. Select a language and click **Connect wallet**. If multiple EVM providers are discovered, select one and authorize the account.
2. Select the source and destination tokens. Enter an amount; use the conversion control below it to switch between token and approximate USD entry.
3. Review **You receive (est.)**, the route provider, estimated gas and service fee. Preview requests are free.
4. Click **Execute Swap** and connect the Algorand account through Pera. If using a hardware wallet through Pera, unlock it and open the Algorand application before signing.
5. Authorize the Algorand USDC service payment. The browser validates the prepared payment before requesting the signature.
6. Approve the EVM network switch if requested. For ERC-20 tokens, approve the required spending amount if the existing allowance is insufficient.
7. Review and sign the swap transaction in the EVM wallet. The application displays its hash and waits for source-chain confirmation.

A confirmed source transaction does not by itself prove that a cross-chain transfer has arrived on the destination chain. The current interface does not poll bridge-completion status.

## x402 payment integration

| Stage | API call | What happens |
| --- | --- | --- |
| Load configuration | `GET /config` | Read the payment network, USDC asset, recipient and service price. |
| Convert input value | `GET /price` | Obtain an informational token price in USD. |
| Preview | `GET /quote` | Obtain a free estimate without executable transaction data. |
| Request paid data | `GET /execute` | Receive `402 Payment Required`. |
| Prepare payment | `POST /prepare-payment` | Create the unsigned sponsored Algorand transaction group. |
| Sign and pay | `GET /execute` with `PAYMENT-SIGNATURE` | Verify and settle the payment, then return executable route data. |
| Submit swap | EVM wallet request | Sign and broadcast the returned transaction on the source chain. |

The wallet module checks the payment resource `/execute`, network, asset, recipient, amount, payer, expiry and group integrity before requesting a signature. It also rejects unexpected rekeying or asset-close behavior.

The backend returns a settlement receipt in `PAYMENT-RESPONSE` on a successful paid route response. The current interface does not display or persist that receipt separately.

## Configuration and deployment

| Setting | Where to change it | Notes |
| --- | --- | --- |
| API base URL | `BACKEND_URL` in `index.html` | Use the backend's public HTTPS URL in production. |
| Token selection | `CHAIN_INFO` / `TOKENS` in `index.html` | Check chain IDs, token contract addresses and decimals before adding assets. |
| Translations | `TEXT` in `index.html` | Some existing fee labels still use the earlier name EasySwap. |
| Displayed service price | Receipt markup in `index.html` | Currently hardcoded as `0.01 USDC`; keep it aligned with backend `PRICE_ATOMIC`. Signing uses the backend's configured amount. |
| Social preview image | `og:image` in `index.html` | Replace the placeholder URL before publishing social previews. |

Serve the frontend from the **root of a static HTTPS site**, keeping `index.html` and `wallet.js` together. Preserve `wallet-connect.js` if deploying the complete frontend asset set. No bundling step is required for the committed assets.

The page loads ethers.js from jsDelivr and fonts from Google Fonts, and makes requests to the configured backend, Pera services and Algorand infrastructure. These services must be reachable from the browser.

The `main.py` included here is an API copy, not a web-page server. It imports modules that are not present in this repository and does not serve `index.html`. Use the separate backend repository for the API and static hosting for this frontend.

## Repository layout

| File | Role |
| --- | --- |
| `index.html` | UI, styles, translations, token selection, quote requests and EVM swap flow. |
| `wallet.js` | Prebuilt Pera integration, Algorand SDK code and payment validation/signing. This is the module loaded by `index.html`. |
| `wallet-connect.js` | Additional prebuilt Algorand wallet-discovery module. It is present but not loaded by the current page. |
| `main.py` | Separate API code copy; not required for static hosting. |

The repository does not include the original wallet-module build project or package manifest. The committed bundles can be served as-is; rebuilding them requires the corresponding source and build setup.

## Current implementation notes

- **Mainnet-oriented payment UI:** the account opt-in check is hardcoded to Algorand mainnet USDC, and the Pera network selector searches for `testnet` inside the network string even though the backend returns a CAIP-2 identifier containing a genesis hash. Testnet use requires frontend changes; changing only the backend network is insufficient.
- **Separate payment and swap:** the service fee settles before the final route is fetched and before the EVM wallet submits the swap. A failed quote or cancelled swap has no automatic refund flow in this implementation.
- **Retries:** the retry button starts another payment flow. Check an already submitted payment or swap before authorizing another one. The UI does not implement a dedicated recovery flow for a backend `202` settlement response.
- **Quotes are estimates:** the paid request obtains a fresh route, which can differ from the free preview. There is no slippage-setting control in the current interface.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| No EVM wallet found | Enable a compatible browser wallet extension and reload the page. |
| No live preview | Connect an EVM account, enter a valid amount, and check the backend's `/quote` response. |
| USD conversion unavailable | Check `/price`, or use token-amount entry. |
| Pera does not open or connect | Allow the wallet popup, check the wallet connection and reload after changing API configuration. |
| USDC opt-in error | Opt the selected Algorand account in to mainnet USDC and fund it before retrying. |
| Network switch rejected | Select the source EVM network in the wallet and request a fresh preview. |
| `/wallet.js` returns 404 | Serve the assets at the site's root; the import uses an absolute `/wallet.js` path. |
| Payment validation fails | Check API origin, `SERVICE_URL`, network, asset, recipient, price and payment expiry. |

## Related repository

[ChepeastSwap x402 API](https://github.com/sashax402-ops/algorand-swap-x402) — LI.FI integration, payment preparation, verification, settlement and discovery metadata.

## License

No project-level `LICENSE` file is currently included. Preserve the third-party license notices embedded in the wallet bundles.
