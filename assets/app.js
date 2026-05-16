const fixtureData = {
  product: "queue_sentinel",
  mode: "fixture",
  track: "special ops",
  proofGrade: 81,
  opsSnapshot: {
    urwebSentToday: 16,
    urwebJudgePassed: 11,
    mailcowQueueRequests: 493,
    tellsQualifiedPaid: "0 / 0",
    topTimers: [
      "urweb-delivery.timer",
      "urweb-sender.timer",
      "urweb-health.timer",
      "urweb-approval.timer",
      "urweb-customer-support.timer",
      "urweb-closer.timer"
    ]
  },
  triage: {
    run_now: [
      {
        title: "Push urweb back toward viable send volume",
        why: "The doctrine sets 125-150 quality sends/day as the target once active. The live status only shows 16 sent today and 11 judge-passed leads ready."
      },
      {
        title: "Protect the shared mail lane before adding more bulk traffic",
        why: "Mailcow is carrying 493 queued requests while tells still shows zero paid conversions and large deferred/dropped counts."
      },
      {
        title: "Keep Queue Sentinel in fixture mode until sponsor-tech proof exists",
        why: "The lane is worth building, but the Microsoft-backed mode is still missing a real authenticated run."
      }
    ],
    repair_now: [
      {
        title: "Increase judged urweb stock",
        why: "Raw lead volume exists, but sendable stock and deliverability health are still too weak."
      },
      {
        title: "Re-check tells channel allocation",
        why: "Bulk tells activity should not keep consuming shared mail capacity while it produces no qualified or paid signal."
      }
    ],
    defer: [
      {
        title: "Any Copilot Studio success claim",
        why: "No authenticated Microsoft run has been captured yet."
      },
      {
        title: "Hackathon submission language",
        why: "The lane has fixture proof only, not a sponsor-tech proof package."
      }
    ],
    owner_only: [
      {
        title: "Surface stale owner-blocked items from the roadmap",
        why: "Several late-April blockers remain unresolved and the roadmap requires explicit escalation after day 6."
      },
      {
        title: "Escalate only if Microsoft setup hits 2FA, payment, or identity walls",
        why: "A free support@voiddo.com setup is autonomous. Owner-only gates still apply when personal auth or money is required."
      }
    ]
  },
  evidence: [
    {
      path: "/root/.codex/memories/voiddo-live-ops-status.md",
      claim: "Current ops state shows revenue pressure and queue pressure at the same time.",
      proof: [
        "urweb sent_today=16",
        "urweb judge_passed=11",
        "Mailcow queue=493 requests",
        "tells wide paid=0"
      ]
    },
    {
      path: "/root/voiddo-ops/state/voiddo-codex-jobs.json",
      claim: "The daemon queue is still dense, so handoff needs a safe split instead of another generic to-do list.",
      proof: [
        "top active priority=88 browser-extension-autonomy-contour",
        "continuous scout/build/growth jobs all remain queued or retrying"
      ]
    },
    {
      path: "/root/.codex/memories/voiddo-autonomy-revenue-doctrine.md",
      claim: "Revenue-aware rules explicitly prioritize urweb volume repair and mail-lane protection over cosmetic exploration.",
      proof: [
        "125-150/day urweb target",
        "high backpressure must be diagnosed before more bulk send",
        "bulk tells outreach may pause if it harms a better money lane"
      ]
    },
    {
      path: "/root/voiddo-ops/reports/codex-daemon/20260513-132208-fast-money-scout-and-action-loop.md",
      claim: "Agent Academy is a real lane, but the correct truth state is local-first prep only.",
      proof: [
        "Queue Sentinel selected",
        "Special Ops target",
        "Copilot Studio proof path first",
        "no sponsor-tech claim yet"
      ]
    },
    {
      path: "/root/.claude/projects/-root-scrb/memory/ROADMAP.md",
      claim: "Owner-only escalation detection is grounded in the roadmap POKE LIST, not in a vague reminder system.",
      proof: [
        "rankd CWS URL missing since 2026-04-27",
        "jobmeta CWS URL missing since 2026-04-27",
        "Rewardful credentials missing since 2026-04-27"
      ]
    }
  ],
  outputContract: [
    "run_now",
    "repair_now",
    "defer",
    "owner_only",
    "revenue_risks",
    "handoff_packet"
  ],
  handoffPacket: {
    operator_summary: "Keep the money lane centered on urweb throughput and mail-lane protection. Queue Sentinel is real only in fixture mode until Copilot Studio proof exists.",
    next_best_operator: "ops builder or Copilot Studio integrator",
    do_not_claim: [
      "working Microsoft-backed agent",
      "Copilot Studio integration complete",
      "hackathon submission ready"
    ],
    next_proof_trigger: "Sign into a real Copilot Studio environment with support@voiddo.com, recreate this fixture scenario, capture one authenticated test run that emits the same structured output contract, and store the screenshot plus transcript in this folder."
  },
  proofPlan: [
    {
      label: "real now",
      title: "fixture mode is support-demo-safe",
      body: "The local artifact is deterministic, evidence-linked, and ready to show. It never pretends a Microsoft product was already in the loop."
    },
    {
      label: "blocked",
      title: "copilot studio still needs proof",
      body: "There is no authenticated screenshot, transcript, or structured-output capture from a real Copilot Studio run yet."
    },
    {
      label: "exact next trigger",
      title: "one authenticated Copilot Studio run",
      body: "The next milestone is not more copy. It is one saved Microsoft-backed run using support@voiddo.com and the same contract: run_now, repair_now, defer, owner_only, revenue_risks, handoff_packet."
    }
  ]
};

