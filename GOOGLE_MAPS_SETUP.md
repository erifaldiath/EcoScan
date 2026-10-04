# Google Maps Setup

EcoScan's impact map now uses the Google Maps JavaScript API and Places API (New). Google Maps content is shown on a Google basemap, as required by Google Maps Platform terms.

## Configure Google Cloud

1. Create or select a Google Cloud project and enable billing.
2. Enable **Maps JavaScript API** and **Places API (New)**.
3. Create an API key.
4. Restrict the key by website referrer. For the included local server, allow `http://127.0.0.1:8000/*` and `http://localhost:8000/*`. Add the deployed HTTPS domain before publishing.
5. Restrict API access to Maps JavaScript API and Places API (New). Set appropriate daily quotas and billing alerts.
6. Put the key in `js/google-maps-config.js` as `window.ECOSCAN_GOOGLE_MAPS_API_KEY`. Do not paste it into chat or put an unrestricted key in the page.
7. Optionally replace `DEMO_MAP_ID` in the same file with a Map ID from Google Cloud for production Advanced Markers.
8. Run `EcoScan.bat` and open the local site at `http://127.0.0.1:8000`.

## Search Behavior

Each nearby search runs up to four Google Places Text Search requests, prioritizing terms for the detected country/browser language before common international recycling terms. Each request asks for up to 20 candidates. Results are deduplicated by Google place ID and checked against the selected circular radius before display. Google has no dedicated waste-bank place type. These requests may incur Google Maps Platform charges; check current pricing and set quotas before testing.

Google Places cannot guarantee a minimum number of waste banks in every area. Results depend on Google's listings and local naming. The map offers 5, 10, 20, and 50 km radii; results outside the selected radius are discarded.

## HTTPS On Your LAN

The LAN task uses HTTP on port 8000 until local certificates are present. To enable HTTPS for phone geolocation, install `mkcert` on the PC, then run these commands from the workspace root:

```powershell
mkcert -install
New-Item -ItemType Directory -Force LOMBA/certs
mkcert -cert-file LOMBA/certs/lan.pem -key-file LOMBA/certs/lan-key.pem 192.168.1.11 localhost 127.0.0.1
```

Install and trust mkcert's `rootCA.pem` on the phone. Never copy `rootCA-key.pem` or `lan-key.pem` to the phone. Stop the running LAN task and start **Start EcoScan LAN server** again. It will use HTTPS on port 8443 and print the LAN URL. Add `https://192.168.1.11:8443/*` to the Google API key's website referrers. The phone and PC must be on the same Wi-Fi, and the PC's firewall must allow Node.js on the private network.
