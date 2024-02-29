import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  async function fetchData() {
    setPending(true);
    try {
      const res = await fetch(url, { ...options });
      if (!res.ok) throw new Error(res.statusText);

      const data = await res.json();
      setData(data);
      setErrMsg(null);
      setPending(false);
    } catch (error) {
      setErrMsg(`${error}. Some Error Occured!`);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);


  return {data, errMsg, pending};
}