const fixtureBtn = document.querySelector("#fixtureBtn");
const copilotBtn = document.querySelector("#copilotBtn");
const modeSummary = document.querySelector("#modeSummary");
const triageGrid = document.querySelector("#triageGrid");
const snapshotBox = document.querySelector("#snapshotBox");
const evidenceList = document.querySelector("#evidenceList");
const contractList = document.querySelector("#contractList");
const handoffBox = document.querySelector("#handoffBox");
const proofCards = document.querySelector("#proofCards");
const proofGrade = document.querySelector("#proofGrade");
const modeBadge = document.querySelector("#modeBadge");
const copilotState = document.querySelector("#copilotState");
const queuePressure = document.querySelector("#queuePressure");
const urwebToday = document.querySelector("#urwebToday");
const mailcowState = document.querySelector("#mailcowState");

function renderFixtureMode() {
  fixtureBtn.classList.add("active");
  copilotBtn.classList.remove("active");
  fixtureBtn.setAttribute("aria-selected", "true");
  copilotBtn.setAttribute("aria-selected", "false");
  modeSummary.className = "mode-summary pass";
  modeSummary.innerHTML = `
    <strong>fixture mode is active</strong>
    <p>This slice is real right now because it stays deterministic. The triage output below is derived from stored vøiddo ops evidence and keeps the sponsor-tech line blocked until an authenticated run exists.</p>
  `;

  triageGrid.innerHTML = `
    ${renderColumn("run now", fixtureData.triage.run_now)}
    ${renderColumn("repair now", fixtureData.triage.repair_now)}
    ${renderColumn("defer + owner-only", [...fixtureData.triage.defer, ...fixtureData.triage.owner_only])}
  `;
}

function renderBlockedCopilotMode() {
  copilotBtn.classList.add("active");
  fixtureBtn.classList.remove("active");
  copilotBtn.setAttribute("aria-selected", "true");
  fixtureBtn.setAttribute("aria-selected", "false");
  modeSummary.className = "mode-summary blocked";
  modeSummary.innerHTML = `
    <strong>Copilot Studio mode is intentionally blocked</strong>
    <p>The next step is one authenticated run, not a mock. Until that exists, the safe behavior is to show the proof gap instead of inventing a Microsoft-backed agent claim.</p>
  `;

  triageGrid.innerHTML = `
    <article class="triage-column">
      <small>missing proof</small>
      <h3>capture required</h3>
      <ul>
        <li><strong>agent configuration screenshot</strong><p>show the real Copilot Studio setup.</p></li>
        <li><strong>test-run transcript</strong><p>show the operator prompt and the structured response.</p></li>
        <li><strong>output contract parity</strong><p>the Microsoft path must emit the same six fields as fixture mode.</p></li>
      </ul>
    </article>
    <article class="triage-column">
      <small>still usable</small>
      <h3>what remains real</h3>
      <ul>
        <li><strong>support demo</strong><p>the local-first artifact is still valid for architecture and product storytelling.</p></li>
        <li><strong>triage contract</strong><p>the schema is already fixed enough to port.</p></li>
        <li><strong>evidence chain</strong><p>the current vøiddo files already provide a grounded scenario.</p></li>
      </ul>
    </article>
    <article class="triage-column">
      <small>do not claim</small>
      <h3>red lines</h3>
      <ul>
        ${fixtureData.handoffPacket.do_not_claim.map((line) => `<li><strong>${line}</strong><p>blocked until the authenticated run lands in this folder.</p></li>`).join("")}
      </ul>
    </article>
  `;
}

function renderColumn(title, items) {
  return `
    <article class="triage-column">
      <small>${title}</small>
      <h3>${title}</h3>
      <ul>
        ${items.map((item) => `
          <li>
            <strong>${item.title}</strong>
            <p>${item.why}</p>
          </li>
        `).join("")}
      </ul>
    </article>
  `;
}

function renderEvidence() {
  snapshotBox.textContent = JSON.stringify({
    mode: fixtureData.mode,
    urweb_sent_today: fixtureData.opsSnapshot.urwebSentToday,
    urweb_judge_passed: fixtureData.opsSnapshot.urwebJudgePassed,
    mailcow_queue_requests: fixtureData.opsSnapshot.mailcowQueueRequests,
    top_timers: fixtureData.opsSnapshot.topTimers,
    sponsor_mode: "blocked_until_authenticated_capture"
  }, null, 2);

  evidenceList.innerHTML = fixtureData.evidence.map((item) => `
    <article class="evidence-card">
      <code>${item.path}</code>
      <strong>${item.claim}</strong>
      <p>${item.proof.join(" · ")}</p>
    </article>
  `).join("");
}

function renderContract() {
  contractList.innerHTML = fixtureData.outputContract.map((item) => `
    <div class="contract-chip">${item}</div>
  `).join("");

  handoffBox.textContent = JSON.stringify(fixtureData.handoffPacket, null, 2);
}

function renderProofCards() {
  proofCards.innerHTML = fixtureData.proofPlan.map((item) => `
    <article class="proof-card ${item.label === "blocked" ? "blocked" : ""}">
      <small>${item.label}</small>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `).join("");
}

function renderShell() {
  proofGrade.textContent = String(fixtureData.proofGrade);
  modeBadge.textContent = fixtureData.mode;
  copilotState.textContent = "blocked";
  queuePressure.textContent = `${fixtureData.opsSnapshot.mailcowQueueRequests} requests`;
  urwebToday.textContent = `${fixtureData.opsSnapshot.urwebSentToday} sent`;
  mailcowState.textContent = `${fixtureData.opsSnapshot.mailcowQueueRequests} requests`;
}

fixtureBtn.addEventListener("click", renderFixtureMode);
copilotBtn.addEventListener("click", renderBlockedCopilotMode);

renderShell();
renderFixtureMode();
renderEvidence();
renderContract();
renderProofCards();
