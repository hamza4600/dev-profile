import Image from 'next/image';
export interface FaqItem {
    question: string;
    answer: string;
}

interface AccordionItemProps {
  item: FaqItem;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const AccordionItem = ({ item, isActive, onClick, index }: AccordionItemProps) => {
  return (
    <li
      className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
        isActive ? 'active' : ''
      }`}
      data-index={index}
      onClick={onClick}
    >
      <div className='accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]'>
        <p>{item.question}</p>
        <div className='accordion-icon'>
          <Image
            src='/plus.svg'
            width={24}
            height={24}
            alt='plus'
          />
        </div>
      </div>
      <div className='accordion-content text-[#2C2C2C]'>
        <p>{item.answer}</p>
      </div>
    </li>
  );
};

export default AccordionItem;