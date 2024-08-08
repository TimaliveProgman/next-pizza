import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import * as React from 'react';

interface ISortPopupProps {
    className?: string
}

const SortPopup: React.FunctionComponent<ISortPopupProps> = ({className}) => {
  return (
    <div className={cn('inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer', className)}>
        <ArrowUpDown size={16}></ArrowUpDown>
        <b>Сортировка:</b>
        <b className='text-primary'>популярное</b>
    </div>
  ); 
};

export default SortPopup;
