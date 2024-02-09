export const styles = [
  {
    name: "Galaxy UI",
    label: "Galaxy UI",
  },
] as const

export type Style = (typeof styles)[number]
