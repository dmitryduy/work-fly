const compose = (...functions) => x => functions.reduceRight((res, fn) => fn(res), x)