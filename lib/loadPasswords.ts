import fetchJson from "lib/fetchJson";

export async function loadPasswords() {
    // const dev = process.env.NODE_ENV !== 'production';
    // const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';

    return fetchJson(  'http://localhost:3000/api/getPasswords', {
        method: 'GET'
    });
}