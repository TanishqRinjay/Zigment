// src/types/formSchema.ts

export interface Validation {
    pattern?: string;
    message?: string;
  }
  
  export interface Option {
    value: string;
    label: string;
  }
  
  export interface Field {
    id: string;
    type: "text" | "email" | "select" | "radio" | "textarea";
    label: string;
    required: boolean;
    placeholder?: string;
    options?: Option[];
    validation?: Validation;
  }
  
  export interface FormSchema {
    formTitle: string;
    formDescription: string;
    fields: Field[];
  }
  