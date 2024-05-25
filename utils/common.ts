import { CoordsInit, PointsInit } from "@/types/Plot";

export const distance: 
(Coords1: CoordsInit, Coords2: CoordsInit) => number = 
(Coords1, Coords2) => {
  return Math.sqrt(Math.pow(Coords2.x - Coords1.x, 2) + Math.pow(Coords2.y - Coords1.y, 2));
};

export const getminMax = (element: PointsInit)  => {
  const Min: CoordsInit = { x: element.points[0].x, y: element.points[0].y };
  const Max: CoordsInit = { x: element.points[0].x, y: element.points[0].y };

  element.points.forEach((point) => {
    Min.x = Math.min(Min.x, point.x);
    Min.y = Math.min(Min.y, point.y);
    Max.x = Math.max(Max.x, point.x);
    Max.y = Math.max(Max.y, point.y);
  });

  return { Min, Max };
};
