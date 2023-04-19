export async function sleep(ms: number): Promise<void> {
	return new Promise<void>((resolve) => {
		setTimeout(() => {
			return resolve();
		}, ms);
	});
}
