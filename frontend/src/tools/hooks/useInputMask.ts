import {
    ChangeEvent,
    useEffect,
    useState,
} from 'react';

import {
    capitalize,
} from 'tools/functions';

type IMask = (RegExp | string)[];

interface IParams {
    value: string;
    mask: IMask;

    withCapitalization?: boolean;
    withDisplayingStartStaticMask?: boolean;

    shouldChange?(value: string): boolean;
    onChange?(value: string): void;
}

function getStartStaticMaskValue(mask: IMask): string {
    let startStaticMaskValue = '';

    for (let i = 0; i < mask.length; ++i) {
        const maskSymbol = mask[i];

        if (maskSymbol instanceof RegExp) {
            break;
        } else {
            startStaticMaskValue += maskSymbol;
        }
    }

    return startStaticMaskValue;
}

export default function(params: IParams) {
    const [value, setValue] = useState(params.value);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        function setCursorPosition(i: number | null): void {
            setImmediate(() => {
                e.target.selectionStart = i;
                e.target.selectionEnd = i;
            });
        }

        const inputValue = e.target.value;
        const inputSymbols = inputValue.split('');
        const {
            mask, withCapitalization,
        } = params;
        const {
            selectionStart,
        } = e.target;
        let newValue = '';
        let currentSymbolIndex = 0;

        const startStaticMaskValue = getStartStaticMaskValue(mask);

        if (startStaticMaskValue) {
            if (startStaticMaskValue.startsWith(inputValue)) {
                setValue(startStaticMaskValue);
                params.onChange?.('');

                return;
            }
        }

        for (let i = 0; i < mask.length; ++i) {
            const maskSymbol = mask[i];
            const symbol = inputSymbols[currentSymbolIndex];

            if (maskSymbol instanceof RegExp) {
                if (symbol === undefined) {
                    break;
                }
                if (maskSymbol.test(symbol)) {
                    if (currentSymbolIndex === 0 && withCapitalization) {
                        newValue += capitalize(symbol);
                    } else {
                        newValue += symbol;
                    }

                    currentSymbolIndex += 1;
                } else {
                    currentSymbolIndex += 1;
                    i -= 1;

                    setCursorPosition(selectionStart);
                }
            } else {
                newValue += maskSymbol;

                if (symbol === maskSymbol) {
                    currentSymbolIndex += 1;
                } else {
                    if (value.startsWith(newValue)) {
                        setCursorPosition(selectionStart);
                    }
                }
            }
        }

        const isRemovingSymbols = value.startsWith(newValue);

        if (isRemovingSymbols) {
            let simpleEndingMaskSymbolsCount = 0;

            for (let i = newValue.length - 1; i >= 0; --i) {
                if (mask[i] instanceof RegExp) {
                    break;
                }

                simpleEndingMaskSymbolsCount += 1;
            }

            newValue = newValue.slice(0, newValue.length - simpleEndingMaskSymbolsCount);
        }
        if (params.shouldChange) {
            if (!params.shouldChange(newValue)) {
                return;
            }
        }

        setValue(newValue);
        params.onChange?.(newValue);
    };
    const onFocus = () => {
        if (params.withDisplayingStartStaticMask) {
            return;
        }

        const {
            mask,
        } = params;
        const startStaticMaskValue = getStartStaticMaskValue(mask);

        if (!value) {
            setValue(startStaticMaskValue);
            params.onChange?.(startStaticMaskValue);
        }
    };
    const onBlur = () => {
        if (params.withDisplayingStartStaticMask) {
            return;
        }

        const {
            mask,
        } = params;
        const startStaticMaskValue = getStartStaticMaskValue(mask);

        if (value === startStaticMaskValue) {
            setValue('');
            params.onChange?.('');
        }
    };

    useEffect(() => {
        if (params.withDisplayingStartStaticMask) {
            const startStaticMaskValue = getStartStaticMaskValue(params.mask);

            if (!value) {
                setValue(startStaticMaskValue);
                params.onChange?.('');
            }
        }
    }, []);

    return {
        value,
        setValue,
        inputProps: {
            onChange,
            onFocus,
            onBlur,
        },
    };
}
