export interface EnvConfig {
	[key: string]: string | boolean | number;
}
export const load = (envConfig: EnvConfig) => {
	const env: EnvConfig = {};

	for (const key in envConfig) {
		if (envConfig.hasOwnProperty(key)) {
			const defaultValue = envConfig[key];
			const envValue = process.env[key];
			if (typeof defaultValue === 'string') {
				env[key] = envValue || defaultValue;
			}
			if (typeof defaultValue === 'boolean') {
				env[key] = envValue ? envValue.toLowerCase() === 'true' : defaultValue;
			}
			if (typeof defaultValue === 'number') {
				try {
					env[key] = envValue ? parseInt(envValue, 10) : defaultValue;
				} catch (error) {
					env[key] = defaultValue;
				}
			}
		}
	}
	return env;
};
