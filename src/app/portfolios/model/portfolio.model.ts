import { Security } from './security.model';

export interface Portfolio {
    key?: any;
    name?: string;
    securities?: Security[];
    investment?: number;
  }