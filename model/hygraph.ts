// Complete model
export interface HygraphData {
  ariaLabels: AriaLabel[];
  metaTags: MetaTag[];
  navLinks: NavLink[];
  jobs: Job[];
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

// Enums
export enum Components {
  ColorModeSwitcher = "ColorModeSwitcher",
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
