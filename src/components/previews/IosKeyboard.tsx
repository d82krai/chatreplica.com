interface IosKeyboardProps {
  dark?: boolean;
}

export default function IosKeyboard({ dark = false }: IosKeyboardProps) {
  const keyBg = dark ? "bg-[#2C2C2E]" : "bg-white";
  const keyText = dark ? "text-white" : "text-gray-900";
  const modBg = dark ? "bg-[#1C1C1E]" : "bg-[#ADB5BD]";
  const modText = dark ? "text-gray-300" : "text-gray-800";
  const containerBg = dark ? "bg-[#1C1C1E]" : "bg-[#D1D5DB]";
  const barBg = dark ? "bg-[#151517]" : "bg-[#CDD1D6]";
  const barBorder = dark ? "border-[#3A3A3C]" : "border-[#B0B8C1]";
  const barText = dark ? "text-gray-200" : "text-gray-800";
  const spaceBg = dark ? "bg-[#2C2C2E]" : "bg-white";
  const spaceText = dark ? "text-gray-400" : "text-gray-400";
  const shadow = dark
    ? "shadow-[0_1px_0_rgba(0,0,0,0.6)]"
    : "shadow-[0_1px_0_rgba(0,0,0,0.35)]";

  return (
    <div className={`${containerBg} pb-1 select-none`}>
      {/* Predictive text bar */}
      <div className={`flex items-center border-b ${barBorder} ${barBg} px-2 py-1`}>
        {["I", "The", "I'm"].map((word, i) => (
          <div
            key={word}
            className={`flex-1 py-1 text-center text-sm ${barText} ${i < 2 ? `border-r ${barBorder}` : ""}`}
          >
            {word}
          </div>
        ))}
      </div>
      {/* Row 1 */}
      <div className="flex justify-center gap-1 px-0.5 pt-1">
        {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((k) => (
          <div key={k} className={`flex h-10 flex-1 items-center justify-center rounded-md ${keyBg} text-sm font-medium ${keyText} ${shadow}`}>
            {k}
          </div>
        ))}
      </div>
      {/* Row 2 */}
      <div className="flex justify-center gap-1 px-3 pt-1">
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((k) => (
          <div key={k} className={`flex h-10 flex-1 items-center justify-center rounded-md ${keyBg} text-sm font-medium ${keyText} ${shadow}`}>
            {k}
          </div>
        ))}
      </div>
      {/* Row 3 */}
      <div className="flex items-center justify-center gap-1 px-0.5 pt-1">
        <div className={`flex h-10 w-10 items-center justify-center rounded-md ${modBg} ${modText} ${shadow}`}>
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 4L4 14h5v6h6v-6h5z" />
          </svg>
        </div>
        <div className="flex flex-1 justify-center gap-1">
          {["Z", "X", "C", "V", "B", "N", "M"].map((k) => (
            <div key={k} className={`flex h-10 flex-1 items-center justify-center rounded-md ${keyBg} text-sm font-medium ${keyText} ${shadow}`}>
              {k}
            </div>
          ))}
        </div>
        <div className={`flex h-10 w-10 items-center justify-center rounded-md ${modBg} ${modText} ${shadow}`}>
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12z" />
          </svg>
        </div>
      </div>
      {/* Row 4 */}
      <div className="flex items-center gap-1 px-0.5 pt-1 pb-1">
        <div className={`flex h-10 w-12 items-center justify-center rounded-md ${modBg} text-xs font-medium ${modText} ${shadow}`}>
          123
        </div>
        <div className={`flex h-10 w-10 items-center justify-center rounded-md ${modBg} ${shadow}`}>
          <svg className={`h-5 w-5 ${dark ? "text-gray-400" : "text-gray-700"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
            <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" strokeWidth="1.5" />
          </svg>
        </div>
        <div className={`flex h-10 flex-1 items-center justify-center rounded-md ${spaceBg} text-sm ${spaceText} ${shadow}`}>
          space
        </div>
        <div className={`flex h-10 w-14 items-center justify-center rounded-md ${modBg} text-xs font-medium ${modText} ${shadow}`}>
          return
        </div>
      </div>
    </div>
  );
}
