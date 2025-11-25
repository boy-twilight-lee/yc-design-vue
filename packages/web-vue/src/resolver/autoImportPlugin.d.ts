export interface ComponentInfo {
  name: string;
  from: string;
  as: string;
  sideEffects?: string | string[];
}

export interface ComponentResolver {
  type: 'component';
  resolve: (name: string) => ComponentInfo | undefined | null;
}

export interface YcDesignVueResolverOptions {
  exclude?: string | RegExp | (string | RegExp)[];
  sideEffect?: boolean;
}

export declare const YcDesignVueResolver: (
  options?: YcDesignVueResolverOptions
) => ComponentResolver;
