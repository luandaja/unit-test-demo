export namespace MockFactory {
  export function generateMany<T extends Object>({
    length,
    demoObject,
  }: {
    length: number;
    demoObject: T;
  }): T[] {
    const demoValues = Object.values(demoObject);
    const baseModel = Object.keys(demoObject).reduce(
      (p, c, i, arr) => ({ ...p, [c]: `${demoValues[i]}_${i}` }),
      {} as T
    );

    const result = (Array(length) as T[])
      .fill(baseModel)
      .map((x, i) =>
        Object.keys(x as Object).reduce(
          (p, c, i, arr) => ({ ...p, [c]: `${c}_${i}` }),
          {} as T
        )
      );
    return result;
  }
  export function generateOne<T extends Object>(
    params: Parameters<typeof generateMany<T>>
  ): T {
    const result = generateMany<T>({ ...params[0], length: 1 });
    return result[0];
  }
}
