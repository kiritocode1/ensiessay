export type GenericEffectResult = unknown;

export async function runEffect<T>(fn: () => Promise<T> | T): Promise<T> {
	return await Promise.resolve(fn());
}
