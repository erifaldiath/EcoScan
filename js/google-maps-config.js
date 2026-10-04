window.ECOSCAN_GOOGLE_MAPS_API_KEY = "PASTE_YOUR_RESTRICTED_GOOGLE_MAPS_KEY_HERE";
window.ECOSCAN_GOOGLE_MAP_ID = "DEMO_MAP_ID";

if (
	window.ECOSCAN_GOOGLE_MAPS_API_KEY.startsWith("https://")
) {
	window.ECOSCAN_GOOGLE_MAPS_API_KEY =
		new URL(window.ECOSCAN_GOOGLE_MAPS_API_KEY)
			.searchParams
			.get("key") || "";
}
