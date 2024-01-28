export enum FrameColors {
    Red = "red-100",
    Orange = "orange-100",
    Yellow = "yellow-100",
    Green = "green-100",
    Blue = "blue-100",
    Purple = "purple-100",
    Pink = "pink-100",
    Gray = "gray-100",
}

export interface Goal {
    id: number;
    title: string;
    description: string;
    frameColor: FrameColors;
    
    // completed: boolean;
}