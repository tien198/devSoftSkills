import { useEffect, useState } from "react";
import styles from "./FeBenk.module.css";

export function FeBenk() {
  const [fps, setFps] = useState<number>();
  const [fpsStat, setFpsStat] = useState(styles["bad"]);

  useEffect(() => {
    function measureFPS(duration = 1000): Promise<number> {
      return new Promise((resolve) => {
        let frames = 0;
        const start = performance.now();

        function tick() {
          frames++;
          if (performance.now() - start < duration) {
            requestAnimationFrame(tick);
          } else {
            resolve(frames);
          }
        }

        requestAnimationFrame(tick);
      });
    }
    (async function () {
      const fps = await measureFPS();
      setFps(fps);
      if (fps >= 54) {
        setFpsStat(styles["good"]);
        // statusCanRunCanvas = "good";
      } else if (fps >= 45) {
        setFpsStat(styles["warning"]);
        // statusCanRunCanvas = "warning";
      } else {
        setFpsStat(styles["bad"]);
      }
    })();
  }, [setFps, setFpsStat]);
  return (
    <div className={styles["container"]}>
      <span>Thiết kế website chuyên nghiệp</span>
      <div>
        Measured FPS: <strong className={fpsStat}>{fps ?? "..."}</strong> / s
      </div>
    </div>
  );
}
