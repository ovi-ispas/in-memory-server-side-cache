// Borrowed & modified from https://github.com/jenseng/abuse-the-platform/blob/main/app/utils/singleton.ts
// Thanks @jenseng!

/* We use this so that data does not get reset in development,
when HDR triggers revalidations due to server-side code changes */

export const singleton = <Value>(
  name: string,
  valueFactory: () => Value
): Value => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const g = global as any
  g.__singletons ??= {}
  g.__singletons[name] ??= valueFactory()
  return g.__singletons[name]
}
