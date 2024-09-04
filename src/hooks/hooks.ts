import {
  ActiveSession,
  useActiveSectionContext,
} from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useSectionInView = ({
  threshold,
  sectionName,
}: {
  sectionName: ActiveSession;
  threshold: number;
}) => {
  const { setActiveSession } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      setActiveSession(sectionName);
    }
  }, [ref, inView, setActiveSession]);

  return { ref };
};
