export enum MapPointTypes {
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}

export type TMapPoint = {
  title: string;
  date: string;
  active: boolean;
  type: MapPointTypes;
};
