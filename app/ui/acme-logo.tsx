import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/font';

export default function AcmeLogo() {
  return (
    <div
      className= {'flex flex-row items-center leading-none text-black'}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[25deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
