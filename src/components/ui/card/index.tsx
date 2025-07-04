export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`border border-[#DEDEDE] rounded-xl p-4 ${className}`}>
      {children}
    </div>
  );
}

Card.Title = function ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`text-grey-800 text-xl font-semibold mb-2 ${className}`}>
      {children}
    </div>
  );
};

Card.Description = function ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`text-[#626262] text-xs font-light mb-3 ${className}`}>
      {children}
    </div>
  );
};

Card.Footer = function ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${className}`}>{children}</div>;
};
