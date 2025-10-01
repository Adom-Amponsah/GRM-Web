"use client";

import { useCallback, useState } from "react";

export function useToggle(initial = false) {
  const [on, setOn] = useState<boolean>(initial);
  const toggle = useCallback(() => setOn((v) => !v), []);
  const setTrue = useCallback(() => setOn(true), []);
  const setFalse = useCallback(() => setOn(false), []);

  return { on, toggle, setTrue, setFalse } as const;
}
