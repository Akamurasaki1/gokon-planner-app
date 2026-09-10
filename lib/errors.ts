export class AppError extends Error {
  constructor(message: string, public code: string = "APP_ERROR") {
    super(message);
  }
}

export function toMessage(error: unknown): string {
  if (error instanceof AppError) return error.message;
  if (error instanceof Error) return error.message;
  return "予期せぬエラーが発生しました";
}
