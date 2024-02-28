import { createContext, useEffect, useState } from "react";
import featuredFlagsDataServiceCall from "../data";

export const FeaturedFlagsContext = createContext(null);

export default function FeaturedFlagsGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeaturedFlags() {
    try {
      setLoading(true);
      // original service call fetch from data.js
      const res = await featuredFlagsDataServiceCall();
      console.log(res);
      setEnabledFlags(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeaturedFlags();
  }, []);

  return (
    <FeaturedFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeaturedFlagsContext.Provider>
  );
}
