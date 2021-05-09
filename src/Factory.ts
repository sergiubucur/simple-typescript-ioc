export const FactoryPrefix = 1000000;

export function Factory(id: number) {
	return FactoryPrefix + id;
}
