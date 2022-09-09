// Hygraph endpoint response
export type ApiResponse<T> = {
  ok: boolean;
  data: T | null;
  message: string;
  description?: string;
};
