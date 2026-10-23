"use client";
import { useEffect, useState } from "react";

// Starts with local data (instant), then swaps in the server's data when it arrives.
export default function useApi(fetcher, initial) {
  const [data, setData] = useState(initial);
  useEffect(() => {
    let alive = true;
    fetcher().then((d) => alive && setData(d));
    return () => { alive = false; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return data;
}
