import { premiereGuerre } from "./premiereGuerre";
import { revisionHistoire } from "./revisionHistoire";
import { dynamiqueTerritoriales } from "./dynamiqueTerritoriales";
import { revisionGeographie } from "./revisionGeographie";
import { vivant } from "./questions_vivant_organisation";

export const themes = [
  { name: "La Première Guerre", value: premiereGuerre },
  { name: "Révision histoire 6è > 4è", value: revisionHistoire },
  { name: "Dynamique territoriales", value: dynamiqueTerritoriales },
  { name: "Révision géographie 6è > 4è", value: revisionGeographie },
  { name: "Le vivant et son organisation", value: vivant },
];
