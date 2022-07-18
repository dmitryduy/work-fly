import i18nFactory from '../index';

const keySet = {
  ru: {
    привет: 'привет',
    тест: 'тест',
    пусто: 'пусто',
  },
  en: {
    привет: 'hello',
    тест: 'test',
    пусто: 'empty',
  },
};

const i18n = i18nFactory(keySet);

describe('i18n translate', () => {
  it('should return ru values', () => {
    window.lang = 'ru';

    expect(i18n('привет')).toEqual('привет');
    expect(i18n('тест')).toEqual('тест');
    expect(i18n('пусто')).toEqual('пусто');
  });

  it('should return en values', () => {
    window.lang = 'en';

    expect(i18n('привет')).toEqual('hello');
    expect(i18n('тест')).toEqual('test');
    expect(i18n('пусто')).toEqual('empty');
  });

  it('should return same word if this word does not exist in keyset', () => {
    window.lang = 'en';

    expect(i18n('nothing')).toBe('nothing');

    window.lang = 'ru';

    expect(i18n('что то')).toBe('что то');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.lang = 'es';

    expect(i18n('ничего')).toBe('ничего');
  });
});
