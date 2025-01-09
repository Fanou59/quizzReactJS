import { premiereGuerre } from "./premiereGuerre";
import { revisionHistoire } from "./revisionHistoire";
import { dynamiqueTerritoriales } from "./dynamiqueTerritoriales";
import { revisionGeographie } from "./revisionGeographie";
import { vivant } from "./questions_vivant_organisation";
import { interactions } from "./questions_interactions_milieux";
import { corpsHumain } from "./questions_corps_humain_sante";

export const themes = [
  { name: "La Première Guerre", value: premiereGuerre },
  { name: "Révision histoire 6è > 4è", value: revisionHistoire },
  { name: "Dynamique territoriales", value: dynamiqueTerritoriales },
  { name: "Révision géographie 6è > 4è", value: revisionGeographie },
  { name: "Le vivant et son organisation", value: vivant },
  {
    name: "Interactions entre les êtres vivants et leur milieu",
    value: interactions,
  },
  { name: "Le corps humain et la santé", value: corpsHumain },
];
