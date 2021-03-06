const BASE_URL = process.env.REACT_APP_API_URL;
export const Api = {
  get: async (endpoint: string, token?: string) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    const json = await res.json();
    return { res, json };
  },
  post: async (endpoint: string, data: any) => {
    const r = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: data.headers,
      body: data.body,
    });
    const json = await r.json();
    return {
      r,
      json,
    };
  },
  put: async (endpoint: string, data: any) => {
    const r = await fetch(`${BASE_URL}${endpoint}`, {
      method: "PUT",
      headers: data.headers,
      body: data.body,
    });
    const json = await r.json();
    return {
      r,
      json,
    };
  },
  delete: async (endpoint: string, dados: any) => {
    const r = await fetch(`${BASE_URL}${endpoint}`, {
      method: "DELETE",
      headers: dados.headers,
      body: dados.body,
    });
    const json = await r.json();
    return { r, json };
  },
};
