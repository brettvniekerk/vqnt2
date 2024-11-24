import { Href } from "@/types/general";

export const get = async (
  route: Href,
  jwt?: string,
  revalidate?: number,
  tag?: string
) => {
  const headers: Record<string, string> = {
    Accept: "application/json"
  };

  if (jwt) {
    headers["Authorization"] = `Bearer ${jwt}`;
  }

  return fetch(`${process.env.API_URL}${route}`, {
    method: "GET",
    headers,
    next: {
      revalidate,
      tags: !!tag ? [tag] : undefined
    }
  });
};

export const post = async (
  route: Href,
  body?: Record<string, unknown>,
  jwt?: string
) => {
  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  if (jwt) {
    headers["Authorization"] = `Bearer ${jwt}`;
  }

  const request: RequestInit = {
    method: "POST",
    headers,
    cache: "no-store"
  };

  if (!!body) {
    request.body = JSON.stringify(body);
  }

  return fetch(`${process.env.API_URL}${route}`, request);
};

export const patch = async (
  route: Href,
  body: Record<string, unknown>,
  jwt?: string
) => {
  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  if (jwt) {
    headers["Authorization"] = `Bearer ${jwt}`;
  }

  return fetch(`${process.env.API_URL}${route}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers,
    cache: "no-store"
  });
};

export const del = async (route: Href, jwt?: string) => {
  const headers: Record<string, string> = {
    Accept: "application/json"
  };

  if (jwt) {
    headers["Authorization"] = `Bearer ${jwt}`;
  }

  return fetch(`${process.env.API_URL}${route}`, {
    method: "DELETE",
    headers,
    cache: "no-store"
  });
};
