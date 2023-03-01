import { ImCheckmark } from "react-icons/im";

type Props = {
  text: string;
};

export default function CheckmarkBullet({ text }: Props) {
  return (
    <span className="flex items-center">
      <div className="md:p-2 p-1 mr-2 rounded-full bg-primary">
        <ImCheckmark className="fill-white" />
      </div>
      <p className="md:text-lg text-sm font-semibold">{text}</p>
    </span>
  );
}
