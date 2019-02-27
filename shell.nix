let
  pkgs = import <nixpkgs-18.09> {};
  node = import ~/.nixpkgs/node9.nix { inherit pkgs; };
in pkgs.stdenv.mkDerivation {
  name = "sequelize-flow";
  buildInputs = [
    node
  ];
}
