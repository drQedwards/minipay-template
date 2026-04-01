import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MiniPayModule = buildModule("MiniPayModule", (m) => {
  // Set up parameters if you want to make the contract address configurable
  const initialOwner = m.getParameter(
    "initialOwner",
    "0x19B3753c71141EA43630E19ED8082eF69C04E435"
  );

  // Deploy the MiniPay contract with the specified parameters
  const miniPayNFT = m.contract("MiniPay", [initialOwner]);

  return { miniPayNFT };
});

export default MiniPayModule;

