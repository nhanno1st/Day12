import { apiBaseUrl, defaultHeaders } from './apiConfig';
import type { Task } from './types';

const handleResponse = async (res: Response) => {
  if (!res.ok) throw new Error(await res.text());
  return await res.json();
};

export const getTasks = async (): Promise<Task[]> => {
  const res = await fetch(`${apiBaseUrl}/workspaces/tasks`, {
    headers: defaultHeaders,
    cache: 'no-store',
  });
  return handleResponse(res);
};

export const getTaskById = async (id: string | number): Promise<Task> => {
  const res = await fetch(`${apiBaseUrl}/workspaces/tasks/${id}`, {
    headers: defaultHeaders,
    next: { revalidate: 10 },
  });
  return handleResponse(res);
};
