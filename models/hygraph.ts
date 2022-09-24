import { DailyMotion, Flickr, Github, LinkedIn } from "@icons";

// Hydration type
export interface HygraphModel {
  hygraphData: HygraphTree;
}

// Consumable type
export type HygraphTree = Partial<HygraphData>;

// Complete model
export interface HygraphData {
  ariaLabels: AriaLabel[];
  metaTags: MetaTag[];
  navLinks: NavLink[];
  footerLinks: FooterLink[];
  jobs: Job[];
  skipLinks: SkipLink[];
  languages: Language[];
  heroes: Hero[];
}

// Models
export interface AriaLabel {
  id: string;
  component: Components;
  content: string;
  metadata: string;
}

export interface MetaTag {
  name: string;
  content: string;
}

export interface NavLink {
  text: string;
  url: string;
  order: number;
}

export interface FooterLink {
  url: string;
  icon: keyof typeof ICON_MAP;
  isActive: boolean;
  ariaLabel: string;
}

export interface Job {
  companyName: string;
  companyDescription?: string;
  startDate: string;
  endDate?: string;
  jobDescription: string;
  programmingLanguages: ProgrammingLanguages[];
  librariesAndFrameworks: LibrariesAndFrameworks[];
  testingTools: TestingTools[];
  tooling: Tooling[];
}

export interface SkipLink {
  text: string;
}

export interface Language {
  code: string;
  displayName: string;
  isActive: boolean;
}

export interface Hero {
  title: string;
  subtitle?: string;
}

// Enums
export enum Components {
  ColorModeSwitcher = "ColorModeSwitcher",
  NavLinks = "NavLinks",
  LanguageSelector = "LanguageSelector",
}

export enum ProgrammingLanguages {
  Javascript = "Javascript",
  PHP = "PHP",
  Python = "Python",
  Typescript = "Typescript",
}

export enum LibrariesAndFrameworks {
  Angular = "Angular",
  Bootstrap = "Bootstrap",
  Chakra = "Chakra",
  Express = "Express",
  Falcon = "Falcon",
  Flask = "Flask",
  JQuery = "JQuery",
  Less = "Less",
  Lit = "Lit",
  Material = "Material",
  Mongoose = "Mongoose",
  Next = "Next",
  Node = "Node",
  Peewee = "Peewee",
  React = "React",
  Redux = "Redux",
  Sass = "Sass",
  Solid = "Solid",
  Svelte = "Svelte",
  Vue = "Vue",
}

export enum TestingTools {
  Chai = "Chai",
  Jasmine = "Jasmine",
  Jest = "Jest",
  Karma = "Karma",
  Mocha = "Mocha",
  Protractor = "Protractor",
  TestingLibrary = "Testing_Library",
  Vitest = "Vitest",
}

export enum Tooling {
  Babel = "Babel",
  Closure = "Closure",
  Gulp = "Gulp",
  Parcel = "Parcel",
  Rollup = "Rollup",
  Vite = "Vite",
  Webpack = "Webpack",
}

export const ICON_MAP = {
  github: Github,
  linkedin: LinkedIn,
  flickr: Flickr,
  dailyMotion: DailyMotion,
};
