import { cn } from '@/lib/utils';
import Image from 'next/image';

export function ToolDemoLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/mksaas.png"
      alt="Logo of Tool Demo"
      title="Logo of Tool Demo"
      width={96}
      height={96}
      className={cn('size-8 rounded-md', className)}
    />
  );
}
