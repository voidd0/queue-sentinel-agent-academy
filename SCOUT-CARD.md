# Agent Academy Hackathon

- URL: https://microsoft.github.io/agent-academy/events/hackathon/
- Entry period: `May 12, 2026 at 12:00 AM PT` to `June 2, 2026 at 11:59 PM PT`
- Prize pool: `$12,000` total in Microsoft Store gift cards
- Submission must include:
  - a working agent using at least one Microsoft product: `Copilot Studio`, `M365 Copilot`, or `Copilot Cowork`
  - demo video up to `5 minutes`
  - architecture overview
  - clear use case and target user
- Best-fit track: `Special Ops`
- Backup track: `Operative`
- Action: `submit_prep` (demo live; submission draft ready; blocked on Microsoft auth + owner Devpost login)
- Why this lane is active now:
  - the official page is live and current as of `2026-05-13`
  - the higher-ranked owned-funnel and Splunk cash lanes already have active artifacts/jobs, so this is the best verified net-new lane to convert this cycle
  - vøiddo already has reusable ops material in `/root/voiddo-ops/state/voiddo-codex-jobs.json` and `/root/.codex/memories/voiddo-live-ops-status.md`
  - `Special Ops` explicitly allows MCP integrations, external systems, structured outputs, and advanced agent-building patterns, which fits the autonomy stack better than a generic consumer demo

## Status (2026-05-16 IDT)

- **Demo deployed:** https://voiddo.com/devpost/agent-academy-2026/ — HTTP 200 ✅ (was 404 before this pass)
- **Submission draft:** `/root/devpost-lab/agent-academy-2026/DEVPOST-SUBMISSION-DRAFT.md` — full paste-ready Devpost fields + 5-min video outline
- **Microsoft Copilot Studio:** blocked (owner-only — requires Microsoft account login)
- **GitHub repo:** ✅ **LIVE** https://github.com/voidd0/queue-sentinel-agent-academy (pushed 2026-05-16 IDT, 7 files, topics set)
- **Remaining owner-only:**
  1. Log into Copilot Studio with Microsoft account → set up Queue Sentinel workflow → run one authenticated test → save transcript to this folder
  2. Record 5-min video per draft video outline
  3. Log into Devpost and paste submission draft fields
  4. Submit before **June 2, 2026 at 11:59 PM PT**

## Rule Lock

- Do not claim a Microsoft-backed working agent until a real Microsoft product path is authenticated and captured.
- Local-first prep is allowed and useful: fixtures, architecture, prompt contract, support demo, and evaluation harness.
- This is a real opportunity but not a cash-first lane; it stays behind `replytone` and `Splunk` on payout quality.
