import { Logger } from '@nestjs/common';

export function Logging(logger: Logger): MethodDecorator {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (!logger) {
        throw new Error('Logger is not defined on the target class');
      }

      // before the original method
      logger.log(
        `start ${propertyName} with arguments: ${JSON.stringify(args)}`,
      );
      console.log(target);
      // call the original method
      const result = originalMethod.apply(this, args);

      // after the original method
      if (result instanceof Promise) {
        return result.finally(() => {
          logger.log(`end ${propertyName}`);
        });
      }
      logger.log(`end ${propertyName}`);
      return result;
    };

    return descriptor;
  };
}
