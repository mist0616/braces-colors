interface ToolContainerProps {
  children: React.ReactNode;
}

export default function ToolContainer({ children }: ToolContainerProps) {
  return (
    <div className="rounded-lg">
      <div className="container mx-auto px-4 py-8">{children}</div>
    </div>
  );
}
