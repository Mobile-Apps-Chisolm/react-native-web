{ pkgs }: {
	deps = [
		pkgs.nodejs-16_x
		pkgs.nodePackages.typescript-language-server
		pkgs.nodePackages.expo-cli
		pkgs.yarn
		pkgs.replitPackages.jest
	];
}