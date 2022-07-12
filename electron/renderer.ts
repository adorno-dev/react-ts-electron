type versions = {
    electron: string
}

// @ts-expect-error
const version: versions = window.preloaded

console.log(version.electron)