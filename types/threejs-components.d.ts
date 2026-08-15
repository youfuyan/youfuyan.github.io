declare module "threejs-components/build/cursors/tubes1.min.js" {
  type TubesCursorOptions = {
    tubes: {
      colors: string[];
      lights: {
        intensity: number;
        colors: string[];
      };
    };
  };

  type TubesCursorInstance = {
    destroy?: () => void;
    dispose?: () => void;
    renderer?: {
      dispose?: () => void;
      setAnimationLoop?: (callback: null) => void;
    };
  };

  export default function createTubesCursor(
    canvas: HTMLCanvasElement,
    options: TubesCursorOptions,
  ): TubesCursorInstance;
}
