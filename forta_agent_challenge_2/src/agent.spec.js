const {
  FindingType,
  FindingSeverity,
  Finding,
  createBlockEvent,
} = require("forta-agent");
const { handleBlock } = require("./agent");

describe("fallbackOracle agent", () => {
  const createBlockEventWithFallbackOracle = () =>
    createBlockEvent();

  describe("handleBlock", () => {
    it("returns empty findings if no price deviations", async () => {
      const blockEvent = createBlockEvent();

      const findings = await handleBlock(blockEvent);

      expect(findings).toStrictEqual([]);
    });

    it("returns a finding if no price deviations", async () => {
      const blockEvent = createBlockEventWithFallbackOracle();

      const findings = await handleBlock(blockEvent);

      expect(findings).toStrictEqual([
        Finding.fromObject({
          name: "AAVE-2",
            description: "Fallback Oracle called and returned a 10% price deviation",
            alertId: "AAVE-2",
            severity: FindingSeverity.Medium,
            type: FindingType.Suspicious,
        }),
      ]);
    });
  });
});
