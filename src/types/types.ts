export interface Challenge {
  title: string;
  description: string[];
  tags: string[];
  testCases: Record<string, any>;
}
