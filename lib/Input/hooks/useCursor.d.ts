import { Ref } from 'vue';
export default function useCursor(input: Ref<HTMLInputElement | HTMLTextAreaElement | undefined>): {
    recordCursor: () => void;
    setCursor: () => void;
    getCursor: () => number | undefined;
    selectionRef: Ref<{
        selectionStart?: number;
        selectionEnd?: number;
        value?: string;
        beforeTxt?: string;
        afterTxt?: string;
    } | undefined, {
        selectionStart?: number;
        selectionEnd?: number;
        value?: string;
        beforeTxt?: string;
        afterTxt?: string;
    } | undefined>;
};
