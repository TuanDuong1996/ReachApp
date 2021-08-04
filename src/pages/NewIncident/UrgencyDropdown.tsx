import React, { Dispatch, SetStateAction } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import ArrowDown from "../../icons/ArrowDown";
import { UrgencyEnum } from "../../services/types.interface";

export interface UrgencyDropdownProps {
  value?: UrgencyEnum;
  onChange: (value: UrgencyEnum) => void;
}

function UrgencyDropdown({ onChange }: UrgencyDropdownProps) {
  const [visible, setVisible] = useState(false);
  const [option, setOption] = useState<number>();

  useEffect(() => {
    onChange(option);
  }, [option]);

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => visible && setVisible(false));

  return (
    <div
      ref={ref}
      className={`h-8 flex items-center justify-between relative border-b cursor-pointer select-none hover:border-gray-700 ${
        visible ? "border-gray-700" : "border-gray-400"
      }`}
      onClick={() => setVisible(!visible)}
    >
      <div className={!option ? "text-#9ca3af" : ""}>
        {options.find((opt) => opt.value === option)?.label || "Select urgency"}
      </div>
      <ArrowDown className="w-3 text-gray-400 stroke-current" />
      {visible && (
        <div className="w-full absolute -bottom-1 transform translate-y-full bg-white p-10px border border-gray-100 shadow">
          {options.map((item) => (
            <div
              key={item.value}
              className="p-2 hover:bg-gray-100"
              onClick={() => setOption(item.value)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export const options = [
  {
    label: "1 - HIGH",
    value: 1,
  },
  {
    label: "2 - MEDIUM",
    value: 2,
  },
  {
    label: "3 - LOW",
    value: 3,
  },
];

export default UrgencyDropdown;
