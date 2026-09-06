export interface DiagramNode {
  id: string;
  label: string;
  what: string;
  why: string;
  security?: string;
  monitoring?: string;
  commonProblems?: string;
}
