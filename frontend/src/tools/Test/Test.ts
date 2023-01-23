import {
    IDispatchEventParams,
    IFunction,
    IMockFetchParams,
} from 'tools/Test/types';

import pretty from 'pretty';
import {
    ElementType,
    ReactElement,
} from 'react';
import {
    render,
    unmountComponentAtNode,
} from 'react-dom';
import {
    act,
} from 'react-dom/test-utils';

class Test {
    public static createContainer(): HTMLDivElement {
        const container = document.createElement('div');

        document.body.appendChild(container);

        return container;
    }

    public static removeContainer(container: HTMLDivElement): null {
        unmountComponentAtNode(container);
        container.remove();

        return null;
    }

    public static render<IProps>(element: ReactElement<IProps>, container: HTMLDivElement): void {
        render(element, container);
    }

    public static act(cb: () => void): void;
    public static act(cb: () => Promise<void>): Promise<void>;
    public static act(cb: () => void | Promise<void>): void | Promise<void> {
        // @ts-ignore
        return act(cb);
    }

    public static mockFetch<IBody>(params: IMockFetchParams<IBody>): void {
        jest.spyOn(global, 'fetch').mockImplementation(() => {
            const res: Response = {
                body: null,
                bodyUsed: false,
                // @ts-ignore
                headers: {
                    append() {
                        return;
                    },
                    delete() {
                        return;
                    },
                    get(name) {
                        const header = params.headers
                            ?.find(([headerName]) => headerName === name);

                        return header?.[0] || null;
                    },
                    has(name) {
                        return params.headers?.some(([headerName]) => headerName === name) || false;
                    },
                    set() {
                        return;
                    },
                    forEach() {
                        return;
                    },
                },
                ok: params.code < 400,
                redirected: params.code >= 300 && params.code < 400,
                status: params.code,
                statusText: '',
                type: 'default',
                url: '',
                async arrayBuffer() {
                    return new ArrayBuffer(0);
                },
                async blob() {
                    return new Blob();
                },
                async formData() {
                    return params.formData || new FormData();
                },
                async json() {
                    return params.body;
                },
                async text() {
                    return params.text || '';
                },
                clone() {
                    return this;
                },
            };

            return Promise.resolve(res);
        });
    }

    public static mockComponent<IProps>(path: string, mockComponent: ElementType<IProps>): void {
        jest.mock(path, () => {
            return mockComponent;
        });
    }

    public static mockFunction<IArgs extends any[], IRes>(fn?: IFunction<IArgs, IRes>): IFunction<IArgs, IRes> {
        return jest.fn<IRes, IArgs>(fn);
    }

    public static getElementByTestId(testId: string): HTMLElement | null {
        return document.querySelector(`[data-testid='${testId}']`);
    }

    public static dispatchEvent(element: HTMLElement | null, params: IDispatchEventParams): void {
        switch (params.type) {
            case 'click': {
                element?.dispatchEvent(new MouseEvent('click', {
                    bubbles: true,
                }));
            }
        }
    }

    public static getSnapshot(container: HTMLDivElement): string {
        return pretty(container.innerHTML);
    }
}

export default Test;
