import { premiereGuerre } from "./premiereGuerre";
import { revisionHistoire } from "./revisionHistoire";
import { dynamiqueTerritoriales } from "./dynamiqueTerritoriales";
import { revisionGeographie } from "./revisionGeographie";
import { vivant } from "./questions_vivant_organisation";
import { interactions } from "./questions_interactions_milieux";
import { corpsHumain } from "./questions_corps_humain_sante";
import { environnement } from "./questions_ressources_environnement";
import { metauxOQuotidien } from "./metauxEtQuotidien";
import { origineMatiere } from "./origineMatiere";
import { courantElectriques } from "./courantElectrique";
import { reconnaissanceIons } from "./reconnaissanceIons";
import { tourDuMonde } from "./tourDuMonde";
import { laSeigneurie } from "./seigneurie";

export const themes = [
  { discipline: "Histoire", name: "La Première Guerre", value: premiereGuerre },
  {
    discipline: "Histoire",
    name: "Révision histoire 6è > 4è",
    value: revisionHistoire,
  },
  {
    discipline: "Histoire",
    name: "La Seigneurie",
    value: laSeigneurie,
  },
  {
    discipline: "Géographie",
    name: "Dynamique territoriales",
    value: dynamiqueTerritoriales,
  },
  {
    discipline: "Géographie",
    name: "Révision géographie 6è > 4è",
    value: revisionGeographie,
  },
  { discipline: "SVT", name: "Le vivant et son organisation", value: vivant },
  {
    discipline: "SVT",
    name: "Interactions entre les êtres vivants et leur milieu",
    value: interactions,
  },
  {
    discipline: "SVT",
    name: "Le corps humain et la santé",
    value: corpsHumain,
  },
  {
    discipline: "SVT",
    name: "Ressources et environnement",
    value: environnement,
  },
  {
    discipline: "Chimie",
    name: "Métaux et quotidien",
    value: metauxOQuotidien,
  },
  {
    discipline: "Chimie",
    name: "Origine de la matière",
    value: origineMatiere,
  },
  {
    discipline: "Chimie",
    name: "Courant électrique",
    value: courantElectriques,
  },
  {
    discipline: "Chimie",
    name: "Reconnaissance des ions",
    value: reconnaissanceIons,
  },
  {
    discipline: "Livres",
    name: "Le tour du monde en 80 jours",
    value: tourDuMonde,
  },
];
