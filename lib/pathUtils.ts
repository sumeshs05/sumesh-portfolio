// Minimal dot/bracket path helpers for editing the content JSON tree.
// Paths look like "hero.headline" or "experience.2.bullets.0" or
// "caseStudies.0.sections.1.body.0".

export type PathSegment = string | number;

export function parsePath(path: string): PathSegment[] {
  return path.split(".").map((seg) => (/^\d+$/.test(seg) ? Number(seg) : seg));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setByPath(obj: any, path: string, value: unknown): any {
  const segments = parsePath(path);
  const clone = structuredClone(obj);
  let cursor = clone;
  for (let i = 0; i < segments.length - 1; i++) {
    cursor = cursor[segments[i]];
  }
  cursor[segments[segments.length - 1]] = value;
  return clone;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function pushByPath(obj: any, path: string, item: unknown): any {
  const segments = parsePath(path);
  const clone = structuredClone(obj);
  let cursor = clone;
  for (const seg of segments) {
    cursor = cursor[seg];
  }
  (cursor as unknown[]).push(item);
  return clone;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function removeByPath(obj: any, path: string, index: number): any {
  const segments = parsePath(path);
  const clone = structuredClone(obj);
  let cursor = clone;
  for (const seg of segments) {
    cursor = cursor[seg];
  }
  (cursor as unknown[]).splice(index, 1);
  return clone;
}
