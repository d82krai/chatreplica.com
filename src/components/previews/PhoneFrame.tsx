interface PhoneFrameProps {
  children: React.ReactNode;
  show: boolean;
}

export default function PhoneFrame({ children, show }: PhoneFrameProps) {
  if (!show) {
    return (
      <div className="w-[375px] overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
        {children}
      </div>
    );
  }

  return (
    <div className="phone-frame">
      <div className="phone-frame-inner">{children}</div>
    </div>
  );
}
