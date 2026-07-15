declare module '@apiverve/tenseconverter' {
  export interface tenseconverterOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface tenseconverterResponse {
    status: string;
    error: string | null;
    data: TenseConverterData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface TenseConverterData {
      tense:   null | string;
      result:  null | string;
      changed: boolean | null;
  }

  export default class tenseconverterWrapper {
    constructor(options: tenseconverterOptions);

    execute(callback: (error: any, data: tenseconverterResponse | null) => void): Promise<tenseconverterResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: tenseconverterResponse | null) => void): Promise<tenseconverterResponse>;
    execute(query?: Record<string, any>): Promise<tenseconverterResponse>;
  }
}
