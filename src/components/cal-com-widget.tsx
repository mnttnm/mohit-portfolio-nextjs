import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalComWidget() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "call-with-mohit-tater",
      });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "week_view",
      });
    })();
  }, []);
  return (
    <button
      data-cal-namespace="call-with-mohit-tater"
      data-cal-link="tatermohit/call-with-mohit-tater"
      data-cal-config='{"layout":"week_view"}'
      className="rounded-full w-full px-6 py-2 bg-gray-900 dark:bg-white/10 text-white dark:text-white/80 text-center
              hover:bg-gray-800
              hover:scale-110
              focus:scale-110
              active:scale-105
              transition
            "
    >
      Book A call
    </button>
  );
}
