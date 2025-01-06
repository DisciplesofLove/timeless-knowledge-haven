import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Coins } from "lucide-react";

interface NFTSettingsProps {
  mintAsNFT: boolean;
  setMintAsNFT: (value: boolean) => void;
  nftSettings: {
    price: string;
    royaltyPercentage: string;
    network: string;
  };
  setNftSettings: (settings: {
    price: string;
    royaltyPercentage: string;
    network: string;
  }) => void;
}

export const NFTSettings = ({
  mintAsNFT,
  setMintAsNFT,
  nftSettings,
  setNftSettings,
}: NFTSettingsProps) => {
  return (
    <div className="border-t border-white/20 pt-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Coins className="w-5 h-5 text-[#D946EF]" />
          <Label htmlFor="mint-nft" className="text-white font-semibold">
            Mint as NFT
          </Label>
        </div>
        <Switch id="mint-nft" checked={mintAsNFT} onCheckedChange={setMintAsNFT} />
      </div>

      {mintAsNFT && (
        <div className="space-y-4 animate-in slide-in-from-top duration-300">
          <div>
            <Label htmlFor="price" className="text-white">
              Price (ETH)
            </Label>
            <Input
              id="price"
              type="number"
              step="0.001"
              min="0"
              className="bg-white/5 border-white/20 text-white"
              value={nftSettings.price}
              onChange={(e) =>
                setNftSettings({ ...nftSettings, price: e.target.value })
              }
              required={mintAsNFT}
            />
          </div>

          <div>
            <Label htmlFor="royalty" className="text-white">
              Royalty Percentage
            </Label>
            <Input
              id="royalty"
              type="number"
              min="0"
              max="100"
              className="bg-white/5 border-white/20 text-white"
              value={nftSettings.royaltyPercentage}
              onChange={(e) =>
                setNftSettings({
                  ...nftSettings,
                  royaltyPercentage: e.target.value,
                })
              }
              required={mintAsNFT}
            />
          </div>

          <div>
            <Label htmlFor="network" className="text-white">
              Blockchain Network
            </Label>
            <select
              id="network"
              className="w-full h-10 rounded-md border bg-white/5 border-white/20 text-white px-3 py-2"
              value={nftSettings.network}
              onChange={(e) =>
                setNftSettings({ ...nftSettings, network: e.target.value })
              }
              required={mintAsNFT}
            >
              <option value="polygon">Polygon</option>
              <option value="ethereum">Ethereum</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};