import { join, relative } from "node:path/posix"

export function pub(resource: string): string {
    return join(import.meta.env.BASE_URL, resource)
}

export function unpub(pathname: string): string {
    return relative(import.meta.env.BASE_URL, pathname)
}
