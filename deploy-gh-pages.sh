branch=${3:-"dev"} # default to dev when branch isn't specified

mkdir tempGH
cd tempGH
../gp.sh gobstones gs-element-blockly ${branch}
cd ..
rm -rf tempGH
