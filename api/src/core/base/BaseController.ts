/* eslint-disable no-console */
export abstract class BaseController {
  protected abstract executeImpl(req: any, res: any): Promise<void | any>;

  public async execute(req: any, res: any): Promise<void> {
    try {
      await this.executeImpl(req, res);
    } catch (err) {
      console.log(`[BaseController]: Uncaught controller error`);
      this.fail('An unexpected error occurred');
    }
  }

  public static jsonResponse(message: string) {
    return { message };
  }

  public ok<T>(dto?: T) {
    if (dto) {
      return dto;
    } else {
      return undefined;
    }
  }

  public created() {
    return true;
  }

  public clientError(message?: string) {
    return BaseController.jsonResponse(message || 'Unauthorized');
  }

  public unauthorized(message?: string) {
    return BaseController.jsonResponse(message || 'Unauthorized');
  }

  public forbidden(message?: string) {
    return BaseController.jsonResponse(message || 'Forbidden');
  }

  public notFound(message?: string) {
    return BaseController.jsonResponse(message || 'Not found');
  }

  public conflict(message?: string) {
    return BaseController.jsonResponse(message || 'Conflict');
  }

  public tooMany(message?: string) {
    return BaseController.jsonResponse(message || 'Too many requests');
  }

  public todo() {
    return BaseController.jsonResponse('TODO');
  }

  public fail(error: Error | any) {
    const res: any = {
      type: 'ERROR',
      message: error.message,
      details: error.details,
      httpCode: error.httpCode,
      data: error.error,
    };

    return res;
  }
}
