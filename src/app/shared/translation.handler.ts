import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';

export class TranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return `__${params.key}__`;
  }
}
