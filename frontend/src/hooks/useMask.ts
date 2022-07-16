import React, { useState } from "react";


const format = (value, mask) => {
  let currentValueIndex = 0;
  let lastReplacedIndex = -1;
  const filledMask = mask.replace(/#/g, (_, maskReplaceIndex) => {
    if (currentValueIndex >= value.length) {
      return '#';
    }
    lastReplacedIndex = maskReplaceIndex;
    return value[currentValueIndex++];
  });


  return filledMask.substring(0, lastReplacedIndex + 1);
};

const useMask = (mask: string) => {
  const [value, setValue] = useState<string>('');

  const changeValue = (e: React.FormEvent<EventTarget>) => {
    const input = e.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '');

    setValue(input.value);
  };

  return [format(value, mask), changeValue];
};

export default useMask;
