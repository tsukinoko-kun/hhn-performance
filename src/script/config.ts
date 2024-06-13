import { join } from "node:path/posix";

export function pub(resource: string): string {
    return join(import.meta.env.BASE_URL, resource);
}
