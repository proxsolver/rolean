import styles from "@/app/page.module.css";
import type { Locale } from "@/domains/profile/i18n";

const copy = {
  ko: {
    state: "현장 → 실행 모델",
    core: "최적 의사결정",
    coreDetail: "데이터를 내일의 행동으로",
  },
  en: {
    state: "Floor → Action Model",
    core: "Optimal Decision",
    coreDetail: "Data into tomorrow's action",
  },
} as const;

export default function HeroSignalSystem({ locale }: { locale: Locale }) {
  const labels = copy[locale];

  return (
    <div className={styles.heroSystem} aria-hidden="true">
      <div className={styles.systemChrome}>
        <span>OPERATIONAL INTELLIGENCE / 01</span>
        <span className={styles.systemState}>
          <i /> {labels.state}
        </span>
      </div>

      <div className={styles.systemCanvas}>
        <svg
          className={styles.systemMap}
          viewBox="0 0 600 560"
          role="presentation"
          focusable="false"
        >
          <path d="M88 112 C190 112 190 246 286 270" />
          <path d="M68 280 C170 280 200 280 286 280" />
          <path d="M90 448 C190 448 200 322 286 296" />
          <path d="M374 280 C448 280 466 188 536 188" />
          <path d="M374 292 C448 304 462 390 536 390" />
        </svg>

        <div className={`${styles.systemNode} ${styles.nodeErp}`}>
          <span>01</span>
          <strong>ERP / MES</strong>
          <small>CONTEXT</small>
        </div>
        <div className={`${styles.systemNode} ${styles.nodeIot}`}>
          <span>02</span>
          <strong>PLC / IoT</strong>
          <small>SIGNAL</small>
        </div>
        <div className={`${styles.systemNode} ${styles.nodePeople}`}>
          <span>03</span>
          <strong>FLOOR</strong>
          <small>KNOW-HOW</small>
        </div>

        <div className={styles.decisionOrbit}>
          <div className={styles.decisionCore}>
            <span>OPTIMUM</span>
            <strong>{labels.core}</strong>
            <small>{labels.coreDetail}</small>
          </div>
        </div>

        <div className={`${styles.outputNode} ${styles.outputLoss}`}>
          <span>LOSS</span>
          <strong>SEE</strong>
        </div>
        <div className={`${styles.outputNode} ${styles.outputAction}`}>
          <span>ACTION</span>
          <strong>MOVE</strong>
        </div>

        <div className={styles.systemScanline} />
      </div>

      <div className={styles.systemLegend}>
        <span><i /> CONNECT</span>
        <span><i /> INTERPRET</span>
        <span><i /> ACT</span>
      </div>
    </div>
  );
}
