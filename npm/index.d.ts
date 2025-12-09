declare module '@apiverve/tenseconverter' {
  export interface tenseconverterOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface tenseconverterResponse {
    status: string;
    error: string | null;
    data: TenseConverterData;
    code?: number;
  }


  interface TenseConverterData {
      tense:   string;
      result:  string;
      changed: boolean;
  }

  export default class tenseconverterWrapper {
    constructor(options: tenseconverterOptions);

    execute(callback: (error: any, data: tenseconverterResponse | null) => void): Promise<tenseconverterResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: tenseconverterResponse | null) => void): Promise<tenseconverterResponse>;
    execute(query?: Record<string, any>): Promise<tenseconverterResponse>;
  }
}
