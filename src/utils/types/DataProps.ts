export interface DataProps {
    data: {
      id: string;
      label: string;
      onChange(newLabel: string, id: string): void;
    };
  }