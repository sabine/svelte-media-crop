import type { SvelteComponentTyped } from 'svelte';
import type { Point } from './crop_window/geometry';

type IWantToAcceptAComponent<T extends Record<string, any>> = new (
    ...args: any
) => SvelteComponentTyped<T>;

export type OverlayComponent<T> = IWantToAcceptAComponent<{
    options: T;
    shape: 'rect' | 'round';
    gesture_in_progress: boolean;
}>;

export type CropShape = 'rect' | 'round';

export type CropValue = {
    position: Point;
    aspect: number;
    rotation: number;
    scale: number;
};

export type Media = {
    content_type: 'image' | 'video';
    url: string;
};

export const defaultValue: CropValue = {
    position: { x: 0, y: 0 },
    aspect: 1.0,
    rotation: 0,
    scale: 0
};
