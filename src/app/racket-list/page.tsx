import RacketList from "@/components/ui/list/RacketList";
import { rackets } from "@/data/mock";

export default function RacketListPage() {
  return <RacketList rackets={rackets} />;
}
