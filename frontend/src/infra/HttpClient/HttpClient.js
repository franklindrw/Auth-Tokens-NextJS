// Arquitetura Hexagonal
// Ports and Adapters
export default async function HttpClient(fetchUrl, fetchConfig) {
    return fetch(fetchUrl, {
        ...fetchConfig,
        headers: {
            'Content-Type': 'application/json',
            ...fetchConfig.headers,
        },
        body: fetchConfig.body ? JSON.stringify(fetchConfig.body) : null,
    })
        .then(async (resp) => {
            return {
                ok: resp.ok,
                body: await resp.json()
            }
        });
}
