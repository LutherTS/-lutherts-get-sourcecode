export function Component({ prop }: { prop: any }) {
  // @ts-expect-error
  return <>{prop}</>;
}
