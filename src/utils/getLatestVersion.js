const packageJson = require('package-json');

/**
 * Return the version of a package
 * @param {String} packageName 
 * @param {Object} options 
 * @returns 
 */

module.exports = async (packageName, options) => {
	const {version} = await packageJson(packageName.toLowerCase(), options);
    return version;
}