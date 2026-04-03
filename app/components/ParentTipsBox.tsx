import { Leaf } from "@phosphor-icons/react";

interface ParentTipsBoxProps {
  tips: string;
}

export default function ParentTipsBox({ tips }: ParentTipsBoxProps) {
  return (
    <div className="bg-parentTips border border-amber-200 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-3">
        <Leaf size={20} className="text-success" weight="fill" />
        <span className="font-heading font-bold text-textPrimary">
          For Parents
        </span>
      </div>
      <p className="text-textPrimary text-sm leading-relaxed italic">
        {tips}
      </p>
    </div>
  );
}
