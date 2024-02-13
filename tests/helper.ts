//
// Cognica
//
// Copyright (c) 2023-2024 Cognica
//

export function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
