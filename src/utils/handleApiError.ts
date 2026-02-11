import axios from 'axios';
import { AppError } from './appError';

type ApiErrorResponse = {
  message?: string;
};

export function handleApiError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error;
  }

  if (axios.isAxiosError(error)) {
    const message =
      (error.response?.data as ApiErrorResponse)?.message ??
      'Erro de comunicação com o servidor.';

    const statusCode = error.response?.status ?? 500;

    return new AppError(message, statusCode);
  }

  return new AppError('Erro inesperado.', 500);
}
