const base = import.meta.env.BASE_URL;

export function p(path: string): string {
  const clean = path.replace(/^\//, '');
  return base.endsWith('/') ? `${base}${clean}` : `${base}/${clean}`;
}

export function asset(file: string): string {
  const clean = file.replace(/^\//, '');
  return base.endsWith('/') ? `${base}${clean}` : `${base}/${clean}`;
}
